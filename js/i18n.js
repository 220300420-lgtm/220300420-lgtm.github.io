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

    'method.p1.label': 'Fase 01',
    'method.p1.title': 'Diagnóstico',
    'method.p1.desc':  'Antes de tocar una sola herramienta digital, necesitamos entender a fondo cómo opera tu marina, club o tour marino. Analizamos procesos, identificamos ineficiencias, cuantificamos el impacto de los problemas y construimos una propuesta de soluciones ordenadas por urgencia e impacto.',
    'method.p1.d1': 'E01 — Informe Diagnóstico + Propuesta Priorizada',
    'method.p1.d2': 'E02 — Mapa del Proceso As-Is + Problemas Detectados',
    'method.p1.d3': 'E03 — Lista de Prioridades (Backlog)',
    'method.p1.d4': 'E04 — Línea Base de Medición (KPIs Básicos)',

    'method.p2.label': 'Fase 02',
    'method.p2.title': 'Capacitación',
    'method.p2.desc':  'Las mejores herramientas fracasan si el equipo no las domina. En esta fase formamos al personal con manuales claros, videos cortos, matrices de avance y — como diferenciador único — un chatbot de IA entrenado con los propios procesos de tu empresa para responder dudas en tiempo real.',
    'method.p2.d1': 'E05 — Manual / Guía Paso a Paso + Materiales',
    'method.p2.d2': 'E06 — Biblioteca de Videos Cortos',
    'method.p2.d3': 'E07 — Matriz de Avance de Capacitación',
    'method.p2.d4': 'E08 — Chatbot Interno de Capacitación con IA ✦ Plus',

    'method.p3.label': 'Fase 03',
    'method.p3.title': 'Digitalización',
    'method.p3.desc':  'Con el diagnóstico claro y el equipo capacitado, implementamos el stack digital que tu negocio necesita: CRM, WhatsApp multiagente, chatbot de ventas, automatizaciones de seguimiento, dashboards de KPIs, SOPs, presencia web y analítica. 9 entregables que transforman la operación.',
    'method.p3.d1': 'E09 — CRM Configurado',
    'method.p3.d2': 'E10 — WhatsApp Profesional Multiagente',
    'method.p3.d3': 'E11 — Chatbot para Clientes',
    'method.p3.d4': 'E12 — Automatizaciones de Seguimiento',
    'method.p3.d5': 'E13–E17 — Dashboard, SOPs, Web, Dominio, Analítica',

    'method.p4.label': 'Fase 04',
    'method.p4.title': 'Implementación Integral',
    'method.p4.desc':  'La cima del proceso: un ERP que centraliza ventas, operaciones y fiscal, integrado con todas las herramientas previas mediante automatizaciones inteligentes. Más el seguimiento mensual con reportes de resultados para que nunca pierdas el rumbo.',
    'method.p4.d1': 'E18 — ERP Implementado',
    'method.p4.d2': 'E19 — Integración entre Herramientas',
    'method.p4.d3': 'E20 — Seguimiento Mensual de Resultados',

    'method.timeline.label': 'Hoja de ruta',
    'method.timeline.title': 'Tu recorrido con ADAPTIA',
    'method.tl1.date':  'Semana 1–2',
    'method.tl1.title': 'Diagnóstico y alineación',
    'method.tl1.desc':  'Reuniones de levantamiento, mapeo de procesos y entrega del informe diagnóstico con propuesta priorizada.',
    'method.tl2.date':  'Semana 3–5',
    'method.tl2.title': 'Capacitación del equipo',
    'method.tl2.desc':  'Manuales, videos, matriz de avance y configuración del asistente de IA interno.',
    'method.tl3.date':  'Mes 2–4',
    'method.tl3.title': 'Implementación digital',
    'method.tl3.desc':  'Despliegue de CRM, WhatsApp multiagente, chatbot, automatizaciones, dashboard y web.',
    'method.tl4.date':  'Mes 5 en adelante',
    'method.tl4.title': 'ERP + Seguimiento mensual',
    'method.tl4.desc':  'Centralización total del negocio e informes mensuales para mantener el rumbo.',

    'method.cta.label': 'Empezamos cuando tú quieras',
    'method.cta.title': '¿Listo para comenzar?',
    'method.cta.desc':  'Agenda una sesión de diagnóstico con nuestro equipo. En 45 minutos identificamos tus principales áreas de oportunidad y te presentamos una propuesta priorizada para tu negocio náutico.',
    'method.cta.btn':   'Agendar sesión',

    /* ── NOSOTROS EXTRA ── */
    'about.essence.label': 'Nuestra esencia',
    'about.essence.title': 'Propósito claro, ruta definida',
    'about.essence.desc':  'ADAPTIA nace de la convicción de que las PyMEs del sector náutico merecen la misma transformación digital que las grandes corporaciones, adaptada a su escala, cultura y necesidades específicas.',
    'about.mv.mission.h': 'Misión',
    'about.mv.mission.p': 'Proporcionar acompañamiento estratégico continuo y transformación digital a las PyMEs náuticas para optimizar procesos operativos e implementar herramientas tecnológicas y sistemas ERP.',
    'about.mv.vision.h':  'Visión',
    'about.mv.vision.p':  'Consolidarnos como la consultora líder en transformación digital para PyMEs del sector náutico recreativo, con presencia y reconocimiento internacional.',
    'about.mv.diff.h':    'Diferenciador',
    'about.mv.diff.p':    'Somos pioneros en el sector náutico, ofrecemos capacitación basada en IA y operamos bajo una modalidad híbrida: estratégica y operativa al mismo tiempo.',
    'about.mv.focus.h':   'Enfoque',
    'about.mv.focus.p':   'No desaparecemos después de entregar un documento. Acompañamos mes a mes con métricas, ajustes y la certeza de que tu negocio navega en la dirección correcta.',

    'about.vals.label': 'Nuestros valores',
    'about.vals.title': 'Lo que guía cada proyecto',
    'about.v1.title': 'Resultados medibles',
    'about.v1.desc':  'Cada entregable tiene un KPI asociado. Si no se puede medir, no lo implementamos.',
    'about.v2.title': 'Acompañamiento real',
    'about.v2.desc':  'No somos auditores externos. Somos parte de tu equipo durante el proceso.',
    'about.v3.title': 'Claridad sobre complejidad',
    'about.v3.desc':  'Traducimos tecnología compleja en procesos simples que cualquier persona puede operar.',
    'about.v4.title': 'Especialización náutica',
    'about.v4.desc':  'No adaptamos plantillas genéricas. Diseñamos soluciones pensadas para el sector náutico.',
    'about.v5.title': 'Escalabilidad',
    'about.v5.desc':  'Todo lo que implementamos está diseñado para crecer contigo, sin cambiar todo cuando escalas.',
    'about.v6.title': 'Innovación accesible',
    'about.v6.desc':  'IA, ERP, automatizaciones — todo aplicado a la escala de una PyME, sin presupuesto corporativo.',

    'about.team.label': 'Nuestro equipo',
    'about.team.title': 'Nuestro Equipo: Los 8 Pilares de ADAPTIA',
    'about.team.desc':  'En ADAPTIA, no solo entendemos de tecnología; entendemos el mar. Nuestro equipo combina la precisión de la ingeniería de procesos con la agilidad digital necesaria para llevar la eficiencia de la industria náutica en la Riviera Maya al siguiente nivel.',
    'about.t1.role': 'Dirección General (CEO)',
    'about.t1.desc': 'Líder encargado de forjar alianzas estratégicas con marinas y astilleros de alto nivel, asegurando que cada solución de ADAPTIA esté alineada con el crecimiento a largo plazo de nuestros clientes.',
    'about.t2.role': 'Dirección de Consultoría y Operaciones',
    'about.t2.desc': 'Responsable de orquestar la ejecución técnica, garantizando que cada implementación cumpla con los estándares de calidad y tiempos exigidos por la operación náutica.',
    'about.t3.role': 'Ejecutivo de Desarrollo de Negocios',
    'about.t3.desc': 'Especialista en identificar oportunidades de optimización en el sector, conectando las necesidades de las empresas con soluciones digitales que generan un retorno de inversión real.',
    'about.t4.role': 'Coordinador de Marketing y Comunicación',
    'about.t4.desc': 'Encargado de proyectar la presencia digital de ADAPTIA y documentar casos de éxito que demuestran cómo la automatización transforma la rentabilidad en los muelles.',
    'about.t5.role': 'Consultor Especializado de Procesos (ERP)',
    'about.t5.desc': 'Analiza a fondo la operación de cada cliente para diseñar la arquitectura del software, asegurando que la tecnología se adapte al negocio y no al revés.',
    'about.t6.role': 'Especialista en Desarrollo y Automatización',
    'about.t6.desc': 'Experto en conectar sistemas mediante APIs y crear flujos de trabajo inteligentes que eliminan las tareas manuales y reducen el margen de error operativo.',
    'about.t7.role': 'Consultor de Implementación y Soporte',
    'about.t7.desc': 'La mano derecha del cliente durante la transición; asegura una migración de datos impecable y capacita al personal para que adopte las herramientas con éxito.',
    'about.t8.role': 'Gestor Administrativo y Contable',
    'about.t8.desc': 'El pilar que garantiza la transparencia financiera y administrativa de ADAPTIA, permitiendo que nuestro equipo técnico se mantenga 100% enfocado en el éxito del cliente.',

    'about.loc.label':      'Sede y alcance',
    'about.loc.title':      'Cancún como punto de partida',
    'about.loc.desc':       'Operamos desde el corazón del Caribe Mexicano, rodeados de marinas, clubes náuticos y empresas de tours marinos. Una ubicación perfecta para entender el sector y expandirnos hacia el resto de Latinoamérica.',
    'about.loc.mx':         'México',
    'about.loc.mx.sub':     'Sede principal',
    'about.loc.caribe':     'Caribe',
    'about.loc.caribe.sub': 'Zona de expansión',
    'about.loc.latam':      'LATAM',
    'about.loc.latam.sub':  'Visión internacional',

    'about.cta.label': '¿Conectamos?',
    'about.cta.title': 'Cuéntanos de tu marina',
    'about.cta.desc':  'Cada proyecto empieza con una conversación honesta sobre tu negocio, tus retos y lo que necesitas alcanzar.',
    'about.cta.btn1':  'Ir a contacto',
    'about.cta.btn2':  'Ver nuestros servicios',

    /* ── SERVICIOS INDEX PAGE ── */
    'services.index.hero.label': 'Servicios ADAPTIA',
    'services.index.hero.title': 'Una metodología robusta en 4 fases',
    'services.index.hero.sub':   'Transformamos la operación de tu negocio náutico desde el diagnóstico estratégico hasta la implementación integral con procesos digitalizados, equipos capacitados y control de resultados.',
    'services.index.p1.title': 'Diagnóstico',
    'services.index.p1.desc':  'Realizamos una inmersión profunda en tu operación: entrevistamos a tu equipo, mapeamos cada proceso crítico e identificamos las fricciones invisibles que te cuestan tiempo, dinero y clientes. Al cierre recibes un diagnóstico ejecutivo con una hoja de ruta priorizada, lista para ejecutar desde el primer día.',
    'services.index.p1.cta':   'Conocer la fase',
    'services.index.p2.title': 'Capacitación',
    'services.index.p2.desc':  'Transformamos el conocimiento tácito de tu empresa en protocolos replicables y entrenamiento por roles. Combinamos manuales operativos vivos, microvideos de tareas críticas, evaluaciones prácticas y un asistente de IA entrenado con tus procesos. Resultado: equipo autónomo con menor tasa de errores y mayor velocidad desde el primer turno.',
    'services.index.p2.cta':   'Conocer la fase',
    'services.index.p3.title': 'Digitalización',
    'services.index.p3.desc':  'Conectamos tu operación con las herramientas digitales correctas: CRM configurado para tu ciclo de venta náutico, automatizaciones que eliminan tareas repetitivas, landings de captación y dashboards de KPIs en tiempo real. Cada herramienta se integra al proceso real de tu equipo para maximizar adopción y resultados desde el mes uno.',
    'services.index.p3.cta':   'Conocer la fase',
    'services.index.p4.title': 'Implementación',
    'services.index.p4.desc':  'Consolidamos todo en un sistema operativo de negocio integrado y sostenible. Conectamos CRM, web, automatizaciones y reporting en una arquitectura sin fricciones, establecemos gobernanza de datos, formamos a los responsables de cada proceso y garantizamos la mejora continua con ciclos mensuales de revisión de KPIs y un backlog evolutivo de optimización.',
    'services.index.p4.cta':   'Conocer la fase',
    'services.index.tools.label': 'Transparencia y Herramientas',
    'services.index.tools.title': 'Tecnologías que usamos para ejecutar con rigor',
    'services.index.tools.sub':   'Trabajamos con un stack probado para operación, marketing, automatización y medición.',
    'services.tool.notion':    'Documentación y SOPs',
    'services.tool.clientify': 'CRM comercial',
    'services.tool.make':      'Automatizaciones',
    'services.tool.wp':        'Web y landings',
    'services.tool.ga':        'Analítica digital',
    'services.tool.gtm':       'Etiquetado y tracking',
    'services.tool.looker':    'Dashboards de KPIs',
    'services.tool.manychat':  'Chatbots para captación',
    'services.tool.gws':       'Operación colaborativa',
    'services.tool.clarity':   'Comportamiento web',

    /* SVG timeline labels */
    'services.svg.fase1.num':  'FASE 1',
    'services.svg.fase1.name': 'Diagnóstico',
    'services.svg.fase2.num':  'FASE 2',
    'services.svg.fase2.name': 'Capacitación',
    'services.svg.fase3.num':  'FASE 3',
    'services.svg.fase3.name': 'Digitalización',
    'services.svg.fase4.num':  'FASE 4',
    'services.svg.fase4.name': 'Implementación',

    /* ── FASE 1 — DIAGNÓSTICO ── */
    'fase1.hero.label': 'Fase 1 · Diagnóstico',
    'fase1.hero.title': 'Entender antes de ejecutar',
    'fase1.hero.sub':   'Mapeamos la realidad operativa de tu empresa náutica: procesos, tiempos, fricciones, dependencias y pérdidas invisibles. Sin claridad no hay transformación real.',
    'fase1.stat1.label':  'Reducción potencial de retrabajos tras el diagnóstico.',
    'fase1.stat2.label':  'Mayor claridad operativa en áreas críticas.',
    'fase1.stat3.suffix': 'sem',
    'fase1.stat3.label':  'Semanas promedio para diagnóstico accionable.',
    'fase1.svc.head.label': 'Servicios y Entregables',
    'fase1.svc.head.title': 'Qué resolvemos, qué incluye y qué te llevas',
    'fase1.svc.head.sub':   'Cada servicio de esta fase está diseñado para darte claridad operativa total antes de invertir un solo peso en implementación.',
    'fase1.s1.title':   'Auditoría Operativa Integral',
    'fase1.s1.problem': 'Problema: decisiones críticas se toman sin evidencia real',
    'fase1.s2.title':   'Backlog de Mejora Priorizado',
    'fase1.s2.problem': 'Problema: iniciativas dispersas sin orden ni foco estratégico',
    'fase1.del.label': 'Entregables · Fase 1',
    'fase1.del.title': 'Qué recibes al finalizar esta fase',
    'fase1.del.sub':   'Cuatro entregables concretos que te dan claridad total sobre tu operación y una hoja de ruta lista para ejecutar.',
    'fase1.faq.badge': 'Preguntas Frecuentes',
    'fase1.faq.label': 'FAQ',
    'fase1.faq.title': 'Preguntas frecuentes de Diagnóstico',
    'fase1.faq.sub':   'Todo lo que necesitas saber antes de iniciar la Fase 1.',
    'fase1.faq.q1': '¿Necesito tener sistemas digitales para iniciar el diagnóstico?',
    'fase1.faq.q2': '¿Quién del equipo debe participar en las entrevistas?',
    'fase1.faq.q3': '¿Qué entregables recibo al cierre de la fase?',
    'fase1.cta.label': 'Siguiente paso',
    'fase1.cta.title': 'Cotiza la Fase 1: Diagnóstico',
    'fase1.cta.desc':  'Conversemos sobre tu operación actual. En 45 minutos identificamos tus principales oportunidades y te presentamos una propuesta personalizada.',
    'fase1.cta.btn':   'Cotizar esta fase',

    /* ── FASE 2 — CAPACITACIÓN ── */
    'fase2.hero.label': 'Fase 2 · Capacitación',
    'fase2.hero.title': 'Adopción operativa real',
    'fase2.hero.sub':   'Convertimos conocimiento en ejecución diaria: entrenamiento por roles, guías prácticas, microlearning y soporte con IA para que tu equipo opere con precisión y autonomía, todos los días.',
    'fase2.stat1.label': 'Menos errores operativos por estandarización de procesos.',
    'fase2.stat2.label': 'Reducción del tiempo de onboarding de nuevos colaboradores.',
    'fase2.stat3.label': 'Adherencia esperada en procesos críticos capacitados.',
    'fase2.svc.head.label': 'Servicios y Entregables',
    'fase2.svc.head.title': 'Capacitación profunda y medible',
    'fase2.svc.head.sub':   'Diseñada para crear desempeño operativo sostenido, no solo conocimiento teórico que se olvida a la semana.',
    'fase2.s1.title':   'Entrenamiento por Roles',
    'fase2.s1.problem': 'Problema: formación genérica con baja transferencia al trabajo real',
    'fase2.s2.title':   'Biblioteca Operativa',
    'fase2.s2.problem': 'Problema: dependencia de personas clave y pérdida de conocimiento crítico',
    'fase2.del.label': 'Entregables · Fase 2',
    'fase2.del.title': 'Qué recibes al finalizar esta fase',
    'fase2.del.sub':   'Tres entregables que convierten el conocimiento tácito de tu empresa en activos documentados, medibles y replicables para cualquier miembro del equipo.',
    'fase2.faq.badge': 'Preguntas Frecuentes',
    'fase2.faq.label': 'FAQ',
    'fase2.faq.title': 'Preguntas frecuentes de Capacitación',
    'fase2.faq.sub':   'Respuestas directas sobre cómo funciona y qué esperar de la Fase 2.',
    'fase2.faq.q1': '¿La capacitación puede ser híbrida o solo presencial?',
    'fase2.faq.q2': '¿Qué pasa con la rotación de personal después de la capacitación?',
    'fase2.faq.q3': '¿Cómo medimos el avance y efectividad de la capacitación?',
    'fase2.cta.label': 'Siguiente paso',
    'fase2.cta.title': 'Cotiza la Fase 2: Capacitación',
    'fase2.cta.desc':  'Asegura ejecución consistente y equipos autónomos con un programa de capacitación de alto impacto diseñado para la operación náutica.',
    'fase2.cta.btn':   'Cotizar esta fase',

    /* ── FASE 3 — DIGITALIZACIÓN ── */
    'fase3.hero.label': 'Fase 3 · Digitalización',
    'fase3.hero.title': 'Sistemas conectados para escalar',
    'fase3.hero.sub':   'Transformamos procesos manuales en flujos digitales integrados: CRM configurado para el ciclo náutico, automatizaciones que no descansan, analítica accionable y captación digital que trabaja por ti las 24 horas.',
    'fase3.stat1.label': 'Aceleración de ciclos de atención al cliente.',
    'fase3.stat2.label': 'Mejora potencial de conversión de leads a clientes.',
    'fase3.stat3.label': 'Horas de cobertura de atención automatizada al día.',
    'fase3.svc.head.label': 'Servicios y Entregables',
    'fase3.svc.head.title': 'Digitalización con impacto operativo real',
    'fase3.svc.head.sub':   'Implementamos tecnología orientada a resultados comerciales y operativos, no a proyectos de TI sin retorno medible.',
    'fase3.s1.title':   'CRM Comercial Configurado',
    'fase3.s1.problem': 'Problema: seguimiento de leads inconsistente y oportunidades perdidas',
    'fase3.s2.title':   'Automatizaciones de Seguimiento',
    'fase3.s2.problem': 'Problema: tareas repetitivas consumen tiempo valioso y la respuesta es tardía',
    'fase3.del.label': 'Entregables · Fase 3',
    'fase3.del.title': 'Qué recibes al finalizar esta fase',
    'fase3.del.sub':   'Diez entregables que digitalizan tu operación de extremo a extremo: desde la atención al cliente hasta la analítica web, cada pieza construye un ecosistema digital funcional y escalable.',
    'fase3.faq.badge': 'Preguntas Frecuentes',
    'fase3.faq.label': 'FAQ',
    'fase3.faq.title': 'Preguntas frecuentes de Digitalización',
    'fase3.faq.sub':   'Todo sobre la implementación tecnológica y qué esperar del proceso.',
    'fase3.faq.q1': '¿Se puede digitalizar por etapas sin romper la operación actual?',
    'fase3.faq.q2': '¿Qué hacemos con las herramientas digitales que ya usamos?',
    'fase3.faq.q3': '¿Cómo se asegura que el equipo adopte las nuevas herramientas?',
    'fase3.cta.label': 'Siguiente paso',
    'fase3.cta.title': 'Cotiza la Fase 3: Digitalización',
    'fase3.cta.desc':  'Activa un ecosistema digital que convierta más clientes, ordene tu operación y escale sin contratar más personal administrativo.',
    'fase3.cta.btn':   'Cotizar esta fase',

    /* ── FASE 4 — IMPLEMENTACIÓN ── */
    'fase4.hero.label': 'Fase 4 · Implementación',
    'fase4.hero.title': 'Integrar, estabilizar y optimizar',
    'fase4.hero.sub':   'Consolidamos procesos, tecnología y equipo en un sistema operativo de negocio unificado. Con seguimiento continuo, gobernanza de datos y ciclos de mejora que garantizan resultados sostenidos en el tiempo.',
    'fase4.stat1.label':  'Menor fricción inter-áreas por integración de sistemas.',
    'fase4.stat2.label':  'Mejora de visibilidad ejecutiva sobre KPIs del negocio.',
    'fase4.stat3.suffix': 'm',
    'fase4.stat3.label':  'Meses de acompañamiento en la consolidación operativa.',
    'fase4.svc.head.label': 'Servicios y Entregables',
    'fase4.svc.head.title': 'Implementación integral para resultados sostenibles',
    'fase4.svc.head.sub':   'Integramos plataformas, establecemos gobernanza operativa y garantizamos que la mejora no sea un evento único, sino un proceso continuo.',
    'fase4.s1.title':   'Integración End-to-End',
    'fase4.s1.problem': 'Problema: información fragmentada en silos y duplicidad de trabajo entre áreas',
    'fase4.s2.title':   'Gobierno de Datos y Mejora Continua',
    'fase4.s2.problem': 'Problema: falta de control y estructura para sostener los resultados en el tiempo',
    'fase4.del.label': 'Entregables · Fase 4',
    'fase4.del.title': 'Qué recibes al finalizar esta fase',
    'fase4.del.sub':   'Tres entregables de alto impacto que consolidan toda la transformación en un sistema operativo de negocio integrado, con seguimiento continuo que garantiza resultados sostenidos mes a mes.',
    'fase4.faq.badge': 'Preguntas Frecuentes',
    'fase4.faq.label': 'FAQ',
    'fase4.faq.title': 'Preguntas frecuentes de Implementación',
    'fase4.faq.sub':   'Todo sobre la consolidación operativa y el acompañamiento de largo plazo.',
    'fase4.faq.q1': '¿Cuánto tiempo dura la fase de implementación completa?',
    'fase4.faq.q2': '¿La implementación afecta la operación diaria durante el proceso?',
    'fase4.faq.q3': '¿Cómo aseguran la continuidad después de que termina el proyecto?',
    'fase4.cta.label': 'Siguiente paso',
    'fase4.cta.title': 'Cotiza la Fase 4: Implementación',
    'fase4.cta.desc':  'Unifica tecnología, proceso y equipo en un sistema operativo de negocio integrado que escala con estabilidad y produce resultados medibles mes a mes.',
    'fase4.cta.btn':   'Cotizar esta fase',
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

    /* ── SERVICIOS INDEX PAGE ── */
    'services.index.hero.label': 'ADAPTIA Services',
    'services.index.hero.title': 'A robust 4-phase methodology',
    'services.index.hero.sub':   'We transform your nautical business operations from strategic diagnosis to full implementation with digitized processes, trained teams and results-driven control.',
    'services.index.p1.title': 'Diagnosis',
    'services.index.p1.desc':  'We perform a deep dive into your operation: we interview your team, map every critical process and identify the invisible friction points costing you time, money and clients. At the end you receive an executive diagnostic report with a prioritized roadmap, ready to execute from day one.',
    'services.index.p1.cta':   'Explore the phase',
    'services.index.p2.title': 'Training',
    'services.index.p2.desc':  'We transform your company\'s tacit knowledge into replicable protocols and role-based training. We combine live operational manuals, micro-videos of critical tasks, practical assessments and an AI assistant trained on your processes. Result: autonomous team with fewer errors and higher speed from the first shift.',
    'services.index.p2.cta':   'Explore the phase',
    'services.index.p3.title': 'Digitalization',
    'services.index.p3.desc':  'We connect your operation with the right digital tools: CRM configured for your nautical sales cycle, automations that eliminate repetitive tasks, lead-generation landing pages and real-time KPI dashboards. Each tool integrates with your team\'s actual workflow to maximize adoption and results from month one.',
    'services.index.p3.cta':   'Explore the phase',
    'services.index.p4.title': 'Implementation',
    'services.index.p4.desc':  'We consolidate everything into an integrated and sustainable business operating system. We connect CRM, web, automations and reporting in a frictionless architecture, establish data governance, train process owners and guarantee continuous improvement with monthly KPI review cycles and an evolving optimization backlog.',
    'services.index.p4.cta':   'Explore the phase',
    'services.index.tools.label': 'Transparency & Tools',
    'services.index.tools.title': 'Technologies we use to deliver with precision',
    'services.index.tools.sub':   'We work with a proven stack for operations, marketing, automation and measurement.',
    'services.tool.notion':    'Documentation & SOPs',
    'services.tool.clientify': 'Commercial CRM',
    'services.tool.make':      'Automations',
    'services.tool.wp':        'Web & landing pages',
    'services.tool.ga':        'Digital analytics',
    'services.tool.gtm':       'Tag management & tracking',
    'services.tool.looker':    'KPI dashboards',
    'services.tool.manychat':  'Chatbots for lead capture',
    'services.tool.gws':       'Collaborative operations',
    'services.tool.clarity':   'Web behavior analytics',

    /* SVG timeline labels */
    'services.svg.fase1.num':  'PHASE 1',
    'services.svg.fase1.name': 'Diagnosis',
    'services.svg.fase2.num':  'PHASE 2',
    'services.svg.fase2.name': 'Training',
    'services.svg.fase3.num':  'PHASE 3',
    'services.svg.fase3.name': 'Digitalization',
    'services.svg.fase4.num':  'PHASE 4',
    'services.svg.fase4.name': 'Implementation',

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
