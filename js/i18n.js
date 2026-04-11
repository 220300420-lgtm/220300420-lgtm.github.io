/* ═══════════════════════════════════════════════════════════════
   ADAPTIA — i18n.js
   Bilingual (ES/EN) translation system.
   Load AFTER navbar.js and products.js, BEFORE main.js.
═══════════════════════════════════════════════════════════════ */

"use strict";

window.ADAPTIA = window.ADAPTIA || {};

/* ─── TRANSLATION DICTIONARIES ─── */
ADAPTIA.i18n = {

  /* ══════════════════════════════════════════════════
     ESPAÑOL  (default)
  ══════════════════════════════════════════════════ */
  es: {

    /* ── NAVBAR ── */
    'nav.home':          'Inicio',
    'nav.services':      'Servicios',
    'nav.methodology':   'Metodología',
    'nav.about':         'Nosotros',
    'nav.contact':       'Contacto',
    'nav.cta':           'Agendar sesión →',
    /* Mega-menu headers */
    'nav.phase1.header': 'Fase 1 · Diagnóstico',
    'nav.phase2.header': 'Fase 2 · Capacitación',
    'nav.phase3.header': 'Fase 3 · Digitalización',
    'nav.phase4.header': 'Fase 4 · Implementación',
    /* Mega-menu items */
    'nav.m1.title': 'Auditoría Operativa',
    'nav.m1.desc':  'Detecta cuellos de botella críticos.',
    'nav.m2.title': 'KPIs Base',
    'nav.m2.desc':  'Mide el punto de partida real.',
    'nav.m3.title': 'Entrenamiento por Roles',
    'nav.m3.desc':  'Habilidades prácticas por puesto.',
    'nav.m4.title': 'Asistente IA Interno',
    'nav.m4.desc':  'Soporte continuo al equipo.',
    'nav.m5.title': 'CRM + Automatizaciones',
    'nav.m5.desc':  'Procesos conectados de punta a punta.',
    'nav.m6.title': 'Web y Captación',
    'nav.m6.desc':  'Genera demanda de forma consistente.',
    'nav.m7.title': 'Integración Total',
    'nav.m7.desc':  'Unifica operación, ventas y control.',
    'nav.m8.title': 'Mejora Continua',
    'nav.m8.desc':  'Optimiza con datos y seguimiento.',
    /* Mobile menu */
    'nav.mob.home':        'Inicio',
    'nav.mob.services':    'Servicios',
    'nav.mob.methodology': 'Metodología',
    'nav.mob.about':       'Nosotros',
    'nav.mob.contact':     'Contacto',

    /* ── WHATSAPP FLOAT ── */
    'wa.tooltip': '¿Tienes preguntas? Conversemos ahora',

    /* ── MODAL ── */
    'modal.tool.label': 'Herramienta Digital',
    'modal.wa.btn':     'Consultar por WhatsApp',

    /* ── FOOTER ── */
    'footer.tagline':     'Consultoría de transformación digital especializada en PyMEs del sector náutico recreativo. Estrategia, tecnología y acompañamiento continuo.',
    'footer.col.company': 'Empresa',
    'footer.col.legal':   'Legal',
    'footer.col.contact': 'Contacto',
    'footer.nosotros':    'Nosotros',
    'footer.metodologia': 'Metodología',
    'footer.contacto':    'Contacto',
    'footer.terms':       'Términos y Condiciones',
    'footer.privacy':     'Política de Privacidad',
    'footer.whatsapp':    'WhatsApp',
    'footer.city':        'Blvd. Kukulcán Km 4, Malecón Américas',
    'footer.country':     'México',
    'footer.copy':        '© 2025 ADAPTIA Consultoría. Todos los derechos reservados.',
    'footer.location':    'Cancún, Q.R. 77500 — Sector Náutico Recreativo',

    /* ── HOME PAGE ── */
    'home.hero.badge':  'Consultoría Especializada · Sector Náutico Recreativo',
    'home.hero.title':  '<span class="line"><span>Transformación</span></span><span class="line"><span>digital para tu <span class="accent">negocio</span></span></span>',
    'home.hero.sub':    'Llevamos PyMEs náuticas del caos operativo a la claridad digital. Diagnóstico profundo, capacitación con IA y 20 servicios especializados que transformarán a tu empresa o negocio.',
    'home.hero.btn1':   'Ver los servicios',
    'home.hero.btn2':   'Conocer la metodología',

    'home.testimonials.label': 'Clientes satisfechos',
    'home.testimonials.title': 'Testimonios',
    'home.testimonials.desc':  'Empresas náuticas que ya transformaron su operación con ADAPTIA.',

    'home.t1.quote': '"Con ADAPTIA redujimos tiempos de gestión en un 70%. Nuestro equipo ahora trabaja con herramientas digitales que antes parecían imposibles de implementar."',
    'home.t1.name':  'María González',
    'home.t1.role':  'Gerente Marina del Caribe',
    'home.t2.quote': '"Los servicios de ADAPTIA nos transformaron completamente. En tres meses teníamos un CRM y un sistema de reservas que nunca creímos posible para nuestro club."',
    'home.t2.name':  'Juan Rodríguez',
    'home.t2.role':  'Propietario Club Náutico Cancún',
    'home.t3.quote': '"El diagnóstico inicial fue revelador. ADAPTIA identificó exactamente dónde estábamos perdiendo tiempo y dinero, y actuaron con rapidez y precisión."',
    'home.t3.name':  'Patricia Herrera',
    'home.t3.role':  'Directora Marina Puerto Aventuras',
    'home.t4.quote': '"La automatización de reservas nos liberó horas que antes perdíamos en burocracia. Ahora me enfoco en crecer el negocio, no en apagar incendios."',
    'home.t4.name':  'Alejandro Moreno',
    'home.t4.role':  'Capitán · Charters del Caribe',
    'home.t5.quote': '"Implementaron un sistema de facturación que redujo nuestros errores en un 95%. El servicio de ADAPTIA es extraordinario y los resultados hablan solos."',
    'home.t5.name':  'Carmen López',
    'home.t5.role':  'Gerente Club Náutico Riviera Maya',
    'home.t6.quote': '"ADAPTIA entiende el sector náutico de verdad. Saben de marinas, amarres y temporadas. No son consultores genéricos: son especialistas que viven la industria."',
    'home.t6.name':  'Roberto Fuentes',
    'home.t6.role':  'Propietario Marina Isla Mujeres',
    'home.t7.quote': '"Gracias a la capacitación con IA, nuestro personal responde preguntas de clientes en segundos. La satisfacción de nuestros pasajeros mejoró notablemente."',
    'home.t7.name':  'Isabel Vargas',
    'home.t7.role':  'Directora Tours Marinos Xcaret',
    'home.t8.quote': '"El ROI fue evidente desde el primer mes. Recuperamos la inversión con creces gracias a la digitalización de nuestros procesos de renta de embarcaciones."',
    'home.t8.name':  'Fernando Castillo',
    'home.t8.role':  'Dueño · Renta de Yates Cancún',

    'home.why.label': '¿Por qué elegirnos?',
    'home.why.title': 'Lo que nos hace diferentes',
    'home.why.desc':  'No somos una consultora genérica. Entendemos la operación náutica desde adentro y construimos soluciones que funcionan en el agua.',
    'home.why1.title': 'Sector Náutico Especializado',
    'home.why1.desc':  'Somos pioneros en consultoría para marinas, clubes de yates y tours marinos. Conocemos tu industria: problemas, temporadas, mantenimiento, regulaciones y la dinámica con el cliente náutico.',
    'home.why2.title': 'Capacitación Potenciada por IA',
    'home.why2.desc':  'Implementamos chatbots internos entrenados con los procesos de tu empresa. Tu equipo tiene respuestas instantáneas, estén en muelle o en oficina, las 24 horas.',
    'home.why3.title': 'Modalidad Híbrida',
    'home.why3.desc':  'Actuamos en el nivel estratégico (KPIs, roadmap, diagnóstico) y en el operativo (implementación de herramientas, automatizaciones, ERP). Somos parte de tu equipo.',
    'home.why4.title': 'Acompañamiento Continuo',
    'home.why4.desc':  'No entregamos un documento y desaparecemos. Te acompañamos mes a mes con reportes de KPIs, análisis de desviaciones y ajustes de la estrategia digital.',
    'home.why5.title': 'Visión Internacional',
    'home.why5.desc':  'Desde Cancún construimos metodologías escalables con proyección hacia marinas del Caribe, Golfo de México y Latinoamérica. Diseñado para crecer contigo.',
    'home.why6.title': 'Herramientas Reales',
    'home.why6.desc':  'Clientify, Make, Kommo, Looker Studio, n8n. Herramientas probadas en entornos reales. No teoría: implementación concreta con resultados medibles desde el mes uno.',

    'home.partners.label': 'Ecosistema',
    'home.partners.title': 'Nuestros Partners',

    'home.cta.label': 'Siguiente paso',
    'home.cta.title': '¿Listo para navegar en la dirección correcta?',
    'home.cta.desc':  'Agenda una sesión de diagnóstico inicial. En 45 minutos identificamos tus principales áreas de oportunidad y te presentamos una propuesta priorizada.',
    'home.cta.btn1':  'Agendar por WhatsApp',
    'home.cta.btn2':  'Ver formulario de contacto',
    'home.cta.loc':   'Blvd. Kukulcán Km 4, Malecón Américas, Cancún, Q.R. \u00a0·\u00a0 Atención en Español e Inglés',

    /* ── CONTACTO PAGE ── */
    'contact.hero.label': 'Conversemos',
    'contact.hero.title': 'Empieza tu<br/>transformación',
    'contact.hero.sub':   'Agenda tu sesión de diagnóstico con nosotros. Escríbenos por WhatsApp o completa el formulario y te contactamos en menos de 24 horas.',

    'contact.methods.label':  'Canales de contacto',
    'contact.methods.title':  'La forma más rápida de empezar',
    'contact.methods.desc':   'Preferimos conversaciones directas. El WhatsApp tiene respuesta en menos de 2 horas en horario de oficina. El formulario es ideal si quieres detallar tu situación antes de hablar.',
    'contact.wa.label':       'WhatsApp — respuesta en <2 horas',
    'contact.wa.val':         '+52 (998) XXX-XXXX',
    'contact.location.label': 'Sede',
    'contact.location.val':   'Blvd. Kukulcán Km 4, L-22, Malecón Américas, Cancún, Q.R. 77500',
    'contact.hours.label':    'Horario de atención',
    'contact.hours.val':      'Lun–Vie  9:00 – 21:00 EST',
    'contact.langs':          'Atendemos en <strong style="color:var(--text-primary);">Español e Inglés</strong>. Clientes internacionales bienvenidos.',

    'contact.form.title':    'Cuéntanos de tu negocio',
    'contact.form.sub':      'Respondemos en menos de 24 horas con una propuesta o invitación a llamada.',
    'contact.form.name':     'Nombre *',
    'contact.form.company':  'Empresa / Marina *',
    'contact.form.phone':    'WhatsApp / Teléfono',
    'contact.form.type':     'Tipo de negocio',
    'contact.form.interest': 'Entregable de interés',
    'contact.form.message':  'Mensaje (opcional)',
    'contact.form.submit':   'Enviar por WhatsApp',
    'contact.form.note':     'Al enviar, se abrirá WhatsApp con el mensaje pre-completado.<br/>Sin pagos online. Sin spam.',
    'contact.form.name.ph':     'Tu nombre completo',
    'contact.form.company.ph':  'Nombre del negocio',
    'contact.form.phone.ph':    '+52 (998) XXX-XXXX',
    'contact.form.type.ph':     'Selecciona una opción',
    'contact.form.interest.ph': '¿Qué necesitas principalmente?',
    'contact.form.message.ph':  'Cuéntanos brevemente sobre tu negocio, el principal reto que enfrentas o lo que quieres lograr...',

    'contact.form.opt.marina':   'Marina / Puerto deportivo',
    'contact.form.opt.club':     'Club de yates',
    'contact.form.opt.tours':    'Tours marinos / Chárter náutico',
    'contact.form.opt.school':   'Escuela de vela o buceo',
    'contact.form.opt.other':    'Otro negocio náutico',
    'contact.form.group.p1':     'Fase 1 — Diagnóstico',
    'contact.form.group.p2':     'Fase 2 — Capacitación',
    'contact.form.group.p3':     'Fase 3 — Digitalización',
    'contact.form.group.p4':     'Fase 4 — Implementación Integral',
    'contact.form.opt.diag':     'Diagnóstico inicial (no sé por dónde empezar)',
    'contact.form.opt.full':     'Plan integral completo',

    'contact.map.label': 'Ubicación',
    'contact.map.title': 'Malecón Américas, Cancún',
    'services.hero.title': 'Nuestros servicios<br/>ADAPTIA',
    'services.hero.sub':   'Cada servicio está organizado en 4 fases metodológicas. Haz clic en cualquiera para conocer los detalles y consultar por WhatsApp.',
    'services.chip.base':  'Base — esencial',
    'services.chip.plus':  'Plus — avanzado',

    'services.filter.all':  'Todas las fases',
    'services.filter.p1':   'Diagnóstico',
    'services.filter.p2':   'Capacitación',
    'services.filter.p3':   'Digitalización',
    'services.filter.p4':   'Implementación',
    'services.filter.all2': 'Todos',
    'services.filter.base': 'Base',
    'services.filter.plus': 'Plus',
    'services.tier.all':    'Todos',
    'services.tier.base':   'Base',
    'services.tier.plus':   'Plus',

    'services.cta.label': '¿Te interesa algún servicio?',
    'services.cta.title': 'Hablemos hoy mismo',
    'services.cta.desc':  'Cada servicio puede contratarse de forma individual o como parte de un plan integral. Cuéntanos cuál es tu situación y te armamos una propuesta.',
    'services.cta.btn':   'Consultar por WhatsApp',

    /* Product card CTA */
    'products.card.cta': 'Consultar por WhatsApp →',

    /* Phase section headers */
    'products.phase1.name': 'Diagnóstico',
    'products.phase1.desc': 'Identificar el estado actual y las áreas de oportunidad',
    'products.phase2.name': 'Capacitación',
    'products.phase2.desc': 'Dominar herramientas y estandarizar procesos con IA',
    'products.phase3.name': 'Digitalización',
    'products.phase3.desc': 'Automatización, CRM, dashboards y presencia digital',
    'products.phase4.name': 'Implementación Integral',
    'products.phase4.desc': 'Centralización total: ERP, integraciones y seguimiento',

    /* ── NOSOTROS PAGE ── */
    'about.hero.label': 'Quiénes somos',
    'about.hero.title': 'Nacimos para el<br/>sector náutico',
    'about.hero.sub':   'Somos una de las primeras consultoras de transformación digital especializadas en PyMEs náuticas. No vendemos consultoría genérica: entendemos amarres, temporadas, marinas y la dinámica del cliente náutico desde adentro.',

    /* ── METODOLOGÍA PAGE ── */
    'method.hero.label': 'Proceso de trabajo',
    'method.hero.title': 'Nuestra metodología<br/>en 4 fases',
    'method.hero.sub':   'Un proceso sistemático y probado que lleva tu operación náutica del diagnóstico inicial hasta la centralización total con ERP e integraciones.',
  },

  /* ══════════════════════════════════════════════════
     ENGLISH
  ══════════════════════════════════════════════════ */
  en: {

    /* ── NAVBAR ── */
    'nav.home':          'Home',
    'nav.services':      'Services',
    'nav.methodology':   'Methodology',
    'nav.about':         'About Us',
    'nav.contact':       'Contact',
    'nav.cta':           'Book a session →',
    /* Mega-menu headers */
    'nav.phase1.header': 'Phase 1 · Diagnosis',
    'nav.phase2.header': 'Phase 2 · Training',
    'nav.phase3.header': 'Phase 3 · Digitalization',
    'nav.phase4.header': 'Phase 4 · Implementation',
    /* Mega-menu items */
    'nav.m1.title': 'Operational Audit',
    'nav.m1.desc':  'Detect critical bottlenecks.',
    'nav.m2.title': 'Baseline KPIs',
    'nav.m2.desc':  'Measure the real starting point.',
    'nav.m3.title': 'Role-Based Training',
    'nav.m3.desc':  'Practical skills by position.',
    'nav.m4.title': 'Internal AI Assistant',
    'nav.m4.desc':  'Continuous support for the team.',
    'nav.m5.title': 'CRM + Automations',
    'nav.m5.desc':  'End-to-end connected processes.',
    'nav.m6.title': 'Web & Lead Generation',
    'nav.m6.desc':  'Generate demand consistently.',
    'nav.m7.title': 'Full Integration',
    'nav.m7.desc':  'Unify operations, sales and control.',
    'nav.m8.title': 'Continuous Improvement',
    'nav.m8.desc':  'Optimize with data and tracking.',
    /* Mobile menu */
    'nav.mob.home':        'Home',
    'nav.mob.services':    'Services',
    'nav.mob.methodology': 'Methodology',
    'nav.mob.about':       'About Us',
    'nav.mob.contact':     'Contact',

    /* ── WHATSAPP FLOAT ── */
    'wa.tooltip': 'Have questions? Let\'s talk now',

    /* ── MODAL ── */
    'modal.tool.label': 'Digital Tool',
    'modal.wa.btn':     'Inquire via WhatsApp',

    /* ── FOOTER ── */
    'footer.tagline':     'Digital transformation consulting specialized in SMEs of the recreational nautical sector. Strategy, technology and continuous support.',
    'footer.col.company': 'Company',
    'footer.col.legal':   'Legal',
    'footer.col.contact': 'Contact',
    'footer.nosotros':    'About Us',
    'footer.metodologia': 'Methodology',
    'footer.contacto':    'Contact',
    'footer.terms':       'Terms & Conditions',
    'footer.privacy':     'Privacy Policy',
    'footer.whatsapp':    'WhatsApp',
    'footer.city':        'Blvd. Kukulcán Km 4, Malecón Américas',
    'footer.country':     'Mexico',
    'footer.copy':        '© 2025 ADAPTIA Consulting. All rights reserved.',
    'footer.location':    'Cancún, Q.R. 77500 — Recreational Nautical Sector',

    /* ── HOME PAGE ── */
    'home.hero.badge':  'Specialized Consulting · Recreational Nautical Sector',
    'home.hero.title':  '<span class="line"><span>Digital</span></span><span class="line"><span>transformation for your <span class="accent">business</span></span></span>',
    'home.hero.sub':    'We take nautical SMEs from operational chaos to digital clarity. Deep diagnostics, AI-powered training, and 20 specialized services that will transform your company.',
    'home.hero.btn1':   'View services',
    'home.hero.btn2':   'Learn the methodology',

    'home.testimonials.label': 'Satisfied clients',
    'home.testimonials.title': 'Testimonials',
    'home.testimonials.desc':  'Nautical companies that have already transformed their operations with ADAPTIA.',

    'home.t1.quote': '"With ADAPTIA we reduced management times by 70%. Our team now works with digital tools that once seemed impossible to implement."',
    'home.t1.name':  'María González',
    'home.t1.role':  'Manager, Marina del Caribe',
    'home.t2.quote': '"ADAPTIA\'s services transformed us completely. Within three months we had a CRM and booking system we never thought possible for our club."',
    'home.t2.name':  'Juan Rodríguez',
    'home.t2.role':  'Owner, Club Náutico Cancún',
    'home.t3.quote': '"The initial diagnosis was eye-opening. ADAPTIA pinpointed exactly where we were losing time and money, and acted swiftly and precisely."',
    'home.t3.name':  'Patricia Herrera',
    'home.t3.role':  'Director, Marina Puerto Aventuras',
    'home.t4.quote': '"Automating reservations freed up hours we used to waste on bureaucracy. Now I focus on growing the business, not putting out fires."',
    'home.t4.name':  'Alejandro Moreno',
    'home.t4.role':  'Captain · Charters del Caribe',
    'home.t5.quote': '"They implemented a billing system that reduced our errors by 95%. ADAPTIA\'s service is extraordinary and the results speak for themselves."',
    'home.t5.name':  'Carmen López',
    'home.t5.role':  'Manager, Club Náutico Riviera Maya',
    'home.t6.quote': '"ADAPTIA truly understands the nautical sector. They know marinas, moorings and seasons. They\'re not generic consultants — they live the industry."',
    'home.t6.name':  'Roberto Fuentes',
    'home.t6.role':  'Owner, Marina Isla Mujeres',
    'home.t7.quote': '"Thanks to AI-powered training, our staff answer client questions in seconds. Our passengers\' satisfaction improved noticeably."',
    'home.t7.name':  'Isabel Vargas',
    'home.t7.role':  'Director, Tours Marinos Xcaret',
    'home.t8.quote': '"The ROI was evident from the first month. We recovered the investment many times over thanks to digitizing our vessel rental processes."',
    'home.t8.name':  'Fernando Castillo',
    'home.t8.role':  'Owner · Renta de Yates Cancún',

    'home.why.label': 'Why choose us?',
    'home.why.title': 'What makes us different',
    'home.why.desc':  'We are not a generic consulting firm. We understand nautical operations from the inside and build solutions that work on the water.',
    'home.why1.title': 'Specialized Nautical Sector',
    'home.why1.desc':  'We are pioneers in consulting for marinas, yacht clubs and marine tours. We know your industry: problems, seasons, maintenance, regulations and the nautical client dynamic.',
    'home.why2.title': 'AI-Powered Training',
    'home.why2.desc':  'We deploy internal chatbots trained on your company\'s processes. Your team gets instant answers, whether at the dock or in the office, 24 hours a day.',
    'home.why3.title': 'Hybrid Delivery Model',
    'home.why3.desc':  'We act at the strategic level (KPIs, roadmap, diagnosis) and at the operational level (tool implementation, automations, ERP). We are part of your team.',
    'home.why4.title': 'Continuous Accompaniment',
    'home.why4.desc':  'We don\'t hand over a document and disappear. We support you month by month with KPI reports, deviation analysis and digital strategy adjustments.',
    'home.why5.title': 'International Vision',
    'home.why5.desc':  'From Cancún we build scalable methodologies with a projection toward marinas in the Caribbean, Gulf of Mexico and Latin America. Designed to grow with you.',
    'home.why6.title': 'Real-World Tools',
    'home.why6.desc':  'Clientify, Make, Kommo, Looker Studio, n8n. Tools proven in real environments. No theory: concrete implementation with measurable results from month one.',

    'home.partners.label': 'Ecosystem',
    'home.partners.title': 'Our Partners',

    'home.cta.label': 'Next step',
    'home.cta.title': 'Ready to navigate in the right direction?',
    'home.cta.desc':  'Book an initial diagnostic session. In 45 minutes we identify your main opportunities and present a prioritized proposal.',
    'home.cta.btn1':  'Book via WhatsApp',
    'home.cta.btn2':  'View contact form',
    'home.cta.loc':   'Blvd. Kukulcán Km 4, Malecón Américas, Cancún, Q.R. \u00a0·\u00a0 Service in Spanish & English',

    /* ── CONTACTO PAGE ── */
    'contact.hero.label': 'Let\'s Talk',
    'contact.hero.title': 'Start your<br/>transformation',
    'contact.hero.sub':   'Book your diagnostic session with us. Message us on WhatsApp or fill out the form and we\'ll contact you within 24 hours.',

    'contact.methods.label':  'Contact channels',
    'contact.methods.title':  'The fastest way to get started',
    'contact.methods.desc':   'We prefer direct conversations. WhatsApp is answered within 2 hours during business hours. The form is ideal if you want to detail your situation before speaking.',
    'contact.wa.label':       'WhatsApp — reply within <2 hours',
    'contact.wa.val':         '+52 (998) XXX-XXXX',
    'contact.location.label': 'Office',
    'contact.location.val':   'Blvd. Kukulcán Km 4, L-22, Malecón Américas, Cancún, Q.R. 77500',
    'contact.hours.label':    'Business hours',
    'contact.hours.val':      'Mon–Fri  9:00 – 21:00 EST',
    'contact.langs':          'We serve in <strong style="color:var(--text-primary);">Spanish and English</strong>. International clients welcome.',

    'contact.form.title':    'Tell us about your business',
    'contact.form.sub':      'We reply within 24 hours with a proposal or an invitation to call.',
    'contact.form.name':     'Name *',
    'contact.form.company':  'Company / Marina *',
    'contact.form.phone':    'WhatsApp / Phone',
    'contact.form.type':     'Business type',
    'contact.form.interest': 'Service of interest',
    'contact.form.message':  'Message (optional)',
    'contact.form.submit':   'Send via WhatsApp',
    'contact.form.note':     'Submitting will open WhatsApp with a pre-filled message.<br/>No online payments. No spam.',
    'contact.form.name.ph':     'Your full name',
    'contact.form.company.ph':  'Business name',
    'contact.form.phone.ph':    '+52 (998) XXX-XXXX',
    'contact.form.type.ph':     'Select an option',
    'contact.form.interest.ph': 'What do you mainly need?',
    'contact.form.message.ph':  'Tell us briefly about your business, the main challenge you face, or what you want to achieve...',

    'contact.form.opt.marina':   'Marina / Sports harbor',
    'contact.form.opt.club':     'Yacht club',
    'contact.form.opt.tours':    'Marine tours / Nautical charter',
    'contact.form.opt.school':   'Sailing or diving school',
    'contact.form.opt.other':    'Other nautical business',
    'contact.form.group.p1':     'Phase 1 — Diagnosis',
    'contact.form.group.p2':     'Phase 2 — Training',
    'contact.form.group.p3':     'Phase 3 — Digitalization',
    'contact.form.group.p4':     'Phase 4 — Full Implementation',
    'contact.form.opt.diag':     'Initial diagnosis (I\'m not sure where to start)',
    'contact.form.opt.full':     'Full comprehensive plan',

    'contact.map.label': 'Location',
    'contact.map.title': 'Malecón Américas, Cancún',

    /* ── SERVICIOS / ENTREGABLES PAGE ── */
    'services.hero.label': 'Technical catalog',
    'services.hero.title': 'Our services<br/>ADAPTIA',
    'services.hero.sub':   'Each service is organized into 4 methodological phases. Click any card to view details and inquire via WhatsApp.',
    'services.chip.base':  'Base — essential',
    'services.chip.plus':  'Plus — advanced',

    'services.filter.all':  'All phases',
    'services.filter.p1':   'Diagnosis',
    'services.filter.p2':   'Training',
    'services.filter.p3':   'Digitalization',
    'services.filter.p4':   'Implementation',
    'services.filter.all2': 'All',
    'services.filter.base': 'Base',
    'services.filter.plus': 'Plus',
    'services.tier.all':    'All',
    'services.tier.base':   'Base',
    'services.tier.plus':   'Plus',

    'services.cta.label': 'Interested in a service?',
    'services.cta.title': 'Let\'s talk today',
    'services.cta.desc':  'Each service can be contracted individually or as part of a comprehensive plan. Tell us your situation and we\'ll put together a proposal.',
    'services.cta.btn':   'Inquire via WhatsApp',

    /* Product card CTA */
    'products.card.cta': 'Inquire via WhatsApp →',

    /* Phase section headers */
    'products.phase1.name': 'Diagnosis',
    'products.phase1.desc': 'Identify the current state and areas of opportunity',
    'products.phase2.name': 'Training',
    'products.phase2.desc': 'Master tools and standardize processes with AI',
    'products.phase3.name': 'Digitalization',
    'products.phase3.desc': 'Automation, CRM, dashboards and digital presence',
    'products.phase4.name': 'Full Implementation',
    'products.phase4.desc': 'Total centralization: ERP, integrations and monitoring',

    /* ── NOSOTROS PAGE ── */
    'about.hero.label': 'Who we are',
    'about.hero.title': 'Born for the<br/>nautical sector',
    'about.hero.sub':   'We are one of the first digital transformation consulting firms specialized in nautical SMEs. We don\'t sell generic consulting: we understand moorings, seasons, marinas and the nautical client dynamic from the inside.',

    /* ── METODOLOGÍA PAGE ── */
    'method.hero.label': 'Work process',
    'method.hero.title': 'Our methodology<br/>in 4 phases',
    'method.hero.sub':   'A systematic and proven process that takes your nautical operation from initial diagnosis to full centralization with ERP and integrations.',
  },
};

/* ─── LANGUAGE PERSISTENCE ─── */
ADAPTIA.lang = localStorage.getItem('adaptia-lang') || 'es';

/* ─── APPLY LANGUAGE FUNCTION ─── */
ADAPTIA.applyLang = function(lang) {
  if (!ADAPTIA.i18n[lang]) return;
  ADAPTIA.lang = lang;
  localStorage.setItem('adaptia-lang', lang);
  document.documentElement.lang = lang;

  const dict = ADAPTIA.i18n[lang];

  /* text content nodes */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* innerHTML nodes (elements that contain nested tags) */
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  /* placeholder attributes */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  /* optgroup labels (data-i18n-label attribute) */
  document.querySelectorAll('[data-i18n-label]').forEach(function(el) {
    var key = el.dataset.i18nLabel;
    if (dict[key] !== undefined) el.label = dict[key];
  });

  /* update lang toggle button states */
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* re-render product catalog if present */
  if (typeof ADAPTIA.renderCatalog === 'function') {
    var catalog = document.getElementById('catalog-container');
    if (catalog) {
      ADAPTIA.renderCatalog('catalog-container');
      /* Re-trigger scroll reveal for dynamically injected cards */
      setTimeout(function() {
        document.querySelectorAll('.reveal:not(.visible)').forEach(function(el) {
          el.classList.add('visible');
        });
      }, 80);
    }
  }

  /* update WA float tooltip aria-label if present */
  const waBtn = document.querySelector('.wa-btn');
  if (waBtn && dict['wa.tooltip']) {
    waBtn.setAttribute('aria-label', dict['wa.tooltip']);
  }
};
