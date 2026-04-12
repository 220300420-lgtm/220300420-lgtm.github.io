/* ═══════════════════════════════════════════════════════════════
   ADAPTIA — main.js
   Lógica compartida: cursor, navbar, scroll reveal, WhatsApp, lang
═══════════════════════════════════════════════════════════════ */

"use strict";

/* ─────────────────────────────────────────────────────────────
   1. CURSOR PERSONALIZADO
───────────────────────────────────────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('a-cursor');
  const ring = document.getElementById('a-cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  const RING_SPEED = 0.11;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
  });

  (function tick() {
    rx += (mx - rx) * RING_SPEED;
    ry += (my - ry) * RING_SPEED;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(tick);
  })();

  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });

  /* Hover interactivo */
  const hoverEls = () =>
    document.querySelectorAll('a, button, .p-card, .filter-btn, .phase-btn, .nav-link, .contact-method');

  function bindHover() {
    hoverEls().forEach(el => {
      el.addEventListener('mouseenter', () => {
        dot.classList.add('hover');
        ring.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        dot.classList.remove('hover');
        ring.classList.remove('hover');
      });
    });
  }
  bindHover();

  /* Re-bind after DOM mutations (modal open) */
  const mo = new MutationObserver(bindHover);
  mo.observe(document.body, { childList: true, subtree: true });
})();


/* ─────────────────────────────────────────────────────────────
   2. NAVBAR — scroll + mobile toggle + active link
───────────────────────────────────────────────────────────── */
(function initNavbar() {
  const nav    = document.querySelector('.navbar');
  const burger = document.querySelector('.navbar__burger');
  const mobile = document.querySelector('.navbar__mobile-menu');
  const servicesLink = document.querySelector('.nav-link--services');
  const servicesItem = document.querySelector('.navbar__item--mega');
  if (!nav) return;

  /* Scroll state */
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile toggle */
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobile.classList.toggle('open');
    });
    mobile.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobile.classList.remove('open');
      });
    });
  }

  if (servicesLink && servicesItem) {
    const megaMenu = servicesItem.querySelector('.mega-menu');
    let closeTimer = null;
    let resizeTimer = null;

    const positionArrow = () => {
      if (!megaMenu) return;
      const triggerRect = servicesLink.getBoundingClientRect();
      const menuRect    = megaMenu.getBoundingClientRect();
      const arrowLeft   = triggerRect.left + triggerRect.width / 2 - menuRect.left;
      megaMenu.style.setProperty('--arrow-left', arrowLeft + 'px');
    };

    const closeMenu = () => {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      servicesItem.classList.remove('menu-open');
      servicesLink.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      servicesItem.classList.add('menu-open');
      servicesLink.setAttribute('aria-expanded', 'true');
      positionArrow();
    };

    const scheduleClose = () => {
      closeTimer = setTimeout(() => {
        closeMenu();
      }, 150);
    };

    servicesItem.addEventListener('mouseenter', openMenu);
    servicesItem.addEventListener('mouseleave', scheduleClose);

    if (megaMenu) {
      megaMenu.addEventListener('mouseenter', openMenu);
      megaMenu.addEventListener('mouseleave', scheduleClose);
    }

    servicesItem.addEventListener('focusin', openMenu);
    servicesItem.addEventListener('focusout', e => {
      if (!servicesItem.contains(e.relatedTarget)) scheduleClose();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (servicesItem.classList.contains('menu-open')) positionArrow();
      }, 100);
    }, { passive: true });
  }

  /* Active link based on current page */
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.replace(/\/$/, '') || '/';
    const isExact = linkPath === pathname;
    const isPrefix = linkPath !== '/' && (
      pathname === linkPath ||
      pathname.startsWith(linkPath + '/')
    );
    if (isExact || isPrefix) link.classList.add('active');
  });
})();


/* ─────────────────────────────────────────────────────────────
   3. SCROLL REVEAL
───────────────────────────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(el => io.observe(el));
})();


/* ─────────────────────────────────────────────────────────────
   4. COUNTER ANIMATION
───────────────────────────────────────────────────────────── */
(function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.count, 10);
      const dur    = 1600;
      const start  = performance.now();

      const tick = now => {
        const progress = Math.min((now - start) / dur, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });

  els.forEach(el => io.observe(el));
})();


/* ─────────────────────────────────────────────────────────────
   5. LANG TOGGLE
───────────────────────────────────────────────────────────── */
(function initLang() {
  const btns = document.querySelectorAll('.lang-btn');
  if (!btns.length) return;

  /* Apply saved / default language on page load */
  const savedLang = (window.ADAPTIA && window.ADAPTIA.lang) ? window.ADAPTIA.lang : 'es';
  if (window.ADAPTIA && typeof window.ADAPTIA.applyLang === 'function') {
    window.ADAPTIA.applyLang(savedLang);
  }

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const lang = btn.dataset.lang;
      if (window.ADAPTIA && typeof window.ADAPTIA.applyLang === 'function') {
        window.ADAPTIA.applyLang(lang);
      }
    });
  });
})();


/* ─────────────────────────────────────────────────────────────
   7. OCEAN CANVAS — Hero index.html
───────────────────────────────────────────────────────────── */
window.initOcean = function(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, t = 0;
  let mouse = { x: 0.5, y: 0.5 };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX / W;
    mouse.y = e.clientY / H;
  });

  /* Partículas de burbujas */
  const bubbles = Array.from({ length: 60 }, () => ({
    x: Math.random() * 1,
    y: Math.random() * 1,
    r: Math.random() * 1.8 + 0.3,
    speed: Math.random() * 0.00025 + 0.0001,
    drift: (Math.random() - 0.5) * 0.0002,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  function drawWaves(phase, amplitude, speed, color, offset) {
    ctx.beginPath();
    const segments = 140;
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * W;
      const nx = i / segments;
      const wave1 = Math.sin(nx * 6 + t * speed + phase) * amplitude;
      const wave2 = Math.sin(nx * 11 + t * speed * 1.3 + phase * 1.5) * amplitude * 0.4;
      const mouseInfluence = (mouse.x - 0.5) * amplitude * 0.8;
      const y = H * offset + wave1 + wave2 + mouseInfluence;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function drawBubbles() {
    bubbles.forEach(b => {
      b.y -= b.speed;
      b.x += b.drift;
      if (b.y < -0.05) { b.y = 1.05; b.x = Math.random(); }

      ctx.beginPath();
      ctx.arc(b.x * W, b.y * H, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,71,171,${b.opacity})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    });
  }

  function drawRays() {
    const cx = W * (0.5 + (mouse.x - 0.5) * 0.15);
    const cy = H * 0.15;
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, H * 0.8);
    gradient.addColorStop(0,   'rgba(0,71,171,0.06)');
    gradient.addColorStop(0.4, 'rgba(0,71,171,0.02)');
    gradient.addColorStop(1,   'transparent');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);
  }

  /* Pausar animación cuando el canvas no es visible */
  let isVisible = true;
  const canvasObserver = new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
    if (isVisible) requestAnimationFrame(frame);
  }, { threshold: 0 });
  canvasObserver.observe(canvas);

  function frame() {
    ctx.clearRect(0, 0, W, H);

    /* Fondo degradado profundidad marina */
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0,   '#010810');
    bg.addColorStop(0.5, '#020c1b');
    bg.addColorStop(1,   '#030f22');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    drawRays();

    /* Capas de olas — de atrás hacia adelante, color ADAPTIA #0047AB */
    drawWaves(0,        H * 0.04,  0.4,  'rgba(0,30,80,0.7)',    0.72);
    drawWaves(2.1,      H * 0.055, 0.55, 'rgba(0,40,110,0.8)',   0.75);
    drawWaves(Math.PI,  H * 0.07,  0.65, 'rgba(0,50,130,0.85)',  0.78);
    drawWaves(1.5,      H * 0.09,  0.75, 'rgba(0,60,150,0.88)',  0.82);
    drawWaves(0.8,      H * 0.11,  0.9,  'rgba(0,71,171,0.92)',  0.86);

    drawBubbles();

    /* Reflexión de luz en superficie */
    const surfaceY = H * 0.72;
    const surfaceGrad = ctx.createLinearGradient(0, surfaceY - 30, 0, surfaceY + 30);
    surfaceGrad.addColorStop(0, 'rgba(0,71,171,0)');
    surfaceGrad.addColorStop(0.5, `rgba(0,71,171,${0.05 + Math.sin(t * 0.8) * 0.02})`);
    surfaceGrad.addColorStop(1, 'rgba(0,71,171,0)');
    ctx.fillStyle = surfaceGrad;
    ctx.fillRect(0, surfaceY - 30, W, 60);

    if (!reducedMotion) t += 0.009;
    if (isVisible) requestAnimationFrame(frame);
  }

  frame();
};


/* ─────────────────────────────────────────────────────────────
   8. PRODUCT MODAL (home + entregables)
───────────────────────────────────────────────────────────── */
(function initModal() {
  const overlay = document.querySelector('.product-modal-overlay');
  if (!overlay) return;

  const closeBtn = overlay.querySelector('.product-modal__close');

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  window.openProductModal = function(data) {
    var lang = (window.ADAPTIA && window.ADAPTIA.lang) ? window.ADAPTIA.lang : 'es';
    var name  = (lang === 'en' && data.nameEn)  ? data.nameEn  : data.name;
    var desc  = (lang === 'en' && data.descEn)  ? data.descEn  : data.desc;
    var phase = (lang === 'en' && data.phaseEn) ? data.phaseEn : data.phase;

    overlay.querySelector('.product-modal__id').textContent   = data.id;
    overlay.querySelector('.product-modal__name').textContent = name;
    overlay.querySelector('.product-modal__phase').innerHTML  =
      '<span class="chip chip-' + data.chipClass + '">' + phase + '</span>';
    overlay.querySelector('.product-modal__desc').textContent = desc;
    overlay.querySelector('.product-modal__tool-name').textContent = data.tool;
    overlay.querySelector('.product-modal__badge').className  =
      'chip chip-' + data.chipClass;
    overlay.querySelector('.product-modal__badge').textContent = data.tier;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
})();
