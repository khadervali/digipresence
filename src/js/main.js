/* ═══════════════════════════════════════════════
   DigiPresence Website — Main Script
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Header scroll ──
  const header = document.getElementById('siteHeader');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // ── Mobile nav ──
  const navToggle = document.getElementById('navToggle');
  const headerNav = document.getElementById('headerNav');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = headerNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
  }

  // ── Scroll reveal ──
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

  // ── Smooth scroll for nav links ──
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        headerNav.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
