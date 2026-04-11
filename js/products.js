/* ═══════════════════════════════════════════════════════════════
   ADAPTIA — products.js
   Data de los 20 entregables + helpers de render
═══════════════════════════════════════════════════════════════ */

"use strict";

window.ADAPTIA = window.ADAPTIA || {};

/* ─── DATA ─── */
ADAPTIA.products = [
  /* ── FASE 1: DIAGNÓSTICO ── */
  {
    id: 'E01',
    name: 'Informe Diagnóstico + Propuesta Priorizada',
    nameEn: 'Diagnostic Report + Prioritized Proposal',
    desc: 'Documento que presenta la situación actual del negocio y establece soluciones básicas ordenadas por impacto. Es el punto de partida de todo el proceso.',
    descEn: 'Document presenting the current state of the business and establishing basic solutions ordered by impact. It is the starting point of the entire process.',
    tool: 'Notion',
    phase: 'Diagnóstico',
    phaseEn: 'Diagnosis',
    phaseNum: 1,
    phaseColor: 'phase-diag',
    chipClass: 'blue',
    tier: 'Base',
  },
  {
    id: 'E02',
    name: 'Mapa del Proceso (As-Is) + Problemas Detectados',
    nameEn: 'Process Map (As-Is) + Detected Issues',
    desc: 'Representación visual del proceso actual del negocio, identificando cuellos de botella, fallas y oportunidades de mejora.',
    descEn: 'Visual representation of the current business process, identifying bottlenecks, failures and improvement opportunities.',
    tool: 'Microsoft Visio',
    phase: 'Diagnóstico',
    phaseEn: 'Diagnosis',
    phaseNum: 1,
    phaseColor: 'phase-diag',
    chipClass: 'blue',
    tier: 'Base',
  },
  {
    id: 'E03',
    name: 'Lista de Prioridades (Backlog)',
    nameEn: 'Priority List (Backlog)',
    desc: 'Tareas y mejoras ordenadas por urgencia, impacto y viabilidad. Proporciona una hoja de ruta clara para el equipo.',
    descEn: 'Tasks and improvements ordered by urgency, impact and feasibility. Provides a clear roadmap for the team.',
    tool: 'Gestión ágil',
    phase: 'Diagnóstico',
    phaseEn: 'Diagnosis',
    phaseNum: 1,
    phaseColor: 'phase-diag',
    chipClass: 'blue',
    tier: 'Base',
  },
  {
    id: 'E04',
    name: 'Línea Base de Medición (KPIs Básicos)',
    nameEn: 'Measurement Baseline (Basic KPIs)',
    desc: 'Definición de los indicadores clave de desempeño que permiten medir el estado actual y comparar resultados tras la intervención.',
    descEn: 'Definition of key performance indicators that measure the current state and compare results after the intervention.',
    tool: 'Databox',
    phase: 'Diagnóstico',
    phaseEn: 'Diagnosis',
    phaseNum: 1,
    phaseColor: 'phase-diag',
    chipClass: 'blue',
    tier: 'Base',
  },
  /* ── FASE 2: CAPACITACIÓN ── */
  {
    id: 'E05',
    name: 'Manual / Guía Paso a Paso + Materiales',
    nameEn: 'Manual / Step-by-Step Guide + Materials',
    desc: 'Documento estructurado con procedimientos claros, capturas de pantalla y recursos de apoyo para que el equipo opere sin depender de la consultoría.',
    descEn: 'Structured document with clear procedures, screenshots and support resources so the team operates independently.',
    tool: 'Notion',
    phase: 'Capacitación',
    phaseEn: 'Training',
    phaseNum: 2,
    phaseColor: 'phase-cap',
    chipClass: 'teal',
    tier: 'Base',
  },
  {
    id: 'E06',
    name: 'Biblioteca de Videos Cortos',
    nameEn: 'Short Video Library',
    desc: 'Videos breves que explican tareas frecuentes para estandarizar procesos y facilitar el onboarding de nuevo personal en el área náutica.',
    descEn: 'Short videos explaining frequent tasks to standardize processes and facilitate onboarding of new nautical staff.',
    tool: 'Video training',
    phase: 'Capacitación',
    phaseEn: 'Training',
    phaseNum: 2,
    phaseColor: 'phase-cap',
    chipClass: 'teal',
    tier: 'Base',
  },
  {
    id: 'E07',
    name: 'Matriz de Avance de Capacitación',
    nameEn: 'Training Progress Matrix',
    desc: 'Tablero de seguimiento al progreso del personal con niveles de avance por área, persona y módulo de capacitación.',
    descEn: 'Staff progress tracking board with advancement levels by area, person and training module.',
    tool: 'Seguimiento de progreso',
    phase: 'Capacitación',
    phaseEn: 'Training',
    phaseNum: 2,
    phaseColor: 'phase-cap',
    chipClass: 'teal',
    tier: 'Base',
  },
  {
    id: 'E08',
    name: 'Chatbot Interno de Capacitación con IA',
    nameEn: 'Internal AI Training Chatbot',
    desc: 'Asistente de inteligencia artificial entrenado con los procesos de la empresa para brindar apoyo y respuestas rápidas al equipo en cualquier momento.',
    descEn: 'Artificial intelligence assistant trained on company processes to provide support and quick answers to the team at any time.',
    tool: 'IA / Asistente virtual',
    phase: 'Capacitación',
    phaseEn: 'Training',
    phaseNum: 2,
    phaseColor: 'phase-cap',
    chipClass: 'teal',
    tier: 'Plus',
  },
  /* ── FASE 3: DIGITALIZACIÓN ── */
  {
    id: 'E09',
    name: 'CRM Configurado',
    nameEn: 'Configured CRM',
    desc: 'Sistema adaptado a la operación de la marina o club náutico para organizar clientes, seguimiento de leads y mejorar la relación comercial.',
    descEn: 'System adapted to marina or yacht club operations to organize clients, track leads and improve commercial relationships.',
    tool: 'Clientify',
    phase: 'Digitalización',
    phaseEn: 'Digitalization',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E10',
    name: 'WhatsApp Profesional (Inbox Multiagente)',
    nameEn: 'Professional WhatsApp (Multi-Agent Inbox)',
    desc: 'Canal configurado para que varios colaboradores atiendan mensajes desde una sola cuenta de WhatsApp Business, con etiquetas y automatizaciones.',
    descEn: 'Channel configured so multiple team members handle messages from a single WhatsApp Business account, with labels and automations.',
    tool: 'Kommo Advanced',
    phase: 'Digitalización',
    phaseEn: 'Digitalization',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E11',
    name: 'Chatbot para Clientes',
    nameEn: 'Customer Chatbot',
    desc: 'Automatización para atender consultas frecuentes, enviar información de servicios y captar datos de potenciales clientes las 24 horas.',
    descEn: 'Automation to handle frequent inquiries, send service information and capture potential customer data 24 hours a day.',
    tool: 'ManyChat Pro',
    phase: 'Digitalización',
    phaseEn: 'Digitalization',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Plus',
  },
  {
    id: 'E12',
    name: 'Automatizaciones de Seguimiento',
    nameEn: 'Follow-Up Automations',
    desc: 'Procesos automáticos para seguimiento de clientes, recordatorios de citas, confirmaciones de reservas y notificaciones del equipo.',
    descEn: 'Automated processes for client follow-up, appointment reminders, booking confirmations and team notifications.',
    tool: 'Make Core',
    phase: 'Digitalización',
    phaseEn: 'Digitalization',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Plus',
  },
  {
    id: 'E13',
    name: 'Dashboard / Tablero de KPIs',
    nameEn: 'KPI Dashboard',
    desc: 'Panel visual de indicadores de desempeño en tiempo real: ocupación de amarres, ingresos, clientes atendidos y más.',
    descEn: 'Visual panel of real-time performance indicators: mooring occupancy, revenue, clients served and more.',
    tool: 'Google Looker Studio',
    phase: 'Digitalización',
    phaseEn: 'Digitalization',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E14',
    name: 'SOPs y Checklists Operativos',
    nameEn: 'SOPs and Operational Checklists',
    desc: 'Documentos descriptivos (Procedimientos Operativos Estándar) que aseguran la correcta ejecución de tareas por cualquier miembro del equipo.',
    descEn: 'Descriptive documents (Standard Operating Procedures) that ensure correct task execution by any team member.',
    tool: 'Notion Plus',
    phase: 'Digitalización',
    phaseEn: 'Digitalization',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E15',
    name: 'Página Web / Landing + Formularios',
    nameEn: 'Website / Landing Page + Forms',
    desc: 'Desarrollo web profesional para captar leads, mostrar servicios náuticos y recibir reservas o solicitudes de información en línea.',
    descEn: 'Professional web development to capture leads, showcase nautical services and receive bookings or information requests online.',
    tool: 'WordPress + Elementor + Hostinger',
    phase: 'Digitalización',
    phaseEn: 'Digitalization',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Plus',
  },
  {
    id: 'E16',
    name: 'Dominio + Hosting + Correo Corporativo',
    nameEn: 'Domain + Hosting + Corporate Email',
    desc: 'Configuración profesional de presencia digital: dominio personalizado, servidor de alta disponibilidad y correos corporativos para el equipo.',
    descEn: 'Professional digital presence setup: custom domain, high-availability server and corporate email accounts for the team.',
    tool: 'Cloudflare + Hostinger + Google Workspace',
    phase: 'Digitalización',
    phaseEn: 'Digitalization',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E17',
    name: 'Configuración de Analítica Web',
    nameEn: 'Web Analytics Setup',
    desc: 'Implementación de herramientas para medir tráfico, comportamiento de visitantes, conversiones y origen de clientes potenciales.',
    descEn: 'Implementation of tools to measure traffic, visitor behavior, conversions and source of potential customers.',
    tool: 'GA4 + GTM + Microsoft Clarity',
    phase: 'Digitalización',
    phaseEn: 'Digitalization',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Plus',
  },
  /* ── FASE 4: IMPLEMENTACIÓN INTEGRAL ── */
  {
    id: 'E18',
    name: 'ERP Implementado',
    nameEn: 'ERP Implementation',
    desc: 'Sistema integrado para gestionar ventas, operaciones y fiscal de forma centralizada. Conecta todas las áreas del negocio náutico en un solo flujo.',
    descEn: 'Integrated system to manage sales, operations and financials centrally. Connects all areas of the nautical business in a single flow.',
    tool: 'Make.com',
    phase: 'Implementación Integral',
    phaseEn: 'Full Implementation',
    phaseNum: 4,
    phaseColor: 'phase-int',
    chipClass: 'blue',
    tier: 'Plus',
  },
  {
    id: 'E19',
    name: 'Integración entre Herramientas',
    nameEn: 'Tool Integration',
    desc: 'Automatización y centralización de la información de todos los sistemas: CRM, WhatsApp, ERP, dashboard y más, trabajando en sincronía.',
    descEn: 'Automation and centralization of information from all systems: CRM, WhatsApp, ERP, dashboard and more, working in sync.',
    tool: 'Zapier / n8n',
    phase: 'Implementación Integral',
    phaseEn: 'Full Implementation',
    phaseNum: 4,
    phaseColor: 'phase-int',
    chipClass: 'blue',
    tier: 'Plus',
  },
  {
    id: 'E20',
    name: 'Seguimiento Mensual',
    nameEn: 'Monthly Monitoring',
    desc: 'Reportes mensuales de resultados, análisis de KPIs, identificación de desviaciones y ajustes de la estrategia digital. El cliente nunca navega solo.',
    descEn: 'Monthly results reports, KPI analysis, deviation identification and digital strategy adjustments. The client never navigates alone.',
    tool: 'Reportes personalizados',
    phase: 'Implementación Integral',
    phaseEn: 'Full Implementation',
    phaseNum: 4,
    phaseColor: 'phase-int',
    chipClass: 'blue',
    tier: 'Plus',
  },
];

/* ─── RENDERIZADOR DE CARD ─── */
ADAPTIA.renderCard = function(product, options) {
  options = options || {};
  var full      = options.full      || false;
  var featured  = options.featured  || false;
  var featClass = featured ? ' p-card--featured' : '';
  var fullClass = full     ? ' full'             : '';

  var lang = (window.ADAPTIA && window.ADAPTIA.lang) ? window.ADAPTIA.lang : 'es';
  var name  = (lang === 'en' && product.nameEn)  ? product.nameEn  : product.name;
  var desc  = (lang === 'en' && product.descEn)  ? product.descEn  : product.desc;
  var phase = (lang === 'en' && product.phaseEn) ? product.phaseEn : product.phase;
  var ctaTxt = (lang === 'en') ? 'Inquire via WhatsApp \u2192' : 'Consultar por WhatsApp \u2192';

  return '<div class="p-card' + featClass + fullClass + '"' +
         ' onclick="openProductModal(ADAPTIA.products.find(function(p){return p.id===\'' + product.id + '\';}))">' +
         '<div class="p-card__top">' +
           '<span class="p-card__id">' + product.id + '</span>' +
           '<div class="p-card__badges">' +
             '<span class="chip chip-' + product.chipClass + '">' + product.tier + '</span>' +
           '</div>' +
         '</div>' +
         '<span class="p-card__phase ' + product.phaseColor + '">' + phase + '</span>' +
         '<div class="p-card__name">' + name + '</div>' +
         (full ? '<p class="p-card__desc">' + desc + '</p>' : '') +
         (full ? '<div class="p-card__cta">' + ctaTxt + '</div>' : '') +
         '</div>';
};

/* ─── RENDER GRIDS DE HOME (preview — 8 cards) ─── */
ADAPTIA.renderHomeGrid = function(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var preview = ADAPTIA.products.slice(0, 8);
  container.innerHTML = preview.map(function(p) { return ADAPTIA.renderCard(p, { full: false }); }).join('');
};

/* ─── RENDER COMPLETO POR FASE (entregables.html) ─── */
ADAPTIA.renderCatalog = function(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var lang = (window.ADAPTIA && window.ADAPTIA.lang) ? window.ADAPTIA.lang : 'es';
  var dict = (window.ADAPTIA && window.ADAPTIA.i18n) ? (window.ADAPTIA.i18n[lang] || {}) : {};

  var phases = [
    { num: 1, nameKey: 'products.phase1.name', descKey: 'products.phase1.desc', numClass: 'phase-1-num' },
    { num: 2, nameKey: 'products.phase2.name', descKey: 'products.phase2.desc', numClass: 'phase-2-num' },
    { num: 3, nameKey: 'products.phase3.name', descKey: 'products.phase3.desc', numClass: 'phase-3-num' },
    { num: 4, nameKey: 'products.phase4.name', descKey: 'products.phase4.desc', numClass: 'phase-4-num' },
  ];

  var phaseLabel = (lang === 'en') ? 'Phase' : 'Fase';

  container.innerHTML = phases.map(function(phase) {
    var phaseName = dict[phase.nameKey] || phase.nameKey;
    var phaseDesc = dict[phase.descKey] || phase.descKey;
    var phaseProducts = ADAPTIA.products.filter(function(p) { return p.phaseNum === phase.num; });
    var cards = phaseProducts.map(function(p) { return ADAPTIA.renderCard(p, { full: true }); }).join('');
    return '<div class="catalog__phase-section reveal" data-phase="' + phase.num + '">' +
           '<div class="catalog__phase-header">' +
             '<div class="catalog__phase-num ' + phase.numClass + '">' + phase.num + '</div>' +
             '<div class="catalog__phase-info">' +
               '<div class="catalog__phase-name">' + phaseLabel + ' ' + phase.num + ': ' + phaseName + '</div>' +
               '<div class="catalog__phase-desc">' + phaseDesc + '</div>' +
             '</div>' +
           '</div>' +
           '<div class="catalog__grid">' + cards + '</div>' +
           '</div>';
  }).join('');
};

/* ─── FILTROS DE ENTREGABLES ─── */
ADAPTIA.initFilters = function() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var typeBtns   = document.querySelectorAll('.type-btn');

  var activePhase = 'all';
  var activeTier  = 'all';

  function applyFilters() {
    document.querySelectorAll('.catalog__phase-section').forEach(function(section) {
      var phaseNum = section.dataset.phase;
      var phaseMatch = activePhase === 'all' || activePhase === phaseNum;
      section.classList.toggle('hidden', !phaseMatch);
    });

    document.querySelectorAll('.p-card').forEach(function(card) {
      var chipEl = card.querySelector('.chip');
      var tier = chipEl ? chipEl.textContent.trim().toLowerCase() : '';
      var tierMatch = activeTier === 'all' || tier === activeTier;
      card.classList.toggle('filtered-out', !tierMatch);
    });
  }

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activePhase = btn.dataset.phase;
      applyFilters();
    });
  });

  typeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      typeBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeTier = btn.dataset.tier;
      applyFilters();
    });
  });
};
