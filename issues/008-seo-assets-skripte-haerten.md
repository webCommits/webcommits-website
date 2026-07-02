---
title: Technische Seitengrundlagen für SEO, Assets und externe Skripte härten
status: completed
labels:
  - ready-for-agent
---

## What to build

Die technischen Grundlagen der statischen Seite sollen verlässlicher werden. Social Previews dürfen keine defekten Bilder referenzieren, externe Skripte sollen bewusst geladen werden und Karten-/Analytics-Abhängigkeiten sollen nicht unnötig jede Seite belasten.

## Acceptance criteria

- [ ] Open-Graph- und Twitter-Bildreferenzen zeigen auf tatsächlich vorhandene Assets.
- [ ] Externe Analytics werden nur nach Consent und ohne doppelte, unbegründete Tracking-Systeme geladen.
- [ ] Kartenabhängigkeiten werden nur dort geladen oder initialisiert, wo eine Karte gebraucht wird.
- [ ] Consent-Texte bleiben verständlich und knapp.
- [ ] Die wichtigsten Seiten liefern sinnvolle Titel und Meta-Beschreibungen.
- [ ] Der Produktions-Build läuft ohne Fehler durch.

## Blocked by

- `issues/001-redesign-stand-deployfaehig-machen.md`
