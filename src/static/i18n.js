/**
 * webCommits i18n – client-side language switching
 * Supports: de (default) | en
 * Usage: add data-i18n="key" to any element whose textContent should be swapped.
 *        add data-i18n-html="key" to elements that need innerHTML replacement.
 *        add data-i18n-value="key" to inputs whose value should be swapped.
 */
(function () {
  'use strict';

  var translations = {
    de: {
      /* ── Language toggle ─────────────────────────── */
      'lang.toggle': 'EN',

      /* ── Navigation ──────────────────────────────── */
      'nav.about':      'Über mich',
      'nav.seminars':   'KI-Seminare',
      'nav.portfolio':  'Portfolio',
      'nav.directions': 'Anfahrt',
      'nav.contact':    'Kontakt',
      'nav.imprint':    'Impressum',

      /* ── Footer ──────────────────────────────────── */
      'footer.copy': 'Copyright © webCommits web Designs 2026',
      'footer.tagline': 'Websites, IT & KI-Lösungen für kleine Unternehmen – persönlich aus Aachen, deutschlandweit umsetzbar.',
      'footer.nav.title': 'Navigation',
      'footer.legal.title': 'Rechtliches',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'footer.home': 'Homepage',
      'footer.repo': 'Repo dieser Website',

      /* ── Index – Hero ────────────────────────────── */
      'index.hero.h1':  'Handcoded Websites',






      /* ── Index – Portfolio teaser ────────────────── */
      'index.port.h1':       'Portfolio',
      'index.port.p':        'Die folgenden Websites repräsentieren eine Auswahl meiner vorherigen Projekte. Überzeugen Sie sich über einen Klick auf die Vorschau!',

      'index.port.btn':      'Mehr lesen',



      /* ── Index – Contact ─────────────────────────── */
      'index.con.h1':  'Kontakt',
      'index.con.p':   'Überzeugt? Dann melden Sie sich über die untenstehenden Möglichkeiten oder über das Kontaktformular.',
      'index.con.btn': 'Zum Formular',

      /* ── About page ──────────────────────────────── */
      'about.hero.h1': 'Ihr Ansprechpartner',
      'about.hero.h3': 'für hochwertige Websites',






      /* ── Contact page ────────────────────────────── */
      'contact.h1':    'Projekt oder Erstgespräch anfragen',
      'contact.p1':    'Schreiben Sie mir kurz, wobei ich unterstützen kann.',
      'contact.p2':    'Hilfreich sind Ziel, Zeitrahmen und der gewünschte Leistungsbereich. Ihre Anfrage landet direkt bei mir, und ich antworte persönlich.',
      'contact.name':  'Name*',
      'contact.phone': 'Telefonnummer (optional)',
      'contact.email': 'E-Mail*',
      'contact.subj':  'Betreff*',
      'contact.msg':   'Nachricht*',
      'contact.btn':   'Anfrage unverbindlich senden',
      'contact.req':   '* Pflichtfelder',
      'contact.honeypot': 'Bitte dieses Feld nicht ausfüllen',
      'contact.autoresponse': 'Vielen Dank für Ihre Nachricht! Ich melde mich schnellstmöglich zurück.',

      /* ── Thank you page ──────────────────────────── */
      'thanks.h1': 'Vielen Dank für Ihre Nachricht!',
      'thanks.p': 'Ihre Anfrage ist erfolgreich bei mir eingegangen. Ich melde mich schnellstmöglich bei Ihnen zurück.',
      'thanks.contact': 'Zurück zum Kontaktformular',
      'thanks.home': 'Zur Startseite',

      /* ── Directions page ─────────────────────────── */
      'dir.h1':  'Anfahrt',
      'dir.p1':  'Ich arbeite von meinem Standort in Baesweiler aus – direkt an der Grenze zu Aachen. Als freiberuflicher Webentwickler bin ich deutschlandweit und international tätig. Sie erreichen mich über verschiedene Wege, unter anderem bequem über mein Kontaktformular.',
      'dir.p2':  'Klicken Sie auf die Karte für genauere Informationen.',
      'dir.osm': 'Größere Karte in OpenStreetMap anzeigen',

      /* ── Portfolio page ───────────────────────────── */
      'port.h1':  'Projekte & Referenzen',
      'port.p1':  'Eine kurze Auswahl von Websites, Webapps und technischen Projekten mit Aufgabe, Umsetzung und Kontext.',
      'port.p2':  'So sehen Sie, welche Art von Projekten ich strukturiere, entwickle und betreue.',
      'port.p3':  'Ausgewählte Projektbeispiele.',
      'port.btn': 'Zur Website',
      'port.btn.github': 'Zu GitHub',
      'port.status.maintenance': 'Derzeit wegen Wartung offline',
      'port.status.internal': 'Nur für interne Mitarbeitende',
      'port.outro': 'Alle anderen öffentlichen Projekte sind auf GitHub auffindbar oder können auf Anfrage vorgestellt werden.',
      'port.github.btn': 'Zu Github',
      'port.p1.h3': 'Rückenwind Reise',
      'port.p1.p':  'Aufgabe: mehrere Inhalte und Links zentral bündeln. Umsetzung: Linktree-Ersatz mit Login, Admin-Bereich, interaktiver Oberfläche und Animationen.',
      'port.p2.h3': 'GPUpgrade',
      'port.p2.p':  'Aufgabe: Grafikkarten vergleichbar machen. Umsetzung: statisches Web-Tool mit klarer Datenstruktur und übersichtlicher Hardware-Auswertung.',
      'port.p3.h3': 'Persönliches Entwickler-Portfolio',
      'port.p3.p':  'Aufgabe: Profil und Projekte kompakt darstellen. Umsetzung: Portfolio-Website mit klarer Inhaltsstruktur und responsivem Frontend.',
      'port.p4.h3': 'Anglistik Web',
      'port.p4.p':  'Aufgabe: interne Abläufe digital unterstützen. Umsetzung: Plattform mit Login, Profilen, Account-Service und Buchungs-/Planungsfunktionen.',
      'port.p5.h3': 'CL-Verkehrstechnik',
      'port.p5.p':  'Aufgabe: Leistungen in der Verkehrstechnik klar erklären. Umsetzung: Unternehmenswebsite mit Angebotsstruktur, responsiver Oberfläche und Kontaktführung.',
      'port.p6.h3': 'Lashes by Dim',
      'port.p6.p':  'Aufgabe: Leistungen und Stil sichtbar machen. Umsetzung: interaktive Website mit Bildsprache, mobiler Optimierung und klarer Kontaktführung.',
      'port.p7.h3': 'Ben-Bachmair',
      'port.p7.p':  'Aufgabe: Inhalte und Veröffentlichungen übersichtlich zugänglich machen. Umsetzung: schlanke Website für Profil, Texte und Kontaktinformationen.',
      'port.p8.h3': 'Kernbohrungen K. Günther',
      'port.p8.p':  'Aufgabe: regionale Handwerksleistungen auffindbar machen. Umsetzung: Website mit Leistungsüberblick, lokaler Ausrichtung und Kontaktmöglichkeit.',
      'port.p9.h3': 'webCommits',
      'port.p9.p':  'Aufgabe: eigenes Angebot und Referenzen bündig präsentieren. Umsetzung: Eleventy-Website mit Design-System, i18n und statischem Deployment.',
      'port.trackable.h3': 'trackable.',
      'port.trackable.p':  'Aufgabe: Arbeitszeiten und Abwesenheiten einfach erfassen. Umsetzung: selbst-gehostete Django-PWA mit Profilen, Urlaub, Exporten und installierbarer Oberfläche.',
      'port.xrnexus.h3': 'XR Nexus',
      'port.xrnexus.p':  'Aufgabe: 3D- und 2D-Planung im Browser ermöglichen. Umsetzung: Webapp mit KI-Integration, Vite/ThreeJS-Frontend und Docker-basiertem Hosting.',
      'port.clseminare.h3': 'CL Seminare',
      'port.clseminare.p':  'Aufgabe: Online-Seminare in der Verkehrstechnik anbieten. Umsetzung: Plattform mit Anfrageprozess, Login und übersichtlicher Kursdarstellung.',
      'port.trackable.pshort': 'Eine selbst-gehostete Zeiterfassungs-PWA auf Basis von Django.',
      'port.xrnexus.pshort': 'Ein professionelles 3D- und 2D-Planungstool mit KI-Integration.',
      'port.clseminare.pshort': 'Eine Plattform für Online-Seminare in der Verkehrstechnik.',

      /* ── Seminars page ───────────────────────────── */
      'sem.hero.h1':     'KI-Seminare für die Lehre',
      'sem.hero.sub':    'Was darf KI im Unterricht? Wie bewerten wir fair? Welche Tools sind datenschutzbewusst nutzbar?',
      'sem.hero.b1':     'Online & Präsenz',
      'sem.hero.b2':     'Einsteiger & Fortgeschrittene',
      'sem.hero.btn':    'Unverbindlich anfragen',
      'sem.exp.label':   'Nutzen für Lehrende',
      'sem.exp.h2':      'Orientierung für Unterricht, Bewertung und Datenschutz',
      'sem.exp.intro':   'Die Seminare helfen Lehrkräften und Bildungseinrichtungen, KI realistisch einzuordnen, sinnvolle Regeln zu formulieren und konkrete Unterrichtssituationen sicherer zu gestalten.',
      'sem.exp.c1.h3':   'Akademischer Hintergrund',
      'sem.exp.c1.p':    'Aktuell im Master "Cognitive, Digital and Empirical English Studies" mit Schwerpunkt KI in der Bildung. Davor Lehramtsstudium Englisch/Technik für Gymnasien und Gesamtschulen.',
      'sem.exp.c2.h3':   'Forschung & Entwicklung',
      'sem.exp.c2.p':    'Ich forsche zu KI-gestützter Lehre und entwickelte einen Online-Kurs für Bachelorstudierende mit digitalen Lehrkonzepten.',
      'sem.exp.c3.h3':   'Technische Kompetenz',
      'sem.exp.c3.p':    'Fullstack-Webentwicklung, IT-Administration und Support. Seit 2022 am Institut für Anglistik der RWTH Aachen tätig.',
      'sem.exp.c4.h3':   'Praxiserfahrung',
      'sem.exp.c4.p':    'Über 5 Jahre Erfahrung im Schulalltag und Kleingruppen-Unterricht. Ich sehe täglich, wie Schüler*innen und Studierende KI tatsächlich nutzen.',
      'sem.off.label':   'Das Angebot',
      'sem.off.h2':      'Seminare nach Ihren Bedürfnissen',
      'sem.off.intro':   'Zwei kompakte Formate decken Einstieg, sichere Nutzung und vertiefende Praxis ab.',
      'sem.l1.badge':    'Level 1',
      'sem.l1.h3':       'KI-Grundlagen für Lehrende',
      'sem.l1.desc':     'Für Teams ohne Vorkenntnisse: Sie verstehen Chancen, Grenzen und Risiken generativer KI und nehmen direkt nutzbare Unterrichtsbeispiele mit.',
      'sem.l1.content':  'Inhalte',
      'sem.l1.li1':      'Einführung in generative KI (ChatGPT, Gemini & Co.)',
      'sem.l1.li2':      'Chancen und Grenzen von KI in der Bildung',
      'sem.l1.li3':      'Praktische Übungen für den Unterricht',
      'sem.l1.li4':      'Plagiatserkennung und akademische Integrität',
      'sem.l1.li5':      'Datenschutz und rechtliche Grundlagen',
      'sem.l1.meta.duration': '<strong>Dauer:</strong> 2-4 Stunden (individuell anpassbar)',
      'sem.l1.meta.format': '<strong>Format:</strong> Online oder Präsenz',
      'sem.l1.meta.groupsize': '<strong>Gruppengröße:</strong> 5-25 Teilnehmer*innen',
      'sem.l2.badge':    'Level 2',
      'sem.l2.h3':       'KI für Fortgeschrittene',
      'sem.l2.desc':     'Für Teams mit ersten Erfahrungen: Wir vertiefen Prompting, Bewertung von Ergebnissen, Workflows und den reflektierten Einsatz im Schul- oder Hochschulalltag.',
      'sem.l2.content':  'Inhalte',
      'sem.l2.li1':      'Fortgeschrittenes Prompt Engineering',
      'sem.l2.li2':      'Datenanalyse mit KI-Tools',
      'sem.l2.li3':      'Custom GPTs und Assistants erstellen',
      'sem.l2.li4':      'Kritische Bewertung von KI-Outputs',
      'sem.l2.li5':      'Zukunftstrends und neue Entwicklungen',
      'sem.l2.meta.duration': '<strong>Dauer:</strong> 3-6 Stunden (individuell anpassbar)',
      'sem.l2.meta.format': '<strong>Format:</strong> Online oder Präsenz',
      'sem.l2.meta.groupsize': '<strong>Gruppengröße:</strong> 5-20 Teilnehmer*innen',
      'sem.fmt.label':   'Flexibilität',
      'sem.fmt.h2':      'Format & Konditionen',
      'sem.fmt.p':       'Ich passe die Seminare an Ihre Bedürfnisse an – ob online via Zoom, bei Ihnen vor Ort oder als Mix aus beidem.',
      'sem.fmt.f1.h4':   'Online-Seminare',
      'sem.fmt.f1.p':    'Via Zoom oder MS Teams mit Live-Demos und praktischen Übungen',
      'sem.fmt.f2.h4':   'Präsenz-Workshops',
      'sem.fmt.f2.p':    'Bei Ihnen vor Ort mit Hands-on-Übungen und direktem Feedback',
      'sem.fmt.f3.h4':   'Hybrid-Format',
      'sem.fmt.f3.p':    'Mix aus Online- und Präsenzphasen. So, wie es am besten passt',
      'sem.fmt.f4.h4':   'Inhouse-Schulungen',
      'sem.fmt.f4.p':    'Speziell für Ihre Einrichtung mit individuellen Schwerpunkten',
      'sem.price.h3':    'Preise & Buchung',
      'sem.price.p1':    'Ich kalkuliere individuell nach:',
      'sem.price.li1':   'Dauer des Seminars',
      'sem.price.li2':   'Anzahl der Teilnehmer*innen',
      'sem.price.li3':   'Format (Online/Präsenz)',
      'sem.price.li4':   'Vorbereitungsaufwand',
      'sem.price.ask':   'Fragen Sie einfach unverbindlich an!',
      'sem.price.cta':   'Angebot anfordern',
      'sem.plan.h3':     'Optional später',
      'sem.plan.title':  'Interaktives Online-Webinar-Tool',
      'sem.plan.p':      'Ein ergänzendes Selbstlernangebot ist in Planung. Für konkrete Anfragen stehen derzeit Workshops und Inhouse-Formate im Vordergrund.',
      'sem.plan.note':   'Bei Interesse kann ich Sie vormerken.',
      'sem.tgt.label':   'Für wen?',
      'sem.tgt.h2':      'Zielgruppen',
      'sem.tgt.c1.h3':   'Lehrkräfte',
      'sem.tgt.c1.p':    'An Grundschulen, weiterführenden Schulen und Berufskollegs – unabhängig vom Fach',
      'sem.tgt.c2.h3':   'Hochschullehrende',
      'sem.tgt.c2.p':    'Professor*innen, Dozent*innen und wissenschaftliche Mitarbeiter*innen',
      'sem.tgt.c3.h3':   'Bildungseinrichtungen',
      'sem.tgt.c3.p':    'Schulen, Universitäten, Volkshochschulen und Weiterbildungsinstitute',
      'sem.tgt.c4.h3':   'Bildungsträger',
      'sem.tgt.c4.p':    'Organisationen, die ihre Mitarbeitenden im Bereich KI schulen möchten',
      'sem.cta.h2':      'Interesse?',
      'sem.cta.p':       'Beschreiben Sie kurz Ihre Einrichtung, Zielgruppe und offenen KI-Fragen. Ich melde mich mit einem passenden Seminarformat zurück.',
      'sem.cta.form':    'Kontaktformular',


    },

    en: {
      /* ── Language toggle ─────────────────────────── */
      'lang.toggle': 'DE',

      /* ── Navigation ──────────────────────────────── */
      'nav.about':      'About me',
      'nav.seminars':   'AI Seminars',
      'nav.portfolio':  'Portfolio',
      'nav.directions': 'Directions',
      'nav.contact':    'Contact',
      'nav.imprint':    'Imprint',

      /* ── Footer ──────────────────────────────────── */
      'footer.copy': 'Copyright © webCommits web Designs 2026',
      'footer.tagline': 'Websites, IT and AI solutions for small businesses – personal from Aachen, available throughout Germany.',
      'footer.nav.title': 'Navigation',
      'footer.legal.title': 'Legal',
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy policy',
      'footer.home': 'Homepage',
      'footer.repo': 'This site\'s repository',

      /* ── Index – Hero ────────────────────────────── */
      'index.hero.h1':  'Handcoded Websites',






      /* ── Index – Portfolio teaser ────────────────── */
      'index.port.h1':    'Portfolio',
      'index.port.p':     'The following websites represent a selection of my previous projects. Click a preview to take a closer look.',

      'index.port.btn':   'Read more',



      /* ── Index – Contact ─────────────────────────── */
      'index.con.h1':  'Contact',
      'index.con.p':   'Convinced? Reach me via the options below or through the contact form.',
      'index.con.btn': 'To the form',

      /* ── About page ──────────────────────────────── */
      'about.hero.h1': 'Your contact',
      'about.hero.h3': 'for high-quality websites',






      /* ── Contact page ────────────────────────────── */
      'contact.h1':    'Request a project or initial call',
      'contact.p1':    'Briefly tell me where I can help.',
      'contact.p2':    'Goal, timeframe and service area are helpful. Your enquiry goes directly to me, and I will reply personally.',
      'contact.name':  'Name*',
      'contact.phone': 'Phone number (optional)',
      'contact.email': 'E-Mail*',
      'contact.subj':  'Subject*',
      'contact.msg':   'Message*',
      'contact.btn':   'Send enquiry without obligation',
      'contact.req':   '* Required fields',
      'contact.honeypot': 'Please leave this field empty',
      'contact.autoresponse': 'Thank you for your message! I will get back to you as soon as possible.',

      /* ── Thank you page ──────────────────────────── */
      'thanks.h1': 'Thank you for your message!',
      'thanks.p': 'Your enquiry has been received successfully. I will get back to you as soon as possible.',
      'thanks.contact': 'Back to the contact form',
      'thanks.home': 'Back to homepage',

      /* ── Directions page ─────────────────────────── */
      'dir.h1':  'Directions',
      'dir.p1':  'I work from my base in Baesweiler, directly on the border with Aachen. As a freelance web developer I am available throughout Germany and internationally. You can reach me in several ways — including via my contact form.',
      'dir.p2':  'Click on the map for more precise information.',
      'dir.osm': 'Open larger map in OpenStreetMap',

      /* ── Portfolio page ───────────────────────────── */
      'port.h1':  'Projects & references',
      'port.p1':  'A short selection of websites, web apps and technical projects with task, implementation and context.',
      'port.p2':  'This shows the kind of projects I structure, build and support.',
      'port.p3':  'Selected project examples.',
      'port.btn': 'Visit website',
      'port.btn.github': 'View on GitHub',
      'port.status.maintenance': 'Currently offline for maintenance',
      'port.status.internal': 'For internal staff only',
      'port.outro': 'All other public projects can be found on GitHub or presented on request.',
      'port.github.btn': 'To Github',
      'port.p1.h3': 'Rückenwind Reise',
      'port.p1.p':  'Task: bundle content and links in one place. Implementation: Linktree replacement with login, admin area, interactive interface and animations.',
      'port.p2.h3': 'GPUpgrade',
      'port.p2.p':  'Task: make graphics cards easier to compare. Implementation: static web tool with clear data structure and hardware evaluation.',
      'port.p3.h3': 'Personal developer portfolio',
      'port.p3.p':  'Task: present profile and projects compactly. Implementation: portfolio website with clear content structure and responsive frontend.',
      'port.p4.h3': 'Anglistik Web',
      'port.p4.p':  'Task: support internal workflows digitally. Implementation: platform with login, profiles, account service and booking/planning functions.',
      'port.p5.h3': 'CL-Verkehrstechnik',
      'port.p5.p':  'Task: explain traffic engineering services clearly. Implementation: business website with service structure, responsive UI and contact guidance.',
      'port.p6.h3': 'Lashes by Dim',
      'port.p6.p':  'Task: make services and style visible. Implementation: interactive website with imagery, mobile optimisation and clear contact guidance.',
      'port.p7.h3': 'Ben-Bachmair',
      'port.p7.p':  'Task: make content and publications easy to access. Implementation: lean website for profile, texts and contact information.',
      'port.p8.h3': 'Kernbohrungen K. Günther',
      'port.p8.p':  'Task: make regional craft services discoverable. Implementation: website with service overview, local positioning and contact option.',
      'port.p9.h3': 'webCommits',
      'port.p9.p':  'Task: present my own offer and references concisely. Implementation: Eleventy site with design system, i18n and static deployment.',
      'port.trackable.h3': 'trackable.',
      'port.trackable.p':  'Task: track working hours and absences simply. Implementation: self-hosted Django PWA with profiles, vacation, exports and installable interface.',
      'port.xrnexus.h3': 'XR Nexus',
      'port.xrnexus.p':  'Task: enable 3D and 2D planning in the browser. Implementation: web app with AI integration, Vite/ThreeJS frontend and Docker-based hosting.',
      'port.clseminare.h3': 'CL Seminars',
      'port.clseminare.p':  'Task: offer online traffic engineering seminars. Implementation: platform with enquiry flow, login and clear course presentation.',
      'port.trackable.pshort': 'A self-hosted time-tracking PWA based on Django.',
      'port.xrnexus.pshort': 'A professional 3D and 2D planning tool with AI integration.',
      'port.clseminare.pshort': 'A platform for online seminars in traffic engineering.',

      /* ── Seminars page ───────────────────────────── */
      'sem.hero.h1':     'AI Seminars for educators',
      'sem.hero.sub':    'What is appropriate AI use in class? How do we assess fairly? Which tools can be used with privacy in mind?',
      'sem.hero.b1':     'Online & in-person',
      'sem.hero.b2':     'Beginners & advanced',
      'sem.hero.btn':    'Enquire without obligation',
      'sem.exp.label':   'Value for educators',
      'sem.exp.h2':      'Orientation for teaching, assessment and privacy',
      'sem.exp.intro':   'The seminars help teachers and educational institutions assess AI realistically, define useful rules and handle concrete classroom situations more safely.',
      'sem.exp.c1.h3':   'Academic background',
      'sem.exp.c1.p':    'Currently completing a Master\'s in "Cognitive, Digital and Empirical English Studies" with a focus on AI in education. Previously a teaching degree in English/Technology for secondary schools.',
      'sem.exp.c2.h3':   'Research & development',
      'sem.exp.c2.p':    'I research AI-assisted teaching and developed an online course for undergraduate students on digital teaching concepts.',
      'sem.exp.c3.h3':   'Technical expertise',
      'sem.exp.c3.p':    'Full-stack web development, IT administration and support. Working at the Department of English Studies at RWTH Aachen since 2022.',
      'sem.exp.c4.h3':   'Practical experience',
      'sem.exp.c4.p':    'Over 5 years of experience in everyday school settings and small-group teaching. I see daily how students and undergraduates actually use AI.',
      'sem.off.label':   'The offer',
      'sem.off.h2':      'Seminars tailored to your needs',
      'sem.off.intro':   'Two compact formats cover foundations, safe use and deeper practical work.',
      'sem.l1.badge':    'Level 1',
      'sem.l1.h3':       'AI foundations for educators',
      'sem.l1.desc':     'For teams without prior knowledge: understand opportunities, limits and risks of generative AI and leave with classroom examples you can use.',
      'sem.l1.content':  'Topics',
      'sem.l1.li1':      'Introduction to generative AI (ChatGPT, Gemini & co.)',
      'sem.l1.li2':      'Opportunities and limitations of AI in education',
      'sem.l1.li3':      'Practical exercises for the classroom',
      'sem.l1.li4':      'Plagiarism detection and academic integrity',
      'sem.l1.li5':      'Data protection and legal basics',
      'sem.l1.meta.duration': '<strong>Duration:</strong> 2–4 hours (individually adjustable)',
      'sem.l1.meta.format': '<strong>Format:</strong> online or in person',
      'sem.l1.meta.groupsize': '<strong>Group size:</strong> 5–25 participants',
      'sem.l2.badge':    'Level 2',
      'sem.l2.h3':       'AI for advanced users',
      'sem.l2.desc':     'For teams with first experience: we deepen prompting, output assessment, workflows and reflective use in school or university settings.',
      'sem.l2.content':  'Topics',
      'sem.l2.li1':      'Advanced prompt engineering',
      'sem.l2.li2':      'Data analysis with AI tools',
      'sem.l2.li3':      'Creating custom GPTs and assistants',
      'sem.l2.li4':      'Critical evaluation of AI outputs',
      'sem.l2.li5':      'Future trends and new developments',
      'sem.l2.meta.duration': '<strong>Duration:</strong> 3–6 hours (individually adjustable)',
      'sem.l2.meta.format': '<strong>Format:</strong> online or in person',
      'sem.l2.meta.groupsize': '<strong>Group size:</strong> 5–20 participants',
      'sem.fmt.label':   'Flexibility',
      'sem.fmt.h2':      'Format & conditions',
      'sem.fmt.p':       'I adapt each seminar to your needs — whether online via Zoom, at your premises, or a mix of both.',
      'sem.fmt.f1.h4':   'Online seminars',
      'sem.fmt.f1.p':    'Via Zoom or MS Teams with live demos and practical exercises',
      'sem.fmt.f2.h4':   'In-person workshops',
      'sem.fmt.f2.p':    'At your location with hands-on exercises and immediate feedback',
      'sem.fmt.f3.h4':   'Hybrid format',
      'sem.fmt.f3.p':    'A blend of online and in-person sessions — whatever works best',
      'sem.fmt.f4.h4':   'In-house training',
      'sem.fmt.f4.p':    'Tailored specifically to your institution with individual focus areas',
      'sem.price.h3':    'Pricing & booking',
      'sem.price.p1':    'I calculate individually based on:',
      'sem.price.li1':   'Duration of the seminar',
      'sem.price.li2':   'Number of participants',
      'sem.price.li3':   'Format (online/in-person)',
      'sem.price.li4':   'Preparation effort',
      'sem.price.ask':   'Just send a non-binding enquiry!',
      'sem.price.cta':   'Request a quote',
      'sem.plan.h3':     'Optional later',
      'sem.plan.title':  'Interactive online webinar platform',
      'sem.plan.p':      'A supplementary self-paced offer is planned. For concrete enquiries, workshops and in-house formats are the current focus.',
      'sem.plan.note':   'If interested, I can keep you updated.',
      'sem.tgt.label':   'Who is it for?',
      'sem.tgt.h2':      'Target groups',
      'sem.tgt.c1.h3':   'Teachers',
      'sem.tgt.c1.p':    'At primary schools, secondary schools and vocational colleges — regardless of subject',
      'sem.tgt.c2.h3':   'University lecturers',
      'sem.tgt.c2.p':    'Professors, lecturers and research associates',
      'sem.tgt.c3.h3':   'Educational institutions',
      'sem.tgt.c3.p':    'Schools, universities, adult education centres and training institutes',
      'sem.tgt.c4.h3':   'Training organisations',
      'sem.tgt.c4.p':    'Organisations looking to upskill their staff in AI',
      'sem.cta.h2':      'Interested?',
      'sem.cta.p':       'Briefly describe your institution, audience and open AI questions. I will reply with a suitable seminar format.',
      'sem.cta.form':    'Contact form',


    }
  };


  Object.assign(translations.de, {
    'nav.services': 'Leistungen',
    'nav.ai': 'KI-Beratung',
    'index.hero.label': 'webCommits web Designs aus Aachen',
    'index.hero.h1': 'Websites, KI & IT für kleine Unternehmen und Selbstständige',
    'index.hero.sub': 'Ich plane und entwickle bezahlbare Websites, sichere KI-Workflows und zuverlässige IT-Setups – persönlich begleitet, schlank umgesetzt und verständlich erklärt.',
    'index.hero.cta_primary': 'Projekt anfragen',
    'index.hero.cta_secondary': 'Leistungen ansehen',
    'index.hero.proof1': 'Für KMU & Selbstständige',
    'index.hero.proof2': 'Web, KI & IT aus einer Hand',
    'index.hero.proof3': 'Aachen · deutschlandweit',

    'index.services.label': 'Leistungen',
    'index.services.h2': 'Digitale Lösungen, die zu Ihrem Alltag passen',
    'index.services.p': 'Ob neue Website, KI-Einstieg, Schulung oder technisches Setup: Ich helfe Ihnen dabei, pragmatische Lösungen umzusetzen, die bezahlbar bleiben und langfristig nutzbar sind.',
    'index.services.web.h3': 'Websites & Webentwicklung',
    'index.services.web.p': 'Preisbewusste Websites und Webapps ohne aufgeblähte Baukästen – schnell, wartbar und individuell.',
    'index.services.web.li1': 'Landingpages & Unternehmensseiten',
    'index.services.web.li2': 'Hosting, SEO-Basis & Support',
    'index.services.web.li3': 'Individuelle Funktionen bei Bedarf',
    'index.services.seminars.h3': 'KI-Seminare & Schulungen',
    'index.services.seminars.p': 'Praxisnahe Workshops für Teams, Lehrende und Einrichtungen – verständlich, anpassbar und ohne unnötige Hürden.',
    'index.services.seminars.li1': 'Grundlagen generativer KI',
    'index.services.seminars.li2': 'Sichere Nutzung im Arbeitsalltag',
    'index.services.seminars.li3': 'Online, Präsenz oder Hybrid',
    'index.services.ai.h3': 'KI-Beratung & KI-Umgebungen',
    'index.services.ai.p': 'Von der Potenzialanalyse bis zu internen Assistenten: Ich unterstütze beim sinnvollen, sicheren KI-Einsatz.',
    'index.services.ai.li1': 'Use Cases & Roadmap',
    'index.services.ai.li2': 'Workflows und Automatisierung',
    'index.services.ai.li3': 'Private oder interne KI-Nutzung',
    'index.services.it.h3': 'PCs, Server & IT-Betrieb',
    'index.services.it.p': 'Maßgeschneiderte PCs, Serverumgebungen und technischer Support – online oder nach Absprache vor Ort.',
    'index.services.it.li1': 'PC-Bau & Workstations',
    'index.services.it.li2': 'Server-Setup mit Linux/Docker',
    'index.services.it.li3': 'Backups, Updates & Support',
    'index.services.cta': 'Beratung anfragen',

    'index.ai.label': 'KI für Unternehmen',
    'index.ai.h2': 'KI sinnvoll im Unternehmen einsetzen',
    'index.ai.p': 'Ich helfe kleinen Unternehmen und Teams dabei, KI praktisch, sicher und verständlich einzuführen – von ersten Einsatzideen bis zu eigenen Workflows und internen Assistenten.',
    'index.ai.cta_primary': 'KI-Beratung anfragen',
    'index.ai.cta_secondary': 'KI-Angebot ansehen',
    'index.ai.f1.h': 'Potenziale finden',
    'index.ai.f1.p': 'Wo KI wirklich hilft – und wo nicht.',
    'index.ai.f2.h': 'Workflows automatisieren',
    'index.ai.f2.p': 'Wiederkehrende Aufgaben schlanker erledigen.',
    'index.ai.f3.h': 'Sichere Nutzung ermöglichen',
    'index.ai.f3.p': 'Klare Regeln, passende Umgebung, verständliche Übergabe.',

    'index.port.label': 'Referenzen',
    'index.port.h1': 'Ausgewählte Projekte',
    'index.port.p': 'Ein Einblick in Websites, Webapps und technische Projekte, die zeigen, wie ich Konzept, Entwicklung und Betrieb verbinde.',
    'index.port.btn': 'Portfolio ansehen',
    'index.port.cta': 'Projekt anfragen',
    'index.about.label': 'Arbeitsweise',
    'index.about.h2': 'Technische Umsetzung, die nachvollziehbar bleibt',
    'index.about.p': 'Ich bin Lukas Schaffrath, freiberuflicher Webentwickler aus dem Raum Aachen. Sie sprechen direkt mit mir, bekommen klare Empfehlungen und erhalten Lösungen, die Sie im Alltag wirklich nutzen können.',
    'index.about.cta': 'Mehr über die Zusammenarbeit',
    'index.con.label': 'Kontakt',
    'index.con.h1': 'Lassen Sie uns über Ihr Projekt sprechen',
    'index.con.p': 'Ob Website, KI-Beratung, Seminar oder IT-Anfrage: Schreiben Sie mir kurz, wobei ich unterstützen kann.',
    'index.con.btn': 'Kontakt aufnehmen',

    'contact.label': 'Kontakt',
    'contact.h1': 'Projekt oder Erstgespräch anfragen',
    'contact.p1': 'Schreiben Sie mir kurz, wobei ich unterstützen kann.',
    'contact.p2': 'Hilfreich sind Ziel, Zeitrahmen und der gewünschte Leistungsbereich. Ihre Anfrage landet direkt bei mir, und ich antworte persönlich.',
    'contact.service': 'Leistungsbereich*',
    'contact.service.placeholder': 'Bitte auswählen',
    'contact.service.web': 'Website',
    'contact.service.ai': 'KI-Beratung',
    'contact.service.sem': 'Seminar',
    'contact.service.it': 'IT-Anfrage',
    'contact.service.other': 'Sonstiges',
    'contact.phone': 'Telefonnummer (optional)',
    'contact.btn': 'Anfrage unverbindlich senden',
    'contact.direct.h2': 'Direkter Kontakt',
    'contact.direct.p': 'Wenn Sie lieber direkt schreiben oder anrufen möchten:',
    'contact.direct.note': 'Standort im Raum Aachen, Projekte deutschlandweit möglich.',
    'contact.autoresponse': 'Vielen Dank für Ihre Nachricht! Ich melde mich schnellstmöglich zurück.',

    'port.label': 'Portfolio',
    'port.h1': 'Projekte & Referenzen',
    'port.p1': 'Eine kurze Auswahl von Websites, Webapps und technischen Projekten mit Aufgabe, Umsetzung und Kontext.',
    'port.p2': 'So sehen Sie, welche Art von Projekten ich strukturiere, entwickle und betreue.',
    'port.status.live': 'Live',
    'port.status.opensource': 'Open Source',
    'port.status.selfhosted': 'Self-hosted',
    'port.status.webapp': 'Webapp',
    'port.status.platform': 'Plattform',
    'port.status.internal': 'Intern/privat',
    'port.btn.request': 'Ähnliches Projekt anfragen',
    'port.cta.h2': 'Sie planen ein ähnliches Projekt?',
    'port.outro': 'Weitere öffentliche Projekte finden Sie auf GitHub – oder ich stelle passende Beispiele im Erstgespräch vor.',
    'port.more': 'Weitere Projekte anzeigen',
    'port.p3.h3': 'Persönliches Entwickler-Portfolio',
    'port.p3.p': 'Aufgabe: Profil und Projekte kompakt darstellen. Umsetzung: Portfolio-Website mit klarer Inhaltsstruktur und responsivem Frontend.',
    'port.p5.p': 'Aufgabe: Leistungen in der Verkehrstechnik klar erklären. Umsetzung: Unternehmenswebsite mit Angebotsstruktur, responsiver Oberfläche und Kontaktführung.',
    'port.p6.p': 'Aufgabe: Leistungen und Stil sichtbar machen. Umsetzung: interaktive Website mit Bildsprache, mobiler Optimierung und klarer Kontaktführung.',
    'port.p7.p': 'Aufgabe: Inhalte und Veröffentlichungen übersichtlich zugänglich machen. Umsetzung: schlanke Website für Profil, Texte und Kontaktinformationen.',
    'port.p8.p': 'Aufgabe: regionale Handwerksleistungen auffindbar machen. Umsetzung: Website mit Leistungsüberblick, lokaler Ausrichtung und Kontaktmöglichkeit.',
    'port.p9.p': 'Aufgabe: eigenes Angebot und Referenzen bündig präsentieren. Umsetzung: Eleventy-Website mit Design-System, i18n und statischem Deployment.',
    'port.trackable.role': 'Rolle: Konzeption, Entwicklung, PWA, Exportlogik und Dokumentation.',
    'port.xrnexus.role': 'Rolle: Frontend-/Tool-Entwicklung, UI-Logik, Hosting-Setup und technische Integration.',
    'port.p1.role': 'Rolle: Konzeption, Entwicklung, Login-Bereich und interaktive Oberfläche.',
    'port.p2.role': 'Rolle: Konzept, Datenstruktur, Interface und statisches Deployment.',
    'port.p3.role': 'Rolle: Design, Entwicklung, Content-Struktur und Deployment.',
    'port.p4.role': 'Rolle: Entwicklung, interne Workflows, Login-/Profilfunktionen und Betrieb.',
    'port.p5.role': 'Rolle: Website-Umsetzung, Struktur, responsive UI und laufende technische Betreuung.',
    'port.clseminare.role': 'Rolle: Plattformkonzept, Webentwicklung, Nutzerführung und Kurs-/Anfrageprozess.',
    'port.p6.role': 'Rolle: Design, Umsetzung, mobile Optimierung und Conversion-Führung.',
    'port.p7.role': 'Rolle: Struktur, Website-Umsetzung und übersichtliche Inhaltsaufbereitung.',
    'port.p8.role': 'Rolle: Website-Entwicklung, lokale Ausrichtung und Kontaktführung.',
    'port.p9.role': 'Rolle: Konzept, Design-System, Eleventy-Umsetzung und kontinuierliche Optimierung.',

    'ai.hero.title': 'KI-Beratung & technische Umsetzung für kleine Unternehmen',
    'ai.hero.subtitle': 'Verständlich, praxisnah und datenschutzbewusst – von der ersten Idee bis zum nutzbaren Workflow.',
    'ai.hero.cta_primary': 'KI-Beratung anfragen',
    'ai.hero.cta_secondary': 'Angebote ansehen',
    'ai.hero.pill1': 'Beraten',
    'ai.hero.pill2': 'Einrichten',
    'ai.hero.pill3': 'Betreuen',
    'ai.problem.headline': 'KI ist mächtig – aber ohne Plan schnell unübersichtlich',
    'ai.problem.text': 'Künstliche Intelligenz bietet enorme Chancen, kann aber ohne eine klare Strategie schnell unübersichtlich und ineffizient werden. Mein Ziel ist es, sinnvolle Use Cases zu identifizieren, potenzielle Risiken verständlich zu machen und die Einführung in kleinen, machbaren Schritten umzusetzen.',
    'ai.services.title': 'Leistungsbereiche',
    'ai.services.card1': 'KI-Potenzialanalyse',
    'ai.services.card1.p': 'Ich prüfe gemeinsam mit Ihnen, wo KI im Alltag wirklich Nutzen bringt.',
    'ai.services.card2': 'KI-Workflows & Automatisierung',
    'ai.services.card2.p': 'Wiederkehrende Text-, Daten- und Büroprozesse werden schlanker und nachvollziehbar umgesetzt.',
    'ai.services.card3': 'Sichere & private KI-Umgebungen',
    'ai.services.card3.p': 'Ich plane KI-Nutzung so, dass sensible Informationen nicht unkontrolliert verarbeitet werden.',
    'ai.services.card4': 'Interne Assistenten & Wissenssysteme',
    'ai.services.card4.p': 'Interne Informationen werden auffindbarer und für Mitarbeitende einfacher nutzbar.',
    'ai.services.card5': 'Schulungen für Teams',
    'ai.services.card5.p': 'Teams lernen, KI sinnvoll einzusetzen und Ergebnisse kritisch zu prüfen.',
    'ai.services.note': 'Hinweis: Spezialisierte Modellanpassungen können in Einzelfällen sinnvoll sein, werden aber erst nach einer Analyse empfohlen.',
    'ai.process.title': 'Mein Vorgehen',
    'ai.process.step1': 'Erstgespräch',
    'ai.process.step1.p': 'Wir klären Ausgangslage, Ziele, Datenschutzfragen und erste Ideen.',
    'ai.process.step2': 'Analyse & Konzept',
    'ai.process.step2.p': 'Ich priorisiere sinnvolle Anwendungsfälle und skizziere einen machbaren Fahrplan.',
    'ai.process.step3': 'Umsetzung & Workshop',
    'ai.process.step3.p': 'Je nach Bedarf folgt technische Umsetzung, Workshop oder eine Kombination aus beidem.',
    'ai.process.step4': 'Übergabe & Betreuung',
    'ai.process.step4.p': 'Sie erhalten eine verständliche Übergabe und können weitere Betreuung nach Bedarf anfragen.',
    'ai.faq.title': 'Häufig gestellte Fragen',
    'ai.faq.q1': 'Brauchen wir direkt ein eigenes Modell?',
    'ai.faq.a1': 'Nicht zwingend. Häufig reichen gute Workflows, eine Wissensbasis oder klare Regeln. Ob eine eigene Modellanpassung sinnvoll ist, wird erst nach Analyse entschieden.',
    'ai.faq.q2': 'Wie sieht es mit dem Datenschutz aus?',
    'ai.faq.a2': 'Datenschutz wird von Anfang an mitgedacht: Welche Daten werden genutzt, wer bekommt Zugriff und welche Umgebung passt zu Ihrem Risiko?',
    'ai.faq.q3': 'Geht das auch lokal oder intern?',
    'ai.faq.a3': 'Ja. Je nach Anforderungen sind interne oder lokale Lösungen möglich. Ich erkläre die Vor- und Nachteile verständlich.',
    'ai.faq.q4': 'Wie teuer ist das?',
    'ai.faq.a4': 'Das hängt vom Umfang ab. Nach dem Erstgespräch erhalten Sie eine realistische Einschätzung und ein individuelles Angebot.',
    'ai.faq.q5': 'Wie starten wir?',
    'ai.faq.a5': 'Am einfachsten starten wir mit einer kurzen Anfrage über das Kontaktformular und einem Erstgespräch.',
    'ai.cta.title': 'Bereit für den nächsten Schritt?',
    'ai.cta.text': 'Beschreiben Sie kurz Ihre Situation – ich melde mich mit einem passenden nächsten Schritt.',
    'ai.cta.button': 'KI-Beratung anfragen',

    'sem.cta.p': 'Fragen Sie ein Erstgespräch an und lassen Sie uns gemeinsam das passende Seminarformat für Ihre Bedürfnisse entwickeln.'
  });

  Object.assign(translations.en, {
    'nav.services': 'Services',
    'nav.ai': 'AI Consulting',
    'index.hero.label': 'webCommits web Designs from Aachen',
    'index.hero.h1': 'Websites, AI & IT for small businesses and freelancers',
    'index.hero.sub': 'I plan and build affordable websites, secure AI workflows and reliable IT setups – personally guided, leanly implemented and clearly explained.',
    'index.hero.cta_primary': 'Request a project',
    'index.hero.cta_secondary': 'View services',
    'index.hero.proof1': 'For SMEs & freelancers',
    'index.hero.proof2': 'Web, AI & IT from one source',
    'index.hero.proof3': 'Aachen · Germany-wide',

    'index.services.label': 'Services',
    'index.services.h2': 'Digital solutions that fit your day-to-day work',
    'index.services.p': 'Whether you need a new website, AI guidance, training or a technical setup: I help you implement pragmatic solutions that stay affordable and useful long-term.',
    'index.services.web.h3': 'Websites & web development',
    'index.services.web.p': 'Budget-conscious websites and web apps without bloated builders – fast, maintainable and individual.',
    'index.services.web.li1': 'Landing pages & business websites',
    'index.services.web.li2': 'Hosting, SEO basics & support',
    'index.services.web.li3': 'Custom features when needed',
    'index.services.seminars.h3': 'AI seminars & training',
    'index.services.seminars.p': 'Practical workshops for teams, educators and organisations – understandable, adaptable and without unnecessary barriers.',
    'index.services.seminars.li1': 'Foundations of generative AI',
    'index.services.seminars.li2': 'Safe use in everyday work',
    'index.services.seminars.li3': 'Online, in-person or hybrid',
    'index.services.ai.h3': 'AI consulting & AI environments',
    'index.services.ai.p': 'From potential analysis to internal assistants: I support useful and secure AI adoption.',
    'index.services.ai.li1': 'Use cases & roadmap',
    'index.services.ai.li2': 'Workflows and automation',
    'index.services.ai.li3': 'Private or internal AI use',
    'index.services.it.h3': 'PCs, servers & IT operations',
    'index.services.it.p': 'Custom PCs, server environments and technical support – remote or on site by agreement.',
    'index.services.it.li1': 'PC builds & workstations',
    'index.services.it.li2': 'Server setup with Linux/Docker',
    'index.services.it.li3': 'Backups, updates & support',
    'index.services.cta': 'Request consulting',

    'index.ai.label': 'AI for businesses',
    'index.ai.h2': 'Use AI sensibly in your business',
    'index.ai.p': 'I help small businesses and teams introduce AI in a practical, secure and understandable way – from first ideas to workflows and internal assistants.',
    'index.ai.cta_primary': 'Request AI consulting',
    'index.ai.cta_secondary': 'View AI services',
    'index.ai.f1.h': 'Find potential',
    'index.ai.f1.p': 'Where AI really helps – and where it does not.',
    'index.ai.f2.h': 'Automate workflows',
    'index.ai.f2.p': 'Handle recurring tasks more efficiently.',
    'index.ai.f3.h': 'Enable safe use',
    'index.ai.f3.p': 'Clear rules, the right environment and an understandable handover.',

    'index.port.label': 'References',
    'index.port.h1': 'Selected projects',
    'index.port.p': 'A look at websites, web apps and technical projects that show how I combine concept, development and operations.',
    'index.port.btn': 'View portfolio',
    'index.port.cta': 'Request a project',
    'index.about.label': 'How I work',
    'index.about.h2': 'Technical implementation that stays understandable',
    'index.about.p': 'I\'m Lukas Schaffrath, a freelance web developer from the Aachen area. You talk directly to me, get clear recommendations and receive solutions you can actually use day to day.',
    'index.about.cta': 'More about working together',
    'index.con.label': 'Contact',
    'index.con.h1': 'Let’s talk about your project',
    'index.con.p': 'Whether it is a website, AI consulting, a seminar or an IT enquiry: briefly describe where I can help.',
    'index.con.btn': 'Get in touch',

    'contact.label': 'Contact',
    'contact.h1': 'Request a project or initial call',
    'contact.p1': 'Briefly tell me where I can help.',
    'contact.p2': 'Goal, timeframe and service area are helpful. Your enquiry goes directly to me, and I will reply personally.',
    'contact.service': 'Service area*',
    'contact.service.placeholder': 'Please select',
    'contact.service.web': 'Website',
    'contact.service.ai': 'AI consulting',
    'contact.service.sem': 'Seminar',
    'contact.service.it': 'IT enquiry',
    'contact.service.other': 'Other',
    'contact.phone': 'Phone number (optional)',
    'contact.btn': 'Send enquiry without obligation',
    'contact.direct.h2': 'Direct contact',
    'contact.direct.p': 'If you prefer to write or call directly:',
    'contact.direct.note': 'Based in the Aachen area, projects possible Germany-wide.',
    'contact.autoresponse': 'Thank you for your message! I will get back to you as soon as possible.',

    'port.label': 'Portfolio',
    'port.h1': 'Projects & references',
    'port.p1': 'A short selection of websites, web apps and technical projects with task, implementation and context.',
    'port.p2': 'This shows the kind of projects I structure, build and support.',
    'port.status.live': 'Live',
    'port.status.opensource': 'Open Source',
    'port.status.selfhosted': 'Self-hosted',
    'port.status.webapp': 'Web app',
    'port.status.platform': 'Platform',
    'port.status.internal': 'Internal/private',
    'port.btn.request': 'Request a similar project',
    'port.cta.h2': 'Planning a similar project?',
    'port.outro': 'More public projects can be found on GitHub – or I can present relevant examples in an initial call.',
    'port.more': 'Show more projects',
    'port.p3.h3': 'Personal developer portfolio',
    'port.p3.p': 'Task: present profile and projects compactly. Implementation: portfolio website with clear content structure and responsive frontend.',
    'port.p5.p': 'Task: explain traffic engineering services clearly. Implementation: business website with service structure, responsive UI and contact guidance.',
    'port.p6.p': 'Task: make services and style visible. Implementation: interactive website with imagery, mobile optimisation and clear contact guidance.',
    'port.p7.p': 'Task: make content and publications easy to access. Implementation: lean website for profile, texts and contact information.',
    'port.p8.p': 'Task: make regional craft services discoverable. Implementation: website with service overview, local positioning and contact option.',
    'port.p9.p': 'Task: present my own offer and references concisely. Implementation: Eleventy site with design system, i18n and static deployment.',
    'port.trackable.role': 'Role: concept, development, PWA, export logic and documentation.',
    'port.xrnexus.role': 'Role: frontend/tool development, UI logic, hosting setup and technical integration.',
    'port.p1.role': 'Role: concept, development, login area and interactive interface.',
    'port.p2.role': 'Role: concept, data structure, interface and static deployment.',
    'port.p3.role': 'Role: design, development, content structure and deployment.',
    'port.p4.role': 'Role: development, internal workflows, login/profile features and operations.',
    'port.p5.role': 'Role: website implementation, structure, responsive UI and ongoing technical support.',
    'port.clseminare.role': 'Role: platform concept, web development, user guidance and course/enquiry flow.',
    'port.p6.role': 'Role: design, implementation, mobile optimisation and conversion guidance.',
    'port.p7.role': 'Role: structure, website implementation and clear content presentation.',
    'port.p8.role': 'Role: website development, local positioning and contact guidance.',
    'port.p9.role': 'Role: concept, design system, Eleventy implementation and continuous optimisation.',

    'ai.hero.title': 'AI consulting & technical implementation for small businesses',
    'ai.hero.subtitle': 'Understandable, practical and privacy-conscious – from the first idea to a usable workflow.',
    'ai.hero.cta_primary': 'Request AI consulting',
    'ai.hero.cta_secondary': 'View services',
    'ai.hero.pill1': 'Advise',
    'ai.hero.pill2': 'Set up',
    'ai.hero.pill3': 'Support',
    'ai.problem.headline': 'AI is powerful – but without a plan it quickly becomes confusing',
    'ai.problem.text': 'Artificial intelligence offers major opportunities, but without a clear strategy it can quickly become confusing and inefficient. My goal is to identify useful use cases, make potential risks understandable and introduce AI in small, manageable steps.',
    'ai.services.title': 'Service areas',
    'ai.services.card1': 'AI potential analysis',
    'ai.services.card1.p': 'Together we identify where AI can actually help in your day-to-day work.',
    'ai.services.card2': 'AI workflows & automation',
    'ai.services.card2.p': 'Recurring text, data and office processes become leaner and easier to follow.',
    'ai.services.card3': 'Secure & private AI environments',
    'ai.services.card3.p': 'I plan AI use so sensitive information is not processed in an uncontrolled way.',
    'ai.services.card4': 'Internal assistants & knowledge systems',
    'ai.services.card4.p': 'Internal information becomes easier to find and easier for employees to use.',
    'ai.services.card5': 'Team training',
    'ai.services.card5.p': 'Teams learn to use AI sensibly and critically evaluate results.',
    'ai.services.note': 'Note: Specialised model adaptations can be useful in individual cases, but are only recommended after analysis.',
    'ai.process.title': 'My process',
    'ai.process.step1': 'Initial call',
    'ai.process.step1.p': 'We clarify your current situation, goals, privacy questions and first ideas.',
    'ai.process.step2': 'Analysis & concept',
    'ai.process.step2.p': 'I prioritise useful use cases and outline a feasible roadmap.',
    'ai.process.step3': 'Implementation & workshop',
    'ai.process.step3.p': 'Depending on your needs, technical implementation, a workshop or a combination follows.',
    'ai.process.step4': 'Handover & support',
    'ai.process.step4.p': 'You receive a clear handover and can request further support as needed.',
    'ai.faq.title': 'Frequently asked questions',
    'ai.faq.q1': 'Do we need our own model right away?',
    'ai.faq.a1': 'Not necessarily. Good workflows, a knowledge base or clear rules are often enough. Whether a custom model adaptation makes sense is decided after analysis.',
    'ai.faq.q2': 'What about data protection?',
    'ai.faq.a2': 'Data protection is considered from the start: which data is used, who gets access and which environment fits your risk level?',
    'ai.faq.q3': 'Can this run locally or internally?',
    'ai.faq.a3': 'Yes. Depending on your requirements, internal or local solutions are possible. I explain the pros and cons clearly.',
    'ai.faq.q4': 'How much does it cost?',
    'ai.faq.a4': 'That depends on the scope. After the initial call you receive a realistic estimate and an individual offer.',
    'ai.faq.q5': 'How do we start?',
    'ai.faq.a5': 'The easiest way is to send a short enquiry through the contact form and start with an initial call.',
    'ai.cta.title': 'Ready for the next step?',
    'ai.cta.text': 'Briefly describe your situation – I will get back to you with a suitable next step.',
    'ai.cta.button': 'Request AI consulting',

    'sem.cta.p': 'Request an initial call and let us develop the right seminar format for your needs together.'
  });


  Object.assign(translations.de, {
    'about.hero.label': 'Über mich',
    'about.hero.h1': 'Technik verständlich machen – von Website bis KI',
    'about.hero.p': 'Ich bin Lukas Schaffrath, freiberuflicher Webentwickler aus dem Raum Aachen. Durch Webentwicklung, IT-Administration an der RWTH Aachen, KI-Beratung und Erfahrung in Lehre und Schulung verbinde ich technische Umsetzung mit verständlicher Beratung.',
    'about.hero.cta.primary': 'Projekt anfragen',
    'about.hero.cta.secondary': 'Leistungen ansehen',
    'about.hero.proof1': 'Webentwicklung',
    'about.hero.proof2': 'IT-Administration / RWTH Aachen',
    'about.hero.proof3': 'KI-Beratung & Schulungen',
    'about.profile.label': 'Profil',
    'about.profile.h2': 'Freelancer statt Agenturapparat',
    'about.profile.p1': 'Ich arbeite direkt mit kleinen Unternehmen, Selbstständigen und Bildungseinrichtungen zusammen. Sie sprechen nicht mit wechselnden Projektteams, sondern direkt mit der Person, die Konzept, Umsetzung und technische Entscheidungen verantwortet.',
    'about.profile.p2': 'Durch meine Erfahrung in Webentwicklung, IT-Administration und Lehre kann ich technische Themen nicht nur umsetzen, sondern auch so erklären, dass Entscheidungen nachvollziehbar werden.',
    'about.profile.card1.h': 'Persönlich',
    'about.profile.card1.p': 'Direkter Kontakt, kurze Wege und ehrliche Einschätzungen.',
    'about.profile.card2.h': 'Technisch fundiert',
    'about.profile.card2.p': 'Websites, Webapps, Server, IT-Betrieb und KI-Workflows aus einer Hand.',
    'about.profile.card3.h': 'Aachen & deutschlandweit',
    'about.profile.card3.p': 'Vor Ort im Raum Aachen verwurzelt, Projekte aber deutschlandweit möglich.',
    'about.work.label': 'Arbeitsweise',
    'about.work.h2': 'Klar, pragmatisch und langfristig nutzbar',
    'about.work.p': 'Ich entwickle Lösungen, die zu Ihrem Alltag passen – nicht zu einem Trend oder zu einem unnötig komplexen Tool-Stack.',
    'about.work.card1.h': 'Verständliche Beratung',
    'about.work.card1.p': 'Ich erkläre Optionen, Grenzen und Aufwand so, dass Sie gute Entscheidungen treffen können.',
    'about.work.card2.h': 'Saubere Umsetzung',
    'about.work.card2.p': 'Stabile Websites, wartbare Webapps und technische Grundlagen, die nicht nach kurzer Zeit neu gebaut werden müssen.',
    'about.work.card3.h': 'IT-Praxis',
    'about.work.card3.p': 'PCs, Server, Hosting, Domains und E-Mail werden bei Bedarf direkt mitgedacht.',
    'about.work.card4.h': 'KI mit Augenmaß',
    'about.work.card4.p': 'KI-Workflows, Schulungen und technische Integration werden realistisch geplant – passend zu Datenschutz, Team und Nutzen.',
    'about.trust.label': 'Warum webCommits?',
    'about.trust.h2': 'Digitale Lösungen aus einer Hand',
    'about.trust.p': 'Viele Projekte scheitern nicht an einzelnen Tools, sondern an fehlender Verbindung zwischen Website, Technik, Betrieb und verständlicher Kommunikation. Genau dort setze ich an.',
    'about.trust.item1': 'Persönlicher Ansprechpartner vom ersten Gespräch bis zur Umsetzung',
    'about.trust.item2': 'Preisbewusste Webentwicklung ohne unnötigen Ballast',
    'about.trust.item3': 'Technische Umsetzung inklusive Hosting-, Server- und IT-Fragen',
    'about.trust.item4': 'KI-Beratung und Schulung einfach erklärt und provider-neutral gedacht',

  });

  Object.assign(translations.de, {
    'consent.text':  'Diese Website nutzt selbst gehostete, cookielose Analyse mit Umami. Sie wird nur mit Ihrer Zustimmung aktiviert.',
    'consent.accept':'Akzeptieren',
    'consent.decline':'Ablehnen',
    'consent.reset': 'Zustimmung zurücksetzen'
  });

  Object.assign(translations.en, {
    'consent.text':  'This website uses self-hosted, cookieless analytics with Umami. It is only activated with your consent.',
    'consent.accept':'Accept',
    'consent.decline':'Decline',
    'consent.reset': 'Reset consent'
  });

  Object.assign(translations.en, {
    'about.hero.label': 'About me',
    'about.hero.h1': 'Making technology understandable – from websites to AI',
    'about.hero.p': 'I\'m Lukas Schaffrath, freelance web developer from the Aachen area. Through web development, IT administration at RWTH Aachen University, AI consulting and experience in teaching and training, I combine technical implementation with clear, accessible advice.',
    'about.hero.cta.primary': 'Request a project',
    'about.hero.cta.secondary': 'View services',
    'about.hero.proof1': 'Web development',
    'about.hero.proof2': 'IT administration / RWTH Aachen',
    'about.hero.proof3': 'AI consulting & seminars',
    'about.profile.label': 'Profile',
    'about.profile.h2': 'Freelancer instead of agency machinery',
    'about.profile.p1': 'I work directly with small businesses, self-employed professionals and educational institutions. You do not talk to changing project teams, but directly to the person responsible for concept, implementation and technical decisions.',
    'about.profile.p2': 'Through my experience in web development, IT administration and teaching, I can not only implement technical topics but also explain them in a way that makes decisions easy to follow.',
    'about.profile.card1.h': 'Personal',
    'about.profile.card1.p': 'Direct contact, short paths and honest assessments.',
    'about.profile.card2.h': 'Technically grounded',
    'about.profile.card2.p': 'Websites, web apps, servers, IT operations and AI workflows from one source.',
    'about.profile.card3.h': 'Aachen & Germany-wide',
    'about.profile.card3.p': 'Rooted locally in the Aachen area, with projects possible throughout Germany.',
    'about.work.label': 'How I work',
    'about.work.h2': 'Clear, pragmatic and useful long-term',
    'about.work.p': 'I develop solutions that fit your day-to-day work – not a trend or an unnecessarily complex tool stack.',
    'about.work.card1.h': 'Understandable consulting',
    'about.work.card1.p': 'I explain options, limits and effort so you can make good decisions.',
    'about.work.card2.h': 'Clean implementation',
    'about.work.card2.p': 'Stable websites, maintainable web apps and technical foundations that do not need to be rebuilt shortly afterwards.',
    'about.work.card3.h': 'IT practice',
    'about.work.card3.p': 'PCs, servers, hosting, domains and email can be considered directly when needed.',
    'about.work.card4.h': 'AI with perspective',
    'about.work.card4.p': 'AI workflows, seminars and technical integration are planned realistically – aligned with data protection, team and benefit.',
    'about.trust.label': 'Why webCommits?',
    'about.trust.h2': 'Digital solutions from one source',
    'about.trust.p': 'Many projects do not fail because of individual tools, but because website, technology, operations and understandable communication are not connected. That is exactly where I help.',
    'about.trust.item1': 'Personal contact from the first call through implementation',
    'about.trust.item2': 'Budget-conscious web development without unnecessary ballast',
    'about.trust.item3': 'Technical implementation including hosting, server and IT questions',
    'about.trust.item4': 'AI consulting and training explained simply and considered provider-neutrally',

  });

  /* ─────────────────────────────────────────────────
   * Core: detect, apply, toggle
   * ───────────────────────────────────────────────── */
  function detectLanguage() {
    var stored = null;
    try { stored = localStorage.getItem('wc-lang'); } catch (e) {}
    if (stored === 'de' || stored === 'en') return stored;
    return 'de';
  }

  function applyTranslations(lang) {
    var t = translations[lang] || translations['de'];

    /* text-only elements */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    /* elements that need inner HTML (e.g. <strong> tags) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* input values, e.g. hidden FormSubmit fields */
    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-value');
      if (t[key] !== undefined) el.value = t[key];
    });

    /* update <html lang="…"> */
    document.documentElement.lang = lang;

    /* update toggle button */
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      if (t['lang.toggle'] !== undefined) btn.textContent = t['lang.toggle'];
      btn.setAttribute('aria-label', lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln');
      btn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    });

    /* persist */
    try { localStorage.setItem('wc-lang', lang); } catch (e) {}
    window.__wcLang = lang;
  }

  function toggleLanguage() {
    var current = window.__wcLang || detectLanguage();
    applyTranslations(current === 'de' ? 'en' : 'de');
  }

  /* expose for the toggle button's onclick */
  window.wcToggleLang = toggleLanguage;

  /* run as soon as the DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyTranslations(detectLanguage());
    });
  } else {
    applyTranslations(detectLanguage());
  }
})();
