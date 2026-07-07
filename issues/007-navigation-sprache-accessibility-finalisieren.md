---
title: Navigation, Sprachschalter und Accessibility finalisieren
status: completed
labels:
  - ready-for-agent
---

## What to build

Die Navigation soll semantisch sauber, tastaturfreundlich und verständlich sein. Mobile Sidebar, Menübuttons und Sprachschalter sollen ohne `javascript:void(0)`-Links funktionieren und ihren Zustand korrekt an assistive Technologien kommunizieren.

## Acceptance criteria

- [ ] Menü öffnen und schließen funktioniert über echte Buttons mit verständlichen Labels.
- [ ] Der Sidebar-Zustand wird über passende ARIA-Attribute aktualisiert.
- [ ] Fokus wird beim Öffnen und Schließen nachvollziehbar geführt.
- [ ] Escape schließt die mobile Navigation.
- [ ] Der Sprachschalter ist visuell und semantisch verständlich, besonders in der mobilen Navigation.
- [ ] Alle Hauptlinks bleiben per Tastatur erreichbar.
- [ ] Der Produktions-Build läuft ohne Fehler durch.

## Blocked by

- `issues/001-redesign-stand-deployfaehig-machen.md`
