# webCommits web Designs - Official Website

[![Live Site](https://img.shields.io/badge/Live%20Site-webcommits.info-blue?style=for-the-badge)](https://www.webcommits.info)
[![Built with Eleventy](https://img.shields.io/badge/Built%20with-Eleventy-green?style=for-the-badge)](https://www.11ty.dev/)
[![License](https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge)](LICENSE)

> Maßgeschneiderte Websites für Handwerker, Kleingewerbe und Selbstständige – handgeschrieben, performant und individuell.

## 🌟 Über das Projekt

Dies ist die offizielle Website von **webCommits web Designs**, einem Web-Entwicklungs-Service aus Baesweiler, Aachen. Die Website präsentiert unsere Dienstleistungen, Portfolio-Projekte und ein neues Angebot für KI-Seminare in der Bildung.

### Live Demo
🔗 [www.webcommits.info](https://www.webcommits.info)

## ✨ Features

### 🎨 **Modernes Design**
- **Catppuccin Mocha Theme** mit konsistenten Farben und dunklem Design
- **Responsive Design** für perfekte Darstellung auf allen Geräten
- **Smooth Animations** mit IntersectionObserver API
- **Custom CSS** - vollständig handgeschrieben, keine Frameworks

### 📱 **Seitenstruktur**
- **Landing Page** - Hero-Section mit Service-Übersicht
- **Über uns** - Unternehmensphilosophie und Prinzipien
- **KI-Seminare** - Neues Angebot für Lehrkräfte und Bildungseinrichtungen
- **Portfolio** - Showcase abgeschlossener Projekte mit Live-Links
- **Kontakt** - Formular und direkte Kontaktmöglichkeiten
- **Anfahrt** - Interaktive Leaflet-Karte

### 🚀 **Technische Highlights**
- **Static Site Generator:** Eleventy (11ty)
- **Template Engine:** Nunjucks (.njk)
- **SEO-optimiert** mit Meta-Tags, Canonical URLs und Sitemap
- **Google Analytics** Integration
- **Structured Data** (Schema.org) für bessere Suchmaschinen-Sichtbarkeit
- **Progressive Enhancement** mit JavaScript-Features
- **Mobile-First Approach** mit Touch-optimierten Interaktionen


## 🛠️ Tech Stack

| Technologie | Verwendung |
|------------|------------|
| **Eleventy** | Static Site Generator |
| **Nunjucks** | Templating Engine |
| **CSS3** | Custom Styling (Catppuccin Theme) |
| **JavaScript (Vanilla)** | Client-seitige Interaktionen |
| **Leaflet.js** | Interaktive Karte |
| **Google Fonts** | Clash Display & Epilogue |


## 🚀 Installation & Entwicklung

### Voraussetzungen
- Node.js (v14 oder höher)
- npm

### Setup

```bash
# Repository klonen
git clone https://github.com/webCommits/webcommits-website.git
cd webcommits-website

# Dependencies installieren
npm install

# Development Server starten (mit Hot Reload)
npm start

# Website wird verfügbar unter: http://localhost:8080
```

### Build & Deployment

```bash
# Production Build erstellen
npm run build

# Build + Deployment zu GitHub Pages
npm run deploy
```

Der `deploy`-Befehl führt automatisch aus:
1. Eleventy Build (`docs/` Ordner wird generiert)
2. Git Add + Commit
3. Push zu GitHub (GitHub Pages hostet aus `docs/`)

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

ISC License - Siehe [LICENSE](LICENSE) für Details

## 🤝 Kontakt

**webCommits web Designs**
- 🌐 Website: [www.webcommits.info](https://www.webcommits.info)
- 📧 E-Mail: Siehe Kontaktformular auf der Website
- 📱 Telefon: Siehe Website
- 🐙 GitHub: [@webCommits](https://github.com/webCommits)

---

**Made with ❤️ in Aachen** | Handcrafted Code, No Frameworks
