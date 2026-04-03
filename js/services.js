/* ═══════════════════════════════════════════════════════════════
   ADAPTIA — services.js
   FAQ accordion + utilidades de sección Servicios
═══════════════════════════════════════════════════════════════ */

"use strict";

(function initFAQAccordions() {
  const groups = document.querySelectorAll('.faq-list');
  if (!groups.length) return;

  groups.forEach(group => {
    const items = group.querySelectorAll('.faq-item');
    items.forEach(item => {
      const btn = item.querySelector('.faq-btn');
      const panel = item.querySelector('.faq-panel');
      if (!btn || !panel) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        items.forEach(other => {
          other.classList.remove('open');
          const otherPanel = other.querySelector('.faq-panel');
          const otherBtn = other.querySelector('.faq-btn');
          if (otherPanel) otherPanel.style.maxHeight = '0px';
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
})();
