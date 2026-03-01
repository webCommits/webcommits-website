/**
 * webCommits i18n – client-side language switching
 * Supports: de (default) | en
 * Usage: add data-i18n="key" to any element whose textContent should be swapped.
 *        add data-i18n-html="key" to elements that need innerHTML replacement.
 */
(function () {
  'use strict';

  var translations = {
    de: {
      /* ── Language toggle ─────────────────────────── */
      'lang.toggle': 'EN',

      /* ── Navigation ──────────────────────────────── */
      'nav.about':      'Über uns',
      'nav.seminars':   'KI-Seminare',
      'nav.portfolio':  'Portfolio',
      'nav.directions': 'Anfahrt',
      'nav.contact':    'Kontakt',
      'nav.imprint':    'Impressum',

      /* ── Footer ──────────────────────────────────── */
      'footer.copy':    'Copyright © webCommits web Designs 2026',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',

      /* ── Index – Hero ────────────────────────────── */
      'index.hero.h1':  'Handcoded Websites',
      'index.hero.h3':  'ohne hohe Kosten',
      'index.hero.btn': 'Kontaktieren',

      /* ── Index – Section two ─────────────────────── */
      'index.s2.h2':  'Hilfe für Alle',
      'index.s2.h3':  'ohne Page-Builder!',
      'index.s2.p':   'Ich setze auf Schnelligkeit, Präzision und Sicherheit durch handgeschriebenen Code. Dabei profitiere ich von meiner langjährigen Erfahrung als Webentwickler. Statt auf aufgeblähte Page-Builder zu setzen, entwickle ich schlanken, wartungsfreundlichen und wiederverwendbaren Code – individuell auf Ihre Anforderungen zugeschnitten. Das sorgt für schnellere Ladezeiten und eine zielgerichtete Nutzerführung. Mehr über meine Arbeitsweise und Philosophie erfahren Sie hier:',
      'index.s2.btn': 'Über uns',

      /* ── Index – Seminar teaser ──────────────────── */
      'index.sem.label':   'Neu im Angebot',
      'index.sem.h2':      'KI-Seminare für Lehrende',
      'index.sem.intro':   'Entdecken Sie die Möglichkeiten von KI in der Bildung. Praxisnah, wissenschaftlich fundiert und individuell angepasst – vom Einsteiger bis zum Fortgeschrittenen.',
      'index.sem.f1.h4':   'Einsteiger-Seminare',
      'index.sem.f1.p':    'Grundlagen verstehen und praktische Anwendungen kennenlernen',
      'index.sem.f2.h4':   'Fortgeschrittene Workshops',
      'index.sem.f2.p':    'Tiefere Einblicke und fortgeschrittene Techniken',
      'index.sem.f3.h4':   'Flexibles Format',
      'index.sem.f3.p':    'Online, Präsenz oder Hybrid. Ganz nach Ihren Bedürfnissen',
      'index.sem.f4.h4':   'Online-Webinar-Tool',
      'index.sem.f4.p':    'Coming Soon: Weiterbildungen flexibel in unserem Online-Tool',
      'index.sem.btn':     'Mehr über KI-Seminare erfahren',

      /* ── Index – Portfolio teaser ────────────────── */
      'index.port.h1':       'Portfolio',
      'index.port.p':        'Die folgenden Websites repräsentieren eine Auswahl meiner vorherigen Projekte. Überzeugen Sie sich über einen Klick auf die Vorschau!',
      'index.port.p1.h3':    'Rückenwind Reise',
      'index.port.p1.p':     'Eine Übersichtsseite mit Linktree-Ersatz für unsere Lieblings-YouTuber! Inklusive Login, Admin-Panel, interaktiver UI und Animationen!',
      'index.port.p2.h3':    'Chefs Portfolio',
      'index.port.p2.p':     'Eine moderne, einzigartige und intuitive Portfolio website, die den Inhaber von webCommits darstellt.',
      'index.port.p3.h3':    'Ben-Bachmair',
      'index.port.p3.p':     'Eine Übersichtswebsite für einen Weltweit bekannten Professor, Author und Mentor.',
      'index.port.btn':      'Mehr lesen',

      /* ── Index – Directions ──────────────────────── */
      'index.dir.h1':  'Anfahrt',
      'index.dir.p':   'Sie finden mich an der Grenze von Aachen. Klicken Sie auf die Karte für genauere Infos.',
      'index.dir.osm': 'Größere Karte in OpenStreetMap anzeigen',

      /* ── Index – Contact ─────────────────────────── */
      'index.con.h1':  'Kontakt',
      'index.con.p':   'Überzeugt? Dann melden Sie sich über die untenstehenden Möglichkeiten oder über das Kontaktformular.',
      'index.con.btn': 'Zum Formular',

      /* ── About page ──────────────────────────────── */
      'about.hero.h1': 'Ihr Ansprechpartner',
      'about.hero.h3': 'für hochwertige Websites',
      'about.bio.h2':  'webCommits web Designs',
      'about.bio.h3':  'Über mich',
      'about.bio.p':   'Was als studentischer Nebenjob begann, wurde mit der Zeit zu meiner Leidenschaft. Aus einer Idee entwickelte sich eine klare Vision. Nach meinem erfolgreich abgeschlossenen Technik-Lehramtsstudium an der RWTH Aachen University – einer der renommiertesten technischen Hochschulen Europas – und mehreren Jahren Erfahrung als Webentwickler an derselben Universität, habe ich mich entschieden, meine Expertise selbstständig einzusetzen. Als freiberuflicher Webentwickler biete ich individuelle, erreichbare und kosteneffiziente Alternativen zu großen Agenturen – persönlich, direkt und auf Augenhöhe.',
      'about.phil.h3': 'Unsere Philosophie',
      'about.phil.p':  'Bei mir steht die Qualität meiner Arbeit an erster Stelle. Ich setze auf individuell entwickelte, code-basierte Websites, die stabil, leistungsstark und exakt auf die Anforderungen meiner Kundinnen und Kunden abgestimmt sind. Besonders kleine Unternehmen und Selbstständige liegen mir am Herzen – sie sind das Rückgrat unserer Wirtschaft. Mein Ziel: professionelle Weblösungen zugänglich machen, ohne dass Sie dafür ein Vermögen investieren müssen.',
      'about.prin.h3':    'Prinzipien',
      'about.prin.intro': 'Meine Philosophie basiert auf folgenden Prinzipien:',
      'about.prin.1':  '<strong>Handgeschriebener Code:</strong> kein unnötiger Blockcode für schnelle Ladezeiten und Performance',
      'about.prin.2':  '<strong>Transparenz und Fairness:</strong> Preismodelle sind fair und klar nachvollziehbar, ohne versteckte Kosten',
      'about.prin.3':  '<strong>Optimierung:</strong> optimierte Texte und Bilder für Benutzerfreundlichkeit und Suchmaschinenfreundlichkeit',
      'about.prin.4':  '<strong>Zuverlässigkeit:</strong> Ich bin nicht nur Ihr Programmier-Team, sondern ihr Unternehmenspartner. Wir engagieren uns und arbeiten zusammen am gemeinsamen Erfolg',
      'about.prin.5':  '<strong>Innovation:</strong> ich nutze die neuesten Technologien und Trends, um Ihnen zukunftssichere Lösungen anzubieten',

      /* ── About – Pricing ─────────────────────────── */
      'about.p1.span': 'Static Page',
      'about.p1.f1':   'Landingpage für Ihr Business',
      'about.p1.f2':   'Ihr Gewerbe auf einen Blick',
      'about.p1.f3':   'Optimiert für Schnelligkeit und Suchmaschinen',
      'about.p1.f4':   'Unbegrenzte Änderungen*',
      'about.p1.f5':   'Hosting Inklusive*',
      'about.p1.f6':   '24/7 Kundenservice',
      'about.p1.f7':   'Domainregistrierung möglich*',
      'about.p2.span': 'Static Site',
      'about.p2.f1':   'Bis zu 5 Pages für Ihr Gewerbe',
      'about.p2.f2':   'Detaillierte Darstellung Ihres Angebots',
      'about.p2.f3':   'Optimiert für Schnelligkeit und Suchmaschinen',
      'about.p2.f4':   'Unbegrenzte Änderungen*',
      'about.p2.f5':   'Hosting Inklusive*',
      'about.p2.f6':   '24/7 Kundenservice',
      'about.p2.f7':   'Domainregistrierung möglich*',
      'about.p3.span': 'Weitere Services',
      'about.p3.f1':   'Hosting',
      'about.p3.f2':   'Domainregistrierung',
      'about.p3.f3':   'Google Maps Integration',
      'about.p3.f4':   'Google Creator Profil',
      'about.p3.f5':   'Business E-Mail',
      'about.p3.f6':   'E-Commerce Shop',
      'about.p3.f7':   'E-Learning Systeme',
      'about.p3.f8':   'Medien-Design, inkl. Logo, Flyer, Visitenkarten',
      'about.p3.h3':   'Auf Anfrage',
      'about.price.h2':      'Monatlich',
      'about.price.h3':      'oder Einmalig',
      'about.price.btn':     'Anfragen',
      'about.disclaimer':    '*Laufzeit zwischen 6 und 12 Monaten, wie vertraglich festgehalten.',

      /* ── Contact page ────────────────────────────── */
      'contact.h1':    'Kontaktformular',
      'contact.p1':    'Der einfachste Weg, mit mir in Kontakt zu treten:',
      'contact.p2':    'Formulieren Sie hier Ihre Anfrage und senden Sie sie direkt über dieses Kontaktformular ab. Ihre Nachricht wird sicher und zuverlässig per E-Mail an mich gesendet. Ich melde mich so schnell wie möglich bei Ihnen zurück.',
      'contact.name':  'Name*',
      'contact.phone': 'Telefonnummer*',
      'contact.email': 'E-Mail*',
      'contact.subj':  'Betreff*',
      'contact.msg':   'Nachricht*',
      'contact.btn':   'Absenden',
      'contact.req':   '* Pflichtfelder',

      /* ── Directions page ─────────────────────────── */
      'dir.h1':  'Anfahrt',
      'dir.p1':  'Ich arbeite von meinem Standort in Baesweeler aus – direkt an der Grenze zu Aachen. Als freiberuflicher Webentwickler bin ich deutschlandweit und international tätig. Sie erreichen mich über verschiedene Wege, unter anderem bequem über mein Kontaktformular.',
      'dir.p2':  'Klicken Sie auf die Karte für genauere Informationen.',
      'dir.osm': 'Größere Karte in OpenStreetMap anzeigen',

      /* ── Portfolio page ───────────────────────────── */
      'port.h1':  'Portfolio',
      'port.p1':  'Meine Designs verbinden höchste Funktionalität mit ansprechender Ästhetik, um die Erwartungen Ihrer Kunden bestmöglich zu erfüllen. Jede Website, die ich entwickle, ist nicht nur schnell und benutzerfreundlich, sondern auch individuell auf Ihre Anforderungen abgestimmt. Ihre Zufriedenheit steht für mich an erster Stelle – ich setze alles daran, Ihre Visionen effizient und zeitnah umzusetzen.',
      'port.p2':  'Die folgenden Websites zeigen eine Auswahl meiner bisherigen Projekte. Sie spiegeln unterschiedliche Anforderungen, Stile und Zielgruppen wider. Jedes Design wurde in enger Abstimmung mit meinen Auftraggebern entwickelt und exakt auf deren Wünsche zugeschnitten – für Ergebnisse, auf die man stolz sein kann.',
      'port.p3':  'Überzeugen Sie sich selbst – ein Klick auf die Vorschau genügt!',
      'port.btn': 'Zur Website',
      'port.btn.github': 'Zu GitHub',
      'port.outro': 'Alle anderen öffentlichen Projekte sind auf GitHub auffindbar oder können auf Anfrage vorgestellt werden.',
      'port.github.btn': 'Zu Github',
      'port.p1.h3': 'Rückenwind Reise',
      'port.p1.p':  'Eine Übersichtsseite mit Linktree-Ersatz für unsere Lieblings-Youtuber! Inklusive Login, Admin-Panel, interaktiver UI und Animationen!',
      'port.p2.h3': 'GPUpgrade',
      'port.p2.p':  'Ein spezialisiertes Web-Tool zur Analyse und zum Vergleich aktueller und älterer Grafikkarten. Mit klarer Übersicht über Leistungswerte, ermöglicht fundierte Entscheidungen bei Hardware-Upgrades.',
      'port.p3.h3': 'Chefs Portfolio',
      'port.p3.p':  'Eine moderne, einzigartige und intuitive Portfolio website, die den Inhaber von webCommits darstellt.',
      'port.p4.h3': 'Anglistik Web',
      'port.p4.p':  'Die offizielle Online-Plattform des Instituts für Anglistik der RWTH Aachen University, inklusive Login-System, Profilen und automatischem Account-Service. Sprechstunden und Lernräume buchen, Colloquien planen, und vieles mehr; jetzt im neuen Design!',
      'port.p5.h3': 'CL-Verkehrstechnik',
      'port.p5.p':  'Verkehrszeichenpläne nach langjähriger Erfahrung, gezeichnet mit Präzision. Essentiell für die Verkehrslenkung- und -sicherheit. Bundesweit und Empfehlenswert.',
      'port.p6.h3': 'Lashes by Dim',
      'port.p6.p':  'Eine interaktive Website für die Wimpernstylistin unseres Vertrauens.',
      'port.p7.h3': 'Ben-Bachmair',
      'port.p7.p':  'Eine Übersichtswebsite für einen Weltweit bekannten Professor, Author und Mentor.',
      'port.p8.h3': 'Kernbohrungen K. Günther',
      'port.p8.p':  'Der kompetente Meisterbetrieb im Mauerwerks- und Betonbau. Für alle handwerklichen Angelegenheiten.',
      'port.p9.h3': 'webCommits',
      'port.p9.p':  'Die besten Web-Entwickler präsentieren Ihre eigene Website. Untersuchen Sie die Seite per Rechtsklick und überzeugen Sie sich von unserer Arbeit.',

      /* ── Seminars page ───────────────────────────── */
      'sem.hero.h1':     'KI-Seminare für die Lehre',
      'sem.hero.sub':    'Forschung trifft Praxis',
      'sem.hero.b1':     'Online & Präsenz',
      'sem.hero.b2':     'Einsteiger & Fortgeschrittene',
      'sem.hero.btn':    'Unverbindlich anfragen',
      'sem.exp.label':   'Meine Expertise',
      'sem.exp.h2':      'Forschung trifft Praxis',
      'sem.exp.intro':   'Als Webentwickler und ehemaliger Lehramtsstudent studiere ich aktuell im Master "Cognitive, Digital and Empirical English Studies" an der RWTH Aachen. Dabei verbinde ich technische Kompetenz mit aktueller KI-Forschung und praktischer Erfahrung aus Schule und Hochschule.',
      'sem.exp.c1.h3':   'Akademischer Hintergrund',
      'sem.exp.c1.p':    'Aktuell im Master "Cognitive, Digital and Empirical English Studies" mit Schwerpunkt KI in der Bildung. Davor Lehramtsstudium Englisch/Technik für Gymnasien und Gesamtschulen.',
      'sem.exp.c2.h3':   'Forschung & Entwicklung',
      'sem.exp.c2.p':    'Ich forsche zu KI-gestützter Lehre und entwicklte einen Online-Kurs für Bachelorstudierende mit digitalen Lehrkonzepten.',
      'sem.exp.c3.h3':   'Technische Kompetenz',
      'sem.exp.c3.p':    'Fullstack-Webentwicklung, IT-Administration und Support. Seit 2022 am Institut für Anglistik der RWTH Aachen tätig.',
      'sem.exp.c4.h3':   'Praxiserfahrung',
      'sem.exp.c4.p':    'Über 5 Jahre Erfahrung im Schulalltag und Kleingruppen-Unterricht. Ich sehe täglich, wie Schüler*innen und Studierende KI tatsächlich nutzen.',
      'sem.off.label':   'Das Angebot',
      'sem.off.h2':      'Seminare nach Ihren Bedürfnissen',
      'sem.off.intro':   'Ich biete zwei Stufen an, je nachdem, wo Sie stehen.',
      'sem.l1.badge':    'Level 1',
      'sem.l1.h3':       'KI-Grundlagen für Lehrende',
      'sem.l1.desc':     'Für den Einstieg ohne technische Vorkenntnisse. Sie lernen die Grundlagen und bekommen praktische Beispiele für Ihren Unterricht.',
      'sem.l1.content':  'Inhalte',
      'sem.l1.li1':      'Einführung in generative KI (ChatGPT, Gemini & Co.)',
      'sem.l1.li2':      'Chancen und Grenzen von KI in der Bildung',
      'sem.l1.li3':      'Praktische Übungen für den Unterricht',
      'sem.l1.li4':      'Plagiatserkennung und akademische Integrität',
      'sem.l1.li5':      'Datenschutz und rechtliche Grundlagen',
      'sem.l2.badge':    'Level 2',
      'sem.l2.h3':       'KI für Fortgeschrittene',
      'sem.l2.desc':     'Für alle, die schon ein bisschen was können und tiefer einsteigen wollen. Hier geht\'s um fortgeschrittene Techniken und Automatisierung.',
      'sem.l2.content':  'Inhalte',
      'sem.l2.li1':      'Fortgeschrittenes Prompt Engineering',
      'sem.l2.li2':      'Datenanalyse mit KI-Tools',
      'sem.l2.li3':      'Custom GPTs und Assistants erstellen',
      'sem.l2.li4':      'Kritische Bewertung von KI-Outputs',
      'sem.l2.li5':      'Zukunftstrends und neue Entwicklungen',
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
      'sem.price.cta':   'Angebot anfordern',
      'sem.tgt.label':   'Für wen?',
      'sem.tgt.h2':      'Zielgruppen',
      'sem.tgt.c1.h3':   '🎓 Lehrkräfte',
      'sem.tgt.c1.p':    'An Grundschulen, weiterführenden Schulen und Berufskollegs – unabhängig vom Fach',
      'sem.tgt.c2.h3':   '👨‍🏫 Hochschullehrende',
      'sem.tgt.c2.p':    'Professor*innen, Dozent*innen und wissenschaftliche Mitarbeiter*innen',
      'sem.tgt.c3.h3':   '🏫 Bildungseinrichtungen',
      'sem.tgt.c3.p':    'Schulen, Universitäten, Volkshochschulen und Weiterbildungsinstitute',
      'sem.tgt.c4.h3':   '💼 Bildungsträger',
      'sem.tgt.c4.p':    'Organisationen, die ihre Mitarbeitenden im Bereich KI schulen möchten',
      'sem.cta.h2':      'Interesse?',
      'sem.cta.p':       'Vereinbaren Sie ein kostenloses Beratungsgespräch und lassen Sie uns gemeinsam das passende Seminarformat für Ihre Bedürfnisse entwickeln.',
      'sem.cta.form':    'Kontaktformular',

      /* ── Shared meta labels ──────────────────────── */
      'meta.duration':   'Dauer',
      'meta.format':     'Format',
      'meta.groupsize':  'Gruppengröße',
    },

    en: {
      /* ── Language toggle ─────────────────────────── */
      'lang.toggle': 'DE',

      /* ── Navigation ──────────────────────────────── */
      'nav.about':      'About us',
      'nav.seminars':   'AI Seminars',
      'nav.portfolio':  'Portfolio',
      'nav.directions': 'Directions',
      'nav.contact':    'Contact',
      'nav.imprint':    'Imprint',

      /* ── Footer ──────────────────────────────────── */
      'footer.copy':    'Copyright © webCommits web Designs 2026',
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy Policy',

      /* ── Index – Hero ────────────────────────────── */
      'index.hero.h1':  'Handcoded Websites',
      'index.hero.h3':  'without the high costs',
      'index.hero.btn': 'Get in touch',

      /* ── Index – Section two ─────────────────────── */
      'index.s2.h2':  'Help for everyone',
      'index.s2.h3':  'No page-builders.',
      'index.s2.p':   'I rely on speed, precision and security through hand-written code — built on years of experience as a web developer. Instead of bloated page-builders I write lean, maintainable and reusable code, tailored exactly to your requirements. The result: faster load times and a clear, purposeful user experience. Learn more about how I work:',
      'index.s2.btn': 'About us',

      /* ── Index – Seminar teaser ──────────────────── */
      'index.sem.label':   'New service',
      'index.sem.h2':      'AI Seminars for educators',
      'index.sem.intro':   'Discover the possibilities of AI in education — practice-oriented, research-based and individually tailored, from beginners to advanced users.',
      'index.sem.f1.h4':   'Beginner seminars',
      'index.sem.f1.p':    'Understand the fundamentals and discover practical applications',
      'index.sem.f2.h4':   'Advanced workshops',
      'index.sem.f2.p':    'Deeper insights and advanced techniques',
      'index.sem.f3.h4':   'Flexible formats',
      'index.sem.f3.p':    'Online, in-person or hybrid — tailored to your needs',
      'index.sem.f4.h4':   'Online webinar platform',
      'index.sem.f4.p':    'Coming soon: flexible training in our online platform',
      'index.sem.btn':     'Learn more about AI seminars',

      /* ── Index – Portfolio teaser ────────────────── */
      'index.port.h1':    'Portfolio',
      'index.port.p':     'The following websites represent a selection of my previous projects. Click a preview to take a closer look.',
      'index.port.p1.h3': 'Rückenwind Reise',
      'index.port.p1.p':  'An overview page with a Linktree replacement for our favourite YouTubers — includes login, admin panel, interactive UI and animations.',
      'index.port.p2.h3': "Chef's Portfolio",
      'index.port.p2.p':  'A modern, unique and intuitive portfolio website representing the owner of webCommits.',
      'index.port.p3.h3': 'Ben-Bachmair',
      'index.port.p3.p':  'An overview website for a globally recognised professor, author and mentor.',
      'index.port.btn':   'Read more',

      /* ── Index – Directions ──────────────────────── */
      'index.dir.h1':  'Directions',
      'index.dir.p':   'You can find me on the outskirts of Aachen. Click the map for more details.',
      'index.dir.osm': 'Open larger map in OpenStreetMap',

      /* ── Index – Contact ─────────────────────────── */
      'index.con.h1':  'Contact',
      'index.con.p':   'Convinced? Reach me via the options below or through the contact form.',
      'index.con.btn': 'To the form',

      /* ── About page ──────────────────────────────── */
      'about.hero.h1': 'Your contact',
      'about.hero.h3': 'for high-quality websites',
      'about.bio.h2':  'webCommits web Designs',
      'about.bio.h3':  'About me',
      'about.bio.p':   'What started as a student side-project evolved into my true passion. A simple idea grew into a clear vision. After completing my technical teaching degree at RWTH Aachen University — one of the most prestigious technical universities in Europe — and several years of experience as a web developer at the same institution, I decided to put my expertise to work independently. As a freelance web developer I offer individual, accessible and cost-efficient alternatives to large agencies — personal, direct and at eye level.',
      'about.phil.h3': 'Our philosophy',
      'about.phil.p':  'Quality is at the heart of everything I do. I build individually developed, code-based websites that are stable, high-performing and precisely aligned with my clients\' requirements. Small businesses and the self-employed are especially important to me — they are the backbone of our economy. My goal: making professional web solutions accessible without requiring a large investment.',
      'about.prin.h3':    'Principles',
      'about.prin.intro': 'My philosophy is built on the following principles:',
      'about.prin.1':  '<strong>Hand-written code:</strong> no unnecessary boilerplate — for fast load times and peak performance',
      'about.prin.2':  '<strong>Transparency and fairness:</strong> pricing is clear and straightforward, with no hidden costs',
      'about.prin.3':  '<strong>Optimisation:</strong> optimised copy and images for usability and search engine visibility',
      'about.prin.4':  '<strong>Reliability:</strong> I am not just your development team but your business partner — committed to our shared success',
      'about.prin.5':  '<strong>Innovation:</strong> I use the latest technologies and trends to offer you future-proof solutions',

      /* ── About – Pricing ─────────────────────────── */
      'about.p1.span': 'Static Page',
      'about.p1.f1':   'Landing page for your business',
      'about.p1.f2':   'Your trade at a glance',
      'about.p1.f3':   'Optimised for speed and search engines',
      'about.p1.f4':   'Unlimited revisions*',
      'about.p1.f5':   'Hosting included*',
      'about.p1.f6':   '24/7 customer support',
      'about.p1.f7':   'Domain registration available*',
      'about.p2.span': 'Static Site',
      'about.p2.f1':   'Up to 5 pages for your business',
      'about.p2.f2':   'Detailed presentation of your offer',
      'about.p2.f3':   'Optimised for speed and search engines',
      'about.p2.f4':   'Unlimited revisions*',
      'about.p2.f5':   'Hosting included*',
      'about.p2.f6':   '24/7 customer support',
      'about.p2.f7':   'Domain registration available*',
      'about.p3.span': 'Additional services',
      'about.p3.f1':   'Hosting',
      'about.p3.f2':   'Domain registration',
      'about.p3.f3':   'Google Maps integration',
      'about.p3.f4':   'Google Business Profile',
      'about.p3.f5':   'Business e-mail',
      'about.p3.f6':   'E-commerce shop',
      'about.p3.f7':   'E-learning systems',
      'about.p3.f8':   'Media design incl. logo, flyers, business cards',
      'about.p3.h3':   'On request',
      'about.price.h2':   'Monthly',
      'about.price.h3':   'or one-time',
      'about.price.btn':  'Enquire',
      'about.disclaimer': '*Contract term between 6 and 12 months, as specified in the agreement.',

      /* ── Contact page ────────────────────────────── */
      'contact.h1':    'Contact form',
      'contact.p1':    'The simplest way to get in touch:',
      'contact.p2':    'Describe your enquiry and send it directly via this contact form. Your message will be delivered securely and reliably by e-mail. I will get back to you as soon as possible.',
      'contact.name':  'Name*',
      'contact.phone': 'Phone number*',
      'contact.email': 'E-Mail*',
      'contact.subj':  'Subject*',
      'contact.msg':   'Message*',
      'contact.btn':   'Submit',
      'contact.req':   '* Required fields',

      /* ── Directions page ─────────────────────────── */
      'dir.h1':  'Directions',
      'dir.p1':  'I work from my base in Baesweiler, directly on the border with Aachen. As a freelance web developer I am available throughout Germany and internationally. You can reach me in several ways — including via my contact form.',
      'dir.p2':  'Click on the map for more precise information.',
      'dir.osm': 'Open larger map in OpenStreetMap',

      /* ── Portfolio page ───────────────────────────── */
      'port.h1':  'Portfolio',
      'port.p1':  'My designs combine maximum functionality with compelling aesthetics to exceed your clients\' expectations. Every website I build is not only fast and user-friendly but also individually tailored to your requirements. Your satisfaction comes first — I put everything into realising your vision efficiently and on time.',
      'port.p2':  'The following websites show a selection of my previous projects, reflecting a range of requirements, styles and target audiences. Every design was developed in close collaboration with my clients and tailored precisely to their wishes — for results to be proud of.',
      'port.p3':  'See for yourself — one click on a preview is all it takes.',
      'port.btn': 'Visit website',
      'port.btn.github': 'View on GitHub',
      'port.outro': 'All other public projects can be found on GitHub or presented on request.',
      'port.github.btn': 'To Github',
      'port.p1.h3': 'Rückenwind Reise',
      'port.p1.p':  'An overview page with a Linktree replacement for our favourite YouTubers — includes login, admin panel, interactive UI and animations.',
      'port.p2.h3': 'GPUpgrade',
      'port.p2.p':  'A specialised web tool for analysing and comparing current and older graphics cards. Clear performance overviews enable well-informed hardware upgrade decisions.',
      'port.p3.h3': "Chef's Portfolio",
      'port.p3.p':  'A modern, unique and intuitive portfolio website representing the owner of webCommits.',
      'port.p4.h3': 'Anglistik Web',
      'port.p4.p':  'The official online platform of the Department of English Studies at RWTH Aachen University, including a login system, profiles and automatic account management. Book office hours and learning spaces, plan colloquia and more — now in a new design.',
      'port.p5.h3': 'CL-Verkehrstechnik',
      'port.p5.p':  'Traffic sign plans drawn with precision and decades of experience — essential for traffic management and safety. Available nationwide and highly recommended.',
      'port.p6.h3': 'Lashes by Dim',
      'port.p6.p':  'An interactive website for a trusted lash stylist.',
      'port.p7.h3': 'Ben-Bachmair',
      'port.p7.p':  'An overview website for a globally recognised professor, author and mentor.',
      'port.p8.h3': 'Kernbohrungen K. Günther',
      'port.p8.p':  'The expert master trade for masonry and concrete work — for all professional construction needs.',
      'port.p9.h3': 'webCommits',
      'port.p9.p':  'The best web developers present their own website. Inspect the page with right-click and judge our work for yourself.',

      /* ── Seminars page ───────────────────────────── */
      'sem.hero.h1':     'AI Seminars for educators',
      'sem.hero.sub':    'Research meets practice',
      'sem.hero.b1':     'Online & in-person',
      'sem.hero.b2':     'Beginners & advanced',
      'sem.hero.btn':    'Enquire without obligation',
      'sem.exp.label':   'My expertise',
      'sem.exp.h2':      'Research meets practice',
      'sem.exp.intro':   'As a web developer and former teaching student I am currently completing a Master\'s in "Cognitive, Digital and Empirical English Studies" at RWTH Aachen. I combine technical expertise with current AI research and hands-on experience from schools and university.',
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
      'sem.off.intro':   'I offer two levels, depending on where you are starting from.',
      'sem.l1.badge':    'Level 1',
      'sem.l1.h3':       'AI foundations for educators',
      'sem.l1.desc':     'A gentle introduction requiring no technical background. You will learn the fundamentals and take away practical examples for your classroom.',
      'sem.l1.content':  'Topics',
      'sem.l1.li1':      'Introduction to generative AI (ChatGPT, Gemini & co.)',
      'sem.l1.li2':      'Opportunities and limitations of AI in education',
      'sem.l1.li3':      'Practical exercises for the classroom',
      'sem.l1.li4':      'Plagiarism detection and academic integrity',
      'sem.l1.li5':      'Data protection and legal basics',
      'sem.l2.badge':    'Level 2',
      'sem.l2.h3':       'AI for advanced users',
      'sem.l2.desc':     'For those who already have the basics and want to go deeper — advanced techniques and automation.',
      'sem.l2.content':  'Topics',
      'sem.l2.li1':      'Advanced prompt engineering',
      'sem.l2.li2':      'Data analysis with AI tools',
      'sem.l2.li3':      'Creating custom GPTs and assistants',
      'sem.l2.li4':      'Critical evaluation of AI outputs',
      'sem.l2.li5':      'Future trends and new developments',
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
      'sem.price.cta':   'Request a quote',
      'sem.tgt.label':   'Who is it for?',
      'sem.tgt.h2':      'Target groups',
      'sem.tgt.c1.h3':   '🎓 Teachers',
      'sem.tgt.c1.p':    'At primary schools, secondary schools and vocational colleges — regardless of subject',
      'sem.tgt.c2.h3':   '👨‍🏫 University lecturers',
      'sem.tgt.c2.p':    'Professors, lecturers and research associates',
      'sem.tgt.c3.h3':   '🏫 Educational institutions',
      'sem.tgt.c3.p':    'Schools, universities, adult education centres and training institutes',
      'sem.tgt.c4.h3':   '💼 Training organisations',
      'sem.tgt.c4.p':    'Organisations looking to upskill their staff in AI',
      'sem.cta.h2':      'Interested?',
      'sem.cta.p':       'Book a free consultation and together we will develop the right seminar format for your needs.',
      'sem.cta.form':    'Contact form',

      /* ── Shared meta labels ──────────────────────── */
      'meta.duration':  'Duration',
      'meta.format':    'Format',
      'meta.groupsize': 'Group size',
    }
  };

  /* ─────────────────────────────────────────────────
   * Core: detect, apply, toggle
   * ───────────────────────────────────────────────── */
  function detectLanguage() {
    var stored = null;
    try { stored = localStorage.getItem('wc-lang'); } catch (e) {}
    if (stored === 'de' || stored === 'en') return stored;
    var browser = (navigator.language || navigator.userLanguage || 'de').toLowerCase();
    return browser.startsWith('en') ? 'en' : 'de';
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

    /* update <html lang="…"> */
    document.documentElement.lang = lang;

    /* update toggle button */
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      if (t['lang.toggle'] !== undefined) btn.textContent = t['lang.toggle'];
      btn.setAttribute('aria-label', lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln');
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
