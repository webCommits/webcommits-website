# UI-update.md – Playwright UI/UX Audit

Stand: 2026-06-22  
Audit-Basis: lokaler Build aus `docs/`, geprüft mit Playwright/Chromium über `http://127.0.0.1:4173/`.

## Geprüfte Seiten

- `/`
- `/ki-beratung/`
- `/portfolio/`
- `/contact/`
- `/seminare/`
- `/aboutus/`

## Viewports

- Desktop: `1440 × 1100`
- Tablet: `768 × 1024`
- Mobile: `390 × 844`

## Positiv aufgefallen

- Keine JavaScript-Console-Errors oder Page-Errors im Playwright-Lauf.
- Kein echter horizontaler Overflow auf den Hauptseiten, abgesehen von der ausgeblendeten Sidebar-Struktur.
- Die neue visuelle Richtung wirkt grundsätzlich hochwertiger und konsistenter als vorher.
- Die neue Startseitenstruktur funktioniert inhaltlich gut: Hero → Leistungen → KI → Portfolio → Über → Kontakt.
- Kontaktformular und Portfolio sind grundsätzlich deutlich besser strukturiert als vorher.

---

# Muss gefixt werden

## P0 – Kritisch / vor Veröffentlichung beheben

### 1. Deutsche Standardsprache wird nicht zuverlässig eingehalten

**Beobachtung:**  
Playwright lädt die Website initial auf Englisch, weil `navigator.language` im Testbrowser Englisch ist. Dadurch erscheinen Startseite, Navigation, KI-Seite, Portfolio und Kontaktseite direkt auf Englisch.

**Problem:**  
Abgestimmt war: Deutsch ist die Standardsprache, Englisch wird kurzfristig weiter gepflegt. Aktuell entscheidet die Browser-Sprache über die Erstsprache.

**Fix:**

- `detectLanguage()` in `src/static/i18n.js` ändern.
- Ohne vorhandenes `localStorage` immer `de` verwenden.
- Englisch nur aktivieren, wenn User explizit umschaltet.

---

### 2. `Über mich`-Seite ist noch nicht passend zur neuen Positionierung

**Beobachtung:**  
`/aboutus/` wirkt noch wie eine alte Angebots-/Pricing-Seite. Sichtbar sind weiterhin:

- alter Hero: „Your contact for high-quality websites“
- alte Code-Screenshot-Optik
- alte Angebotskarten wie „Static Page“, „Static Site“, „Additional services“
- insgesamt noch nicht konsequent Freelancer-Vertrauen, Aachen/RWTH-Kontext und persönliche Positionierung

**Problem:**  
Die Navigation sagt jetzt „Über mich“, aber die Seite erfüllt diesen Zweck noch nicht. Außerdem widerspricht die Angebots-/Pricing-Anmutung der Entscheidung „keine sichtbaren Preise / auf Anfrage“.

**Fix:**

- `/aboutus/` komplett als persönliche Vertrauensseite neu strukturieren.
- Alte Angebots-/Paketsektion entfernen.
- Fokus: Lukas Schaffrath, Webentwicklung, IT-Administration/RWTH, KI/Schulung, Arbeitsweise, Vertrauen, Kontakt-CTA.

---

### 3. Portfolio-Karten haben zu große Überschriften / CSS-Konflikt

**Beobachtung:**  
Auf `/portfolio/` sind einzelne Card-Titel auf Desktop deutlich zu groß. Besonders sichtbar bei längeren Titeln wie „Personal developer portfolio“ oder „Anglistik Web“. Auf Mobile ist es besser, aber weiterhin teils sehr dominant.

**Problem:**  
Die Portfolio-Karten wirken dadurch unruhig, manche Karten werden unnötig hoch und die Grid-Optik verliert Qualität.

**Fix:**

- Explizite Card-Typografie setzen:
  - `.portfolio-card h2, .portfolio-card h3 { font-size: clamp(...); line-height: ...; }`
- Sicherstellen, dass keine alten globalen Portfolio-Styles auf Card-Headlines durchschlagen.
- Lange Titel ggf. bewusst kleiner oder mit `text-wrap: balance` setzen.

---

### 4. Sticky Header verdeckt Inhalte beim Scrollen

**Beobachtung:**  
Beim Scrollen liegt der Header über Card-Inhalten und Abschnittsüberschriften. In Playwright-Segmenten sind Inhalte oben oft vom Header überdeckt.

**Problem:**  
Das wirkt unruhig und kann bei Ankerlinks wie `#leistungen` dazu führen, dass Zielinhalte zu weit oben unter dem Header landen.

**Fix:**

- Header-Höhe reduzieren.
- Für Sections `scroll-margin-top` setzen, z. B. `scroll-margin-top: 120px;`.
- Bei manuellem Smooth Scroll Offset alle internen Anchor-Links berücksichtigen, nicht nur `#scroll-arrow`.

---

### 5. Floating Buttons überlagern Mobile-Inhalte

**Beobachtung:**  
Auf Mobile liegen die Floating Buttons rechts über Portfolio-Karten, Kontaktformular und CTA-Bereichen.

**Problem:**  
Sie verdecken Inhalt und konkurrieren mit den eigentlichen CTAs. Besonders auf `/contact/` und `/portfolio/` können sie störend sein.

**Fix:**

- Mobile Verhalten neu definieren:
  - entweder Floating Buttons auf Mobile ausblenden,
  - oder nur einen kompakten Kontaktbutton zeigen,
  - oder unten als sauber platzierte Mobile-Aktionsleiste.
- Genug Abstand zum unteren/rechten Rand und zu Formfeldern einplanen.

---

### 6. Animations-Fallback ist riskant

**Beobachtung:**  
Full-page Screenshots zeigen große leere Bereiche, wenn animierte Sections noch nicht durch IntersectionObserver sichtbar geschaltet wurden.

**Problem:**  
Mit deaktiviertem oder fehlerhaftem JavaScript bleiben `.hidden`-Inhalte potenziell unsichtbar. Das ist schlecht für Robustheit, Barrierefreiheit und Screenshot-/Crawler-Szenarien.

**Fix:**

- Nicht standardmäßig Content verstecken.
- Besser: JS setzt erst nach Initialisierung eine Klasse wie `.js-enabled`; Animationen gelten nur unter `.js-enabled .animate.hidden`.
- Alternativ beim Laden sofort alle `.animate` ohne Observer sichtbar machen, falls Observer nicht zuverlässig initialisiert.

---

## P1 – Hoch / nächste Designrunde

### 7. Desktop-Header wirkt zu groß und Navigation bricht um

**Beobachtung:**  
Auf Desktop ist das Logo sehr groß, der Header sehr hoch und einige Nav-Labels umbrechen zweizeilig: „AI Consulting“, „AI Seminars“, „About me“.

**Problem:**  
Das wirkt weniger hochwertig und nimmt viel vertikalen Raum ein.

**Fix:**

- Logo im Desktop-Header kleiner setzen.
- Nav-Font etwas kleiner oder Menüabstände reduzieren.
- `white-space: nowrap` für Nav-Links prüfen.
- Deutsche Labels testen, nachdem Deutsch wieder Default ist.

---

### 8. Mobile-Menü braucht bessere Overlay-UX

**Beobachtung:**  
Das Mobile-Menü öffnet rechts, aber der Seiteninhalt bleibt sichtbar und teilweise optisch störend. Es gibt keinen klaren Backdrop.

**Problem:**  
Das Menü wirkt eher wie eine eingeschobene Spalte als wie ein bewusstes Navigation Overlay.

**Fix:**

- Backdrop ergänzen.
- Body-Scroll während geöffnetem Menü sperren.
- Menübreite prüfen: entweder ca. `82vw` mit Backdrop oder volle Breite.
- Aktiven Fokus im Menü halten.

---

### 9. KI-Seite: Kartenlayout mit 5 Items ist unausgewogen

**Beobachtung:**  
Auf Desktop stehen bei den Leistungsbereichen vier Karten in der ersten Reihe und eine einzelne Karte links darunter.

**Problem:**  
Das wirkt unfertig bzw. unausbalanciert.

**Fix:**

- 5 Karten als `3 + 2` Grid mit zentrierter zweiter Reihe setzen.
- Alternativ sechste Karte ergänzen oder Layout auf 2-Spalten/Feature-Liste ändern.

---

### 10. Portfolio-Seite ist auf Mobile sehr lang

**Beobachtung:**  
Die vollständige Portfolio-Seite hat auf Mobile eine sehr große Scrollhöhe.

**Problem:**  
Das ist bei vielen Projekten erwartbar, aber Nutzer verlieren schnell Orientierung.

**Fix:**

- Optional Filterchips einführen: `Websites`, `Webapps`, `Intern/privat`, `Live`.
- Alternativ erst 6–8 Projekte zeigen und weitere über „Mehr anzeigen“.
- Wichtigste/relevanteste Projekte zuerst lassen.

---

### 11. Portfolio-Bilder sind teils sehr stark gecroppt

**Beobachtung:**  
Einige Screenshots schneiden wichtige UI-Bereiche ab oder zeigen auf Mobile sehr hohe Ausschnitte.

**Problem:**  
Die Projektqualität ist dadurch nicht immer direkt erkennbar.

**Fix:**

- Pro Projekt `object-position` prüfen.
- Einheitliche Screenshot-Komposition erstellen.
- Für kritische Projekte ggf. eigene optimierte Thumbnail-Dateien verwenden.

---

### 12. Kontaktseite: Formular ist auf Mobile zu spät sichtbar

**Beobachtung:**  
Auf Mobile sieht man zuerst Hero + direkte Kontaktkarte. Das eigentliche Formular beginnt erst danach.

**Problem:**  
Da alle CTAs auf die Kontaktseite führen, sollte das Formular schneller erreichbar sein.

**Fix:**

- Mobile Reihenfolge prüfen: Formular vor Direktkontakt oder Hero kompakter machen.
- Alternativ oben einen Button „Zum Formular“ mit sauberem Anchor setzen.

---

### 13. Direkte Kontaktlinks haben zu kleine Tap-Ziele

**Beobachtung:**  
Mail- und Telefonlink sind nur ca. eine Textzeile hoch.

**Problem:**  
Auf Mobile schlechter bedienbar.

**Fix:**

- Kontaktlinks als eigene Button-/List-Items mit mindestens `44px` Höhe gestalten.

---

## P2 – Mittel / Qualität & Feinschliff

### 14. Footer wirkt noch alt und weniger hochwertig

**Beobachtung:**  
Der Footer ist funktional, wirkt aber im Vergleich zu den neuen Sections noch wie Altbestand. Links sind klein, Layout ist sehr schlicht.

**Fix:**

- Footer redesignen:
  - kurze Positionierung
  - Kontakt
  - Navigation
  - Rechtliches
- Mobile Footer-Links größer/touchfreundlicher machen.

---

### 15. Einige Icon-Bilder ohne sinnvolles Alt-Handling

**Beobachtung:**  
Playwright fand fehlende `alt`-Attribute bei Menü-Icons und Logo/Icon-Bildern.

**Fix:**

- Dekorative Icons: `alt=""` und ggf. `aria-hidden="true"`.
- Logo-Link: sinnvolles `aria-label`, Bild-Alt nicht doppelt überfrachten.

---

### 16. Language Toggle ist zu klein

**Beobachtung:**  
Der Sprachbutton ist auf Desktop nur ca. `38 × 23px`.

**Problem:**  
Unterschreitet empfohlene Touch-/Click-Zielgrößen.

**Fix:**

- Mindestgröße `44 × 44px` oder zumindest `min-height: 36–40px` und bessere Padding-Werte.

---

### 17. Service-Cards auf Desktop sind etwas textlastig/klein

**Beobachtung:**  
Die vier Leistungskarten auf der Startseite funktionieren, wirken auf Desktop aber etwas dicht gesetzt.

**Fix:**

- Card-Padding leicht erhöhen.
- Body-Text minimal größer oder Zeilenhöhe erhöhen.
- CTAs innerhalb der Cards einheitlicher ausrichten.

---

### 18. Seminarseite ist visuell noch Alt-/Sonderwelt

**Beobachtung:**  
`/seminare/` sieht grundsätzlich ordentlich aus, unterscheidet sich aber noch deutlich von Startseite/KI-Seite/Portfolio. Außerdem ist der Inhalt stark auf Bildung/Lehre fokussiert.

**Fix:**

- Nach Phase 1 visuell an neues Card-/Section-System angleichen.
- Inhaltlich prüfen, ob neben Bildung auch KMU-/Team-Schulungen stärker sichtbar werden sollen.

---

### 19. Ausgeblendete Sidebar wird von Layout-Audits als außerhalb sichtbarer Fläche erkannt

**Beobachtung:**  
Die geschlossene Sidebar liegt rechts außerhalb des Viewports und wird von Playwright als außerhalb sichtbarer Fläche erkannt.

**Fix:**

- Sidebar geschlossen mit `transform: translateX(100%)`, `visibility: hidden`, `pointer-events: none` verwalten.
- Bei `.open`: `visibility: visible`, `pointer-events: auto`.

---

## Technische Prüfnotizen

- Playwright/Chromium konnte nach Host-Platform-Override für Ubuntu 26 verwendet werden.
- Screenshots und maschineller Report lagen temporär unter `/tmp/webcommits-audit/`.
- Keine Console Errors gefunden.
- Keine kaputten Asset-Dateien im Repo bestätigt; einzelne „broken image“-Meldungen kamen durch Lazy Loading während automatisierter Fullpage-Screenshots zustande.
