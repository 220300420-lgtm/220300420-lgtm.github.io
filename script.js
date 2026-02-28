/* ===================== SCROLL PROGRESS BAR ===================== */
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);
document.documentElement.classList.add('js');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===================== i18n DICTIONARY ===================== */
const TRANSLATIONS = {
  es: {
    'nav.inicio':'Inicio','nav.nosotros':'Nosotros','nav.servicios':'Servicios',
    'nav.paquetes':'Paquetes','nav.contacto':'Contacto','nav.cta':'Solicitar diagnóstico',
    'hero.tag':'Consultoría Digital Automotriz',
    'hero.h1':'Digitaliza tu operación automotriz<br><em>en semanas.</em>',
    'hero.sub':'Hacemos un diagnóstico real de tu negocio, implementamos las herramientas correctas y te acompañamos hasta ver resultados medibles. Sin complicaciones.',
    'hero.cta1':'Solicitar diagnóstico','hero.cta2':'Ver paquetes →',
    'impact.l1':'Procesos mapeados','impact.l2':'Talleres digitalizados',
    'impact.l3':'Satisfacción de clientes','impact.l4':'Más eficiencia operativa',
    'how.tag':'Metodología','how.h2':'Cómo trabajamos',
    'how.p':'Un proceso simple y probado para transformar tu operación.',
    'how.s1':'Diagnóstico','how.s2':'Implementación','how.s3':'Optimización',
    'cases.tag':'Casos de éxito','cases.h2':'Resultados reales',
    'cases.p':'Lo que logramos con nuestros clientes, en números concretos.',
    'about.tag':'Nosotros','about.h2':'Consultoría que entiende tu negocio',
    'services.tag':'Servicios','services.h2':'Qué implementamos',
    'packages.tag':'Paquetes','packages.h2':'Elige tu punto de partida',
    'pkg.btn':'Quiero este paquete',
    'contact.tag':'Contacto','contact.h2':'Comienza tu diagnóstico',
    'contact.p':'Cuéntanos sobre tu negocio y te contactamos en menos de 24 horas.',
    'form.empresa':'Empresa *','form.empresa.ph':'Nombre de tu empresa',
    'form.responsable':'Responsable *','form.responsable.ph':'Tu nombre completo',
    'form.email':'Email *','form.email.ph':'correo@empresa.com',
    'form.telefono':'Teléfono','form.telefono.ph':'+52 55 0000 0000',
    'form.tipo':'Tipo de negocio *','form.empleados':'Número de empleados *',
    'form.paquete':'Paquete de interés',
    'form.problema':'¿Cuál es tu principal reto operativo? *',
    'form.problema.ph':'Ej. No tengo control de mis órdenes de servicio, pierdo piezas de inventario, no sé cuánto gano al mes…',
    'form.submit':'Solicitar diagnóstico','form.sending':'Enviando…',
    'success.h3':'¡Mensaje recibido!',
    'success.p':'Gracias por contactarnos. Nuestro equipo revisará tu caso y te responderá en menos de 24 horas.',
    'err.empresa':'Ingresa el nombre de tu empresa.','err.responsable':'Ingresa tu nombre.',
    'err.email':'Ingresa tu correo.','err.emailInvalid':'Correo inválido.',
    'err.tipo':'Selecciona el tipo de negocio.','err.empleados':'Selecciona el número de empleados.',
    'err.problema':'Describe tu reto principal.',
    'lang.other':'EN',
  },
  en: {
    'nav.inicio':'Home','nav.nosotros':'About','nav.servicios':'Services',
    'nav.paquetes':'Packages','nav.contacto':'Contact','nav.cta':'Request diagnosis',
    'hero.tag':'Automotive Digital Consulting',
    'hero.h1':'Digitize your automotive operation<br><em>in weeks.</em>',
    'hero.sub':'We perform a real diagnosis of your business, implement the right tools, and guide you to measurable results. No complications.',
    'hero.cta1':'Request diagnosis','hero.cta2':'View packages →',
    'impact.l1':'Mapped processes','impact.l2':'Digitized workshops',
    'impact.l3':'Client satisfaction','impact.l4':'More operational efficiency',
    'how.tag':'Methodology','how.h2':'How we work',
    'how.p':'A simple, proven process to transform your operation.',
    'how.s1':'Diagnosis','how.s2':'Implementation','how.s3':'Optimization',
    'cases.tag':'Success stories','cases.h2':'Real results',
    'cases.p':'What we achieve with our clients, in concrete numbers.',
    'about.tag':'About us','about.h2':'Consulting that understands your business',
    'services.tag':'Services','services.h2':'What we implement',
    'packages.tag':'Packages','packages.h2':'Choose your starting point',
    'pkg.btn':'I want this package',
    'contact.tag':'Contact','contact.h2':'Start your diagnosis',
    'contact.p':"Tell us about your business and we'll contact you within 24 hours.",
    'form.empresa':'Company *','form.empresa.ph':'Your company name',
    'form.responsable':'Contact person *','form.responsable.ph':'Your full name',
    'form.email':'Email *','form.email.ph':'email@company.com',
    'form.telefono':'Phone','form.telefono.ph':'+52 55 0000 0000',
    'form.tipo':'Business type *','form.empleados':'Number of employees *',
    'form.paquete':'Package of interest',
    'form.problema':'What is your main operational challenge? *',
    'form.problema.ph':"E.g. I have no control over my service orders, I lose inventory items, I don't know how much I earn each month…",
    'form.submit':'Request diagnosis','form.sending':'Sending…',
    'success.h3':'Message received!',
    'success.p':'Thank you for contacting us. Our team will review your case and respond within 24 hours.',
    'err.empresa':'Enter your company name.','err.responsable':'Enter your name.',
    'err.email':'Enter your email.','err.emailInvalid':'Invalid email.',
    'err.tipo':'Select a business type.','err.empleados':'Select the number of employees.',
    'err.problema':'Describe your main challenge.',
    'lang.other':'ES',
  }
};

function t(key) {
  const lang = document.documentElement.lang || 'es';
  return (TRANSLATIONS[lang] || TRANSLATIONS.es)[key] || TRANSLATIONS.es[key] || key;
}

/* ===================== WORD-BY-WORD REVEAL (helper) ===================== */
function runWordAnimation(el) {
  if (!el || reducedMotion) return;
  const html = el.innerHTML;
  const parts = html.split(/(<em>.*?<\/em>|<br\s*\/?>|\s+)/gi);
  el.innerHTML = parts.map(p => {
    if (!p.trim() || p.match(/^<br/i)) return p;
    if (p.match(/^<em>/i)) return `<span class="word-wrap"><em class="word">${p.replace(/<\/?em>/gi,'')}</em></span>`;
    return `<span class="word-wrap"><span class="word">${p}</span></span>`;
  }).join('');
}

/* ===================== APPLY LANGUAGE ===================== */
function applyLang(lang, skipH1Anim) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = (TRANSLATIONS[lang] || TRANSLATIONS.es)[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = (TRANSLATIONS[lang] || TRANSLATIONS.es)[el.dataset.i18nHtml];
    if (val !== undefined) {
      el.innerHTML = val;
      if (!skipH1Anim && el.matches('.hero-text h1') && !reducedMotion) {
        runWordAnimation(el);
        el.querySelectorAll('.word').forEach(w => w.classList.add('word-visible'));
      }
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = (TRANSLATIONS[lang] || TRANSLATIONS.es)[el.dataset.i18nPh];
    if (val !== undefined) el.placeholder = val;
  });

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    const span = langToggle.querySelector('.lang-current');
    if (span) span.textContent = (TRANSLATIONS[lang] || TRANSLATIONS.es)['lang.other'] || '';
  }
}

/* ===================== INIT LANGUAGE ===================== */
(function initLang() {
  const stored = localStorage.getItem('lang');
  const browserLang = (navigator.language || '').split('-')[0];
  const lang = stored || (browserLang === 'en' ? 'en' : 'es');
  // Apply non-default lang early (before word animation runs below)
  if (lang !== 'es') applyLang(lang, true);

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLang(document.documentElement.lang === 'es' ? 'en' : 'es', false);
    });
  }
})();

/* ===================== ANALYTICS HELPERS ===================== */
function pushDataLayer(eventName, payload) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
}

function setAttributionHiddenFields() {
  const params = new URLSearchParams(window.location.search);
  const fields = {
    'utm-source': params.get('utm_source') || '',
    'utm-medium': params.get('utm_medium') || '',
    'utm-campaign': params.get('utm_campaign') || '',
    'utm-content': params.get('utm_content') || '',
    'utm-term': params.get('utm_term') || '',
    'gclid-hidden': params.get('gclid') || '',
    'fbclid-hidden': params.get('fbclid') || '',
    'referrer-hidden': document.referrer || 'direct',
    'landing-hidden': window.location.href,
  };
  Object.entries(fields).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.value = value;
  });
}
setAttributionHiddenFields();

/* ===================== NAVBAR ===================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

function closeMobileMenu() {
  if (!navLinks || !hamburger) return;
  navLinks.classList.remove('open');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
  hamburger.focus();
}

if (hamburger && navLinks) {
  hamburger.setAttribute('aria-controls', 'nav-links');
  hamburger.setAttribute('aria-expanded', 'false');

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
    overlay.classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      const firstLink = navLinks.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  });
  overlay.addEventListener('click', closeMobileMenu);
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMobileMenu();
  });
}

/* ===================== ACTIVE NAV ===================== */
const navLinkEls = document.querySelectorAll('.nav-link');
const hasIO = 'IntersectionObserver' in window;

if (hasIO) {
  const navObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) navLinkEls.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    });
  }, { threshold: 0.35 });
  document.querySelectorAll('section[id]').forEach(s => navObs.observe(s));
}

/* ===================== SCROLL REVEAL ===================== */
if (hasIO) {
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  // Fallback: si el observer no dispara en 1.5s, mostramos todo
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
  }, 1500);
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

/* ===================== WORD-BY-WORD REVEAL ===================== */
const heroH1 = document.querySelector('.hero-text h1');
if (heroH1 && !reducedMotion) {
  runWordAnimation(heroH1);
  setTimeout(() => {
    heroH1.querySelectorAll('.word').forEach((w, i) => setTimeout(() => w.classList.add('word-visible'), i * 90));
  }, 200);
}

/* ===================== TYPEWRITER ===================== */
const phraseSets = {
  es: ['Digitalizamos tu taller…','Optimizamos tu inventario…','Medimos tus resultados…','Transformamos tu operación…'],
  en: ['We digitize your workshop…','We optimize your inventory…','We measure your results…','We transform your operation…']
};
const twEl = document.getElementById('typewriter');
if (twEl) {
  let pi = 0, ci = 0, deleting = false;
  function getPhrases() { return phraseSets[document.documentElement.lang] || phraseSets.es; }
  function typeLoop() {
    const phrase = getPhrases()[pi % getPhrases().length];
    if (!deleting) {
      twEl.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
    } else {
      twEl.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % getPhrases().length; setTimeout(typeLoop, 400); return; }
    }
    setTimeout(typeLoop, deleting ? 45 : 75);
  }
  if (reducedMotion) {
    twEl.textContent = getPhrases()[0];
  } else {
    setTimeout(typeLoop, 800);
  }
}

/* ===================== PARTICLES ===================== */
const canvas = document.getElementById('particles-canvas');
if (canvas && !reducedMotion) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let rafId = null;
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 55; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.4 + 0.1
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 114, 255, ${p.alpha})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 114, 255, ${0.08 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    rafId = requestAnimationFrame(drawParticles);
  }
  drawParticles();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(rafId); rafId = null; }
    else if (!rafId) drawParticles();
  });
}

/* ===================== ANIMATED COUNTERS ===================== */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const dur = 1800;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.floor(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = prefix + target + suffix;
  }
  requestAnimationFrame(tick);
}

if (hasIO) {
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = 'true';
        animateCounter(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num[data-target], .impact-num[data-target]').forEach(el => counterObs.observe(el));
} else {
  document.querySelectorAll('.stat-num[data-target], .impact-num[data-target]').forEach(el => animateCounter(el));
}

/* ===================== PARALLAX HERO ===================== */
const heroBg = document.querySelector('.hero-bg');
const heroMockup = document.querySelector('.hero-mockup');

/* ===================== CONNECTOR LINE ANIMATION ===================== */
if (hasIO) {
  const connectorObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.connector-path').forEach(p => p.classList.add('drawn'));
        e.target.querySelectorAll('.connector-arrow').forEach(a => a.classList.add('drawn'));
        connectorObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.steps-row').forEach(el => connectorObs.observe(el));
} else {
  document.querySelectorAll('.connector-path').forEach(p => p.classList.add('drawn'));
  document.querySelectorAll('.connector-arrow').forEach(a => a.classList.add('drawn'));
}

/* ===================== 3D TILT ===================== */
function addTilt(selector, intensity) {
  if (reducedMotion) return;
  intensity = intensity || 5;
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);
      card.style.transform = `perspective(800px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateY(-4px) scale(1.01)`;
      card.style.transition = 'transform 0.08s ease';
      card.style.boxShadow = '0 16px 40px rgba(0,114,255,0.18)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.45s ease, box-shadow 0.45s ease';
      card.style.boxShadow = '';
    });
  });
}
addTilt('.benefit-card');
addTilt('.pkg-card', 4);
addTilt('.value-card');
addTilt('.case-card');

/* ===================== WHATSAPP BUTTON ===================== */
const WA_NUM = '5219983909502';
const WA_MSG = encodeURIComponent('Hola Adaptia, me interesa conocer más sobre sus servicios de consultoría digital.');
const waBtn = document.createElement('a');
waBtn.href = `https://wa.me/${WA_NUM}?text=${WA_MSG}`;
waBtn.target = '_blank';
waBtn.rel = 'noopener noreferrer';
waBtn.id = 'whatsapp-btn';
waBtn.setAttribute('aria-label', 'Contactar por WhatsApp');
waBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg><span class="wa-tooltip">¿Hablamos?</span><span class="wa-pulse"></span>`;
document.body.appendChild(waBtn);
waBtn.addEventListener('click', () => pushDataLayer('whatsapp_click', { placement: 'floating_button' }));

/* ===================== CONSOLIDATED SCROLL HANDLER ===================== */
let scrollPending = false;
function handleScroll() {
  if (scrollPending) return;
  scrollPending = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (maxScroll > 0 ? (y / maxScroll) * 100 : 0) + '%';
    if (navbar) navbar.classList.toggle('scrolled', y > 30);
    waBtn.classList.toggle('wa-visible', y > 400);
    if (!reducedMotion && y < window.innerHeight * 1.5) {
      if (heroBg) heroBg.style.transform = `translateY(${y * 0.22}px)`;
      if (heroMockup) heroMockup.style.transform = `translateY(${y * 0.07}px)`;
    }
    scrollPending = false;
  });
}
window.addEventListener('scroll', handleScroll, { passive: true });

/* ===================== PACKAGE SELECTION ===================== */
function selectPackage(pkgName) {
  const sel = document.getElementById('paquete');
  if (sel) sel.value = pkgName;
  pushDataLayer('package_selected', { package_name: pkgName });
  const contacto = document.getElementById('contacto');
  if (contacto) contacto.scrollIntoView({ behavior: 'smooth' });
  if (sel) setTimeout(() => { sel.style.boxShadow = '0 0 0 3px rgba(0,114,255,0.35)'; setTimeout(() => sel.style.boxShadow = '', 1500); }, 700);
}

/* ===================== FORM VALIDATION ===================== */
const form = document.getElementById('contact-form');
const successDiv = document.getElementById('form-success');
const statusMsg = document.getElementById('form-status');

function showError(id, msg) {
  const e = document.getElementById(`err-${id}`), f = document.getElementById(id);
  if (e) e.textContent = msg;
  if (f) f.classList.toggle('invalid', !!msg);
}
function clearErrors() { ['empresa','responsable','email','tipo','empleados','problema'].forEach(id => showError(id,'')); }
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function showFormStatus(message, type) {
  if (!statusMsg) return;
  statusMsg.textContent = message || '';
  statusMsg.className = 'form-status';
  if (message) {
    statusMsg.classList.add('show');
    if (type) statusMsg.classList.add(type);
  }
}

if (form) {
  form.addEventListener('submit', e => {
    clearErrors();
    let valid = true;
    const v = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    if (!v('empresa')) { showError('empresa', t('err.empresa')); valid = false; }
    if (!v('responsable')) { showError('responsable', t('err.responsable')); valid = false; }
    if (!v('email')) { showError('email', t('err.email')); valid = false; }
    else if (!validEmail(v('email'))) { showError('email', t('err.emailInvalid')); valid = false; }
    if (!document.getElementById('tipo')?.value) { showError('tipo', t('err.tipo')); valid = false; }
    if (!document.getElementById('empleados')?.value) { showError('empleados', t('err.empleados')); valid = false; }
    if (!v('problema')) { showError('problema', t('err.problema')); valid = false; }
    if (!valid) { e.preventDefault(); return; }

    const fechaEl = document.getElementById('fecha-hidden');
    if (fechaEl) fechaEl.value = new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' });
    pushDataLayer('lead_form_submit_attempt', { form_id: 'contact-form' });
    const btn = form.querySelector('[type="submit"]');
    if (btn) { btn.textContent = t('form.sending'); btn.disabled = true; }
    showFormStatus(t('form.sending'));
  });

  ['empresa','responsable','email','tipo','empleados','problema'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', () => showError(id,'')); el.addEventListener('change', () => showError(id,'')); }
  });
}
