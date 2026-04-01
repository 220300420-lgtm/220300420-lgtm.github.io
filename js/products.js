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
    desc: 'Documento que presenta la situación actual del negocio y establece soluciones básicas ordenadas por impacto. Es el punto de partida de todo el proceso.',
    tool: 'Notion',
    phase: 'Diagnóstico',
    phaseNum: 1,
    phaseColor: 'phase-diag',
    chipClass: 'blue',
    tier: 'Base',
  },
  {
    id: 'E02',
    name: 'Mapa del Proceso (As-Is) + Problemas Detectados',
    desc: 'Representación visual del proceso actual del negocio, identificando cuellos de botella, fallas y oportunidades de mejora.',
    tool: 'Microsoft Visio',
    phase: 'Diagnóstico',
    phaseNum: 1,
    phaseColor: 'phase-diag',
    chipClass: 'blue',
    tier: 'Base',
  },
  {
    id: 'E03',
    name: 'Lista de Prioridades (Backlog)',
    desc: 'Tareas y mejoras ordenadas por urgencia, impacto y viabilidad. Proporciona una hoja de ruta clara para el equipo.',
    tool: 'Gestión ágil',
    phase: 'Diagnóstico',
    phaseNum: 1,
    phaseColor: 'phase-diag',
    chipClass: 'blue',
    tier: 'Base',
  },
  {
    id: 'E04',
    name: 'Línea Base de Medición (KPIs Básicos)',
    desc: 'Definición de los indicadores clave de desempeño que permiten medir el estado actual y comparar resultados tras la intervención.',
    tool: 'Databox',
    phase: 'Diagnóstico',
    phaseNum: 1,
    phaseColor: 'phase-diag',
    chipClass: 'blue',
    tier: 'Base',
  },
  /* ── FASE 2: CAPACITACIÓN ── */
  {
    id: 'E05',
    name: 'Manual / Guía Paso a Paso + Materiales',
    desc: 'Documento estructurado con procedimientos claros, capturas de pantalla y recursos de apoyo para que el equipo opere sin depender de la consultoría.',
    tool: 'Notion',
    phase: 'Capacitación',
    phaseNum: 2,
    phaseColor: 'phase-cap',
    chipClass: 'teal',
    tier: 'Base',
  },
  {
    id: 'E06',
    name: 'Biblioteca de Videos Cortos',
    desc: 'Videos breves que explican tareas frecuentes para estandarizar procesos y facilitar el onboarding de nuevo personal en el área náutica.',
    tool: 'Video training',
    phase: 'Capacitación',
    phaseNum: 2,
    phaseColor: 'phase-cap',
    chipClass: 'teal',
    tier: 'Base',
  },
  {
    id: 'E07',
    name: 'Matriz de Avance de Capacitación',
    desc: 'Tablero de seguimiento al progreso del personal con niveles de avance por área, persona y módulo de capacitación.',
    tool: 'Seguimiento de progreso',
    phase: 'Capacitación',
    phaseNum: 2,
    phaseColor: 'phase-cap',
    chipClass: 'teal',
    tier: 'Base',
  },
  {
    id: 'E08',
    name: 'Chatbot Interno de Capacitación con IA',
    desc: 'Asistente de inteligencia artificial entrenado con los procesos de la empresa para brindar apoyo y respuestas rápidas al equipo en cualquier momento.',
    tool: 'IA / Asistente virtual',
    phase: 'Capacitación',
    phaseNum: 2,
    phaseColor: 'phase-cap',
    chipClass: 'teal',
    tier: 'Plus',
  },
  /* ── FASE 3: DIGITALIZACIÓN ── */
  {
    id: 'E09',
    name: 'CRM Configurado',
    desc: 'Sistema adaptado a la operación de la marina o club náutico para organizar clientes, seguimiento de leads y mejorar la relación comercial.',
    tool: 'Clientify',
    phase: 'Digitalización',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E10',
    name: 'WhatsApp Profesional (Inbox Multiagente)',
    desc: 'Canal configurado para que varios colaboradores atiendan mensajes desde una sola cuenta de WhatsApp Business, con etiquetas y automatizaciones.',
    tool: 'Kommo Advanced',
    phase: 'Digitalización',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E11',
    name: 'Chatbot para Clientes',
    desc: 'Automatización para atender consultas frecuentes, enviar información de servicios y captar datos de potenciales clientes las 24 horas.',
    tool: 'ManyChat Pro',
    phase: 'Digitalización',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Plus',
  },
  {
    id: 'E12',
    name: 'Automatizaciones de Seguimiento',
    desc: 'Procesos automáticos para seguimiento de clientes, recordatorios de citas, confirmaciones de reservas y notificaciones del equipo.',
    tool: 'Make Core',
    phase: 'Digitalización',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Plus',
  },
  {
    id: 'E13',
    name: 'Dashboard / Tablero de KPIs',
    desc: 'Panel visual de indicadores de desempeño en tiempo real: ocupación de amarres, ingresos, clientes atendidos y más.',
    tool: 'Google Looker Studio',
    phase: 'Digitalización',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E14',
    name: 'SOPs y Checklists Operativos',
    desc: 'Documentos descriptivos (Procedimientos Operativos Estándar) que aseguran la correcta ejecución de tareas por cualquier miembro del equipo.',
    tool: 'Notion Plus',
    phase: 'Digitalización',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E15',
    name: 'Página Web / Landing + Formularios',
    desc: 'Desarrollo web profesional para captar leads, mostrar servicios náuticos y recibir reservas o solicitudes de información en línea.',
    tool: 'WordPress + Elementor + Hostinger',
    phase: 'Digitalización',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Plus',
  },
  {
    id: 'E16',
    name: 'Dominio + Hosting + Correo Corporativo',
    desc: 'Configuración profesional de presencia digital: dominio personalizado, servidor de alta disponibilidad y correos corporativos para el equipo.',
    tool: 'Cloudflare + Hostinger + Google Workspace',
    phase: 'Digitalización',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Base',
  },
  {
    id: 'E17',
    name: 'Configuración de Analítica Web',
    desc: 'Implementación de herramientas para medir tráfico, comportamiento de visitantes, conversiones y origen de clientes potenciales.',
    tool: 'GA4 + GTM + Microsoft Clarity',
    phase: 'Digitalización',
    phaseNum: 3,
    phaseColor: 'phase-dig',
    chipClass: 'purple',
    tier: 'Plus',
  },
  /* ── FASE 4: IMPLEMENTACIÓN INTEGRAL ── */
  {
    id: 'E18',
    name: 'ERP Implementado',
    desc: 'Sistema integrado para gestionar ventas, operaciones y fiscal de forma centralizada. Conecta todas las áreas del negocio náutico en un solo flujo.',
    tool: 'Make.com',
    phase: 'Implementación Integral',
    phaseNum: 4,
    phaseColor: 'phase-int',
    chipClass: 'blue',
    tier: 'Plus',
  },
  {
    id: 'E19',
    name: 'Integración entre Herramientas',
    desc: 'Automatización y centralización de la información de todos los sistemas: CRM, WhatsApp, ERP, dashboard y más, trabajando en sincronía.',
    tool: 'Zapier / n8n',
    phase: 'Implementación Integral',
    phaseNum: 4,
    phaseColor: 'phase-int',
    chipClass: 'blue',
    tier: 'Plus',
  },
  {
    id: 'E20',
    name: 'Seguimiento Mensual',
    desc: 'Reportes mensuales de resultados, análisis de KPIs, identificación de desviaciones y ajustes de la estrategia digital. El cliente nunca navega solo.',
    tool: 'Reportes personalizados',
    phase: 'Implementación Integral',
    phaseNum: 4,
    phaseColor: 'phase-int',
    chipClass: 'blue',
    tier: 'Plus',
  },
];

/* ─── RENDERIZADOR DE CARD ─── */
ADAPTIA.renderCard = function(product, options = {}) {
  const { full = false, featured = false } = options;
  const featClass = featured ? ' p-card--featured' : '';
  const fullClass = full     ? ' full'             : '';

  return `
    <div class="p-card${featClass}${fullClass}"
         onclick="openProductModal(ADAPTIA.products.find(p=>p.id==='${product.id}'))">
      <div class="p-card__top">
        <span class="p-card__id">${product.id}</span>
        <div class="p-card__badges">
          <span class="chip chip-${product.chipClass}">${product.tier}</span>
        </div>
      </div>
      <span class="p-card__phase ${product.phaseColor}">${product.phase}</span>
      <div class="p-card__name">${product.name}</div>
      ${full ? `<p class="p-card__desc">${product.desc}</p>` : ''}
      ${full ? `<div class="p-card__cta">Consultar por WhatsApp →</div>` : ''}
    </div>
  `;
};

/* ─── RENDER GRIDS DE HOME (preview — 8 cards) ─── */
ADAPTIA.renderHomeGrid = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const preview = ADAPTIA.products.slice(0, 8);
  container.innerHTML = preview.map(p => ADAPTIA.renderCard(p, { full: false })).join('');
};

/* ─── RENDER COMPLETO POR FASE (entregables.html) ─── */
ADAPTIA.renderCatalog = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const phases = [
    { num: 1, name: 'Diagnóstico', desc: 'Identificar el estado actual y las áreas de oportunidad', numClass: 'phase-1-num' },
    { num: 2, name: 'Capacitación', desc: 'Dominar herramientas y estandarizar procesos con IA',  numClass: 'phase-2-num' },
    { num: 3, name: 'Digitalización', desc: 'Automatización, CRM, dashboards y presencia digital',  numClass: 'phase-3-num' },
    { num: 4, name: 'Implementación Integral', desc: 'Centralización total: ERP, integraciones y seguimiento', numClass: 'phase-4-num' },
  ];

  container.innerHTML = phases.map(phase => {
    const phaseProducts = ADAPTIA.products.filter(p => p.phaseNum === phase.num);
    const cards = phaseProducts.map(p => ADAPTIA.renderCard(p, { full: true })).join('');
    return `
      <div class="catalog__phase-section reveal" data-phase="${phase.num}">
        <div class="catalog__phase-header">
          <div class="catalog__phase-num ${phase.numClass}">${phase.num}</div>
          <div class="catalog__phase-info">
            <div class="catalog__phase-name">Fase ${phase.num}: ${phase.name}</div>
            <div class="catalog__phase-desc">${phase.desc}</div>
          </div>
        </div>
        <div class="catalog__grid">${cards}</div>
      </div>
    `;
  }).join('');
};

/* ─── FILTROS DE ENTREGABLES ─── */
ADAPTIA.initFilters = function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const typeBtns   = document.querySelectorAll('.type-btn');

  let activePhase = 'all';
  let activeTier  = 'all';

  function applyFilters() {
    document.querySelectorAll('.catalog__phase-section').forEach(section => {
      const phaseNum = section.dataset.phase;
      const phaseMatch = activePhase === 'all' || activePhase === phaseNum;
      section.classList.toggle('hidden', !phaseMatch);
    });

    document.querySelectorAll('.p-card').forEach(card => {
      const tier = card.querySelector('.chip')?.textContent?.trim().toLowerCase();
      const tierMatch = activeTier === 'all' || tier === activeTier;
      card.classList.toggle('filtered-out', !tierMatch);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePhase = btn.dataset.phase;
      applyFilters();
    });
  });

  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTier = btn.dataset.tier;
      applyFilters();
    });
  });
};
