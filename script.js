/* ============================================
   FÍSICA APLICADA — PORTAFOLIO ESTUDIANTIL
   Script v2.0
   ============================================ */

/* 1. Toggle sidebar dropdown tabs */
function toggleTab(id) {
    const allDropdowns = document.querySelectorAll('.nav-dropdown');
    allDropdowns.forEach(d => {
        if (d.id !== id) d.classList.remove('show');
    });

    const el = document.getElementById(id);
    if (el) el.classList.toggle('show');

    updateActiveButton(id);
}

/* 2. Close all menus (mobile) */
function cerrarMenus() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const toggleBtn = document.getElementById('sidebar-toggle');

    if (sidebar) sidebar.classList.remove('sidebar-visible');
    if (overlay) overlay.classList.remove('show');
    if (toggleBtn) toggleBtn.classList.remove('active');
}

/* 3. Show the digital cover / portada */
function mostrarPortada(titulo, subtitulo, tabId) {
    document.getElementById('visor-pdf').style.display = 'none';
    document.getElementById('visor-img').style.display = 'none';

    const portada = document.getElementById('portada-digital');
    portada.style.display = 'flex';

    document.getElementById('titulo-portada').innerText = titulo;
    document.getElementById('subtitulo-portada').innerText = subtitulo;
    document.getElementById('file-name').innerText = 'Portada: ' + subtitulo;

    // Dynamic shortcuts
    const accesos = document.getElementById('accesos-directos');
    const grid = document.querySelector('.portada__grid');
    const accesosTitle = document.querySelector('.accesos-title');

    if (accesos && grid && accesosTitle) {
        if (!tabId || (titulo === 'FÍSICA APLICADA' && subtitulo === 'PORTAFOLIO ESTUDIANTIL')) {
            accesosTitle.innerText = 'Accesos Directos';
            grid.innerHTML = `
                <button class="shortcut-card" onclick="document.getElementById('btn-silabo').click()">
                    <span class="shortcut-card__icon">📋</span>
                    <span class="shortcut-card__label">Sílabo</span>
                </button>
                <button class="shortcut-card" onclick="document.getElementById('btn-fundamentos').click()">
                    <span class="shortcut-card__icon">📚</span>
                    <span class="shortcut-card__label">Fundamentos</span>
                </button>
                <button class="shortcut-card" onclick="document.getElementById('btn-labs').click()">
                    <span class="shortcut-card__icon">🔬</span>
                    <span class="shortcut-card__label">Laboratorios</span>
                </button>
                <button class="shortcut-card" onclick="document.getElementById('btn-pruebas').click()">
                    <span class="shortcut-card__icon">📝</span>
                    <span class="shortcut-card__label">Pruebas</span>
                </button>
                <button class="shortcut-card" onclick="document.getElementById('btn-tareas').click()">
                    <span class="shortcut-card__icon">✏️</span>
                    <span class="shortcut-card__label">Tareas</span>
                </button>
                <button class="shortcut-card" onclick="document.getElementById('btn-grupales').click()">
                    <span class="shortcut-card__icon">👥</span>
                    <span class="shortcut-card__label">Grupales</span>
                </button>
                <button class="shortcut-card" onclick="document.getElementById('btn-mapas').click()">
                    <span class="shortcut-card__icon">🧠</span>
                    <span class="shortcut-card__label">Mapas Mentales</span>
                </button>
                <button class="shortcut-card" onclick="document.getElementById('btn-apoyo').click()">
                    <span class="shortcut-card__icon">📖</span>
                    <span class="shortcut-card__label">Material Apoyo</span>
                </button>
                <button class="shortcut-card" onclick="document.getElementById('btn-info').click()">
                    <span class="shortcut-card__icon">👤</span>
                    <span class="shortcut-card__label">Mi Info</span>
                </button>
            `;
            accesos.style.display = 'block';
        } else {
            let targetTab = tabId.replace(/['"]/g, '');
            const tabContent = document.getElementById(targetTab);
            grid.innerHTML = '';

            if (tabContent) {
                const links = tabContent.querySelectorAll('a');
                if (links.length > 0) {
                    accesosTitle.innerText = 'Documentos Disponibles';
                    links.forEach((link, idx) => {
                        const btn = document.createElement('button');
                        btn.className = 'shortcut-card';
                        btn.style.animationDelay = (idx * 50) + 'ms';
                        btn.setAttribute('onclick', link.getAttribute('onclick'));

                        let text = link.innerText;
                        let icon = '📄';

                        if (text.toLowerCase().includes('silabo')) icon = '📋';
                        else if (text.toLowerCase().includes('fundamento')) icon = '📚';
                        else if (text.toLowerCase().includes('lab')) icon = '🔬';
                        else if (text.toLowerCase().includes('prueba')) icon = '📝';
                        else if (text.toLowerCase().includes('tarea')) icon = '✏️';
                        else if (text.toLowerCase().includes('mapa')) icon = '🧠';
                        else if (text.toLowerCase().includes('grupal') || text.toLowerCase().includes('informe')) icon = '👥';
                        else if (text.toLowerCase().includes('curriculum')) icon = '👤';
                        else if (text.toLowerCase().includes('escaneado')) icon = '🖼️';

                        btn.innerHTML = '<span class="shortcut-card__icon">' + icon + '</span><span class="shortcut-card__label">' + text + '</span>';
                        grid.appendChild(btn);
                    });
                    accesos.style.display = 'block';
                } else if (targetTab === 'list-subidas') {
                    accesosTitle.innerText = 'Documentos Disponibles';
                    accesos.style.display = 'block';
                } else {
                    accesos.style.display = 'none';
                }
            } else {
                accesos.style.display = 'none';
            }
        }
    }

    // Re-trigger card animation
    const card = portada.querySelector('.portada__card');
    if (card) {
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = '';
    }

    if (window.innerWidth < 768) {
        cerrarMenus();
    }
}

/* 4. View files (PDF / Images) */
function visualizar(rutaCompleta) {
    const visorPdf = document.getElementById('visor-pdf');
    const visorImg = document.getElementById('visor-img');
    const portada = document.getElementById('portada-digital');
    const etiqueta = document.getElementById('file-name');

    portada.style.display = 'none';

    const extension = rutaCompleta.split('.').pop().toLowerCase();

    if (extension === 'pdf') {
        visorImg.style.display = 'none';
        visorPdf.style.display = 'block';
        visorPdf.src = rutaCompleta;
    } else {
        visorPdf.style.display = 'none';
        visorImg.style.display = 'block';
        visorImg.src = rutaCompleta;
    }

    etiqueta.innerText = rutaCompleta.split('/').pop();

    if (window.innerWidth < 768) {
        cerrarMenus();
    }
}

/* 5. Update active button state */
function updateActiveButton(activeTabId) {
    const allBtns = document.querySelectorAll('.nav-item');
    allBtns.forEach(btn => btn.classList.remove('active'));

    const tabToBtnMap = {
        'list-silabo': 'btn-silabo',
        'list-fundamentos': 'btn-fundamentos',
        'list-labs': 'btn-labs',
        'list-pruebas': 'btn-pruebas',
        'list-tareas': 'btn-tareas',
        'list-grupales': 'btn-grupales',
        'list-mapas': 'btn-mapas',
        'list-apoyo': 'btn-apoyo',
        'list-info': 'btn-info',
        'list-subidas': 'btn-subidas'
    };

    const btnId = tabToBtnMap[activeTabId];
    if (btnId) {
        const btn = document.getElementById(btnId);
        const tabContent = document.getElementById(activeTabId);
        if (btn && tabContent && tabContent.classList.contains('show')) {
            btn.classList.add('active');
        }
    }
}

/* 6. Toggle Sidebar */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const toggleBtn = document.getElementById('sidebar-toggle');

    if (window.innerWidth < 768) {
        // Mobile: slide in/out
        sidebar.classList.toggle('sidebar-visible');
        if (toggleBtn) toggleBtn.classList.toggle('active');
        if (overlay) {
            overlay.classList.toggle('show', sidebar.classList.contains('sidebar-visible'));
        }
    } else {
        // Desktop: collapse/expand
        sidebar.classList.toggle('sidebar-hidden');
        if (toggleBtn) toggleBtn.classList.toggle('active');
    }
}

/* 7. Initialization */
window.onload = function () {
    mostrarPortada('FÍSICA APLICADA', 'PORTAFOLIO ESTUDIANTIL');

    const btnCaratula = document.getElementById('btn-caratula');
    if (btnCaratula) btnCaratula.classList.add('active');

    // Mobile: start with sidebar hidden
    if (window.innerWidth < 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('sidebar-visible');
    }
};

/* 8. Load uploaded files dynamically from GitHub */
async function cargarSubidas() {
    const contenedor = document.getElementById('list-subidas');
    if (!contenedor) return;
    if (contenedor.dataset.cargado === 'true') return;

    contenedor.innerHTML = '<span style="padding: 10px; color: #a1a1aa; font-size: 0.8rem;">Cargando archivos...</span>';

    try {
        const response = await fetch('https://api.github.com/repos/juanmv96umb-byte/Portafolio-Fisica/contents/Subidas');
        if (!response.ok) throw new Error('No se pudo cargar');

        const files = await response.json();
        contenedor.innerHTML = '';

        const pdfFiles = files.filter(f => f.type === 'file' && f.name !== '.gitkeep');

        if (pdfFiles.length === 0) {
            contenedor.innerHTML = '<span style="padding: 10px; color: #52525b; font-size: 0.8rem;">No hay archivos nuevos</span>';
            return;
        }

        pdfFiles.forEach(file => {
            const a = document.createElement('a');
            a.innerText = file.name.replace('.pdf', '').replace(/_/g, ' ');
            a.onclick = () => visualizar(file.path);
            contenedor.appendChild(a);
        });

        contenedor.dataset.cargado = 'true';

        const tituloActual = document.getElementById('titulo-portada').innerText;
        if (tituloActual === 'ARCHIVOS SUBIDOS') {
            mostrarPortada('ARCHIVOS SUBIDOS', 'ARCHIVOS RECIENTES', 'list-subidas');
        }
    } catch (error) {
        contenedor.innerHTML = '<span style="padding: 10px; color: #ef4444; font-size: 0.8rem;">No hay archivos o ocurrió un error.</span>';
        console.error(error);
    }
}
