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

---

# Audit Runde 2 – Desktop Deep Audit (Bilder & Buttons)

Stand: 2026-06-22
Audit-Basis: lokaler Build aus `docs/`, Desktop `1440 × 1100`, Playwright/Chromium plus visueller Screenshot-Review.
Geprüft wurden alle 6 Seiten (`/`, `/ki-beratung/`, `/portfolio/`, `/contact/`, `/seminare/`, `/aboutus/`) mit segmentierten Desktop-Screenshots sowie ausgelesenem Bild- und Button-Inventar.

Ergebnis über alle 18 Route/Viewport-Kombinationen: 0 Console Errors, 0 Page Errors, 0 horizontaler Overflow, 0 bad tap targets. Die folgenden Punkte sind reine Bild-/Button-/Layout-Qualitätsfragen.

## P0 – Vor Veröffentlichung beheben

### 20. Kontext-CTAs übergeben kein Thema an das Kontaktformular

**Beobachtung:**
`src/static/script.js` enthält die Logik, um den Leistungsbereich im Kontaktformular vorzuselektieren (Query-Params `web`, `ai`, `seminar`, `it`). Kein einziger Button auf der Seite nutzt das aber: Alle CTAs (`index.services.web.cta`, `index.services.seminars.cta`, `index.services.ai.cta`, `index.services.it.cta`, `index.ai.cta_primary`, `sem.hero.btn`, `sem.price.cta`, `about.hero.cta.primary`, `about.cta.button`, `ai.hero.cta_primary`, `ai.cta.button`, `port.btn.request`) linken auf `/contact/` ohne `?topic=`.

Damit funktioniert die vom Nutzer gewünschte kontextabhängige Vorsortierung der Anfragen gar nicht.

**Fix:**
- Website-CTAs → `/contact/?topic=web`
- KI-Beratung-CTAs → `/contact/?topic=ai`
- Seminar-CTAs → `/contact/?topic=seminar`
- IT-CTAs → `/contact/?topic=it`
- Portfolio-/Allgemeine CTAs → `/contact/` (kein Thema)
- Prüfen, dass `script.js` die Params auch nach i18n-Sprachwechsel noch korrekt anwendet.

### 21. Portfolio-Thumbnails werden stark beschnitten (16:9 wird zu ~1:1)

**Beobachtung:**
`.portfolio-card img` ist per CSS auf `aspect-ratio: 16/9; object-fit: cover` gesetzt, aber die ausgelesene Anzeige der Screenshots liegt bei ~398×361 px (Verhältnis ~1,1) statt der erwarteten ~1,78. Die natürlichen Screenshots sind 900×493 bzw. 800×438 (echtes 16:9). Der Box-Sizing-/Höhen-Kaskadierung wird das `aspect-ratio` offenbar überschrieben, sodass Landschafts-Screenshots in ein fast quadratisches Box gedrückt und massiv beschnitten werden (UI-update-Punkt 10 wurde damit nicht behoben).

**Fix:**
- Sicherstellen, dass `aspect-ratio: 16/9` auf den Portfolio-Img auch tatsächlich greift (kein `height`-Attribut, das `box` streckt; ggf. `width:100%; height:auto` entfernen bzw. nur `aspect-ratio` plus `object-fit:cover`).
- Einheitlichen Rahmen/Schatten für alle Screenshots ergänzen, damit die ohnehin unterschiedlichen Projekte optisch zusammenpassen.

### 22. Portrait auf Startseite falsch beschnitten (nur untere Gesichtshälfte)

**Beobachtung:**
Auf der Startseite (`about-teaser`) zeigt `.portrait-card` das Bild `portrait.webp` in einer 420×520-Box (Verhältnis ~0,81), das Naturmaß ist aber 600×616 (~0,97). Dadurch wird das Porträt vertikal gestaucht bzw. so beschnitten, dass nur der untere Gesichtsbereich sichtbar ist. Auf `/aboutus/` wird dasselbe Bild korrekt bei ~0,97 angezeigt.
Ursache: `width="420" height="520"`-Attribute plus `width: min(100%, 420px)` erzwingen ein Hochformat-Box auf einem fast quadratischen Bild.

**Fix:**
- `portrait-card` auf der Startseite auf das native Verhältnis (~1:1 bzw. `aspect-ratio: 1`) bringen oder Bild-Box an `/aboutus/`-Darstellung angleichen.
- `width`/`height`-Attribute auf native Proportion korrigieren (z. B. `width="420" height="432"`).

## P1 – Nächste Designrunde

### 23. Seminare-Seite nutzt Emoji-Icons statt schlichter Line-Icons

**Beobachtung:**
`src/seminare.njk` verwendet 🎓🔬💻🎯🚀 als `card-icon`/`feature-icon` und direkt in Überschriften (`🚀 In Planung`). Das bricht mit der verbindlich gewählten Line-Icon/SVG-Richtung (Catppuccin-Theme) und wirkt weniger professionell als die Start-/KI-Seite, die schlichte SVG-Line-Icons nutzt.

**Fix:**
- Emojis durch einheitliche `svg.line-icon` (wie auf der Startseite) ersetzen.
- `🚀` aus der Überschrift entfernen und als Icon auslagern.

### 24. Seminare-Hero wirkt leer / Logo als großes Hero-Visual unpassend

**Beobachtung:**
Der Seminare-Hero zeigt groß das `Icon-White.png` (Brand-Icon) als `hero-logo` plus viel leerer Raum zwischen CTA und Folge-Sektion. Im Vergleich zur Startseite (Icon + Orbit-Cards Web/KI/IT) wirkt das unfertig und generisch, zudem entsteht eine unangenehme Leerfläche.

**Fix:**
- Entweder Hero-Visual wie Startseite (`home-hero__visual` mit Orbit-Cards) übernehmen oder auf ein seminartypisches Visual/Diagramm umstellen.
- Vertikalen Abstand zwischen Hero-CTA und `#expertise` reduzieren.

### 25. KI-Beratung-Hero ist rein textlich ohne Stützvisual

**Beobachtung:**
`/ki-beratung/` Hero besteht nur aus Überschrift/Text/CTA auf dunklem Grund, ohne jedes Stützvisual. Da die Folgesektionen sehr textlastig sind, fehlt ein visueller Anker.

**Fix:**
- Schlichtes Line-Icon-Set oder ein minimales Diagramm (z. B. Prozess-/Beratungsvisual) als Hero-Visual ergänzen, stilistisch passend zur Startseite.

### 26. XR-Nexus-Screenshot extrem dunkel / schlecht ablesbar

**Beobachtung:**
Das `xrnexus.webp`-Screenshot ist gegenüber allen anderen Portfolio-Screenshots deutlich dunkler und kaum ablesbar; da es auf Startseite und Portfolio direkt neben helleren Projektkarten steht, fällt die Inkonsistenz auf.

**Fix:**
- Entweder hellere Variante des XR-Nexus-Screenshots verwenden oder einheitliche Bildbehandlung (z. B. leichter Hover-Lift/Helligkeits-FX), sodass dunkle und helle Screenshots nebeneinander funktionieren.

### 27. Konkurrenz der CTAs im Leistungs-Grid auf der Startseite

**Beobachtung:**
Die vier Leistungs-Karten zeigen jeweils gleich gewichtige Ghost-CTAs („Website-Projekt anfragen“, „Seminar anfragen“, „KI-Beratung anfragen“, „IT-Anfrage stellen“). Vier gleich starke CTAs nebeneinander schwächen die Hierarchie.

**Fix:**
- Pro Karte nur ein CTA behalten (in Ordnung), aber Gewichtung prüfen: z. B. „KI-Beratung anfragen“ als `btn--secondary` hervorheben oder die Karten-CTAs dezenter gestalten und den Haupt-CTA im Hero behalten.
- In Kombination mit Punkt 20 erhalten die Karten-CTAs dann wenigstens das richtige `?topic=`.

## P2 – Feinschliff

### 28. Kontaktformular-Inputs sehr dunkel / Kontrast prüfen

**Beobachtung:**
Die Formular-Felder auf `/contact/` haben nahezu schwarzer Hintergrund; im dunklen Theme kann das die Lesbarkeit eingegebener Werte erschweren.

**Fix:**
- Hintergrund der Inputs minimal aufhellen (z. B. `--surface0`/`--surface1`) und Kontrast von Platzhalter- vs. Eingabetext prüfen.

### 29. Über mich-/Code-Grafik wirkt wie Platzhalter

**Beobachtung:**
Die `code.webp`-Grafik auf `/aboutus/` zeigt sehr simples Template-Markup und wirkt eher wie ein Platzhalter denn wie repräsentativer Code.

**Fix:**
- Aussagekräftigeres Code-/Editor-Bild oder echtes Projekt-Snippet verwenden.

### 30. Portfolio-Outro: GitHub-Button konkurriert mit Haupt-CTA

**Beobachtung:**
Im Portfolio-Outro stehen „Ähnliches Projekt anfragen“ (primary) und „Zu Github“ (secondary) nebeneinander; der GitHub-Link lenkt vom primären Konversionsziel ab.

**Fix:**
- GitHub-Link dezenter platzieren (z. B. nur als Textlink unter dem CTA, nicht als gleichwertiger Secondary-Button).

## Technische Prüfnotizen Runde 2

- Desktop-Deep-Audit mit segmentierten Screenshots unter `/tmp/webcommits-audit/deep/`, Bild-/Button-Inventar in `/tmp/webcommits-audit/deep-report.json`.
- Visueller Screenshot-Review via image-analyst-Subagent; maschinell gemessene Bildverhältnisse zur Verifizierung der Bootstrap-/Object-Fit-Probleme herangezogen.
- Keine der gemeldeten „broken image“-Meldungen ist ein echtes fehlendes Asset; alle Dateien existieren in `src/static/images/`.
- Falschpositiv ausgeschlossen: Die „Zu GitHub“-Buttons im Portfolio linken tatsächlich projektbezogen (`/trackable`, `/webcommits-website`), nur die Anzeige war auf 30 Zeichen abgeschnitten.
