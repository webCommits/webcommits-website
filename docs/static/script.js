document.documentElement.classList.add('js-enabled');

let lastFocusedElement = null;

function getSidebarElements() {
  return {
    sidebar: document.querySelector('.sidebar'),
    backdrop: document.querySelector('.sidebar-backdrop'),
    openButton: document.querySelector('.menu-open'),
    closeButton: document.querySelector('.menu-close')
  };
}

function showSidebar() {
  const { sidebar, backdrop, openButton, closeButton } = getSidebarElements();
  if (!sidebar) return;

  lastFocusedElement = document.activeElement;
  document.body.classList.add('sidebar-lock');
  sidebar.classList.add('open');
  sidebar.setAttribute('aria-hidden', 'false');
  if (backdrop) backdrop.classList.add('open');
  if (openButton) openButton.setAttribute('aria-expanded', 'true');
  if (closeButton) closeButton.focus();
}

function closeSidebar() {
  const { sidebar, backdrop, openButton } = getSidebarElements();
  if (!sidebar) {
    document.body.classList.remove('sidebar-lock');
    return;
  }

  document.body.classList.remove('sidebar-lock');
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  if (backdrop) backdrop.classList.remove('open');
  if (openButton) openButton.setAttribute('aria-expanded', 'false');

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  } else if (openButton) {
    openButton.focus();
  }
}

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll('a[href], button:not([disabled])'));
}

function initMobileNavigation() {
  const { sidebar, openButton } = getSidebarElements();
  if (!sidebar || !openButton) return;

  document.body.classList.remove('sidebar-lock');
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');

  document.querySelectorAll('[data-menu-open]').forEach((button) => {
    button.addEventListener('click', showSidebar);
  });

  document.querySelectorAll('[data-menu-close], [data-menu-link]').forEach((element) => {
    element.addEventListener('click', closeSidebar);
  });

  sidebar.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab' || !sidebar.classList.contains('open')) return;

    const focusable = getFocusableElements(sidebar);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function initHeaderAndFloatingButtons() {
  const header = document.querySelector('.header');
  const toTop = document.querySelector('.totop');
  const telbutton = document.querySelector('.telbutton');
  const mailbutton = document.querySelector('.mailbutton');

  const onScroll = () => {
    const scrolled = window.pageYOffset > 100;
    const headerScrolled = window.pageYOffset > 8;

    if (header) {
      header.classList.toggle('full', headerScrolled);
      header.classList.toggle('active', headerScrolled);
    }

    if (toTop) toTop.classList.toggle('active', scrolled);
    if (telbutton) telbutton.classList.toggle('active', scrolled);
    if (mailbutton) mailbutton.classList.toggle('active', scrolled);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initSmoothScrollWithOffset(selector = 'a[href*="#"]', offset = 96) {
  document.querySelectorAll(selector).forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      let url;
      try {
        url = new URL(href, window.location.href);
      } catch (error) {
        return;
      }

      const samePage = url.origin === window.location.origin && url.pathname === window.location.pathname;
      if (!samePage || !url.hash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: 'smooth'
      });
    });
  });
}

function initAnimations() {
  const animatedElements = document.querySelectorAll('.animate');
  if (!animatedElements.length) return;
  const isMobile = window.matchMedia('(max-width: 890px)').matches;

  animatedElements.forEach((el, index) => {
    el.style.setProperty('--reveal-delay', `${Math.min(index * 45, 180)}ms`);
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    animatedElements.forEach((el) => el.classList.add('show'));
    return;
  }

  const revealElement = (el) => {
    el.classList.add('show');
    observer?.unobserve(el);
  };

  const revealNearViewport = () => {
    const buffer = isMobile ? Math.max(180, window.innerHeight * 0.28) : 0;
    animatedElements.forEach((el) => {
      if (el.classList.contains('show')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight + buffer && rect.bottom >= -buffer) revealElement(el);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealElement(entry.target);
      }
    });
  }, isMobile
    ? { rootMargin: '0px 0px 22% 0px', threshold: 0 }
    : { rootMargin: '0px 0px -14% 0px', threshold: 0.18 });

  animatedElements.forEach((el) => observer.observe(el));
  revealNearViewport();
  window.addEventListener('scroll', revealNearViewport, { passive: true });
  window.addEventListener('resize', revealNearViewport);
  if (isMobile) {
    window.setTimeout(() => {
      animatedElements.forEach((el) => {
        if (!el.classList.contains('show')) revealElement(el);
      });
    }, 1200);
  }
}

function initPointerGlow() {
  const supportsFineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!supportsFineHover || reduceMotion) return;

  const glowTargets = document.querySelectorAll([
    '.feature-card',
    '.portfolio-card',
    '.step-card',
    '.faq-card',
    '.mini-feature',
    '.expertise-card',
    '.offering-card',
    '.target-card',
    '.trust-item',
    '.contact-card',
    '.contactformular',
    '.contact-method',
    '.contact-methods a',
    '.cta-band'
  ].join(','));

  glowTargets.forEach((target) => {
    target.addEventListener('pointermove', (event) => {
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
      target.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
    });
  });
}

function initMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement || typeof L === 'undefined') return;

  const lat = 50.90988867168349;
  const lng = 6.177249476621881;
  const map = L.map('map').setView([lat, lng], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div style="background: var(--mauve); width: 30px; height: 30px; border-radius: 50%; border: 3px solid var(--crust); box-shadow: 0 4px 8px rgba(0,0,0,0.3);"></div>',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  L.marker([lat, lng], { icon: customIcon })
    .addTo(map)
    .bindPopup('<strong>webCommits web Designs</strong><br>Hofgracht 7<br>52499 Baesweiler')
    .openPopup();
}

function initKeyboardNavigation() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSidebar();
  });
}

function initContactTopicFromQuery() {
  const serviceSelect = document.getElementById('service');
  if (!serviceSelect) return;

  const params = new URLSearchParams(window.location.search);
  const topic = params.get('topic');
  const topicMap = {
    web: 'Website',
    ai: 'KI-Beratung',
    seminar: 'Seminar',
    it: 'IT-Anfrage'
  };

  if (topicMap[topic]) serviceSelect.value = topicMap[topic];
}

function initContactSecurityCheck() {
  const form = document.querySelector('.contactformular');
  if (!form) return;

  const a = Math.floor(Math.random() * 11);
  const b = Math.floor(Math.random() * 11);
  const questionEl = form.querySelector('[data-security-question]');
  const aEl = form.querySelector('[data-security-a]');
  const bEl = form.querySelector('[data-security-b]');

  if (!questionEl || !aEl || !bEl) return;

  questionEl.textContent = `${a} + ${b} = ?`;
  aEl.value = a;
  bEl.value = b;
}

function initPortfolioReveal() {
  const grid = document.querySelector('.portfolio-page .portfolio-grid');
  const button = document.querySelector('.portfolio-more');
  if (!grid || !button) return;

  const cards = grid.querySelectorAll('.portfolio-card');
  const mobile = window.matchMedia('(max-width: 640px)').matches;
  if (!mobile || cards.length <= 6) return;

  grid.classList.add('is-collapsed');
  button.addEventListener('click', () => {
    grid.classList.remove('is-collapsed');
    button.parentElement?.remove();
  });
}

/* ── Consent banner ──────────────────────────────── */
function getConsent() {
  try { return localStorage.getItem('wc-analytics-consent'); } catch (e) { return null; }
}

function setConsent(value) {
  try { localStorage.setItem('wc-analytics-consent', value); } catch (e) {}
}

function loadAnalytics() {
  if (document.querySelector('[data-analytics-loaded]')) return;
  document.documentElement.setAttribute('data-analytics-loaded', '');

  var umami = document.createElement('script');
  umami.src = 'https://analytics.webcommits.info/script.js';
  umami.setAttribute('data-website-id', '2391770d-d34d-4005-94c9-4d9b1b422711');
  umami.defer = true;
  document.head.appendChild(umami);
}

function showConsentBanner() {
  var banner = document.getElementById('consent-banner');
  if (banner) banner.style.display = '';
}

function hideConsentBanner() {
  var banner = document.getElementById('consent-banner');
  if (banner) banner.style.display = 'none';
}

function initConsentBanner() {
  var consent = getConsent();

  if (consent === 'accepted') {
    loadAnalytics();
    return;
  }

  if (consent === 'declined') {
    return;
  }

  showConsentBanner();

  document.getElementById('consent-accept')?.addEventListener('click', function () {
    setConsent('accepted');
    loadAnalytics();
    hideConsentBanner();
  });

  document.getElementById('consent-decline')?.addEventListener('click', function () {
    setConsent('declined');
    hideConsentBanner();
  });
}

window.wcResetConsent = function () {
  setConsent(null);
  location.reload();
};

document.addEventListener('DOMContentLoaded', () => {
  initHeaderAndFloatingButtons();
  initMobileNavigation();
  initSmoothScrollWithOffset();
  initAnimations();
  initPointerGlow();
  initKeyboardNavigation();
  initContactTopicFromQuery();
  initContactSecurityCheck();
  initPortfolioReveal();
  initMap();
  initConsentBanner();
});
