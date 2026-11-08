document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Keep the dark/charcoal choice across pages and visits.
  const themeButtons = document.querySelectorAll('.theme-toggle');
  const setTheme = theme => {
    const gray = theme === 'gray';
    document.documentElement.dataset.theme = gray ? 'gray' : 'dark';
    themeButtons.forEach(button => {
      button.setAttribute('aria-pressed', String(gray));
      button.setAttribute('aria-label', gray ? 'Switch to black background' : 'Switch to charcoal background');
      const label = button.querySelector('.theme-label');
      if (label) label.textContent = gray ? 'Black mode' : 'Gray mode';
    });
  };
  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('mastera-theme') || 'dark'; } catch (_) { /* Storage may be unavailable in private browsing. */ }
  setTheme(savedTheme);
  themeButtons.forEach(button => button.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'gray' ? 'dark' : 'gray';
    setTheme(nextTheme);
    try { localStorage.setItem('mastera-theme', nextTheme); } catch (_) { /* The toggle still works for this visit. */ }
  }));

  // Accessible mobile navigation.
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('open', !open);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      navigation.classList.remove('open');
    }));
  }

  // Scroll reveals, with an immediate visible fallback for older browsers.
  const revealItems = document.querySelectorAll('[data-reveal]');
  revealItems.forEach(item => item.style.setProperty('--reveal-delay', `${item.dataset.delay || 0}ms`));
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Project image viewer for the Our Work page.
  const lightbox = document.querySelector('.lightbox');
  const projectCards = document.querySelectorAll('.portfolio-card');
  if (lightbox) {
    const preview = lightbox.querySelector('img');
    const caption = lightbox.querySelector('figcaption');
    const closeButton = lightbox.querySelector('.lightbox-close');
    let previousFocus = null;
    const close = () => {
      lightbox.hidden = true;
      document.body.style.overflow = '';
      if (previousFocus) previousFocus.focus();
    };
    projectCards.forEach(card => card.addEventListener('click', () => {
      previousFocus = card;
      const cardImage = card.querySelector('img');
      preview.src = cardImage?.currentSrc || new URL(card.dataset.image, document.baseURI).href;
      preview.alt = `${card.dataset.title} project preview`;
      caption.textContent = `${card.dataset.title} — ${card.dataset.type}`;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    }));
    closeButton.addEventListener('click', close);
    lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !lightbox.hidden) close(); });
  }
});


