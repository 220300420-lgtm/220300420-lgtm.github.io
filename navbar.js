/* ═══════════════════════════════════════════════════════════════
   ADAPTIA — navbar.js
   Inyecta el navbar y footer compartidos en todas las páginas
═══════════════════════════════════════════════════════════════ */

"use strict";

(function injectLayout() {
  const waNumber = '52XXXXXXXXXX';

  /* ─── NAVBAR HTML ─── */
  const navbarHTML = `
    <nav class="navbar" id="navbar">
      <div class="container">
        <div class="navbar__inner">

          <a href="index.html" class="navbar__logo">
            <div class="navbar__logo-mark">
              <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="32" r="6" fill="#0EA5E9"/>
                <path d="M10 32 Q20 6 38 10" stroke="#0EA5E9" stroke-width="3"
                      stroke-linecap="round" fill="none"/>
                <path d="M16 26 Q26 12 38 10" stroke="#0EA5E9" stroke-width="1.5"
                      stroke-linecap="round" fill="none" opacity="0.4"/>
              </svg>
            </div>
            <span class="navbar__logo-text">ADAPT<em>IA</em></span>
          </a>

          <ul class="navbar__links">
            <li><a href="index.html" class="nav-link" data-page="index">Inicio</a></li>
            <li><a href="entregables.html" class="nav-link" data-page="entregables">Entregables</a></li>
            <li><a href="metodologia.html" class="nav-link" data-page="metodologia">Metodología</a></li>
            <li><a href="nosotros.html"    class="nav-link" data-page="nosotros">Nosotros</a></li>
            <li><a href="contacto.html"    class="nav-link" data-page="contacto">Contacto</a></li>
          </ul>

          <div class="navbar__right">
            <div class="lang-toggle">
              <button class="lang-btn active" data-lang="es">ES</button>
              <button class="lang-btn"        data-lang="en">EN</button>
            </div>
            <a href="https://wa.me/${waNumber}?text=Hola%2C%20quiero%20agendar%20una%20sesión%20de%20diagnóstico%20gratuita%20con%20ADAPTIA"
               target="_blank" class="btn btn-primary btn-sm">
              Agendar sesión →
            </a>
            <div class="navbar__burger" id="burger">
              <span></span><span></span><span></span>
            </div>
          </div>

        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div class="navbar__mobile-menu" id="mobileMenu">
      <a href="index.html"       class="nav-link">Inicio</a>
      <a href="entregables.html"    class="nav-link">Entregables</a>
      <a href="metodologia.html"    class="nav-link">Metodología</a>
      <a href="nosotros.html"       class="nav-link">Nosotros</a>
      <a href="contacto.html"       class="nav-link">Contacto</a>
    </div>
  `;

  /* ─── WHATSAPP FLOAT ─── */
  const waHTML = `
    <div class="wa-float">
      <div class="wa-tooltip">¿Tienes preguntas? Conversemos ahora 🚢</div>
      <a href="https://wa.me/${waNumber}?text=Hola%2C%20me%20interesa%20conocer%20los%20servicios%20de%20ADAPTIA%20Consultoría"
         target="_blank" class="wa-btn" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  `;

  /* ─── CURSOR HTML ─── */
  const cursorHTML = `
    <div id="a-cursor"></div>
    <div id="a-cursor-ring"></div>
    <div class="grain"></div>
  `;

  /* ─── MODAL PRODUCTO ─── */
  const modalHTML = `
    <div class="product-modal-overlay" id="productModalOverlay">
      <div class="product-modal">
        <button class="product-modal__close" aria-label="Cerrar">✕</button>
        <div class="product-modal__id mono">—</div>
        <h3 class="product-modal__name">—</h3>
        <div class="product-modal__phase"></div>
        <p class="product-modal__desc">—</p>
        <div class="product-modal__tool-row">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="#0EA5E9" stroke-width="2" stroke-linecap="round">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
          <div>
            <span class="product-modal__tool-label">Herramienta Digital</span>
            <span class="product-modal__tool-name">—</span>
          </div>
          <span class="chip product-modal__badge" style="margin-left:auto">Base</span>
        </div>
        <a href="#" target="_blank" class="product-modal__wa-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  `;

  /* ─── FOOTER HTML ─── */
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <span class="footer__brand-name">ADAPT<em>IA</em></span>
            <p class="footer__tagline">
              Consultoría de transformación digital especializada en PyMEs del
              sector náutico recreativo. Estrategia, tecnología y acompañamiento continuo.
            </p>
            <div class="footer__social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="https://wa.me/${waNumber}" target="_blank" aria-label="WhatsApp">wa</a>
            </div>
          </div>

          <div class="footer__col">
            <h4>Productos</h4>
            <ul>
              <li><a href="entregables.html#fase-1">Diagnóstico (E01–E04)</a></li>
              <li><a href="entregables.html#fase-2">Capacitación (E05–E08)</a></li>
              <li><a href="entregables.html#fase-3">Digitalización (E09–E17)</a></li>
              <li><a href="entregables.html#fase-4">Implementación (E18–E20)</a></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="nosotros.html">Nosotros</a></li>
              <li><a href="metodologia.html">Metodología</a></li>
              <li><a href="contacto.html">Contacto</a></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="https://wa.me/${waNumber}" target="_blank">WhatsApp</a></li>
              <li><a href="mailto:contacto@adaptia.mx">contacto@adaptia.mx</a></li>
              <li><a>Cancún, Quintana Roo</a></li>
              <li><a>México</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__bottom">
          <span class="footer__copy">© 2025 ADAPTIA Consultoría. Todos los derechos reservados.</span>
          <span class="footer__location">📍 Cancún, MX — Sector Náutico Recreativo</span>
        </div>
      </div>
    </footer>
  `;

  /* ─── INYECCIÓN ─── */
  document.body.insertAdjacentHTML('afterbegin', cursorHTML);

  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = navbarHTML;

  const waPlaceholder = document.getElementById('wa-placeholder');
  if (waPlaceholder) waPlaceholder.outerHTML = waHTML;

  const modalPlaceholder = document.getElementById('modal-placeholder');
  if (modalPlaceholder) modalPlaceholder.outerHTML = modalHTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;
})();
