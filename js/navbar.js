/* ═══════════════════════════════════════════════════════════════
   ADAPTIA — navbar.js
   Inyecta el navbar y footer compartidos en todas las páginas
═══════════════════════════════════════════════════════════════ */

"use strict";

/* ─── WhatsApp — fuente única de verdad ─── */
window.ADAPTIA_WA = '52XXXXXXXXXX';

(function injectLayout() {
  const waNumber = window.ADAPTIA_WA;

  /* ─── NAVBAR HTML ─── */
  const navbarHTML = `
    <nav class="navbar" id="navbar">
      <div class="container">
        <div class="navbar__inner">

          <a href="/" class="navbar__logo">
            <img src="/assets/img/logo.png"
                 alt="ADAPTIA Logo"
                 class="navbar__logo-img" />
          </a>

          <ul class="navbar__links">
            <li><a href="/" class="nav-link" data-page="index">Inicio</a></li>
            <li><a href="/productos" class="nav-link" data-page="productos">Productos</a></li>
            <li><a href="/metodologia" class="nav-link" data-page="metodologia">Metodología</a></li>
            <li><a href="/nosotros"    class="nav-link" data-page="nosotros">Nosotros</a></li>
            <li><a href="/contacto"    class="nav-link" data-page="contacto">Contacto</a></li>
          </ul>

          <div class="navbar__right">
            <div class="lang-toggle">
              <button class="lang-btn active" data-lang="es">ES</button>
              <button class="lang-btn"        data-lang="en">EN</button>
            </div>
            <a href="https://wa.me/${waNumber}?text=Hola%2C%20quiero%20agendar%20una%20sesión%20con%20ADAPTIA"
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
      <a href="/"            class="nav-link">Inicio</a>
      <a href="/productos"   class="nav-link">Productos</a>
      <a href="/metodologia" class="nav-link">Metodología</a>
      <a href="/nosotros"    class="nav-link">Nosotros</a>
      <a href="/contacto"    class="nav-link">Contacto</a>
    </div>
  `;

  /* ─── WHATSAPP FLOAT ─── */
  const waHTML = `
    <div class="wa-float">
      <div class="wa-tooltip">¿Tienes preguntas? Conversemos ahora</div>
      <a href="https://wa.me/${waNumber}?text=Hola%2C%20me%20interesa%20conocer%20los%20servicios%20de%20ADAPTIA%20Consultoría"
         target="_blank" class="wa-btn" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.538-17.096A12.01 12.01 0 0 0 12.052 1.25C5.45 1.25.074 6.626.071 13.228c0 2.112.551 4.175 1.6 5.992L0 24l4.89-1.282c1.766.953 3.754 1.455 5.795 1.456h.004c6.602 0 11.978-5.376 11.981-11.978a11.96 11.96 0 0 0-3.518-8.497"/>
        </svg>
      </a>
    </div>
  `;

  /* ─── CURSOR HTML ─── */
  const cursorHTML = `
    <div id="a-cursor" aria-hidden="true" style="pointer-events:none;"></div>
    <div id="a-cursor-ring" aria-hidden="true" style="pointer-events:none;"></div>
    <div class="grain" aria-hidden="true"></div>
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
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.538-17.096A12.01 12.01 0 0 0 12.052 1.25C5.45 1.25.074 6.626.071 13.228c0 2.112.551 4.175 1.6 5.992L0 24l4.89-1.282c1.766.953 3.754 1.455 5.795 1.456h.004c6.602 0 11.978-5.376 11.981-11.978a11.96 11.96 0 0 0-3.518-8.497"/>
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
            <img src="/assets/img/logo.png" alt="ADAPTIA Consultoría" class="footer__logo" />
            <p class="footer__tagline">
              Consultoría de transformación digital especializada en PyMEs del
              sector náutico recreativo. Estrategia, tecnología y acompañamiento continuo.
            </p>
            <div class="footer__social">
              <a href="#" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.06 2.148-.261 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              <a href="#" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" target="_blank" aria-label="TikTok" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="#" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer__col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/metodologia">Metodología</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terminos-y-condiciones">Términos y Condiciones</a></li>
              <li><a href="/politica-de-privacidad">Política de Privacidad</a></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="https://wa.me/${waNumber}" target="_blank">WhatsApp</a></li>
              <li><a>Cancún, Quintana Roo</a></li>
              <li><a>México</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__bottom">
          <span class="footer__copy">© 2025 ADAPTIA Consultoría. Todos los derechos reservados.</span>
          <span class="footer__location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.3rem;" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Cancún, MX — Sector Náutico Recreativo
          </span>
        </div>
      </div>
    </footer>
  `;

  /* ─── INYECCIÓN ─── */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.body.insertAdjacentHTML('afterbegin', cursorHTML);
  }

  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = navbarHTML;

  const waPlaceholder = document.getElementById('wa-placeholder');
  if (waPlaceholder) waPlaceholder.outerHTML = waHTML;

  const modalPlaceholder = document.getElementById('modal-placeholder');
  if (modalPlaceholder) modalPlaceholder.outerHTML = modalHTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;
})();