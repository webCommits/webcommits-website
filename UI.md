# UI/UX Audit & Angebotsplanung – webCommits web Designs

Stand: 2026-06-22  
Status: Entscheidungen mit Auftraggeber abgestimmt; dient als Umsetzungsgrundlage.

## Kurzfazit

Die Website hat eine solide technische Basis, einen konsistenten Dark-Mode-Look und wirkt durch handgeschriebenen Code, Portfolio und direkte Kontaktmöglichkeiten glaubwürdig. Das größte Potenzial liegt in **Positionierung, Conversion-Führung, Informationsarchitektur, Vertrauensaufbau und klarer Angebotsstruktur**.

webCommits soll künftig als persönliches, professionelles Angebot für **Websites, KI-Beratung, KI-Schulungen sowie PC-/Server-/IT-Infrastruktur** positioniert werden. Besucher:innen sollen schnell verstehen: Lukas bietet digitale Lösungen aus einer Hand – persönlich, schlank, verständlich und bezahlbar.

---

## 1. Verbindlich abgestimmte Entscheidungen

### Zielgruppe & Positionierung

- **Primärzielgruppe:** KMU & Selbstständige.
- **Region:** Angebot deutschlandweit/remote, aber Standort **Aachen** dezent als Vertrauensanker einbinden.
- **Hauptversprechen:** Digitale Lösungen aus einer Hand.
- **Hero-Positionierung:**  
  **Websites, IT & KI-Lösungen für kleine Unternehmen**
- **Web-Angebot:** preisbewusst zuerst verkaufen; handgeschriebene/individuelle Umsetzung als Qualitätsargument ergänzen.
- **Tonalität:** konsequent **„ich“**, professionell-nahbar.
- **„Über uns“:** konsequent zu **„Über mich“** umstellen.

### Informationsarchitektur

Kurzfristige Struktur:

- Startseite mit Leistungsanker `#leistungen`
- Neue Seite `/ki-beratung/`
- Bestehende Seite `/seminare/` bleibt Top-Level
- Portfolio bleibt eigene Seite
- Über-mich-Seite bleibt eigene Seite, wird textlich/perspektivisch umgestellt
- Kontakt bleibt zentrale Conversion-Seite

Neue Hauptnavigation:

1. Leistungen → Startseiten-Anker `#leistungen`
2. KI-Beratung → `/ki-beratung/`
3. Seminare → `/seminare/`
4. Portfolio → `/portfolio/`
5. Über mich → `/aboutus/` oder später sauber umbenannte Route
6. Kontakt → `/contact/`

### Conversion & Kontakt

- CTAs werden **kontextabhängig** formuliert, führen aber alle zur Kontaktseite.
- Primärer CTA darf **„Erstgespräch“** sagen, aber nicht „kostenloses Erstgespräch“.
- Beispiele:
  - Hero: „Erstgespräch anfragen“
  - Web: „Website-Projekt anfragen“
  - KI: „KI-Beratung anfragen“
  - Seminare: „Seminar anfragen“
  - IT: „IT-Anfrage stellen“
- Kontaktformular bekommt eine **Leistungsbereich-Auswahl**:
  - Website/Webentwicklung
  - KI-Beratung
  - KI-Seminar/Schulung
  - PC/Server/IT-Betrieb
  - Sonstiges
- Einheitliche Kontakt-Mail: **info@webcommits.info**
- Preise: **keine sichtbaren Preise**, nur „auf Anfrage“ bzw. Klärung im Gespräch.

### Design & Technik

- Catppuccin-Mocha-Farbwelt bleibt erhalten, aber hochwertiger inszeniert.
- Gewünschter Look: mehr visuelle Hierarchie, moderne Karten, dezente Glows/Gradienten, klare Max-Widths, hochwertigere Buttons.
- Icons/Visuals: **schlichte Line-Icons/SVG**, keine prominenten Emoji-Icons.
- Mobile: normale Best-Practice-Responsive-Optimierung; kein Sonderfokus über gute mobile UX hinaus.
- i18n: Deutsch und Englisch vollständig pflegen.
- Nach Umsetzung: `npm run build`, damit `docs/` aktualisiert wird.

### KI-Angebot

- `/ki-beratung/` soll Beratung und technische Umsetzung stark darstellen.
- Provider-/Toolnamen werden **nicht prominent** genannt.
- Sprache zu Datenschutz/Sicherheit: **einfach und KMU-freundlich**, seriös ohne Garantien oder Übertreibungen.
- Fine-Tuning/Custom Models nicht offensiv als Hauptprodukt bewerben, sondern als möglicher Spezialfall nach Analyse.

### IT-Angebot

- PC-/Server-/Wartungsangebot kurzfristig sichtbar über:
  - Startseiten-Angebotskarte
  - Kontakt-CTA/Formularauswahl
- Keine eigene IT-Seite in dieser Phase.
- Laufende Wartung/Betreuung nur nebenbei erwähnen, nicht als starkes Wartungsvertrags-Angebot verkaufen.

### Portfolio & Trust

- Portfolio wird in Phase 1 direkt als **modernes Card-Grid** umgebaut.
- Enthalten: alle bisherigen Projekte + **XR Nexus** + **CL Seminare**.
- Vorhandene Assets suchen und nutzen.
- Projekte ohne öffentliche Live-Demo werden als **intern/privat** gekennzeichnet.
- Noch keine ausführlichen Case Studies; erst Card-Grid mit Badges, Tech-Tags, Rolle/Mehrwert und CTA.
- Öffentliche Kompetenzpunkte von `lukasschaffrath.online` dürfen für Trust-/Über-mich-Abschnitte genutzt werden.

---

## 2. Abgestimmter Startseiten-Wireframe

Nur Struktur, keine finale Copy:

1. **Hero**
   - Headline: Websites, IT & KI-Lösungen für kleine Unternehmen
   - Nutzenzeile: digitale Lösungen aus einer Hand, persönlich und bezahlbar
   - Primär-CTA zur Kontaktseite: Erstgespräch anfragen
   - Sekundär-CTA zur Portfolioseite oder zum Leistungsanker
   - Visuell: hochwertiger Catppuccin-Gradient/Glow, klare Vertrauenspunkte

2. **Leistungen / Angebotsübersicht** (`#leistungen`)
   - Vier Karten mit Line-Icons:
     1. Websites & Webentwicklung
     2. KI-Seminare & Schulungen
     3. KI-Beratung & KI-Umgebungen
     4. PCs, Server & IT-Betrieb
   - Jede Karte: 2–3 Nutzenpunkte + CTA zur Kontaktseite

3. **KI-Teaser**
   - Kompakter Einstieg in `/ki-beratung/`
   - Fokus: KI sinnvoll, sicher und verständlich in kleinen Unternehmen einsetzen
   - Features: Potenziale erkennen, Workflows automatisieren, sichere KI-Nutzung ermöglichen
   - CTA zur Kontaktseite und/oder KI-Seite; final bevorzugt Kontakt für Anfrage, KI-Seite für Information

4. **Portfolio / Referenzen**
   - Teaser als Card-Grid oder ausgewählte Karten
   - Badges, Tech-Tags, Rolle/Mehrwert
   - CTA zur Portfolioseite und Kontaktseite

5. **Über mich / Vertrauen**
   - Persönlicher, professioneller Abschnitt
   - Aachen/RWTH-Kontext dezent erwähnen
   - Kombination aus Webentwicklung, IT-Administration, Infrastruktur, KI und Vermittlungskompetenz

6. **Kontakt-CTA**
   - Abschluss-CTA zur Kontaktseite
   - Verweis auf Erstgespräch, Projektanfrage, KI-/IT-Anfrage

---

## 3. Abgestimmter Wireframe für `/ki-beratung/`

1. **Hero**
   - KI-Beratung und technische KI-Umsetzung für kleine Unternehmen
   - Verständlich, praxisnah, datenschutzbewusst
   - CTA zur Kontaktseite: KI-Beratung anfragen / Erstgespräch anfragen

2. **Problem-/Nutzen-Sektion**
   - KI ist nützlich, wird ohne Plan aber schnell unübersichtlich
   - Ziel: sinnvolle Use Cases finden, Risiken verstehen, kleine Schritte umsetzen

3. **Leistungsbereiche**
   - KI-Potenzialanalyse
   - KI-Workflows & Automatisierung
   - Sichere/private KI-Umgebungen
   - Interne Assistenten/Wissenssysteme
   - Schulungen für Teams
   - Fine-Tuning/Custom Models nur als Spezialfall im Text/FAQ erwähnen

4. **Vorgehen in 4 Schritten**
   - Erstgespräch
   - Analyse & Konzept
   - Umsetzung oder Workshop
   - Übergabe & Betreuung

5. **Vertrauen**
   - Full-Stack-Webentwicklung
   - IT-Administration/RWTH-Kontext
   - Server-/Infrastrukturaufbau
   - KI-Integration in Projekten
   - pädagogischer Hintergrund und Schulungserfahrung

6. **FAQ**
   - Brauchen wir direkt ein eigenes Modell?
   - Was ist mit Datenschutz?
   - Geht das auch lokal oder intern?
   - Wie teuer ist das?
   - Wie starten wir am einfachsten?

7. **Abschluss-CTA**
   - KI-Beratung anfragen
   - Link zur Kontaktseite

---

## 4. Portfolio-Grid-Struktur

Jede Projektkarte enthält:

- Screenshot/Bild oben
- Projektname
- Status-Badge: Live, Intern/Privat, Wartung, Open Source o.ä.
- Kurzbeschreibung
- Rolle/Mehrwert: z. B. Konzeption, Entwicklung, Hosting, Login-System, Automatisierung
- Tech-Tags: z. B. Eleventy, Django, Python, Docker, React, CSS, JS
- CTA:
  - Live ansehen, wenn öffentlich
  - GitHub ansehen, wenn öffentlich
  - Projekt anfragen/Kontakt, wenn intern/privat

Enthaltene Projekte:

- alle bisherigen Portfolio-Projekte
- XR Nexus
- CL Seminare

---

## 5. Technische UI/UX-Änderungen für diese Umsetzung

### Design-System

- Button-System einführen:
  - `.btn`
  - `.btn--primary`
  - `.btn--secondary`
  - `.btn--ghost`
  - `.btn--full`
- Keine verschachtelten `<button>` in `<a>`.
- Karten-/Badge-/Tag-Stile vereinheitlichen.

### Accessibility

- Mobile Menübuttons mit `aria-label`, `aria-expanded`, `aria-controls`.
- Sidebar per Escape schließen.
- Fokus beim Öffnen ins Menü und danach zurück zum Menübutton.
- Globale sichtbare Fokuszustände:

```css
:focus-visible {
  outline: 3px solid var(--mauve);
  outline-offset: 3px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Performance

- Leaflet nur auf Seiten laden, die eine Karte enthalten.
- Fonts konsolidieren und tatsächlich genutzte Fonts sauber laden.
- Bilder mit `width`/`height` ergänzen, wo sinnvoll möglich.
- `script.js`: Scroll-Listener/Observer prüfen, damit keine unnötigen mehrfachen Listener registriert werden.

---

## 6. Umsetzungsplan

### Phase 1 – Jetzt umsetzen

- `UI.md` mit abgestimmten Entscheidungen aktualisieren
- Startseiten-Wireframe in Code umsetzen
- Neue `/ki-beratung/` Seite erstellen
- Navigation aktualisieren
- Kontaktformular um Leistungsbereich-Auswahl erweitern
- Kontakt-Mail vereinheitlichen
- Portfolio als Card-Grid umbauen und XR Nexus/CL Seminare ergänzen
- i18n DE/EN vollständig ergänzen
- Button-System und Kartenstile einführen
- Accessibility-Fixes: ARIA, Fokus, Escape, Reduced Motion
- Performance-Fixes: Leaflet bedarfsgerecht, Fonts/Bilder/Script prüfen
- `npm run build`

### Phase 2 – Später ausbauen

- Case Studies mit Problem → Lösung → Ergebnis
- Kundenstimmen
- eigene Leistungen-Seite oder eigene IT-Infrastruktur-Seite, falls dieser Bereich stärker beworben werden soll
- statische `/en/` Seiten mit hreflang, falls englische SEO relevant wird
- weitere Conversion-Optimierung nach Feedback
