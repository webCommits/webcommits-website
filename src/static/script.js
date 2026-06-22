let lastFocusedElement = null;

function getSidebarElements() {
  return {
    sidebar: document.querySelector('.sidebar'),
    openButton: document.querySelector('.menu-open'),
    closeButton: document.querySelector('.menu-close')
  };
}

function showSidebar() {
  const { sidebar, openButton, closeButton } = getSidebarElements();
  if (!sidebar) return;

  lastFocusedElement = document.activeElement;
  sidebar.classList.add('open');
  sidebar.setAttribute('aria-hidden', 'false');
  if (openButton) openButton.setAttribute('aria-expanded', 'true');
  if (closeButton) closeButton.focus();
}

function closeSidebar() {
  const { sidebar, openButton } = getSidebarElements();
  if (!sidebar) return;

  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  if (openButton) openButton.setAttribute('aria-expanded', 'false');

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  } else if (openButton) {
    openButton.focus();
  }
}

function initHeaderAndFloatingButtons() {
  const header = document.querySelector('.header');
  const toTop = document.querySelector('.totop');
  const telbutton = document.querySelector('.telbutton');
  const mailbutton = document.querySelector('.mailbutton');

  const onScroll = () => {
    const scrolled = window.pageYOffset > 100;
    const headerScrolled = window.pageYOffset > 8;

    if (header) {
      header.classList.toggle('full', headerScrolled);
      header.classList.toggle('active', headerScrolled);
    }

    if (toTop) toTop.classList.toggle('active', scrolled);
    if (telbutton) telbutton.classList.toggle('active', scrolled);
    if (mailbutton) mailbutton.classList.toggle('active', scrolled);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initSmoothScrollWithOffset(selector = 'a[href*="#"]', offset = 96) {
  document.querySelectorAll(selector).forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      let url;
      try {
        url = new URL(href, window.location.href);
      } catch (error) {
        return;
      }

      const samePage = url.origin === window.location.origin && url.pathname === window.location.pathname;
      if (!samePage || !url.hash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: 'smooth'
      });
    });
  });
}

function initAnimations() {
  const animatedElements = document.querySelectorAll('.animate');
  if (!animatedElements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    animatedElements.forEach((el) => el.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.12 });

  animatedElements.forEach((el) => observer.observe(el));
}

function initLegacyPortfolioBackgrounds() {
  document.querySelectorAll('.website-container, .website-containerpo').forEach((container) => {
    const img = container.querySelector('img');
    if (img) container.style.setProperty('--background-image', `url(${img.getAttribute('src')})`);
  });
}

function initMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement || typeof L === 'undefined') return;

  const lat = 50.90988867168349;
  const lng = 6.177249476621881;
  const map = L.map('map').setView([lat, lng], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div style="background: var(--mauve); width: 30px; height: 30px; border-radius: 50%; border: 3px solid var(--crust); box-shadow: 0 4px 8px rgba(0,0,0,0.3);"></div>',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  L.marker([lat, lng], { icon: customIcon })
    .addTo(map)
    .bindPopup('<strong>webCommits web Designs</strong><br>Hofgracht 7<br>52499 Baesweiler')
    .openPopup();
}

function initKeyboardNavigation() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSidebar();
  });
}

function initContactTopicFromQuery() {
  const serviceSelect = document.getElementById('service');
  if (!serviceSelect) return;

  const params = new URLSearchParams(window.location.search);
  const topic = params.get('topic');
  const topicMap = {
    web: 'Website/Webentwicklung',
    ai: 'KI-Beratung',
    seminar: 'KI-Seminar/Schulung',
    it: 'PC/Server/IT-Betrieb'
  };

  if (topicMap[topic]) serviceSelect.value = topicMap[topic];
}

document.addEventListener('DOMContentLoaded', () => {
  initHeaderAndFloatingButtons();
  initSmoothScrollWithOffset();
  initAnimations();
  initLegacyPortfolioBackgrounds();
  initKeyboardNavigation();
  initContactTopicFromQuery();
  initMap();
});
