(function () {
    'use strict';

    /* ═══════════════════════════════════════════
       DATA
    ═══════════════════════════════════════════ */

    var DOCS = {
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
            { title: 'Fundamento Lab 5', file: 'Fundamentos/Fundamento Lab 5.pdf', type: 'Fundamento' },
            { title: 'Fundamento Lab 6', file: 'Fundamentos/Fundamento Lab 6.pdf', type: 'Fundamento' },
            { title: 'Fundamento Lab 7', file: 'Fundamentos/Fundamento Lab 7.pdf', type: 'Fundamento' },
            { title: 'Fundamento Lab 8', file: 'Fundamentos/Fundamento Lab 8.pdf', type: 'Fundamento' },
            { title: 'Fundamento Lab 9', file: 'Fundamentos/Fundamento Lab 9.pdf', type: 'Fundamento' },
            { title: 'Fundamento Lab 10', file: 'Fundamentos/Fundamento Lab 10.pdf', type: 'Fundamento' },
        ],
        laboratorios: [
            { title: 'Laboratorio 1: Metrología y Errores', file: 'Laboratorios/Laboratorio 1.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 2: Metrología', file: 'Laboratorios/Laboratorio 2.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 3: Vectores', file: 'Laboratorios/Laboratorio 3.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 4: MRU (Movimiento Rectilíneo Uniforme)', file: 'Laboratorios/Laboratorio 4.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 5: MRUA (Movimiento Rectilíneo Uniformemente Acelerado)', file: 'Laboratorios/Laboratorio 5.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 6: Movimiento Parabólico', file: 'Laboratorios/Laboratorio 6.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 7: Movimiento Simultáneo', file: 'Laboratorios/Laboratorio 7.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 8: Rozamiento', file: 'Laboratorios/Laboratorio 8.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 9: Dinámica 1. Segunda ley de Newton (Atwood)', file: 'Laboratorios/Laboratorio 9.pdf', type: 'Laboratorio' },
            { title: 'Laboratorio 10: Elasticidad. Ley de Hooke', file: 'Laboratorios/Laboratorio 10.pdf', type: 'Laboratorio' },
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
            { title: 'Evaluación Unidad 1 Tema 4', file: 'Pruebas/Evaluacion Unidad 1 Tema 4_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 2 Tema 1', file: 'Pruebas/Evaluación Unidad 2 Tema 1_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 2 Tema 2', file: 'Pruebas/Evaluación Unidad 2 Tema 2_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 2 Tema 3', file: 'Pruebas/Evaluación Unidad 2 Tema 3_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 2 Tema 4', file: 'Pruebas/Evaluación Unidad 2 Tema 4_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 3 Tema 1', file: 'Pruebas/Evaluación Unidad 3 Tema 1_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 3 Tema 2', file: 'Pruebas/Evaluación Unidad 3 Tema 2_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 3 Tema 3', file: 'Pruebas/Evaluación Unidad 3 Tema 3_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 3 Tema 4', file: 'Pruebas/Evaluación Unidad 3 Tema 4_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 4 Tema 1', file: 'Pruebas/Evaluación Unidad 4 Tema 1_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 4 Tema 2', file: 'Pruebas/Evaluación Unidad 4 Tema 2_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 4 Tema 3', file: 'Pruebas/Evaluación Unidad 4 Tema 3_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 4 Tema 4', file: 'Pruebas/Evaluación Unidad 4 Tema 4_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 1 Tema 1', file: 'Pruebas/Unidad 1_tema 1_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 1 Tema 2', file: 'Pruebas/Unidad 1_tema 2_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
            { title: 'Evaluación Unidad 1 Tema 3', file: 'Pruebas/Unidad 1_tema 3_ Revisión del intento _ UCE.pdf', type: 'Prueba' },
        ],
        ensayos: [],
        recursos: [
            { title: 'Física (incompleto)', file: 'Material_Apoyo/fisica incompleto.pdf', type: 'Recurso', desc: 'Material de apoyo', icon: 'book' },
        ],
    };

    var ALL_ITEMS = Object.values(DOCS).reduce(function (a, b) { return a.concat(b); }, []);
    var TOTAL_DOCS = ALL_ITEMS.length;

    var FAVORITES = JSON.parse(localStorage.getItem('favs') || '[]');
    var PDF_PAGE = 1, PDF_TOTAL = 0, PDF_DOC = null;

    /* ═══════════════════════════════════════════
       EL
    ═══════════════════════════════════════════ */

    var $ = function (s, p) { return (p || document).querySelector(s); };
    var $$ = function (s, p) { return (p || document).querySelectorAll(s); };

    var els = {
        navToggle: $('#navToggle'),
        navLinks: $('#navLinks'),
        themeMatrix: $('#themeMatrix'),
        grid: $('#docsGrid'),
        chips: $$('#filterChips .chip'),
        searchOverlay: $('#searchOverlay'),
        searchToggle: $('#searchToggle'),
        searchInput: $('#searchInput'),
        searchResults: $('#searchResults'),
        pdfModal: $('#pdfModal'),
        pdfCanvas: $('#pdfCanvas'),
        pdfTitle: $('#pdfModalTitle'),
        pdfPrev: $('#pdfPrev'),
        pdfNext: $('#pdfNext'),
        pdfPageInfo: $('#pdfPageInfo'),
        pdfClose: $('#pdfModalClose'),
        pdfDownload: $('#pdfDownloadBtn'),
        progress: $('#scrollProgressBar'),
        docCounter: $('#docCounter'),
        labCounter: $('#labCounter'),
        gaugeArc: $('#gaugeArc'),
        gaugeNeedle: $('#gaugeNeedle'),
        gaugeValue: $('#gaugeValue'),
        formulaTicker: $('#formulaTicker'),
        labToolsModal: $('#labToolsModal'),
        labToolsClose: $('#labToolsClose'),
        dockSearch: $('#dockSearch'),
        dockLabTools: $('#dockLabTools'),
        dockTop: $('#dockTop'),
        labToolPanel: $('#labToolPanel'),
        particleCanvas: $('#particleCanvas'),
    };

    /* ═══════════════════════════════════════════
       THEME MATRIX
    ═══════════════════════════════════════════ */

    function setTheme(name) {
      document.body.classList.remove('theme-glitch');
      void document.body.offsetWidth; // reflow para reiniciar animación
      document.body.classList.add('theme-glitch');
      document.documentElement.setAttribute('data-theme', name);
      localStorage.setItem('theme', name);
      els.themeMatrix.querySelectorAll('.theme-btn').forEach(function (b) {
        var act = b.getAttribute('data-theme') === name;
        b.classList.toggle('is-active', act);
        b.setAttribute('aria-checked', act);
      });
      setTimeout(function () { document.body.classList.remove('theme-glitch'); }, 500);
    }

    var saved = localStorage.getItem('theme') || 'quantum';
    setTheme(saved);

    els.themeMatrix.addEventListener('click', function (e) {
        var btn = e.target.closest('.theme-btn');
        if (!btn) return;
        setTheme(btn.getAttribute('data-theme'));
    });

    /* ═══════════════════════════════════════════
       PARTICLE CANVAS (N-Body Gravitational)
    ═══════════════════════════════════════════ */

    (function particles() {
        var canvas = els.particleCanvas;
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var W, H;
        var particles = [];
        var mouse = { x: -9999, y: -9999 };
        var COUNT = 80;

        function resize() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
            particles.forEach(function (p) {
                if (p.x > W) p.x = Math.random() * W;
                if (p.y > H) p.y = Math.random() * H;
            });
        }
        window.addEventListener('resize', resize);
        resize();

        function init() {
            particles = [];
            for (var i = 0; i < COUNT; i++) {
                particles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    r: Math.random() * 2.5 + 1,
                });
            }
        }
        init();

        document.addEventListener('mousemove', function (e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        document.addEventListener('mouseleave', function () {
            mouse.x = -9999;
            mouse.y = -9999;
        });

        function draw() {
            ctx.clearRect(0, 0, W, H);

            var style = getComputedStyle(document.documentElement);
            var accent = style.getPropertyValue('--accent').trim() || 'oklch(0.65 0.2 280)';
            var border = style.getPropertyValue('--border').trim() || 'oklch(0.3 0.04 265 / 0.3)';

            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];

                var dx = mouse.x - p.x;
                var dy = mouse.y - p.y;
                var dist = Math.sqrt(dx * dx + dy * dy) || 1;
                if (dist < 200) {
                    var force = 0.02 * (1 - dist / 200);
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }

                for (var j = i + 1; j < particles.length; j++) {
                    var q = particles[j];
                    var gx = q.x - p.x;
                    var gy = q.y - p.y;
                    var gd = Math.sqrt(gx * gx + gy * gy) || 1;
                    if (gd < 150) {
                        var gf = 0.0003 / (gd * 0.1 + 1);
                        p.vx += (gx / gd) * gf;
                        p.vy += (gy / gd) * gf;
                        q.vx -= (gx / gd) * gf;
                        q.vy -= (gy / gd) * gf;
                    }
                }

                p.vx *= 0.99;
                p.vy *= 0.99;
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = W;
                if (p.x > W) p.x = 0;
                if (p.y < 0) p.y = H;
                if (p.y > H) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = accent;
                ctx.globalAlpha = 0.15 + p.r * 0.1;
                ctx.fill();

                for (var k = i + 1; k < particles.length; k++) {
                    var p2 = particles[k];
                    var ld = Math.hypot(p2.x - p.x, p2.y - p.y);
                    if (ld < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = border;
                        ctx.globalAlpha = 0.08 * (1 - ld / 100);
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            ctx.globalAlpha = 1;
            requestAnimationFrame(draw);
        }
        draw();
    })();

    /* ═══════════════════════════════════════════
       CLICK RIPPLE
    ═══════════════════════════════════════════ */

    document.addEventListener('click', function (e) {
        var ripple = document.createElement('div');
        ripple.style.cssText = 'position:fixed;pointer-events:none;border-radius:50%;background:var(--accent);width:20px;height:20px;left:' + e.clientX + 'px;top:' + e.clientY + 'px;z-index:9999;translate:-50% -50%;animation:rippleOut 0.8s ease forwards';
        var style = document.createElement('style');
        style.textContent = '@keyframes rippleOut{0%{transform:scale(0);opacity:0.5}to{transform:scale(8);opacity:0}}';
        document.head.appendChild(style);
        document.body.appendChild(ripple);
        setTimeout(function () { ripple.remove(); }, 800);
    });

    /* ═══════════════════════════════════════════
       FORMULA TICKER
    ═══════════════════════════════════════════ */

    (function ticker() {
        var formulas = [
            'F = G·m₁m₂ / r²',
            'E = mc²',
            'Δx·Δp ≥ ħ/2',
            'F = m·a',
            'V = I·R',
            'E = h·f',
            'T = 2π√(L/g)',
            'KE = ½mv²',
            'F = k·q₁q₂ / r²',
            'PV = nRT',
        ];
        var idx = 0;
        var el = els.formulaTicker;
        if (!el) return;

        function show(i) {
            var item = el.querySelector('.formula-ticker__item');
            if (!item) {
                var d = document.createElement('span');
                d.className = 'formula-ticker__item is-visible';
                d.textContent = formulas[i];
                el.appendChild(d);
                return;
            }
            item.classList.remove('is-visible');
            setTimeout(function () {
                item.textContent = formulas[i];
                item.classList.add('is-visible');
            }, 500);
        }
        show(0);
        setInterval(function () {
            idx = (idx + 1) % formulas.length;
            show(idx);
        }, 3500);
    })();

    /* ═══════════════════════════════════════════
       SCROLL PROGRESS
    ═══════════════════════════════════════════ */

    window.addEventListener('scroll', function () {
        var s = window.scrollY;
        var h = document.documentElement.scrollHeight - window.innerHeight;
        els.progress.style.width = (h > 0 ? (s / h) * 100 : 0) + '%';
    });

    /* ═══════════════════════════════════════════
       MOBILE NAV
    ═══════════════════════════════════════════ */

    els.navToggle.addEventListener('click', function () {
        var open = els.navLinks.classList.toggle('is-open');
        els.navToggle.classList.toggle('is-active');
        els.navToggle.setAttribute('aria-expanded', open);
    });

    els.navLinks.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            els.navLinks.classList.remove('is-open');
            els.navToggle.classList.remove('is-active');
            els.navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Interceptar enlaces de navegación para hacer scroll y filtrar
    document.addEventListener('click', function (e) {
        var a = e.target.closest('a');
        if (!a) return;
        var href = a.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#hero' && href !== '#profile' && href !== '#instrumentPanel') {
            var filterMap = {
                '#silabo': 'silabo',
                '#fundamentos': 'fundamento',
                '#laboratorios': 'laboratorio',
                '#trabajos': 'grupal',
                '#mapas': 'mapa',
                '#pruebas': 'prueba',
                '#recursos': 'recurso'
            };
            var filterVal = filterMap[href];
            if (filterVal) {
                e.preventDefault();
                var portafolioSection = document.getElementById('portafolio');
                if (portafolioSection) {
                    portafolioSection.scrollIntoView({ behavior: 'smooth' });
                }
                var chip = $('#filterChips .chip[data-filter="' + filterVal + '"]');
                if (chip) {
                    chip.click();
                }
            }
        }
    });

    /* ═══════════════════════════════════════════
       GLOBAL SEARCH
    ═══════════════════════════════════════════ */

    var SEARCH_ITEMS = [];
    var SEARCH_IDX = -1;

    ALL_ITEMS.forEach(function (item, idx) {
        SEARCH_ITEMS.push({
            idx: idx,
            title: item.title.toLowerCase(),
            type: (item.type || '').toLowerCase(),
            raw: item,
        });
    });

    function openSearch() {
        els.searchOverlay.classList.add('is-open');
        els.searchInput.value = '';
        els.searchResults.innerHTML = '';
        SEARCH_IDX = -1;
        setTimeout(function () { els.searchInput.focus(); }, 100);
    }

    function closeSearch() {
        els.searchOverlay.classList.remove('is-open');
        els.searchInput.blur();
    }

    els.searchToggle.addEventListener('click', openSearch);
    els.dockSearch.addEventListener('click', openSearch);

    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (els.searchOverlay.classList.contains('is-open')) closeSearch();
            else openSearch();
        }
        if (e.key === 'Escape') closeSearch();
    });

    els.searchOverlay.addEventListener('click', function (e) {
        if (e.target === els.searchOverlay) closeSearch();
    });

    els.searchInput.addEventListener('input', function () {
        var q = this.value.toLowerCase().trim();
        SEARCH_IDX = -1;
        if (!q) {
            els.searchResults.innerHTML = '<div class="search-modal__empty">Escribí para buscar documentos</div>';
            return;
        }
        var hits = SEARCH_ITEMS.filter(function (s) {
            return s.title.indexOf(q) !== -1 || s.type.indexOf(q) !== -1;
        }).slice(0, 10);
        if (!hits.length) {
            els.searchResults.innerHTML = '<div class="search-modal__empty">Sin resultados</div>';
            return;
        }
        var html = '';
        hits.forEach(function (h, i) {
            html += '<div class="search-result" data-idx="' + i + '" data-file="' + h.raw.file + '" data-title="' + h.raw.title + '">' +
                '<div class="search-result__icon">📄</div>' +
                '<div class="search-result__info">' +
                '<div class="search-result__title">' + h.raw.title + '</div>' +
                '<div class="search-result__meta">' + (h.raw.type || 'Documento') + '</div>' +
                '</div></div>';
        });
        els.searchResults.innerHTML = html;
        els.searchResults._hits = hits;
    });

    els.searchResults.addEventListener('click', function (e) {
        var r = e.target.closest('.search-result');
        if (!r) return;
        openPdf(r.getAttribute('data-file'), r.getAttribute('data-title'));
        closeSearch();
    });

    /* ═══════════════════════════════════════════
       GAUGE ANIMATION
    ═══════════════════════════════════════════ */

    function animateGauge(targetPct) {
        var arc = els.gaugeArc;
        var needle = els.gaugeNeedle;
        var val = els.gaugeValue;
        if (!arc) return;
        var total = 157;
        var start = performance.now();
        var from = parseFloat(val.textContent) || 0;

        function step(now) {
            var t = Math.min((now - start) / 1200, 1);
            var ease = 1 - Math.pow(1 - t, 3);
            var cur = from + (targetPct - from) * ease;
            arc.style.strokeDashoffset = total - (total * cur / 100);
            var angle = -120 + (cur / 100) * 240;
            needle.setAttribute('transform', 'rotate(' + angle + ', 60, 58)');
            val.textContent = Math.round(cur) + '%';
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    /* ═══════════════════════════════════════════
       RENDER DOCS
    ═══════════════════════════════════════════ */

    function typeIcon(type) {
        var m = { 'Sílabo': '📋', 'Fundamento': '📘', 'Laboratorio': '🔬', 'Grupal': '👥', 'Individual': '📝', 'Mapa Mental': '🧠', 'Prueba': '✍️', 'Carátula': '🪪', 'book': '📚' };
        return m[type] || '📄';
    }

    function renderDocs(items) {
        els.grid.innerHTML = '';
        if (!items || items.length === 0) {
            els.grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--ink-3)">No hay documentos en esta categoría</div>';
            return;
        }
        items.forEach(function (item) {
            var fav = FAVORITES.indexOf(item.file) !== -1;
            var card = document.createElement('div');
            card.className = 'doc-card';
            card.setAttribute('data-file', item.file);
            card.setAttribute('data-title', item.title);
            card.innerHTML =
                '<div class="doc-card__header">' +
                '<div class="doc-card__icon">' + typeIcon(item.type) + '</div>' +
                '<div class="doc-card__info">' +
                '<div class="doc-card__title">' + item.title + '</div>' +
                '<div class="doc-card__type">' + (item.type || 'Documento') + '</div>' +
                '</div>' +
                '</div>' +
                '<div class="doc-card__tags">' +
                '<span class="doc-card__tag">' + (item.type || 'Documento') + '</span>' +
                '</div>' +
                '<div class="doc-card__actions">' +
                '<a href="' + item.file + '" target="_blank" class="doc-card__action" title="Abrir PDF">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
                '</a>' +
                '<button class="doc-card__action doc-card__action--fave' + (fav ? ' is-faved' : '') + '" data-file="' + item.file + '" title="' + (fav ? 'Quitar favorito' : 'Favorito') + '">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="' + (fav ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' +
                '</button>' +
                '</div>';
            els.grid.appendChild(card);
        });
    }

    function normalize(str) {
        return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function filterDocs(filter, all) {
        var items = all;
        if (filter !== 'all') {
            var f = normalize(filter);
            items = all.filter(function (item) {
                var t = normalize(item.type);
                return t.indexOf(f) !== -1;
            });
        }
        renderDocs(items);
    }

    var activeFilter = 'all';
    els.chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            els.chips.forEach(function (c) { c.classList.remove('is-active'); c.setAttribute('aria-selected', 'false'); });
            chip.classList.add('is-active');
            chip.setAttribute('aria-selected', 'true');
            activeFilter = chip.getAttribute('data-filter');
            filterDocs(activeFilter, ALL_ITEMS);
        });
    });

    /* ─── Click Doc to Open PDF ─── */
    els.grid.addEventListener('click', function (e) {
        var card = e.target.closest('.doc-card');
        if (!card) return;
        var btn = e.target.closest('button,a');
        if (btn) return;
        openPdf(card.getAttribute('data-file'), card.getAttribute('data-title'));
    });

    /* ─── Favorites ─── */
    els.grid.addEventListener('click', function (e) {
        var btn = e.target.closest('.doc-card__action--fave');
        if (!btn) return;
        var file = btn.getAttribute('data-file');
        var idx = FAVORITES.indexOf(file);
        if (idx === -1) {
            FAVORITES.push(file);
            btn.classList.add('is-faved');
            btn.setAttribute('title', 'Quitar favorito');
            btn.querySelector('svg').setAttribute('fill', 'currentColor');
        } else {
            FAVORITES.splice(idx, 1);
            btn.classList.remove('is-faved');
            btn.setAttribute('title', 'Favorito');
            btn.querySelector('svg').setAttribute('fill', 'none');
        }
        localStorage.setItem('favs', JSON.stringify(FAVORITES));
    });

    /* ═══════════════════════════════════════════
       PDF VIEWER
    ═══════════════════════════════════════════ */

    function openPdf(file, title) {
        els.pdfTitle.textContent = title || 'Documento';
        els.pdfDownload.href = file;
        PDF_PAGE = 1;
        PDF_DOC = null;
        els.pdfModal.classList.add('is-open');
        loadPdf(file);
    }

    function loadPdf(url) {
        if (!window.pdfjsLib) return;
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        pdfjsLib.getDocument(url).promise.then(function (doc) {
            PDF_DOC = doc;
            PDF_TOTAL = doc.numPages;
            renderPdfPage(1);
        }).catch(function () {
            els.pdfCanvas.insertAdjacentHTML('afterend', '<div style="color:var(--red);padding:24px">Error al cargar el PDF</div>');
        });
    }

    function renderPdfPage(n) {
        if (!PDF_DOC) return;
        PDF_DOC.getPage(n).then(function (page) {
            var vp = page.getViewport({ scale: 1.2 });
            var canvas = els.pdfCanvas;
            var ctx = canvas.getContext('2d');
            canvas.width = vp.width;
            canvas.height = vp.height;
            page.render({ canvasContext: ctx, viewport: vp });
            els.pdfPageInfo.textContent = n + ' / ' + PDF_TOTAL;
            PDF_PAGE = n;
        });
    }

    els.pdfPrev.addEventListener('click', function () {
        if (PDF_PAGE > 1) renderPdfPage(PDF_PAGE - 1);
    });
    els.pdfNext.addEventListener('click', function () {
        if (PDF_PAGE < PDF_TOTAL) renderPdfPage(PDF_PAGE + 1);
    });
    els.pdfClose.addEventListener('click', function () {
        els.pdfModal.classList.remove('is-open');
    });
    els.pdfModal.addEventListener('click', function (e) {
        if (e.target === els.pdfModal) els.pdfModal.classList.remove('is-open');
    });

    /* ═══════════════════════════════════════════
       LAB TOOLS
    ═══════════════════════════════════════════ */

    els.dockLabTools.addEventListener('click', function () {
        els.labToolsModal.classList.add('is-open');
        els.labToolPanel.innerHTML = '';
    });
    els.labToolsClose.addEventListener('click', function () {
        els.labToolsModal.classList.remove('is-open');
    });
    els.labToolsModal.addEventListener('click', function (e) {
        if (e.target === els.labToolsModal) els.labToolsModal.classList.remove('is-open');
    });

    var LAB_SIMS = {};

    document.querySelectorAll('.lab-tool').forEach(function (tool) {
        tool.addEventListener('click', function () {
            var name = tool.getAttribute('data-tool');
            var tpl = document.getElementById(name + 'Sim');
            if (!tpl) return;
            els.labToolPanel.innerHTML = '';
            els.labToolPanel.appendChild(tpl.content.cloneNode(true));

            if (name === 'waves') initWaveSim();
            else if (name === 'kinematics') initKinematicsSim();
            else if (name === 'ohm') initOhmSim();
            else if (name === 'pendulum') initPendulumSim();
            else if (name === 'young') initYoungSim();
        });
    });

    /* ─── Wave Simulator ─── */
    function initWaveSim() {
        var canvas = document.getElementById('waveCanvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var W = canvas.width, H = canvas.height;
        var amp = 50, freq = 5, phase = 0;
        var t = 0;

        document.querySelector('.wave-amp').addEventListener('input', function () { amp = +this.value; });
        document.querySelector('.wave-freq').addEventListener('input', function () { freq = +this.value; });
        document.querySelector('.wave-phase').addEventListener('input', function () { phase = (+this.value) * Math.PI / 180; });

        function draw() {
            if (!document.body.contains(canvas)) return;
            ctx.clearRect(0, 0, W, H);
            ctx.beginPath();
            for (var x = 0; x < W; x++) {
                var y = H / 2 + amp * Math.sin((x / W) * 2 * Math.PI * freq + t + phase);
                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#888';
            ctx.lineWidth = 3;
            ctx.stroke();
            t += 0.05;
            requestAnimationFrame(draw);
        }
        draw();
    }

    /* ─── Kinematics Simulator ─── */
    function initKinematicsSim() {
        var canvas = document.getElementById('kinematicsCanvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var W = canvas.width, H = canvas.height;
        var v0 = 30, a = 5, dt = 10;
        var ballX = 30;

        document.querySelector('.k-v0').addEventListener('input', function () { v0 = +this.value; });
        document.querySelector('.k-a').addEventListener('input', function () { a = +this.value; });
        document.querySelector('.k-t').addEventListener('input', function () { dt = +this.value; });

        function draw() {
            if (!document.body.contains(canvas)) return;
            ctx.clearRect(0, 0, W, H);
            var tSim = (Date.now() % (dt * 1000)) / 1000;
            var d = v0 * tSim + 0.5 * a * tSim * tSim;
            var vf = v0 + a * tSim;
            var maxD = v0 * dt + 0.5 * a * dt * dt;
            var x = 30 + (d / (maxD || 1)) * (W - 80);

            ctx.beginPath();
            ctx.arc(x, H / 2, 16, 0, Math.PI * 2);
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#888';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(30, H / 2 + 30);
            ctx.lineTo(W - 50, H / 2 + 30);
            ctx.strokeStyle = 'var(--border)';
            ctx.lineWidth = 2;
            ctx.stroke();

            var out = document.getElementById('kinematicsOutput');
            if (out) out.textContent = 'd = ' + d.toFixed(1) + ' m · vf = ' + vf.toFixed(1) + ' m/s';
            requestAnimationFrame(draw);
        }
        draw();
    }

    /* ─── Ohm's Law Simulator ─── */
    function initOhmSim() {
        var vEl = document.querySelector('.ohm-v');
        var rEl = document.querySelector('.ohm-r');
        var out = document.getElementById('ohmOutput');

        function update() {
            var v = +(vEl ? vEl.value : 12);
            var r = +(rEl ? rEl.value : 100);
            if (out) out.textContent = 'I = ' + (v / r).toFixed(3) + ' A';
        }

        if (vEl) vEl.addEventListener('input', update);
        if (rEl) rEl.addEventListener('input', update);
        update();
    }

    /* ─── Pendulum Simulator ─── */
    function initPendulumSim() {
        var canvas = document.getElementById('pendulumCanvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var W = canvas.width, H = canvas.height;
        var L = 1, g = 9.8;

        document.querySelector('.pend-l').addEventListener('input', function () { L = +this.value; });
        document.querySelector('.pend-g').addEventListener('input', function () { g = +this.value; });

        var pivotX = W / 2, pivotY = 40;
        var angle = 0.3;
        var omega = 0;

        function draw() {
            if (!document.body.contains(canvas)) return;
            ctx.clearRect(0, 0, W, H);

            var scale = Math.min(W, H) / 6;
            var len = L * scale;
            var T = 2 * Math.PI * Math.sqrt(L / g);

            var alpha = -(g / (L || 1)) * Math.sin(angle);
            omega += alpha * 0.02;
            omega *= 0.998;
            angle += omega * 0.02;

            var bobX = pivotX + len * Math.sin(angle);
            var bobY = pivotY + len * Math.cos(angle);

            ctx.beginPath();
            ctx.moveTo(pivotX, pivotY);
            ctx.lineTo(bobX, bobY);
            ctx.strokeStyle = 'var(--ink-2)';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(pivotX, pivotY, 4, 0, Math.PI * 2);
            ctx.fillStyle = 'var(--ink-2)';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(bobX, bobY, 10, 0, Math.PI * 2);
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#888';
            ctx.fill();

            var out = document.getElementById('pendulumOutput');
            if (out) out.textContent = 'T = ' + T.toFixed(2) + ' s';
            requestAnimationFrame(draw);
        }
        draw();
    }

    /* ─── Young's Double Slit Simulator ─── */
    function initYoungSim() {
        var canvas = document.getElementById('youngCanvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var W = canvas.width, H = canvas.height;
        var lambda = 30, d = 50;

        var lambdaInput = document.querySelector('.young-lambda');
        var dInput = document.querySelector('.young-d');
        if (lambdaInput) lambdaInput.addEventListener('input', function () { lambda = +this.value; });
        if (dInput) dInput.addEventListener('input', function () { d = +this.value; });

        function draw() {
            if (!document.body.contains(canvas)) return;
            ctx.clearRect(0, 0, W, H);

            // Draw slits on the left
            var slitX = 40;
            ctx.fillStyle = 'var(--ink-3)';
            ctx.fillRect(slitX - 2, 10, 4, H - 20); // main barrier

            // Draw gaps/slits
            var y1 = H / 2 - d / 2;
            var y2 = H / 2 + d / 2;
            ctx.clearRect(slitX - 3, y1 - 4, 6, 8);
            ctx.clearRect(slitX - 3, y2 - 4, 6, 8);

            // Draw incoming light beam (left to right to slits)
            var beamGrad = ctx.createLinearGradient(0, 0, slitX, 0);
            beamGrad.addColorStop(0, 'rgba(0, 240, 255, 0)');
            beamGrad.addColorStop(1, 'rgba(0, 240, 255, 0.25)');
            ctx.fillStyle = beamGrad;
            ctx.fillRect(0, 20, slitX, H - 40);

            // Draw interference pattern on the right (screen at x = W - 40)
            var screenX = W - 40;
            ctx.fillStyle = 'var(--border)';
            ctx.fillRect(screenX, 10, 8, H - 20); // screen bar

            // Compute and draw fringes on screen
            var L = screenX - slitX;
            for (var y = 10; y < H - 10; y++) {
                var screenY = y - H / 2;
                var intensity = Math.pow(Math.cos((Math.PI * d * screenY) / (lambda * 8)), 2);
                var alpha = intensity.toFixed(2);
                ctx.fillStyle = 'rgba(0, 240, 255, ' + alpha + ')';
                ctx.fillRect(screenX - 15, y, 15, 1);
            }

            // Draw waves/rays propagating
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
            ctx.lineWidth = 1;
            for (var r = 10; r < L; r += 15) {
                // Wavefronts from slit 1
                ctx.beginPath();
                ctx.arc(slitX, y1, r, -Math.PI/3, Math.PI/3);
                ctx.stroke();

                // Wavefronts from slit 2
                ctx.beginPath();
                ctx.arc(slitX, y2, r, -Math.PI/3, Math.PI/3);
                ctx.stroke();
            }

            var deltaY = (lambda * L) / (d || 1) / 10; // scaled for visibility
            var out = document.getElementById('youngOutput');
            if (out) out.textContent = 'Franjas de interferencia Δy = ' + deltaY.toFixed(2) + ' mm';

            requestAnimationFrame(draw);
        }
        draw();
    }


    /* ═══════════════════════════════════════════
       COUNTERS & GAUGE
    ═══════════════════════════════════════════ */

    function countUp(el, target) {
        if (!el) return;
        var start = performance.now();
        var from = 0;

        function step(now) {
            var t = Math.min((now - start) / 800, 1);
            var ease = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(ease * target);
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function initStats() {
        var total = TOTAL_DOCS;
        var labs = DOCS.laboratorios ? DOCS.laboratorios.length : 0;

        countUp(els.docCounter, total);
        countUp(els.labCounter, labs);

        var pct = Math.round((total / 22) * 100);
        setTimeout(function () { animateGauge(pct); }, 400);

        var s = function (id, val, total) {
            var el = document.getElementById(id);
            if (el) {
                el.style.width = Math.round((val / total) * 100) + '%';
            }
        };
        s('statSilabo', 1, 1);
        s('statFundamentos', DOCS.fundamentos.length, 4);
        s('statLab', DOCS.laboratorios.length, 3);
        s('statMapas', DOCS.mapas.length, 4);
        s('statPruebas', DOCS.pruebas.length, 2);

        var setVal = function (id, val, total) {
            var el = document.getElementById(id);
            if (el) el.textContent = val + '/' + total;
        };
        setVal('statFundamentosVal', DOCS.fundamentos.length, 4);
        setVal('statLabVal', DOCS.laboratorios.length, 3);
        setVal('statMapasVal', DOCS.mapas.length, 4);
        setVal('statPruebasVal', DOCS.pruebas.length, 2);
    }

    /* ═══════════════════════════════════════════
       DOCK: SCROLL TO TOP
    ═══════════════════════════════════════════ */

    els.dockTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('.dock__btn[data-target]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var t = btn.getAttribute('data-target');
            if (t) document.querySelector(t).scrollIntoView({ behavior: 'smooth' });
        });
    });

    /* ═══════════════════════════════════════════
       INIT
    ═══════════════════════════════════════════ */

    renderDocs(ALL_ITEMS);
    initStats();

    /* ═══════════════════════════════════════════
       TERMINAL CLI
    ═══════════════════════════════════════════ */
    (function terminal() {
        var term = document.getElementById('terminal');
        var body = document.getElementById('termBody');
        var inp = document.getElementById('termInput');
        var closeBtn = document.getElementById('termClose');
        if (!term) return;

        var history = [], hIdx = -1;

        function open() {
            term.classList.add('is-open');
            setTimeout(function () { inp.focus(); }, 100);
        }
        function close() { term.classList.remove('is-open'); }
        function toggle() { term.classList.contains('is-open') ? close() : open(); }

        function print(text, cls) {
            var d = document.createElement('div');
            d.className = 'term-line' + (cls ? ' term-line--' + cls : '');
            d.innerHTML = text;
            body.appendChild(d);
            body.scrollTop = body.scrollHeight;
        }

        var COMMANDS = {
            help: function () {
                print('Comandos disponibles:', 'sys');
                print('  <code>help</code>           → esta ayuda');
                print('  <code>tema [nombre]</code>  → quantum | blueprint | photon');
                print('  <code>buscar [texto]</code> → abre búsqueda global');
                print('  <code>simular [nombre]</code>→ ondas | cinemática | ohm | péndulo');
                print('  <code>docs</code>           → lista documentos');
                print('  <code>fav</code>            → lista favoritos');
                print('  <code>stats</code>          → estadísticas');
                print('  <code>matrix</code>         → 🤫 easter egg');
                print('  <code>clear</code>          → limpia terminal');
                print('  <code>about</code>          → acerca de');
                print('  <code>exit</code>           → cierra terminal');
            },
            about: function () {
                print('Quantum Lab OS v4.3', 'sys');
                print('Portafolio de Física Aplicada · UCE', 'sys');
                print('Autor: Juan Valle · 4° Semestre · 2026', 'sys');
            },
            clear: function () { body.innerHTML = ''; },
            exit: close,
            quit: close,
            docs: function () {
                ALL_ITEMS.forEach(function (d, i) {
                    print((i + 1) + '. ' + d.title + ' <span style="color:var(--ink-3)">[' + d.type + ']</span>');
                });
            },
            fav: function () {
                if (!FAVORITES.length) return print('No hay favoritos aún.', 'err');
                FAVORITES.forEach(function (f) { print('★ ' + f); });
            },
            stats: function () {
                print('Documentos: ' + TOTAL_DOCS, 'ok');
                print('Laboratorios: ' + (DOCS.laboratorios ? DOCS.laboratorios.length : 0), 'ok');
                print('Favoritos: ' + FAVORITES.length, 'ok');
                print('Tema actual: ' + (localStorage.getItem('theme') || 'quantum'), 'ok');
            },
            matrix: function () {
                print('🟢 Iniciando modo Matrix...', 'ok');
                document.body.style.filter = 'hue-rotate(90deg) saturate(1.5)';
                setTimeout(function () { document.body.style.filter = ''; }, 4000);
            }
        };

        function exec(cmd) {
            print('<span style="color:var(--accent)">λ ~</span> ' + cmd, 'user');
            var parts = cmd.trim().split(/\s+/);
            var name = (parts[0] || '').toLowerCase();
            var arg = parts.slice(1).join(' ');

            if (!name) return;

            if (name === 'tema') {
                var t = arg.toLowerCase();
                if (['quantum', 'blueprint', 'photon'].indexOf(t) !== -1) {
                    setTheme(t);
                    print('Tema cambiado a: ' + t, 'ok');
                } else print('Temas: quantum, blueprint, photon', 'err');
                return;
            }
            if (name === 'buscar') {
                openSearch();
                if (arg) { els.searchInput.value = arg; els.searchInput.dispatchEvent(new Event('input')); }
                return;
            }
            if (name === 'simular') {
                var s = arg.toLowerCase();
                if (['ondas', 'cinemática', 'cinematica', 'ohm', 'péndulo', 'pendulo'].indexOf(s) !== -1) {
                    els.dockLabTools.click();
                    setTimeout(function () {
                        var tool = document.querySelector('.lab-tool[data-tool="' +
                            (s === 'cinemática' || s === 'cinematica' ? 'kinematics' : s === 'péndulo' || s === 'pendulo' ? 'pendulum' : s) + '"]');
                        if (tool) tool.click();
                    }, 200);
                    return;
                }
                return print('Simuladores: ondas, cinemática, ohm, péndulo', 'err');
            }

            if (COMMANDS[name]) COMMANDS[name]();
            else print('Comando no reconocido: <code>' + name + '</code>. Escribe <code>help</code>.', 'err');
        }

        inp.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var v = inp.value;
                if (v.trim()) { history.unshift(v); hIdx = -1; }
                exec(v);
                inp.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (history.length) { hIdx = Math.min(hIdx + 1, history.length - 1); inp.value = history[hIdx]; }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (hIdx > 0) { hIdx--; inp.value = history[hIdx]; }
                else { hIdx = -1; inp.value = ''; }
            }
        });

        closeBtn.addEventListener('click', close);
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.key === ';') { e.preventDefault(); toggle(); }
            if (e.key === 'Escape' && term.classList.contains('is-open')) close();
        });

        var dock = document.querySelector('.dock');
        if (dock) {
            var b = document.createElement('button');
            b.className = 'dock__btn';
            b.setAttribute('data-tooltip', 'Terminal (Ctrl+;)');
            b.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>';
            b.addEventListener('click', toggle);
            dock.appendChild(b);
        }
    })();

    /* ═══ MODO LINTERNA ═══ */
    (function lantern() {
        var mask = document.getElementById('lanternMask');
        if (!mask) return;
        var active = false;

        function toggle() {
            active = !active;
            document.body.classList.toggle('lantern-mode', active);
        }

        document.addEventListener('mousemove', function (e) {
            if (!active) return;
            document.documentElement.style.setProperty('--mx', e.clientX + 'px');
            document.documentElement.style.setProperty('--my', e.clientY + 'px');
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'l' || e.key === 'L') {
                if (document.activeElement.tagName === 'INPUT') return;
                toggle();
            }
        });
    })();

})();
