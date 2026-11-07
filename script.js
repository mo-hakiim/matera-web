document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href="#top"]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('open', !isOpen);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      navigation.classList.remove('open');
    }));
  }

  const filters = document.querySelectorAll('.filter-button');
  const cards = document.querySelectorAll('.gallery-card');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(filter => filter.classList.toggle('active', filter === button));
    const selected = button.dataset.filter;
    cards.forEach(card => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
  }));

  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const preview = lightbox.querySelector('img');
    const caption = lightbox.querySelector('figcaption');
    const closeButton = lightbox.querySelector('.lightbox-close');
    const close = () => { lightbox.hidden = true; document.body.style.overflow = ''; };
    cards.forEach(card => card.addEventListener('click', () => {
      preview.src = card.dataset.image;
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
