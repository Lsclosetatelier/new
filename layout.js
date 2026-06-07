/* Shared layout JS — header scroll + mobile menu */
(function () {
  const header = document.getElementById('site-header');
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('mobile-close');
  const backdrop = document.getElementById('mobile-backdrop');
  const panel = document.getElementById('mobile-panel');
  const isHome = document.body.dataset.page === 'home';

  /* Header scroll behaviour */
  function updateHeader() {
    if (!header) return;
    if (isHome) {
      if (window.scrollY > 20) {
        header.className = 'site-header home-scrolled';
      } else {
        header.className = 'site-header home-start';
      }
    }
  }

  if (isHome) {
    header.className = 'site-header home-start';
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* Mobile menu */
  function openMenu() {
    if (!panel) return;
    panel.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!panel) return;
    panel.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  /* Year in footer */
  var yearEls = document.querySelectorAll('.copyright-year');
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
