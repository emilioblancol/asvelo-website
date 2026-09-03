(function () {
  'use strict';

  /* ---------- Lang toggle: aria-pressed sync ---------- */
  document.addEventListener('asvelo:langchange', function (e) {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === e.detail.lang ? 'true' : 'false');
    });
  });

  /* ---------- Keep --nav-h synced with the fixed header's real height ----------
     The nav wraps differently on mobile depending on translated text length
     (e.g. the EN CTA is longer than the ES one), so its height isn't constant.
     Content below it (.hero margin-top, anchor scroll-margin-top) reads --nav-h
     instead of a hardcoded guess, corrected here whenever it can change. */
  var navEl = document.getElementById('nav');
  if (navEl) {
    var syncNavHeight = function () {
      document.documentElement.style.setProperty('--nav-h', navEl.offsetHeight + 'px');
    };
    document.addEventListener('DOMContentLoaded', syncNavHeight);
    document.addEventListener('asvelo:langchange', syncNavHeight);
    window.addEventListener('load', syncNavHeight);
    var navResizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(navResizeTimer);
      navResizeTimer = setTimeout(syncNavHeight, 100);
    });
  }

  /* ---------- Hamburger menu ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var menuPanel = document.getElementById('menuPanel');
  if (menuToggle && menuPanel) {
    var closeMenu = function () {
      menuPanel.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
    };
    var openMenu = function () {
      menuPanel.hidden = false;
      menuToggle.setAttribute('aria-expanded', 'true');
    };
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (menuPanel.hidden) openMenu(); else closeMenu();
    });
    menuPanel.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });
    document.addEventListener('click', function (e) {
      if (!menuPanel.hidden && !menuPanel.contains(e.target) && e.target !== menuToggle) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menuPanel.hidden) closeMenu();
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
