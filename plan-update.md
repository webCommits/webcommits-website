# Plan-Update – Repository-Aufräumung & Stabilisierung

Stand: 2026-07-03  
Projekt: `webcommits-website`

## Ziel

Der aktuelle Redesign-Stand ist bereits baubar und deployfähig. Dieses Plan-Update beschreibt die nächsten technischen Aufräum- und Stabilisierungsschritte, damit Navigation, i18n, Build-Konfiguration, Dokumentation und Abhängigkeiten konsistent bleiben.

## Ausgangslage

- `npm run build` läuft erfolgreich durch.
- Der Build erzeugt die erwarteten Hauptseiten in `docs/`.
- Alle internen Links und Asset-Referenzen im Build wirken vollständig.
- Alle in Templates referenzierten i18n-Keys existieren in Deutsch und Englisch.
- Alle bisherigen Redesign-Issues unter `issues/` stehen auf `completed`.

## Festgestellte Punkte

1. Die Sprachumschaltung ist wahrscheinlich unvollständig verdrahtet: `window.wcToggleLang()` existiert, aber die Buttons mit `data-lang-toggle` haben keinen sichtbaren Klick-Handler.
2. `.eleventy.js` kopiert `src/static/svg`, obwohl dieses Verzeichnis aktuell nicht existiert.
3. Die `README.md` beschreibt teils einen älteren Projektstand.
4. Es gibt kein sinnvolles Test-/Smoke-Test-Skript.
5. `path-to-regexp` ist als Dependency eingetragen, wird im Projektcode aber offenbar nicht genutzt.

---

# Arbeitspaket 1 – Sprachumschaltung reparieren

## Problem

In `src/static/i18n.js` wird `window.wcToggleLang` definiert. In `src/_includes/header.njk` existieren Buttons mit `data-lang-toggle`, aber ohne `onclick` oder registrierten Event Listener. Dadurch kann die Sprachumschaltung im UI wirkungslos sein.

## Ziel

Ein Klick auf jeden Sprachbutton schaltet zuverlässig zwischen Deutsch und Englisch um.

## Betroffene Dateien

- `src/static/i18n.js`
- optional: `src/_includes/header.njk`

## Vorgeschlagene Umsetzung

Bevorzugte Lösung: Event Listener zentral in `i18n.js` registrieren.

- In der DOM-ready-Initialisierung nach `applyTranslations(detectLanguage())` alle Buttons mit `[data-lang-toggle]` auswählen.
- Pro Button einen `click`-Handler registrieren.
- Handler ruft `toggleLanguage()` auf.
- Keine Inline-Handler in Nunjucks verwenden, damit Markup sauber bleibt.

## Akzeptanzkriterien

- Klick auf Desktop-Sprachbutton wechselt DE → EN → DE.
- Klick auf Sidebar-Sprachbutton wechselt DE → EN → DE.
- Button-Text aktualisiert sich korrekt (`EN` bei Deutsch, `DE` bei Englisch).
- `html[lang]` aktualisiert sich korrekt.
- Die Auswahl wird in `localStorage` unter `wc-lang` gespeichert.
- Ohne vorhandenes `localStorage` bleibt Deutsch die Standardsprache.

## Prüfschritte

1. `npm run build`
2. Lokale Seite öffnen.
3. Im Browser `localStorage.removeItem('wc-lang')` ausführen und neu laden.
4. Prüfen: Seite startet auf Deutsch.
5. Sprachbutton klicken.
6. Prüfen: Seite wechselt auf Englisch und `localStorage.getItem('wc-lang') === 'en'`.
7. Erneut klicken.
8. Prüfen: Seite wechselt zurück auf Deutsch.

## Risiko

Gering. Änderung ist lokal auf `i18n.js` begrenzt.

---

# Arbeitspaket 2 – Eleventy-Konfiguration bereinigen

## Problem

`.eleventy.js` enthält:

```js
eleventyConfig.addPassthroughCopy("src/static/svg")
```

Das Verzeichnis `src/static/svg` existiert aktuell nicht.

## Ziel

Die Build-Konfiguration soll nur tatsächlich vorhandene und genutzte Pfade kopieren.

## Betroffene Dateien

- `.eleventy.js`

## Vorgeschlagene Umsetzung

Option A – bevorzugt, falls keine SVG-Assets geplant sind:

- Zeile für `src/static/svg` entfernen.

Option B – falls SVG-Assets künftig geplant sind:

- Verzeichnis `src/static/svg/` anlegen.
- Optional `.gitkeep` hinzufügen.

## Empfehlung

Option A: Zeile entfernen. Das Projekt nutzt aktuell Inline-SVGs in Templates und Bilddateien unter `src/static/images/`.

## Akzeptanzkriterien

- `.eleventy.js` enthält keine Referenz auf nicht existierende Verzeichnisse.
- `npm run build` läuft weiterhin erfolgreich durch.
- Build-Output bleibt funktional unverändert.

## Prüfschritte

1. `npm run build`
2. Prüfen, dass `docs/` weiterhin CSS, JS, Bilder, Sitemap, Robots und `.nojekyll` enthält.

## Risiko

Sehr gering.

---

# Arbeitspaket 3 – README aktualisieren

## Problem

Die README beschreibt teilweise einen älteren Projektstand:

- Fokus noch stark auf Websites für Handwerker/Kleingewerbe.
- KI-Beratung und IT-Infrastruktur sind nicht so klar dargestellt wie im aktuellen Redesign.
- Es wird Google Analytics erwähnt, während der aktuelle Code Umami mit Consent Banner lädt.
- Node-Voraussetzung `v14 oder höher` ist für Eleventy 3.x zu niedrig bzw. missverständlich.

## Ziel

Die README soll dem aktuellen Projektstand entsprechen und neuen Entwickler:innen sofort die richtige Orientierung geben.

## Betroffene Dateien

- `README.md`

## Vorgeschlagene Inhalte

### Aktualisieren

- Projektbeschreibung:
  - Websites
  - KI-Beratung
  - KI-Seminare
  - IT-/Server-/PC-Infrastruktur
- Tech Stack:
  - Eleventy 3.x
  - Nunjucks
  - Vanilla JS
  - Custom CSS
  - Leaflet
  - Umami Analytics nach Consent
- Voraussetzungen:
  - Node.js 20+ empfehlen
- Seitenstruktur:
  - `/`
  - `/ki-beratung/`
  - `/seminare/`
  - `/portfolio/`
  - `/aboutus/`
  - `/contact/`
  - `/anfahrt/`
  - Rechtliches
- Build/Deployment:
  - `npm start`
  - `npm run build`
  - `npm run deploy`
  - Hinweis: Build-Output liegt in `docs/`

### Entfernen oder korrigieren

- Erwähnung von Google Analytics durch Umami ersetzen.
- Alte Angebotsformulierungen angleichen.
- Falls kein `LICENSE` existiert, License-Badge oder Link prüfen.

## Akzeptanzkriterien

- README beschreibt den aktuellen Funktionsumfang korrekt.
- README nennt keine nicht mehr verwendeten Analyse-/Trackingdienste.
- Setup- und Build-Anweisungen funktionieren unverändert.
- README ist für externe Besucher:innen und Entwickler:innen verständlich.

## Prüfschritte

1. README vollständig lesen.
2. Mit `package.json`, `.eleventy.js` und aktueller Seitenstruktur abgleichen.
3. `npm run build` ausführen.

## Risiko

Gering. Nur Dokumentation.

---

# Arbeitspaket 4 – Smoke-Test-Skript ergänzen

## Problem

`npm test` enthält aktuell nur den Standardfehler:

```json
"test": "echo \"Error: no test specified\" && exit 1"
```

Dadurch gibt es keinen schnellen automatisierten Check für Build, erzeugte Seiten oder i18n-Grundkonsistenz.

## Ziel

Ein einfacher Smoke-Test soll die wichtigsten Deploy-Risiken früh erkennen.

## Betroffene Dateien

- `package.json`
- optional neues Skript: `scripts/smoke-test.js`

## Vorgeschlagene Umsetzung

Neues Node-Skript `scripts/smoke-test.js`:

1. Prüfen, ob erwartete Build-Dateien existieren:
   - `docs/index.html`
   - `docs/ki-beratung/index.html`
   - `docs/seminare/index.html`
   - `docs/portfolio/index.html`
   - `docs/contact/index.html`
   - `docs/aboutus/index.html`
   - `docs/anfahrt/index.html`
   - `docs/static/style.css`
   - `docs/static/script.js`
   - `docs/static/i18n.js`
2. Interne absolute Links und Asset-Referenzen aus HTML-Dateien sammeln.
3. Prüfen, ob interne Ziele im `docs/`-Output existieren.
4. Optional: i18n-Datei auswerten und prüfen, ob alle Template-Keys in `de` und `en` vorhanden sind.

`package.json` erweitern:

```json
"test": "npm run build && node scripts/smoke-test.js",
"smoke": "node scripts/smoke-test.js"
```

## Akzeptanzkriterien

- `npm test` läuft erfolgreich durch.
- Fehlende Seiten oder Assets führen zu einem klaren Fehler mit Dateipfad.
- Fehlende i18n-Keys führen zu einem klaren Fehler mit Key und Sprache.
- Das Skript nutzt nur Node-Bordmittel, keine zusätzlichen Dependencies.

## Prüfschritte

1. `npm test`
2. Testweise einen erwarteten Pfad im Skript manipulieren und prüfen, ob der Test fehlschlägt.
3. Änderung zurücknehmen.

## Risiko

Mittel. Das Skript muss robust genug sein, darf aber nicht unnötig komplex werden. Keine Browser-/Playwright-Abhängigkeit in dieser Phase.

---

# Arbeitspaket 5 – Ungenutzte Dependency prüfen und entfernen

## Problem

`package.json` enthält:

```json
"path-to-regexp": "^8.2.0"
```

Im Projektcode wurde keine Verwendung gefunden.

## Ziel

Abhängigkeiten sollen minimal und nachvollziehbar bleiben.

## Betroffene Dateien

- `package.json`
- `package-lock.json`

## Vorgeschlagene Umsetzung

1. Nochmals prüfen:

```bash
grep -R "path-to-regexp" -n . --exclude-dir=node_modules --exclude-dir=.git
```

2. Falls keine Nutzung außer `package.json`/`package-lock.json` existiert:

```bash
npm uninstall path-to-regexp
```

3. Build und Smoke-Test ausführen.

## Akzeptanzkriterien

- `path-to-regexp` ist aus `package.json` entfernt, wenn ungenutzt.
- `package-lock.json` ist entsprechend aktualisiert.
- `npm run build` läuft erfolgreich.
- `npm test` läuft erfolgreich, sobald Arbeitspaket 4 umgesetzt ist.

## Risiko

Gering, sofern vorher bestätigt wird, dass die Dependency nicht genutzt wird.

---

# Empfohlene Reihenfolge

1. **Sprachumschaltung reparieren**  
   Sichtbarer UX-Fehler, kleine Änderung.

2. **Eleventy-Konfiguration bereinigen**  
   Sehr klein, reduziert Konfigurationsrauschen.

3. **Smoke-Test ergänzen**  
   Danach können weitere Änderungen besser abgesichert werden.

4. **Ungenutzte Dependency entfernen**  
   Mit Smoke-Test gut prüfbar.

5. **README aktualisieren**  
   Zum Schluss, damit sie den final bereinigten Zustand beschreibt.

---

# Gesamt-Akzeptanzkriterien

Das Plan-Update gilt als umgesetzt, wenn:

- `npm run build` erfolgreich durchläuft.
- `npm test` einen sinnvollen Smoke-Test ausführt und erfolgreich durchläuft.
- Die Sprachumschaltung per Klick funktioniert.
- Deutsch ohne gespeicherte Nutzerauswahl Standardsprache bleibt.
- `.eleventy.js` keine nicht existierenden Asset-Verzeichnisse referenziert.
- `path-to-regexp` entfernt ist oder seine Nutzung dokumentiert wurde.
- `README.md` den aktuellen Projektstand korrekt beschreibt.

---

# Nicht-Ziele dieses Plans

- Kein neues visuelles Redesign.
- Keine neuen Seiten.
- Keine Änderung am Angebotsumfang.
- Keine Playwright-/End-to-End-Test-Suite.
- Keine größere i18n-Architekturänderung.
- Kein Umbau des monolithischen CSS.

---

# Optionale Folgeaufgaben

Nach Abschluss dieser Punkte können separat geplant werden:

- CSS modularisieren oder zumindest Abschnitte stärker dokumentieren.
- Playwright-Checks für Hauptseiten ergänzen.
- Automatisierte Lighthouse-/Accessibility-Prüfung einführen.
- Deployment-Skript sicherer machen, z. B. mit sauberer Commit-Message und Abbruch bei Dirty Working Tree.
- `aboutus` langfristig auf eine semantisch passendere Route wie `/ueber-mich/` oder `/about/` migrieren, inklusive Redirect-Konzept.
