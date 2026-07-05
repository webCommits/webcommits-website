import { chromium, devices } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';

const baseUrl = process.env.BASE_URL || 'http://localhost:8080';
const artifactDir = process.env.AUDIT_ARTIFACT_DIR || 'artifacts/mobile-audit';
const routes = ['/', '/portfolio/', '/seminare/', '/ki-beratung/', '/contact/', '/anfahrt/'];
const profiles = [
  { name: 'iphone-se', device: devices['iPhone SE'] },
  { name: 'iphone-13', device: devices['iPhone 13'] },
  { name: 'pixel-7', device: devices['Pixel 7'] },
  { name: 'ipad-mini', device: devices['iPad Mini'] }
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function issue(severity, category, route, viewport, message, details = {}) {
  return { severity, category, route, viewport, message, details };
}

async function collectPageSignals(page, route, viewport) {
  return page.evaluate(({ route, viewport }) => {
    const viewportWidth = document.documentElement.clientWidth;
    const bodyWidth = document.body.scrollWidth;
    const docWidth = document.documentElement.scrollWidth;
    const overflowX = Math.max(bodyWidth, docWidth) - viewportWidth;
    const interactive = Array.from(document.querySelectorAll('a[href], button, input, select, textarea'));
    const smallTargets = interactive
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const label = el.getAttribute('aria-label') || el.textContent?.trim() || el.className || el.tagName;
        return { label: String(label).replace(/\s+/g, ' ').slice(0, 80), width: rect.width, height: rect.height };
      })
      .filter((item) => item.width > 0 && item.height > 0 && (item.width < 44 || item.height < 44));

    const animateNodes = Array.from(document.querySelectorAll('.animate'));
    const hiddenAnimateNodes = animateNodes
      .filter((el) => el.classList.contains('hidden') && !el.classList.contains('show'))
      .map((el) => ({
        selector: el.id ? `#${el.id}` : el.className ? `.${String(el.className).trim().replace(/\s+/g, '.')}` : el.tagName.toLowerCase(),
        text: String(el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100),
        top: Math.round(el.getBoundingClientRect().top),
        height: Math.round(el.getBoundingClientRect().height)
      }));
    const hiddenAnimate = animateNodes.filter((el) => el.classList.contains('hidden') && !el.classList.contains('show')).length;
    const shownAnimate = animateNodes.filter((el) => el.classList.contains('show')).length;
    const heavyEffects = Array.from(document.querySelectorAll('*'))
      .map((el) => {
        const cs = getComputedStyle(el);
        if (cs.filter === 'none' && cs.backdropFilter === 'none') return null;
        return {
          selector: el.id ? `#${el.id}` : el.className ? `.${String(el.className).trim().replace(/\s+/g, '.')}` : el.tagName.toLowerCase(),
          filter: cs.filter,
          backdropFilter: cs.backdropFilter
        };
      })
      .filter(Boolean)
      .slice(0, 30);

    return { route, viewport, overflowX, smallTargets, animateTotal: animateNodes.length, hiddenAnimate, hiddenAnimateNodes, shownAnimate, heavyEffects };
  }, { route, viewport });
}

async function auditSidebar(page, route, viewport) {
  const openButton = page.locator('[data-menu-open]').first();
  if (!(await openButton.count())) return null;

  await openButton.click();
  await page.waitForTimeout(450);

  const result = await page.evaluate(() => {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    const openButton = document.querySelector('[data-menu-open]');
    if (!sidebar) return { exists: false };
    const rect = sidebar.getBoundingClientRect();
    const cs = getComputedStyle(sidebar);
    const backdropStyle = backdrop ? getComputedStyle(backdrop) : null;
    const links = Array.from(sidebar.querySelectorAll('a, button')).map((el) => {
      const itemRect = el.getBoundingClientRect();
      return {
        text: el.getAttribute('aria-label') || el.textContent?.trim() || el.tagName,
        width: itemRect.width,
        height: itemRect.height
      };
    });
    return {
      exists: true,
      rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      ariaHidden: sidebar.getAttribute('aria-hidden'),
      ariaExpanded: openButton?.getAttribute('aria-expanded'),
      bodyLocked: document.body.classList.contains('sidebar-lock'),
      display: cs.display,
      opacity: cs.opacity,
      transform: cs.transform,
      filter: cs.filter,
      backdropFilter: cs.backdropFilter,
      backdropOpacity: backdropStyle?.opacity,
      smallLinks: links.filter((item) => item.width < 44 || item.height < 44)
    };
  });

  await page.keyboard.press('Escape').catch(() => {});
  await page.locator('[data-menu-close]').first().click().catch(() => {});
  return { route, viewport, ...result };
}

async function auditAnimationsAfterScroll(page, route, viewport) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await wait(250);
  const before = await collectPageSignals(page, route, viewport);
  await page.evaluate(async () => {
    const steps = 14;
    const getMaxY = () => Math.max(
      0,
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    ) - window.innerHeight;
    const scrollRoot = document.scrollingElement || document.documentElement;
    for (let i = 1; i <= steps; i += 1) {
      scrollRoot.scrollTop = Math.round((getMaxY() / steps) * i);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }
    scrollRoot.scrollTop = getMaxY();
  });
  await page.mouse.wheel(0, 12000);
  await page.evaluate(async () => {
    const targets = Array.from(document.querySelectorAll('.animate.hidden:not(.show)'));
    for (const target of targets) {
      target.scrollIntoView({ block: 'center', inline: 'nearest' });
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }
  });
  await page.waitForTimeout(350);
  const after = await collectPageSignals(page, route, viewport);
  return { before, after };
}

async function main() {
  await mkdir(artifactDir, { recursive: true });
  const browser = await chromium.launch();
  const report = { baseUrl, createdAt: new Date().toISOString(), issues: [], pages: [], sidebars: [] };

  for (const profile of profiles) {
    const context = await browser.newContext({ ...profile.device, reducedMotion: 'no-preference' });
    const page = await context.newPage();
    const consoleErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error' && !msg.text().includes('net::ERR_FAILED')) consoleErrors.push(msg.text());
    });
    page.on('pageerror', (error) => consoleErrors.push(error.message));

    for (const route of routes) {
      const url = new URL(route, baseUrl).toString();
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForLoadState('load', { timeout: 10000 }).catch(() => {});
      const status = response?.status() || 0;
      if (status >= 400 || status === 0) {
        report.issues.push(issue('P0', 'Routing', route, profile.name, `Route returned HTTP ${status}`));
        continue;
      }

      const signals = await collectPageSignals(page, route, profile.name);
      const animationSignals = await auditAnimationsAfterScroll(page, route, profile.name);
      const sidebar = route === '/' ? await auditSidebar(page, route, profile.name) : null;
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `${artifactDir}/${profile.name}-${route === '/' ? 'home' : route.replaceAll('/', '-')}.png`, fullPage: true, timeout: 30000 });

      report.pages.push({ ...signals, animationSignals });
      if (sidebar) report.sidebars.push(sidebar);

      if (signals.overflowX > 2) {
        report.issues.push(issue('P1', 'Responsive', route, profile.name, `Horizontal overflow of ${signals.overflowX}px`));
      }
      if (signals.smallTargets.length) {
        report.issues.push(issue('P2', 'Accessibility', route, profile.name, `${signals.smallTargets.length} touch targets below 44px`, signals.smallTargets.slice(0, 8)));
      }
      if (animationSignals.after.hiddenAnimate > 0) {
        report.issues.push(issue('P1', 'Animation', route, profile.name, `${animationSignals.after.hiddenAnimate} reveal elements remain hidden after full scroll`, animationSignals.after.hiddenAnimateNodes));
      }
      if (sidebar?.backdropFilter && sidebar.backdropFilter !== 'none') {
        report.issues.push(issue('P2', 'Performance', route, profile.name, 'Sidebar still uses backdrop-filter on mobile', { backdropFilter: sidebar.backdropFilter }));
      }
      if (sidebar?.smallLinks?.length) {
        report.issues.push(issue('P1', 'Accessibility', route, profile.name, 'Sidebar has undersized touch targets', sidebar.smallLinks));
      }
    }

    if (consoleErrors.length) {
      report.issues.push(issue('P1', 'Runtime', 'all', profile.name, 'Console/page errors detected', consoleErrors));
    }
    await context.close();
  }

  await browser.close();
  await writeFile(`${artifactDir}/report.json`, JSON.stringify(report, null, 2));

  const counts = report.issues.reduce((acc, item) => {
    acc[item.severity] = (acc[item.severity] || 0) + 1;
    return acc;
  }, {});
  console.log(`Mobile audit completed against ${baseUrl}`);
  console.log(`Artifacts: ${artifactDir}`);
  console.log(`Issues: P0=${counts.P0 || 0} P1=${counts.P1 || 0} P2=${counts.P2 || 0} P3=${counts.P3 || 0}`);
  report.issues.slice(0, 30).forEach((item) => {
    console.log(`[${item.severity}] ${item.viewport} ${item.route} ${item.category}: ${item.message}`);
  });

  if (report.issues.some((item) => item.severity === 'P0')) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
