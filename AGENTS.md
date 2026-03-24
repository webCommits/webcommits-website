# AGENTS.md - Guidelines for AI Coding Agents

This document provides guidance for AI coding agents working on this codebase.

## Project Overview

This is an Eleventy (11ty) static site generator project for webCommits web Designs, a web development service website. The site is built with Nunjucks templates and custom CSS, featuring bilingual support (German/English) via client-side i18n.

## Tech Stack

- **Static Site Generator**: Eleventy (11ty) v2.x
- **Template Engine**: Nunjucks (.njk files)
- **Styling**: Custom CSS (no framework)
- **JavaScript**: Vanilla JS (no frameworks)
- **Fonts**: Google Fonts (Epilogue, Inter, Clash Display)
- **Maps**: Leaflet.js for interactive maps

## Build Commands

```bash
# Install dependencies
npm install

# Development server with hot reload
npm start
# Runs on http://localhost:8080

# Production build (outputs to docs/ folder)
npm run build

# Deploy (build + git commit + push)
npm run deploy
```

**Note**: There are no tests configured in this project (`npm test` shows error).

## Project Structure

```
/
├── .eleventy.js          # Eleventy configuration
├── package.json          # Dependencies and scripts
├── src/                  # Source files
│   ├── _includes/        # Nunjucks partials
│   │   ├── base.njk      # Base template (layout)
│   │   ├── header.njk    # Navigation header
│   │   ├── footer.njk    # Footer partial
│   │   └── imprsec.njk   # Impressum section
│   ├── static/
│   │   ├── style.css     # Main stylesheet (Catppuccin theme)
│   │   ├── script.js     # Main JavaScript
│   │   ├── i18n.js       # Internationalization (DE/EN)
│   │   ├── images/       # Image assets
│   │   └── svg/          # SVG icons
│   ├── index.njk         # Homepage
│   ├── aboutus.njk       # About page
│   ├── seminare.njk      # Seminars page
│   ├── portfolio.njk     # Portfolio page
│   ├── contact.njk       # Contact form
│   ├── anfahrt.njk      # Directions page
│   ├── impressum.njk     # Legal notice
│   ├── datenschutz.njk   # Privacy policy
│   └── danke.njk         # Thank you page (form submission)
└── docs/                 # Build output (GitHub Pages)
```

## Code Style Guidelines

### Nunjucks Templates

- **Front matter**: Use YAML front matter for page metadata (`title`, `meta`)
- **Template inheritance**: Extend `base.njk` and use `{% block content %}`
- **Includes**: Use `{% include "filename.njk" %}` for partials
- **i18n attributes**: Use `data-i18n="key"` for translatable text content
- **i18n with HTML**: Use `data-i18n-html="key"` for elements containing HTML

```njk
---
title: Page Title | webCommits web Designs
meta: "Page description for SEO"
---
{% extends "base.njk" %}
{% block content %}
<!-- Page content here -->
{% endblock %}
```

### CSS Conventions

- **Use CSS custom properties**: All colors reference the Catppuccin Mocha theme variables defined in `:root`

```css
--base: #1e1e2e      /* Background */
--mantle: #181825    /* Secondary background */
--crust: #11111b     /* Darkest */
--text: #cdd6f4      /* Primary text */
--mauve: #cba6f7     /* Primary accent */
--blue: #89b4fa     /* Buttons & links */
--lavender: #b4befe  /* Highlights */
--surface0: #313244  /* Card backgrounds */
--surface1: #45475a  /* Borders */
```

- **Section naming**: Use semantic class names (`.secone`, `.sectwo`, `.secthree`, etc.)
- **Animations**: Use IntersectionObserver pattern with `.animate.hidden` → `.show` class toggle
- **Responsive design**: Mobile-first approach, breakpoints at 480px, 768px, 890px, 1024px
- **Spacing**: Use consistent 2rem padding for mobile, 4-6rem for desktop sections

### JavaScript Conventions

- **Function naming**: Use camelCase, descriptive names (`showSidebar`, `initMap`)
- **Event listeners**: Attach on `DOMContentLoaded` or use `defer` attribute on scripts
- **DOM access**: Cache DOM queries, check for existence before operations
- **i18n**: Use `window.wcToggleLang()` for language switching; translations stored in `i18n.js`

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.selector');
    if (!element) return;
    
    // Logic here
});
```

### General Conventions

- **Language**: German (de) is the default language; English (en) translations available
- **Image optimization**: Use `.webp` format with `loading="lazy"` attribute
- **Accessibility**: Include `alt` attributes on images, use semantic HTML elements
- **SEO**: Include meta description, Open Graph tags, canonical URLs, and Schema.org structured data
- **Forms**: Use FormSubmit.co service for contact forms; include honeypot field for spam prevention

## File Naming

- **Templates**: Use lowercase with hyphens for page files (`aboutus.njk`, `seminare.njk`)
- **Includes**: Use lowercase partial names (`header.njk`, `footer.njk`)
- **Static assets**: Use lowercase with hyphens or underscores (`style.css`, `i18n.js`)

## Making Changes

1. **Edit source files** in `src/` directory
2. **Test locally** with `npm start`
3. **Build** with `npm run build` (outputs to `docs/`)
4. **Deploy** with `npm run deploy` (commits docs/ and pushes)

## Important Notes

- **No build tools**: No bundler, transpiler, or post-processor - raw CSS and JS
- **No component framework**: Templates are Nunjucks, not React/Vue/Svelte
- **Client-side i18n**: Translations applied via JavaScript after page load
- **Static deployment**: Built to `docs/` for GitHub Pages hosting
- **Theme**: Uses Catppuccin Mocha color scheme throughout - maintain consistency