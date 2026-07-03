# webCommits web Designs - Offizielle Website

[![Live Site](https://img.shields.io/badge/Live%20Site-webcommits.info-blue?style=for-the-badge)](https://www.webcommits.info)
[![Built with Eleventy](https://img.shields.io/badge/Built%20with-Eleventy-green?style=for-the-badge)](https://www.11ty.dev/)

> Maßgeschneiderte digitale Lösungen – professionell, performant und individuell.

## 🌟 Über das Projekt

Dies ist die offizielle Website von **webCommits web Designs**. Ich unterstütze kleine Unternehmen, Selbstständige und Bildungseinrichtungen mit moderner Webentwicklung, praxisnaher KI-Beratung und verlässlicher IT-Infrastruktur.

### Live Demo
🔗 [www.webcommits.info](https://www.webcommits.info)

## ✨ Leistungen

- **Websites & Webentwicklung**: Individuelle, performante und SEO-optimierte Webauftritte.
- **KI-Beratung**: Strategische Unterstützung bei der Integration von Künstlicher Intelligenz in Geschäftsprozesse.
- **KI-Seminare**: Praxisnahe Schulungen für Lehrkräfte und Bildungseinrichtungen.
- **IT- & Infrastruktur**: Support für Server, PC-Infrastruktur und Netzwerke.

## 📱 Seitenstruktur

- **Home** (`/`) – Überblick über die Leistungen.
- **KI-Beratung** (`/ki-beratung/`) – Informationen zur KI-Beratung.
- **Seminare** (`/seminare/`) – Details zu KI-Schulungen.
- **Portfolio** (`/portfolio/`) – Einblick in bisherige Projekte.
- **Über mich** (`/aboutus/`) – persönliche Positionierung und Arbeitsweise.
- **Kontakt** (`/contact/`) – Kontaktformular für Anfragen.
- **Anfahrt** (`/anfahrt/`) – Standort und Wegbeschreibung.
- **Rechtliches** – Impressum und Datenschutz.

## 🛠️ Tech Stack

| Technologie | Verwendung |
|------------|------------|
| **Eleventy 3.x** | Static Site Generator |
| **Nunjucks** | Templating Engine |
| **JavaScript (Vanilla)** | Client-seitige Interaktionen |
| **Custom CSS** | Styling (Catppuccin Mocha Theme) |
| **Leaflet.js** | Interaktive Karten |
| **Umami Analytics** | Datenschutzkonformes Analytics (nach Consent) |

## 🚀 Installation & Entwicklung

### Voraussetzungen
- **Node.js 20+ empfohlen**
- npm

### Setup

```bash
# Repository klonen
git clone https://github.com/webCommits/webcommits-website.git
cd webcommits-website

# Dependencies installieren
npm install

# Development Server starten
npm start
```

### Build & Deployment

```bash
# Production Build erstellen
npm run build

# Build + Deployment zu GitHub Pages
npm run deploy
```

**Hinweis:** Der Build-Output wird im Verzeichnis `docs/` generiert.

## 🎨 Design-System

### Farbschema (Catppuccin Mocha)
```css
--base: #1e1e2e        /* Hintergrund */
--mantle: #181825      /* Sekundärer Hintergrund */
--text: #cdd6f4        /* Primärer Text */
--mauve: #cba6f7       /* Akzentfarbe */
--blue: #89b4fa        /* Buttons & Links */
--lavender: #b4befe    /* Highlights */
```

### Typography
- **Headings:** Clash Display
- **Body:** Epilogue
- **Fallbacks:** System Fonts (-apple-system, BlinkMacSystemFont, Segoe UI)

## 📄 Lizenz

ISC laut `package.json`.

## 🤝 Kontakt

**webCommits web Designs**
- 🌐 Website: [www.webcommits.info](https://www.webcommits.info)
- 📧 Kontakt: Über das Formular auf der Website

---

**Made with ❤️ in Aachen** | Handcrafted Code, No Frameworks
