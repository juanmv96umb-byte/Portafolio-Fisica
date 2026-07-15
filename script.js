/* ============================================
   FÍSICA APLICADA — PORTAFOLIO ESTUDIANTIL
   Script v3.0 — PDF Previews, Modals, Rubric tracking
   ============================================ */

// ── Configuration ──────────────────────────────
const DOCUMENTS = {
  portada: { title: 'Carátula', rubric: 1.0, items: [] },
  silabo: {
    title: 'Sílabo', rubric: 1.0,
    items: [{ id: 'silabo', file: 'Silabo/Silabo.pdf', title: 'Sílabo Física Aplicada', type: 'pdf' }]
  },
  fundamentos: {
    title: 'Fundamentos Conceptuales', rubric: 2.0,
    items: [
      { id: 'fund-1', file: 'Fundamentos/Fundamento Lab 1.pdf', title: 'Fundamento Lab 1', type: 'pdf' },
      { id: 'fund-2', file: 'Fundamentos/Fundamento Lab 2.pdf', title: 'Fundamento Lab 2', type: 'pdf' },
      { id: 'fund-3', file: 'Fundamentos/Fundamento Lab 3.pdf', title: 'Fundamento Lab 3', type: 'pdf' },
      { id: 'fund-4', file: 'Fundamentos/Fundamento Lab 4.pdf', title: 'Fundamento Lab 4', type: 'pdf' }
    ]
  },
  laboratorios: {
    title: 'Laboratorios del Centro de Física', rubric: 2.0,
    items: [
      { id: 'lab-1', file: 'Laboratorios/Laboratorio 1.pdf', title: 'Laboratorio 1', type: 'pdf' },
      { id: 'lab-2', file: 'Laboratorios/Laboratorio 2.pdf', title: 'Laboratorio 2', type: 'pdf' },
      { id: 'lab-3', file: 'Laboratorios/Laboratorio 3.pdf', title: 'Laboratorio 3', type: 'pdf' }
    ]
  },
  'trabajos-grupales': {
    title: 'Trabajos Grupales', rubric: 2.0,
    items: [
      { id: 'grupal-1', file: 'Informes_Grupales/Informe Grupal 1.pdf', title: 'Informe Grupal 1', type: 'pdf' }
    ]
  },
  'trabajos-individuales': {
    title: 'Trabajos Individuales', rubric: 2.0,
    items: [
      { id: 'tarea-1', file: 'Tareas/TareaN3.pdf', title: 'Tarea N3', type: 'pdf' }
    ]
  },
  'mapas-mentales': {
    title: 'Mapas Mentales', rubric: 2.0,
    items: [
      { id: 'mapa-1', file: 'Mapas_Mentales/Mapa Mental 1.pdf', title: 'Mapa Mental 1', type: 'pdf' },
      { id: 'mapa-2', file: 'Mapas_Mentales/Mapa Mental 2.pdf', title: 'Mapa Mental 2', type: 'pdf' },
      { id: 'mapa-3', file: 'Mapas_Mentales/Mapa Mental 3.pdf', title: 'Mapa Mental 3', type: 'pdf' },
      { id: 'mapa-4', file: 'Mapas_Mentales/Mapa mental 4.pdf', title: 'Mapa Mental 4', type: 'pdf' }
    ]
  },
  recursos: {
    title: 'Capturas o Videos de Recursos', rubric: 1.0,
    items: [
      { id: 'recurso-1', file: 'Material_Apoyo/fisica incompleto.pdf', title: 'Física (Incompleto)', type: 'pdf' },
      { id: 'recurso-2', file: 'Material_Apoyo/Archivo_escaneado_20260429-0739.jpg', title: 'Archivo Escaneado', type: 'image' }
    ]
  },
  pruebas: {
    title: 'Pruebas de Plataforma', rubric: 2.0,
    items: [
      { id: 'prueba-1', file: 'Pruebas/Prueba lab 1.pdf', title: 'Prueba Lab 1', type: 'pdf' },
      { id: 'prueba-2', file: 'Pruebas/Prueba lab 2.pdf', title: 'Prueba Lab 2', type: 'pdf' }
    ]
  },
  ensayos: {
    title: 'Ensayos', rubric: 2.0,
    items: []
  },
  'info-personal': {
    title: 'Información Personal', rubric: '—',
    items: [{ id: 'cv', file: 'Informacion_Personal/Curriculum.pdf', title: 'Currículum Vitae', type: 'pdf' }]
  },
  creatividad: { title: 'Creatividad y Diseño', rubric: 2.0, items: [] }
};

const SECTION_ORDER = [
  'portada', 'silabo', 'fundamentos', 'laboratorios',
  'trabajos-grupales', 'trabajos-individuales', 'mapas-mentales',
  'recursos', 'pruebas', 'ensayos', 'info-personal', 'creatividad'
];

const QUICK_ACCESS_ITEMS = [
  { id: 'silabo', icon: '📋', label: 'Sílabo' },
  { id: 'fundamentos', icon: '📚', label: 'Fundamentos' },
  { id: 'laboratorios', icon: '🔬', label: 'Laboratorios' },
  { id: 'pruebas', icon: '📝', label: 'Pruebas' },
  { id: 'trabajos-individuales', icon: '✏️', label: 'Individuales' },
  { id: 'trabajos-grupales', icon: '👥', label: 'Grupales' },
  { id: 'mapas-mentales', icon: '🧠', label: 'Mapas Mentales' },
  { id: 'recursos', icon: '📸', label: 'Recursos' },
  { id: 'info-personal', icon: '👤', label: 'Mi Info' }
];

// ── State ──────────────────────────────────────
let currentSection = 'portada';
let pdfDoc = null;
let pdfPageNum = 1;
let pdfScale = 1.0;
let currentModalFile = null;
let currentModalType = null;
let pdfThumbsCache = new Map();

// ── DOM Elements ───────────────────────────────
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mainContent = document.getElementById('main-content');
const contentArea = document.getElementById('content-area');
const currentSectionEl = document.getElementById('current-section');
const progressBar = document.getElementById('progress-bar');
const rubricTotalEl = document.getElementById('rubric-total');
const quickAccessGrid = document.getElementById('quick-access-grid');
const themeToggle = document.getElementById('theme-toggle');

const pdfModal = document.getElementById('pdf-modal');
const pdfCanvas = document.getElementById('pdf-canvas');
const pdfLoading = document.getElementById('pdf-loading');
const pdfError = document.getElementById('pdf-error');
const pdfRetry = document.getElementById('pdf-retry');
const pdfPageInfo = document.getElementById('pdf-page-info');
const pdfZoomLevel = document.getElementById('pdf-zoom-level');
const modalTitle = document.getElementById('modal-title');
const modalDownload = document.getElementById('modal-download');
const modalFullscreen = document.getElementById('modal-fullscreen');
const modalClose = document.getElementById('modal-close');
const pdfPrev = document.getElementById('pdf-prev');
const pdfNext = document.getElementById('pdf-next');
const pdfZoomIn = document.getElementById('pdf-zoom-in');
const pdfZoomOut = document.getElementById('pdf-zoom-out');

const imgModal = document.getElementById('img-modal');
const imgModalImage = document.getElementById('img-modal-image');
const imgModalTitle = document.getElementById('img-modal-title');
const imgModalClose = document.getElementById('img-modal-close');

// ── PDF.js Setup ───────────────────────────────
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs';
}

// ── Initialization ─────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  initializeTheme();
  buildQuickAccess();
  renderAllDocumentGrids();
  setupEventListeners();
  updateProgressBar();
  calculateRubricTotal();
  showSection('portada');

  // Preload first page thumbnails
  preloadThumbnails();
});

function initializeTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}

function buildQuickAccess() {
  quickAccessGrid.innerHTML = QUICK_ACCESS_ITEMS.map((item, i) => `
    <button class="shortcut-card" data-section="${item.id}" style="animation-delay: ${i * 40}ms">
      <span class="shortcut-card__icon">${item.icon}</span>
      <span class="shortcut-card__label">${item.label}</span>
    </button>
  `).join('');

  quickAccessGrid.querySelectorAll('.shortcut-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      navigateTo(section);
      closeSidebarMobile();
    });
  });
}

function renderAllDocumentGrids() {
  SECTION_ORDER.forEach(sectionId => {
    if (sectionId === 'portada' || sectionId === 'info-personal' || sectionId === 'creatividad') return;
    const grid = document.getElementById(`grid-${sectionId.replace('-', '-')}`);
    if (grid) renderDocumentGrid(sectionId, grid);
  });
}

function renderDocumentGrid(sectionId, container) {
  const data = DOCUMENTS[sectionId];
  if (!data || !data.items.length) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <span class="empty-state__icon">📄</span>
        <h4 class="empty-state__title">Sin documentos aún</h4>
        <p class="empty-state__text">Los archivos aparecerán aquí cuando se agreguen a la carpeta correspondiente.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = data.items.map((item, i) => `
    <article class="preview-card" data-file="${item.file}" data-title="${item.title}" style="animation-delay: ${i * 50}ms">
      <div class="preview-card__thumb" id="thumb-${item.id}">
        <canvas class="pdf-thumb"></canvas>
        <div class="preview-card__overlay">
          <button class="preview-btn" aria-label="Ver ${item.title}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
        ${item.type === 'image' ? '<span class="type-badge type-image">IMG</span>' : '<span class="type-badge type-pdf">PDF</span>'}
      </div>
      <div class="preview-card__info">
        <h4 class="preview-card__title">${item.title}</h4>
        <p class="preview-card__meta">${formatFileName(item.file)}</p>
        <span class="preview-card__badge badge--pending">Pendiente</span>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.preview-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.preview-btn')) return;
      openPreview(card.dataset.file, card.dataset.title);
    });
    card.querySelector('.preview-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openPreview(card.dataset.file, card.dataset.title);
    });
  });

  // Generate thumbnails
  data.items.forEach(item => generateThumbnail(item.file, `thumb-${item.id}`));
}

function renderMediaGrid(sectionId, container) {
  const data = DOCUMENTS[sectionId];
  if (!data || !data.items.length) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <span class="empty-state__icon">📸</span>
        <h4 class="empty-state__title">Sin recursos aún</h4>
        <p class="empty-state__text">Las capturas y videos aparecerán aquí.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = data.items.map((item, i) => `
    <article class="media-card" data-file="${item.file}" data-title="${item.title}" style="animation-delay: ${i * 50}ms">
      <div class="media-card__thumb" id="thumb-${item.id}">
        ${item.type === 'image' ? `<img src="${item.file}" alt="${item.title}" loading="lazy">` : `<canvas class="pdf-thumb"></canvas>`}
        <div class="media-card__overlay">
          <button class="preview-btn" aria-label="Ver ${item.title}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
        <span class="type-badge type-${item.type === 'image' ? 'image' : 'pdf'}">${item.type === 'image' ? 'IMG' : 'PDF'}</span>
      </div>
      <div class="media-card__info">
        <h4 class="media-card__title">${item.title}</h4>
        <span class="media-card__badge badge--pending">Pendiente</span>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.media-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.preview-btn')) return;
      openPreview(card.dataset.file, card.dataset.title);
    });
    card.querySelector('.preview-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openPreview(card.dataset.file, card.dataset.title);
    });
  });

  data.items.forEach(item => {
    if (item.type === 'pdf') generateThumbnail(item.file, `thumb-${item.id}`);
  });
}

// Override renderDocumentGrid for recursos
const originalRenderDocGrid = renderDocumentGrid;
renderDocumentGrid = function(sectionId, container) {
  if (sectionId === 'recursos') {
    renderMediaGrid(sectionId, container);
  } else {
    originalRenderDocGrid(sectionId, container);
  }
};

// ── Thumbnail Generation ───────────────────────
async function generateThumbnail(filePath, thumbId) {
  if (pdfThumbsCache.has(filePath)) {
    const cached = pdfThumbsCache.get(filePath);
    applyThumbnail(thumbId, cached);
    return;
  }

  try {
    const pdf = await pdfjsLib.getDocument(filePath).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 0.35 });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport }).promise;
    const dataUrl = canvas.toDataURL('image/webp', 0.7);
    pdfThumbsCache.set(filePath, dataUrl);
    applyThumbnail(thumbId, dataUrl);
  } catch (err) {
    console.warn('Thumbnail failed for', filePath, err);
    applyThumbnail(thumbId, null);
  }
}

function applyThumbnail(thumbId, dataUrl) {
  const thumbEl = document.getElementById(thumbId);
  if (!thumbEl) return;
  const canvas = thumbEl.querySelector('canvas.pdf-thumb');
  if (canvas && dataUrl) {
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = dataUrl;
  } else if (canvas) {
    canvas.style.display = 'none';
    thumbEl.style.background = 'linear-gradient(135deg, var(--bg-hover), var(--bg-card))';
    thumbEl.innerHTML += '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--text-muted); margin: auto;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
  }
}

async function preloadThumbnails() {
  const allFiles = [];
  Object.values(DOCUMENTS).forEach(data => {
    data.items.forEach(item => {
      if (item.type === 'pdf') allFiles.push(item.file);
    });
  });
  // Load first 6 in parallel
  await Promise.all(allFiles.slice(0, 6).map(f => generateThumbnail(f, `thumb-${f}`)));
}

// ── Navigation ─────────────────────────────────
function navigateTo(sectionId) {
  if (!DOCUMENTS[sectionId]) return;
  showSection(sectionId);
  updateSidebarActive(sectionId);
  updateProgressBar();
  closeSidebarMobile();
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });

  const target = document.getElementById(`section-${sectionId}`);
  if (target) {
    target.style.display = 'block';
    requestAnimationFrame(() => target.classList.add('active'));
    currentSection = sectionId;
    currentSectionEl.textContent = DOCUMENTS[sectionId].title;
    document.title = `${DOCUMENTS[sectionId].title} | Portafolio Física Aplicada`;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateSidebarActive(sectionId) {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('active');
    btn.removeAttribute('aria-current');
  });
  const activeBtn = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-current', 'true');
  }
}

function updateProgressBar() {
  const index = SECTION_ORDER.indexOf(currentSection);
  const progress = ((index + 1) / SECTION_ORDER.length) * 100;
  progressBar.style.transform = `scaleX(${progress / 100})`;
}

function calculateRubricTotal() {
  let total = 0;
  let earned = 0;
  Object.values(DOCUMENTS).forEach(data => {
    const max = typeof data.rubric === 'number' ? data.rubric : 0;
    total += max;
    // Simple heuristic: if items exist, count as earned
    if (data.items.length > 0) earned += max;
  });
  rubricTotalEl.textContent = `${earned.toFixed(1)} / ${total.toFixed(1)}`;
}

// ── PDF Modal ──────────────────────────────────
async function openPreview(filePath, title) {
  currentModalFile = filePath;
  currentModalType = filePath.split('.').pop().toLowerCase();

  if (currentModalType === 'pdf') {
    await openPdfModal(filePath, title);
  } else {
    openImageModal(filePath, title);
  }
}

async function openPdfModal(filePath, title) {
  modalTitle.textContent = title;
  modalDownload.onclick = () => downloadFile(filePath, title);
  modalDownload.href = filePath;
  modalDownload.download = title + '.pdf';

  pdfModal.showModal();
  pdfLoading.classList.remove('hidden');
  pdfError.classList.add('hidden');
  pdfCanvas.style.display = 'none';
  pdfPageNum = 1;
  pdfScale = 1.0;

  try {
    pdfDoc = await pdfjsLib.getDocument(filePath).promise;
    await renderPdfPage();
  } catch (err) {
    console.error('PDF load error:', err);
    pdfLoading.classList.add('hidden');
    pdfError.classList.remove('hidden');
  }
}

function openImageModal(filePath, title) {
  imgModalTitle.textContent = title;
  imgModalImage.src = filePath;
  imgModalImage.alt = title;
  imgModal.showModal();
}

async function renderPdfPage() {
  if (!pdfDoc) return;
  pdfLoading.classList.remove('hidden');
  pdfError.classList.add('hidden');

  try {
    const page = await pdfDoc.getPage(pdfPageNum);
    const viewport = page.getViewport({ scale: pdfScale });

    pdfCanvas.width = viewport.width;
    pdfCanvas.height = viewport.height;
    pdfCanvas.style.width = '100%';
    pdfCanvas.style.height = 'auto';

    const ctx = pdfCanvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport }).promise;

    pdfCanvas.style.display = 'block';
    pdfLoading.classList.add('hidden');
    pdfPageInfo.textContent = `Página ${pdfPageNum} de ${pdfDoc.numPages}`;
    pdfZoomLevel.textContent = `${Math.round(pdfScale * 100)}%`;

    pdfPrev.disabled = pdfPageNum === 1;
    pdfNext.disabled = pdfPageNum === pdfDoc.numPages;
  } catch (err) {
    console.error('PDF render error:', err);
    pdfLoading.classList.add('hidden');
    pdfError.classList.remove('hidden');
  }
}

function changePdfPage(delta) {
  if (!pdfDoc) return;
  const newPage = pdfPageNum + delta;
  if (newPage >= 1 && newPage <= pdfDoc.numPages) {
    pdfPageNum = newPage;
    renderPdfPage();
  }
}

function changePdfZoom(delta) {
  pdfScale = Math.max(0.5, Math.min(3.0, pdfScale + delta));
  renderPdfPage();
}

function closePdfModal() {
  pdfModal.close();
  pdfDoc = null;
  currentModalFile = null;
}

function closeImageModal() {
  imgModal.close();
  imgModalImage.src = '';
  currentModalFile = null;
}

// ── Event Listeners ────────────────────────────
function setupEventListeners() {
  // Sidebar navigation
  document.querySelectorAll('.nav-item[data-section]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.section));
  });

  // Sidebar toggle
  sidebarToggle.addEventListener('click', toggleSidebar);
  sidebarOverlay.addEventListener('click', closeSidebarMobile);

  // Theme toggle
  themeToggle.addEventListener('click', toggleTheme);

  // Keyboard navigation
  document.addEventListener('keydown', handleKeydown);

  // PDF Modal
  modalClose.addEventListener('click', closePdfModal);
  pdfModal.querySelector('.pdf-modal__backdrop').addEventListener('click', closePdfModal);
  pdfPrev.addEventListener('click', () => changePdfPage(-1));
  pdfNext.addEventListener('click', () => changePdfPage(1));
  pdfZoomIn.addEventListener('click', () => changePdfZoom(0.25));
  pdfZoomOut.addEventListener('click', () => changePdfZoom(-0.25));
  pdfRetry.addEventListener('click', () => {
    if (currentModalFile) openPdfModal(currentModalFile, modalTitle.textContent);
  });

  // Image Modal
  imgModalClose.addEventListener('click', closeImageModal);
  imgModal.querySelector('.img-modal__backdrop').addEventListener('click', closeImageModal);

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (pdfModal.open) closePdfModal();
      if (imgModal.open) closeImageModal();
      if (sidebar.classList.contains('sidebar-visible')) closeSidebarMobile();
    }
  });

  // Touch swipe for mobile sidebar
  let touchStartX = 0;
  sidebar.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  sidebar.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx < -80) closeSidebarMobile();
  }, { passive: true });
}

// ── Sidebar ────────────────────────────────────
function toggleSidebar() {
  const isMobile = window.innerWidth < 1024;
  if (isMobile) {
    sidebar.classList.toggle('sidebar-visible');
    sidebarOverlay.classList.toggle('show', sidebar.classList.contains('sidebar-visible'));
    sidebarToggle.classList.toggle('active', sidebar.classList.contains('sidebar-visible'));
    sidebarToggle.setAttribute('aria-expanded', sidebar.classList.contains('sidebar-visible'));
  } else {
    sidebar.classList.toggle('sidebar-hidden');
    sidebarToggle.classList.toggle('active', sidebar.classList.contains('sidebar-hidden'));
  }
}

function closeSidebarMobile() {
  sidebar.classList.remove('sidebar-visible');
  sidebarOverlay.classList.remove('show');
  sidebarToggle.classList.remove('active');
  sidebarToggle.setAttribute('aria-expanded', 'false');
}

// ── Theme ──────────────────────────────────────
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// ── Keyboard Navigation ────────────────────────
function handleKeydown(e) {
  // Arrow keys for section navigation
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  const index = SECTION_ORDER.indexOf(currentSection);
  if (index === -1) return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    const next = SECTION_ORDER[(index + 1) % SECTION_ORDER.length];
    navigateTo(next);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = SECTION_ORDER[(index - 1 + SECTION_ORDER.length) % SECTION_ORDER.length];
    navigateTo(prev);
  } else if (e.key >= '1' && e.key <= '9') {
    const num = parseInt(e.key, 10) - 1;
    if (SECTION_ORDER[num]) navigateTo(SECTION_ORDER[num]);
  }
}

// ── Utilities ──────────────────────────────────
function formatFileName(path) {
  return path.split('/').pop().replace(/\.[^.]+$/, '').replace(/_/g, ' ');
}

function downloadFile(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function downloadCV() {
  downloadFile('Informacion_Personal/Curriculum.pdf', 'CV_Juan_Valle.pdf');
}

// ── Window Resize ──────────────────────────────
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeSidebarMobile();
  }
  if (pdfModal.open && pdfDoc) {
    renderPdfPage();
  }
});

// ── Expose for inline handlers ─────────────────
window.navigateTo = navigateTo;
window.downloadCV = downloadCV;
window.toggleSidebar = toggleSidebar;