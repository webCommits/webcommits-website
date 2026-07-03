#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const I18N_JS = path.join(SRC_DIR, 'static/i18n.js');

const EXPECTED_FILES = [
  'index.html',
  'ki-beratung/index.html',
  'seminare/index.html',
  'portfolio/index.html',
  'contact/index.html',
  'aboutus/index.html',
  'anfahrt/index.html',
  'static/style.css',
  'static/script.js',
  'static/i18n.js'
];

function walkFiles(dir, predicate = () => true) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(fullPath, predicate));
    } else if (predicate(fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function routeToFile(pathname) {
  const cleanPath = decodeURIComponent(pathname).replace(/^\/+/, '');

  if (cleanPath === '') {
    return path.join(DOCS_DIR, 'index.html');
  }

  if (cleanPath.endsWith('/')) {
    return path.join(DOCS_DIR, cleanPath, 'index.html');
  }

  const directFile = path.join(DOCS_DIR, cleanPath);
  if (fs.existsSync(directFile) && fs.statSync(directFile).isFile()) {
    return directFile;
  }

  return path.join(DOCS_DIR, cleanPath, 'index.html');
}

function hasAnchor(htmlFile, hash) {
  if (!hash) return true;
  if (!fs.existsSync(htmlFile) || !fs.statSync(htmlFile).isFile()) return false;

  const id = decodeURIComponent(hash.replace(/^#/, ''));
  if (!id) return true;

  const html = fs.readFileSync(htmlFile, 'utf8');
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\bid\\s*=\\s*["']${escaped}["']`).test(html) || new RegExp(`\\bname\\s*=\\s*["']${escaped}["']`).test(html);
}

function checkExpectedFiles(errors) {
  for (const relativePath of EXPECTED_FILES) {
    const fullPath = path.join(DOCS_DIR, relativePath);
    if (!fs.existsSync(fullPath)) {
      errors.push(`[MISSING FILE] Expected build file does not exist: ${relativePath}`);
    }
  }
}

function checkInternalLinks(errors) {
  const htmlFiles = walkFiles(DOCS_DIR, (file) => file.endsWith('.html'));
  const linkRegex = /(?:href|src)=["']([^"']+)["']/g;

  for (const htmlFile of htmlFiles) {
    const html = fs.readFileSync(htmlFile, 'utf8');
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      const value = match[1].trim();

      if (!value || value.startsWith('#')) continue;
      if (/^(https?:|mailto:|tel:|data:|\/\/)/i.test(value)) continue;
      if (!value.startsWith('/')) continue;

      let parsed;
      try {
        parsed = new URL(value, 'https://www.webcommits.info');
      } catch (error) {
        errors.push(`[INVALID URL] In ${toPosix(path.relative(DOCS_DIR, htmlFile))}: "${value}"`);
        continue;
      }

      const targetFile = routeToFile(parsed.pathname);
      if (!fs.existsSync(targetFile)) {
        errors.push(`[BROKEN LINK] In ${toPosix(path.relative(DOCS_DIR, htmlFile))}: "${value}" resolves to missing ${toPosix(path.relative(DOCS_DIR, targetFile))}`);
        continue;
      }

      if (parsed.hash && !hasAnchor(targetFile, parsed.hash)) {
        errors.push(`[BROKEN ANCHOR] In ${toPosix(path.relative(DOCS_DIR, htmlFile))}: "${value}" target ${toPosix(path.relative(DOCS_DIR, targetFile))}${parsed.hash} was not found`);
      }
    }
  }
}

function collectTemplateI18nKeys() {
  const keys = new Set();
  const njkFiles = walkFiles(SRC_DIR, (file) => file.endsWith('.njk'));
  const keyRegex = /data-(?:i18n|i18n-html|i18n-value)=["']([^"']+)["']/g;

  for (const file of njkFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = keyRegex.exec(content)) !== null) {
      keys.add(match[1]);
    }
  }

  return keys;
}

function loadTranslations() {
  const code = fs.readFileSync(I18N_JS, 'utf8')
    .replace(/\b(var|let|const)\s+translations\s*=/, '$1 translations = window.__translations =');

  const context = {
    window: {},
    console,
    localStorage: {
      getItem() { return null; },
      setItem() {},
      removeItem() {}
    },
    document: {
      readyState: 'loading',
      documentElement: {},
      addEventListener() {},
      querySelectorAll() { return []; }
    }
  };

  vm.createContext(context);
  vm.runInContext(code, context, { filename: I18N_JS });

  return context.window.__translations;
}

function checkI18n(errors) {
  const templateKeys = collectTemplateI18nKeys();
  const translations = loadTranslations();

  if (!translations || !translations.de || !translations.en) {
    errors.push('[I18N ERROR] Could not load translations.de and translations.en from src/static/i18n.js');
    return;
  }

  for (const key of [...templateKeys].sort()) {
    if (!(key in translations.de)) {
      errors.push(`[MISSING I18N KEY] Template key "${key}" is missing in translations.de`);
    }
    if (!(key in translations.en)) {
      errors.push(`[MISSING I18N KEY] Template key "${key}" is missing in translations.en`);
    }
  }
}

function main() {
  const errors = [];

  console.log('Smoke test: expected build files');
  checkExpectedFiles(errors);

  console.log('Smoke test: internal links and anchors');
  checkInternalLinks(errors);

  console.log('Smoke test: i18n template keys');
  checkI18n(errors);

  if (errors.length) {
    console.error('\n❌ Smoke test failed');
    for (const error of errors) console.error(error);
    process.exit(1);
  }

  console.log('\n✅ Smoke test passed');
}

main();
