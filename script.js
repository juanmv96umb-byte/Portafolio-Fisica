(function () {
    'use strict';

    /* ═══════════════════════════════════════════
       DATA
    ═══════════════════════════════════════════ */

    const DOCS = {
        caratula: [
            { title: 'Hoja de Vida / Curriculum', file: 'Informacion_Personal/Curriculum.pdf', type: 'Carátula' },
        ],
        silabo: [
            { title: 'Sílabo', file: 'Silabo/Silabo.pdf', type: 'Sílabo' },
        ],
        fundamentos: [
            { title: 'Fundamento Lab 1', file: 'Fundamentos/Fundamento Lab 1.pdf', type: 'Fundamento' },
            { title: 'Fundamento Lab 2', file: 'Fundamentos/Fundamento Lab 2.pdf', type: 'Fundamento' },
            { title: 'Fundamento Lab 3', file: 'Fundamentos/Fundamento Lab 3.pdf', type: 'Fundamento' },
            { title: 'Fundamento Lab 4', file: 'Fundamentos/Fundamento Lab 4.pdf', type: 'Fundamento' },
        ],
        laboratorios: [
            { title: 'Laboratorio 1', file: 'Laboratorios/Laboratorio 1.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 2', file: 'Laboratorios/Laboratorio 2.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 3', file: 'Laboratorios/Laboratorio 3.pdf', type: 'Laboratorio' },
        ],
        trabajos: [
            { title: 'Informe Grupal 1', file: 'Informes_Grupales/Informe Grupal 1.pdf', type: 'Grupal' },
        ],
        individuales: [
            { title: 'Tarea N°3', file: 'Tareas/TareaN3.pdf', type: 'Individual' },
        ],
        mapas: [
            { title: 'Mapa Mental 1', file: 'Mapas_Mentales/Mapa Mental 1.pdf', type: 'Mapa Mental' },
            { title: 'Mapa Mental 2', file: 'Mapas_Mentales/Mapa Mental 2.pdf', type: 'Mapa Mental' },
            { title: 'Mapa Mental 3', file: 'Mapas_Mentales/Mapa Mental 3.pdf', type: 'Mapa Mental' },
            { title: 'Mapa mental 4', file: 'Mapas_Mentales/Mapa mental 4.pdf', type: 'Mapa Mental' },
        ],
        pruebas: [
            { title: 'Prueba Lab 1', file: 'Pruebas/Prueba lab 1.pdf', type: 'Prueba' },
            { title: 'Prueba Lab 2', file: 'Pruebas/Prueba lab 2.pdf', type: 'Prueba' },
        ],
        ensayos: [],
        recursos: [
            { title: 'Física (incompleto)', file: 'Material_Apoyo/fisica incompleto.pdf', desc: 'Material de apoyo', icon: 'book' },
        ],
    };

    const RUBRIC = [
        { name: 'Carátula y hoja de vida', desc: 'Presenta datos completos y organizados', max: 1.0, values: [0, 0.5, 1.0] },
        { name: 'Sílabo', desc: 'Incluye sílabo completo y subrayado', max: 1.0, values: [0, 0.5, 1.0] },
        { name: '10 Fundamentos Conceptuales', desc: 'Completos, desarrollados y organizados', max: 2.0, values: [0, 1.0, 2.0] },
        { name: '10 Laboratorios del Centro de Física', desc: 'Completos con evidencias', max: 2.0, values: [0, 1.0, 2.0] },
        { name: 'N.° Trabajos Grupales', desc: 'Solicitados y completos', max: 2.0, values: [0, 1.0, 2.0] },
        { name: 'N.° Trabajos Individuales', desc: 'Completos', max: 2.0, values: [0, 1.0, 2.0] },
        { name: 'N.° Mapas Mentales', desc: 'Completos, claros y organizados', max: 2.0, values: [0, 1.0, 2.0] },
        { name: 'Capturas o videos de recursos', desc: 'Evidencias del uso de recursos', max: 1.0, values: [0, 0.5, 1.0] },
        { name: 'Pruebas de plataforma', desc: 'Todas las pruebas realizadas', max: 2.0, values: [0, 1.0, 2.0] },
        { name: 'Ensayos', desc: 'Buena redacción, ortografía y contenido', max: 2.0, values: [0, 1.0, 2.0] },
        { name: 'Creatividad', desc: 'Diseño original, creativo y atractivo', max: 2.0, values: [0, 1.0, 2.0] },
        { name: 'Orden', desc: 'Organizado, limpio, secuencia lógica', max: 1.0, values: [0, 0.5, 1.0] },
    ];

    const ALL_ITEMS = Object.values(DOCS).reduce((a, b) => a.concat(b), []);
    const TOTAL_DOCS = ALL_ITEMS.length;
    const RUBRIC_MAX = RUBRIC.reduce((s, r) => s + r.max, 0);

    /* ═══════════════════════════════════════════
       STATE
    ═══════════════════════════════════════════ */

    let favorites = loadFavorites();
    let rubricScores = loadRubricScores();

    /* ═══════════════════════════════════════════
       DOM HELPERS
    ═══════════════════════════════════════════ */

    const $ = (s, p) => (p || document).querySelector(s);
    const $$ = (s, p) => Array.from((p || document).querySelectorAll(s));

    /* ═══════════════════════════════════════════
       SVG ICONS (inline strings)
    ═══════════════════════════════════════════ */

    const S = {
        pdf: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        eye: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
        dl: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        heart: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
        heartFill: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
        empty: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>',
        book: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
        beaker: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>',
        clipboard: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>',
        external: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    };

    const RES_ICONS = { book: S.book, beaker: S.beaker, clipboard: S.clipboard };

    /* ═══════════════════════════════════════════
       FAVORITES
    ═══════════════════════════════════════════ */

    function loadFavorites() {
        try { return JSON.parse(localStorage.getItem('pfavs')) || []; } catch { return []; }
    }

    function saveFavorites() {
        localStorage.setItem('pfavs', JSON.stringify(favorites));
    }

    function toggleFav(file) {
        const i = favorites.indexOf(file);
        i > -1 ? favorites.splice(i, 1) : favorites.push(file);
        saveFavorites();
        updateStats();
        return favorites.includes(file);
    }

    function isFav(file) { return favorites.includes(file); }

    /* ═══════════════════════════════════════════
       RUBRIC SCORES
    ═══════════════════════════════════════════ */

    function loadRubricScores() {
        try { return JSON.parse(localStorage.getItem('prubric')) || {}; } catch { return {}; }
    }

    function saveRubricScores() {
        localStorage.setItem('prubric', JSON.stringify(rubricScores));
    }

    function getRubricScore(idx) {
        return rubricScores[idx] !== undefined ? rubricScores[idx] : 0;
    }

    function setRubricScore(idx, val) {
        rubricScores[idx] = val;
        saveRubricScores();
        renderRubricTotal();
    }

    /* ═══════════════════════════════════════════
       ESCAPE
    ═══════════════════════════════════════════ */

    function esc(str) {
        var d = document.createElement('div');
        d.textContent = str;
        return d.innerHTML;
    }

    /* ═══════════════════════════════════════════
       RENDER: DOCUMENT CARD
    ═══════════════════════════════════════════ */

    function renderDocCard(item, index) {
        var faved = isFav(item.file);
        var card = document.createElement('div');
        card.className = 'doc-card';
        card.dataset.file = item.file;
        card.dataset.search = (item.title + ' ' + (item.type || '')).toLowerCase();
        if (typeof index === 'number') {
            card.style.animationDelay = (index * 40) + 'ms';
        }

        card.innerHTML =
            '<div class="doc-card__thumb doc-card__thumb--loading"><div class="doc-card__thumb-placeholder">' + S.pdf + '</div></div>' +
            '<div class="doc-card__body">' +
                '<div class="doc-card__title">' + esc(item.title) + '</div>' +
                '<div class="doc-card__meta">' + esc(item.type || item.section || 'Documento') + '</div>' +
                '<div class="doc-card__actions">' +
                    '<a href="' + esc(item.file) + '" target="_blank" rel="noopener" class="doc-card__btn doc-card__btn--primary">' + S.eye + ' Ver</a>' +
                    '<a href="' + esc(item.file) + '" download class="doc-card__btn">' + S.dl + '</a>' +
                    '<button class="doc-card__btn doc-card__btn--fav" data-faved="' + faved + '" title="' + (faved ? 'Quitar' : 'Añadir') + ' favorito">' + (faved ? S.heartFill : S.heart) + '</button>' +
                '</div>' +
            '</div>';

        card.querySelector('.doc-card__btn--fav').addEventListener('click', function (e) {
            e.preventDefault();
            var now = toggleFav(item.file);
            this.dataset.faved = now;
            this.innerHTML = now ? S.heartFill : S.heart;
            this.title = now ? 'Quitar favorito' : 'Añadir favorito';
        });

        return card;
    }

    /* ═══════════════════════════════════════════
       RENDER: RESOURCE CARD
    ═══════════════════════════════════════════ */

    function renderResCard(item, index) {
        var a = document.createElement('a');
        a.className = 'resource-card';
        a.href = item.file;
        a.target = '_blank';
        a.rel = 'noopener';
        if (typeof index === 'number') {
            a.style.animationDelay = (index * 40) + 'ms';
        }
        a.innerHTML =
            '<div class="resource-card__icon">' + (RES_ICONS[item.icon] || S.book) + '</div>' +
            '<div class="resource-card__info">' +
                '<div class="resource-card__title">' + esc(item.title) + '</div>' +
                '<div class="resource-card__desc">' + esc(item.desc || '') + '</div>' +
            '</div>' +
            '<div class="resource-card__arrow">' + S.external + '</div>';
        return a;
    }

    /* ═══════════════════════════════════════════
       RENDER: EMPTY STATE
    ═══════════════════════════════════════════ */

    function renderEmpty(grid) {
        grid.innerHTML = '<div class="empty-state">' + S.empty + '<div class="empty-state__text">Sección sin documentos aún</div></div>';
    }

    /* ═══════════════════════════════════════════
       RENDER: GRID
    ═══════════════════════════════════════════ */

    function renderGrid(id, items) {
        var grid = document.getElementById('grid-' + id);
        if (!grid) return;
        grid.innerHTML = '';
        if (!items || items.length === 0) {
            renderEmpty(grid);
            return;
        }
        var frag = document.createDocumentFragment();
        items.forEach(function (item, index) {
            if (item.desc !== undefined) {
                frag.appendChild(renderResCard(item, index));
            } else {
                frag.appendChild(renderDocCard(item, index));
            }
        });
        grid.appendChild(frag);
    }

    function renderAll() {
        for (var key in DOCS) {
            if (!DOCS.hasOwnProperty(key)) continue;
            if (key === 'individuales') continue;
            if (key === 'trabajos') {
                renderGrid('trabajos', DOCS.trabajos.concat(DOCS.individuales));
            } else {
                renderGrid(key, DOCS[key]);
            }
        }
    }

    /* ═══════════════════════════════════════════
       THUMBNAIL ENGINE
    ═══════════════════════════════════════════ */

    var thumbQueue = [];
    var thumbBusy = false;

    function ensurePdfReady() {
        if (typeof pdfjsLib !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            return true;
        }
        return false;
    }

    function queueThumbnail(file, container) {
        thumbQueue.push({ file: file, el: container });
        processQueue();
    }

    function processQueue() {
        if (thumbBusy || thumbQueue.length === 0) return;
        thumbBusy = true;
        var job = thumbQueue.shift();
        renderThumb(job.file, job.el, function () {
            thumbBusy = false;
            processQueue();
        });
    }

    function renderThumb(file, container, done) {
        if (!ensurePdfReady()) {
            container.classList.remove('doc-card__thumb--loading');
            container.classList.add('doc-card__thumb--fallback');
            done();
            return;
        }

        var key = 't_' + file.replace(/[^a-zA-Z0-9]/g, '_');
        var cached;
        try { cached = localStorage.getItem(key); } catch (e) {}
        if (cached) {
            container.innerHTML = '';
            var img = document.createElement('img');
            img.src = cached;
            img.alt = '';
            container.appendChild(img);
            container.classList.remove('doc-card__thumb--loading');
            done();
            return;
        }

        pdfjsLib.getDocument(file).promise.then(function (pdf) {
            return pdf.getPage(1).then(function (page) {
                var vp = page.getViewport({ scale: 0.25 });
                var c = document.createElement('canvas');
                c.width = vp.width;
                c.height = vp.height;
                return page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise.then(function () {
                    var dataUrl = c.toDataURL('image/webp', 0.5);
                    try { localStorage.setItem(key, dataUrl); } catch (e) {}
                    container.innerHTML = '';
                    container.appendChild(c);
                    container.classList.remove('doc-card__thumb--loading');
                    done();
                });
            });
        }).catch(function () {
            container.classList.remove('doc-card__thumb--loading');
            container.classList.add('doc-card__thumb--fallback');
            done();
        });
    }

    /* ═══════════════════════════════════════════
       LAZY THUMBNAIL OBSERVER
    ═══════════════════════════════════════════ */

    var thumbObserver = null;

    function setupThumbObserver() {
        thumbObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var card = entry.target;
                var container = card.querySelector('.doc-card__thumb--loading');
                if (!container) return;
                container.dataset.queued = '1';
                var file = card.dataset.file;
                if (file) queueThumbnail(file, container);
                thumbObserver.unobserve(card);
            });
        }, { rootMargin: '150px' });

        $$('.doc-card__thumb--loading').forEach(function (el) {
            var card = el.closest('.doc-card');
            if (card) thumbObserver.observe(card);
        });
    }

    /* ═══════════════════════════════════════════
       RENDER: RUBRIC
    ═══════════════════════════════════════════ */

    function renderRubric() {
        var table = document.getElementById('rubricaTable');
        if (!table) return;
        table.innerHTML = '';

        RUBRIC.forEach(function (r, idx) {
            var row = document.createElement('div');
            row.className = 'rubrica-row';

            var info = document.createElement('div');
            info.className = 'rubrica-row__info';
            info.innerHTML = '<div class="rubrica-row__name">' + esc(r.name) + '</div><div class="rubrica-row__desc">' + esc(r.desc) + '</div>';

            var maxEl = document.createElement('div');
            maxEl.className = 'rubrica-row__max';
            maxEl.textContent = r.max.toFixed(1);

            var scores = document.createElement('div');
            scores.className = 'rubrica-row__scores';

            var current = getRubricScore(idx);

            r.values.forEach(function (v) {
                var btn = document.createElement('button');
                btn.className = 'rubrica-opt' + (v === current ? ' rubrica-opt--active' : '');
                btn.textContent = v.toFixed(v % 1 === 0 ? 0 : 1);
                btn.addEventListener('click', function () {
                    setRubricScore(idx, v);
                    // update UI
                    row.querySelectorAll('.rubrica-opt').forEach(function (b) {
                        b.classList.toggle('rubrica-opt--active', parseFloat(b.textContent) === v);
                    });
                });
                scores.appendChild(btn);
            });

            row.appendChild(info);
            row.appendChild(maxEl);
            row.appendChild(scores);
            table.appendChild(row);
        });
    }

    function renderRubricTotal() {
        var total = 0;
        RUBRIC.forEach(function (r, idx) {
            total += getRubricScore(idx);
        });
        var el = document.getElementById('rubricaScore');
        var fill = document.getElementById('rubricaFill');
        if (el) el.textContent = total.toFixed(1) + ' / ' + RUBRIC_MAX.toFixed(1);
        if (fill) fill.style.width = Math.min(100, (total / RUBRIC_MAX) * 100) + '%';
    }

    /* ═══════════════════════════════════════════
       SEARCH & FILTER
    ═══════════════════════════════════════════ */

    function setupSearch(sectionId) {
        var input = document.getElementById('search' + cap(sectionId));
        var filterBtn = document.getElementById('filter' + cap(sectionId));
        var grid = document.getElementById('grid-' + sectionId);
        if (!input || !grid) return;

        var favOnly = false;

        function apply() {
            var q = input.value.toLowerCase().trim();
            var cards = grid.querySelectorAll('.doc-card');
            var v = 0;
            cards.forEach(function (c) {
                var match = !q || (c.dataset.search || '').indexOf(q) > -1;
                var fav = !favOnly || c.querySelector('.doc-card__btn--fav').dataset.faved === 'true';
                var show = match && fav;
                c.classList.toggle('doc-card--hidden', !show);
                if (show) v++;
            });
            return v;
        }

        input.addEventListener('input', apply);

        if (filterBtn) {
            filterBtn.addEventListener('click', function () {
                favOnly = !favOnly;
                this.classList.toggle('btn--active', favOnly);
                this.innerHTML = (favOnly ? S.heartFill + ' Favoritos' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/></svg> Filtrar');
                apply();
            });
        }
    }

    function cap(s) {
        if (s === 'fundamentos') return 'Fundamentos';
        if (s === 'laboratorios') return 'Laboratorios';
        if (s === 'trabajos') return 'Trabajos';
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    /* ═══════════════════════════════════════════
       STATS
    ═══════════════════════════════════════════ */

    function updateStats() {
        var td = document.getElementById('totalDocs');
        if (td) td.textContent = TOTAL_DOCS;

        var fv = document.getElementById('favoritosCount');
        if (fv) fv.textContent = favorites.length;

        var pct = TOTAL_DOCS > 0 ? Math.round((favorites.length / TOTAL_DOCS) * 100) : 0;
        var tr = document.getElementById('totalRubrica');
        if (tr) {
            tr.textContent = pct + '%';
            tr.style.color = pct >= 80 ? 'var(--color-green)' : pct >= 40 ? 'var(--color-yellow)' : 'var(--color-red)';
        }
    }

    /* ═══════════════════════════════════════════
       SECTION ENTRANCE OBSERVER
    ═══════════════════════════════════════════ */

    function setupSectionObserver() {
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) e.target.classList.add('section--visible');
            });
        }, { threshold: 0.1 });

        $$('[data-section]').forEach(function (s) { obs.observe(s); });
    }

    /* ════════════════════════════════════════════════════
       NAV SCROLL SPY
    ═══════════════════════════════════════════ */

    function setupScrollSpy() {
        var links = $$('.top-nav__link');
        var targets = $$('[data-section]');

        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                var id = e.target.id;
                links.forEach(function (l) {
                    l.removeAttribute('aria-current');
                    if (l.getAttribute('href') === '#' + id) l.setAttribute('aria-current', 'page');
                });
            });
        }, { threshold: 0.25, rootMargin: '0px 0px -30% 0px' });

        targets.forEach(function (t) { obs.observe(t); });
    }

    /* ═══════════════════════════════════════════
       NAV TOGGLE (mobile)
    ═══════════════════════════════════════════ */

    function setupNavToggle() {
        var btn = document.getElementById('navToggle');
        var menu = document.getElementById('navLinks');
        if (!btn || !menu) return;

        btn.addEventListener('click', function () {
            var open = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!open));
            menu.classList.toggle('top-nav__links--open', !open);
        });

        menu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                btn.setAttribute('aria-expanded', 'false');
                menu.classList.remove('top-nav__links--open');
            });
        });
    }

    /* ═══════════════════════════════════════════
       SCROLL TO TOP
    ═══════════════════════════════════════════ */

    function setupScrollTop() {
        var btn = document.getElementById('scrollTop');
        if (!btn) return;
        var ticking = false;
        window.addEventListener('scroll', function () {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(function () {
                btn.classList.toggle('scroll-top--visible', window.scrollY > 400);
                ticking = false;
            });
        });
        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ═══════════════════════════════════════════
       THEME SYSTEM
    ═══════════════════════════════════════════ */

    function setupTheme() {
        var toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            toggle.setAttribute('aria-label', theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro');
        }

        var saved = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var currentTheme = saved || (prefersDark ? 'dark' : 'light');
        applyTheme(currentTheme);

        toggle.addEventListener('click', function () {
            var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            applyTheme(isDark ? 'light' : 'dark');
        });
    }

    /* ═══════════════════════════════════════════
       INIT
    ═══════════════════════════════════════════ */

    function init() {
        // 1. Render everything
        renderAll();
        renderRubric();
        renderRubricTotal();

        // 2. Stats
        updateStats();

        // 3. Search
        setupSearch('fundamentos');
        setupSearch('laboratorios');
        setupSearch('trabajos');

        // 4. Thumbnails (lazy)
        setupThumbObserver();

        // 5. Observers
        setupSectionObserver();
        setupScrollSpy();

        // 6. UI
        setupTheme();
        setupNavToggle();
        setupScrollTop();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
