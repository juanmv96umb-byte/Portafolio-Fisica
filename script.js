/* ============================================
   FÍSICA APLICADA — PORTAFOLIO ESTUDIANTIL
   Script Principal
   ============================================ */

/* 1. CONTROL DE PESTAÑAS PRINCIPALES */
function toggleTab(id) {
    const mainTabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < mainTabs.length; i++) {
        if (mainTabs[i].id !== id) {
            mainTabs[i].classList.remove("show");
        }
    }
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle("show");
    }

    // Actualizar estado activo de los botones
    updateActiveButton(id);
}

/* 2. CONTROL DE SUB-UNIDADES (Unidad 1, 2, etc.) */
function toggleSubTab(id) {
    const subElement = document.getElementById(id);
    if (subElement) {
        subElement.classList.toggle("show");
    }
}

/* 3. FUNCIÓN PARA CERRAR TODO EL MENÚ (Móviles) */
function cerrarMenus() {
    const allTabs = document.querySelectorAll('.tab-content, .sub-tab-content');
    allTabs.forEach(tab => tab.classList.remove('show'));
}

/* 4. FUNCIÓN PARA MOSTRAR LA PORTADA DIGITAL */
function mostrarPortada(titulo, subtitulo, tabId) {
    // Ocultamos los visores de archivos
    document.getElementById('visor-pdf').style.display = 'none';
    document.getElementById('visor-img').style.display = 'none';
    
    // Mostramos y actualizamos la portada digital
    const portada = document.getElementById('portada-digital');
    portada.style.display = 'flex';
    
    document.getElementById('titulo-portada').innerText = titulo;
    document.getElementById('subtitulo-portada').innerText = subtitulo;
    document.getElementById('file-name').innerText = "Portada: " + subtitulo;

    // Renderizar botones dinámicamente según la sección
    const accesos = document.getElementById('accesos-directos');
    const grid = document.querySelector('.accesos-grid');
    const accesosTitle = document.querySelector('.accesos-title');
    
    if (accesos && grid && accesosTitle) {
        if (!tabId || (titulo === 'FÍSICA APLICADA' && subtitulo === 'PORTAFOLIO ESTUDIANTIL')) {
            // Mostrar los botones originales para la carátula
            accesosTitle.innerText = "Accesos Directos";
            grid.innerHTML = `
                <button class="acceso-card" onclick="document.getElementById('btn-silabo').click()">
                    <span class="acceso-icon">📋</span>
                    <span class="acceso-label">Sílabo</span>
                </button>
                <button class="acceso-card" onclick="document.getElementById('btn-fundamentos').click()">
                    <span class="acceso-icon">📚</span>
                    <span class="acceso-label">Fundamentos</span>
                </button>
                <button class="acceso-card" onclick="document.getElementById('btn-labs').click()">
                    <span class="acceso-icon">🔬</span>
                    <span class="acceso-label">Laboratorios</span>
                </button>
                <button class="acceso-card" onclick="document.getElementById('btn-pruebas').click()">
                    <span class="acceso-icon">📝</span>
                    <span class="acceso-label">Pruebas</span>
                </button>
                <button class="acceso-card" onclick="document.getElementById('btn-tareas').click()">
                    <span class="acceso-icon">✏️</span>
                    <span class="acceso-label">Tareas</span>
                </button>
                <button class="acceso-card" onclick="document.getElementById('btn-grupales').click()">
                    <span class="acceso-icon">👥</span>
                    <span class="acceso-label">Grupales</span>
                </button>
                <button class="acceso-card" onclick="document.getElementById('btn-mapas').click()">
                    <span class="acceso-icon">🧠</span>
                    <span class="acceso-label">Mapas Ment</span>
                </button>
                <button class="acceso-card" onclick="document.getElementById('btn-apoyo').click()">
                    <span class="acceso-icon">📚</span>
                    <span class="acceso-label">Apoyo</span>
                </button>
                <button class="acceso-card" onclick="document.getElementById('btn-info').click()">
                    <span class="acceso-icon">👤</span>
                    <span class="acceso-label">Mi Info</span>
                </button>
                <button class="acceso-card" onclick="document.getElementById('btn-subidas').click()">
                    <span class="acceso-icon">📁</span>
                    <span class="acceso-label">Subidas</span>
                </button>
            `;
            accesos.style.display = 'block';
        } else {
            // Es otra sección, extraer links del sidebar
            // Para 'list-subidas' es especial porque se carga async, podemos darle un observer o recargarlo.
            let targetTab = tabId.replace(/['"]/g, ''); // Quitar comillas si las hay
            const tabContent = document.getElementById(targetTab);
            grid.innerHTML = '';
            
            if (tabContent) {
                const links = tabContent.querySelectorAll('a');
                if (links.length > 0) {
                    accesosTitle.innerText = "Documentos Disponibles";
                    links.forEach((link, idx) => {
                        const btn = document.createElement('button');
                        btn.className = 'acceso-card';
                        btn.style.animation = `cardAppear 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.05}s forwards`;
                        btn.style.opacity = '0';
                        btn.setAttribute('onclick', link.getAttribute('onclick'));
                        
                        let text = link.innerText;
                        let icon = '📄';
                        
                        // Asignar ícono según el texto
                        if (text.toLowerCase().includes('pdf') || text.toLowerCase().includes('silabo')) icon = '📋';
                        else if (text.toLowerCase().includes('lab')) icon = '🔬';
                        else if (text.toLowerCase().includes('prueba')) icon = '📝';
                        else if (text.toLowerCase().includes('tarea')) icon = '✏️';
                        else if (text.toLowerCase().includes('mapa')) icon = '🧠';
                        else if (text.toLowerCase().includes('grupal')) icon = '👥';
                        else if (text.toLowerCase().includes('curriculum')) icon = '👤';
                        
                        btn.innerHTML = `
                            <span class="acceso-icon">${icon}</span>
                            <span class="acceso-label">${text}</span>
                        `;
                        grid.appendChild(btn);
                    });
                    accesos.style.display = 'block';
                } else if (targetTab === 'list-subidas') {
                    // Especial para subidas que se carga asincrono
                    accesosTitle.innerText = "Documentos Disponibles";
                    accesos.style.display = 'block';
                    // Dejamos que cargarSubidas lo llene luego llamando a mostrarPortada nuevamente o sincronizando
                } else {
                    accesos.style.display = 'none';
                }
            } else {
                accesos.style.display = 'none';
            }
        }
    }
    // Re-trigger animation
    const content = portada.querySelector('.portada-content');
    if (content) {
        content.style.animation = 'none';
        content.offsetHeight; // Force reflow
        content.style.animation = '';
    }

    if (window.innerWidth < 768) {
        cerrarMenus();
    }
}

/* 5. FUNCIÓN PARA VISUALIZAR ARCHIVOS (PDF/IMG) */
function visualizar(rutaCompleta) {
    const visorPdf = document.getElementById('visor-pdf');
    const visorImg = document.getElementById('visor-img');
    const portada = document.getElementById('portada-digital');
    const etiqueta = document.getElementById('file-name');
    
    // Siempre ocultamos la portada digital al abrir un archivo
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

/* 6. ACTUALIZAR BOTÓN ACTIVO */
function updateActiveButton(activeTabId) {
    const allBtns = document.querySelectorAll('.tab-btn');
    allBtns.forEach(btn => btn.classList.remove('active'));

    // Mapear IDs de tab-content a IDs de botones
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

/* 7. SIDEBAR TOGGLE (COLLAPSIBLE MENU) */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const toggleBtn = document.getElementById('sidebar-toggle');
    
    sidebar.classList.toggle('sidebar-visible');
    sidebar.classList.toggle('sidebar-hidden');
    
    // Toggle hamburger animation
    if (toggleBtn) {
        toggleBtn.classList.toggle('active');
    }
    
    // Show/hide overlay on mobile
    if (overlay) {
        if (sidebar.classList.contains('sidebar-visible') && window.innerWidth < 768) {
            overlay.classList.add('show');
        } else {
            overlay.classList.remove('show');
        }
    }
}

/* 8. PARTICLE BACKGROUND ANIMATION */
function initParticles() {
    const canvas = document.getElementById('particle-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 50;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
            color: Math.random() > 0.5 ? '0, 212, 255' : '124, 58, 237',
        };
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(createParticle());
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
            ctx.fill();

            // Draw connections
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.05 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(drawParticles);
    }

    window.addEventListener('resize', resize);
    init();
    drawParticles();
}

/* 9. INICIALIZACIÓN AL CARGAR LA PÁGINA */
window.onload = function() {
    // Mostrar portada de bienvenida
    mostrarPortada('FÍSICA APLICADA', 'PORTAFOLIO ESTUDIANTIL');
    
    // Activar botón de carátula
    const btnCaratula = document.getElementById('btn-caratula');
    if (btnCaratula) btnCaratula.classList.add('active');

    // Iniciar partículas de fondo
    initParticles();

    // En móviles, el sidebar empieza oculto
    if (window.innerWidth < 768) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('sidebar-visible');
        sidebar.classList.add('sidebar-hidden');
    }
};

/* 10. CARGAR ARCHIVOS SUBIDOS DINÁMICAMENTE DESDE GITHUB */
async function cargarSubidas() {
    const contenedor = document.getElementById('list-subidas');
    if (!contenedor) return;
    if (contenedor.dataset.cargado === "true") return; // Ya se cargaron
    
    contenedor.innerHTML = '<span style="padding: 10px; color: #fff;">Cargando archivos...</span>';
    
    try {
        // Usa la API de GitHub para leer el contenido de la carpeta 'Subidas'
        const response = await fetch('https://api.github.com/repos/juanmv96umb-byte/Portafolio-Fisica/contents/Subidas');
        if (!response.ok) throw new Error('No se pudo cargar o la carpeta está vacía');
        
        const files = await response.json();
        contenedor.innerHTML = ''; // Limpiar mensaje de carga
        
        const pdfFiles = files.filter(f => f.type === 'file' && f.name !== '.gitkeep');
        
        if (pdfFiles.length === 0) {
            contenedor.innerHTML = '<span style="padding: 10px; color: #aaa;">No hay archivos nuevos</span>';
            return;
        }

        pdfFiles.forEach(file => {
            const a = document.createElement('a');
            a.innerText = file.name.replace('.pdf', '').replace(/_/g, ' ');
            a.onclick = () => visualizar(file.path);
            contenedor.appendChild(a);
        });
        
        contenedor.dataset.cargado = "true";
        // Si estamos viendo la sección de subidas, actualizar la portada
        const tituloActual = document.getElementById('titulo-portada').innerText;
        if (tituloActual === 'ARCHIVOS SUBIDOS') {
            mostrarPortada('ARCHIVOS SUBIDOS', 'ARCHIVOS RECIENTES', 'list-subidas');
        }
    } catch (error) {
        contenedor.innerHTML = '<span style="padding: 10px; color: #ff6b6b;">No hay archivos o ocurrió un error.</span>';
        console.error(error);
    }
}
