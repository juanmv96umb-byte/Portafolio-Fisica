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
function mostrarPortada(titulo, subtitulo) {
    // Ocultamos los visores de archivos
    document.getElementById('visor-pdf').style.display = 'none';
    document.getElementById('visor-img').style.display = 'none';
    
    // Mostramos y actualizamos la portada digital
    const portada = document.getElementById('portada-digital');
    portada.style.display = 'flex';
    
    document.getElementById('titulo-portada').innerText = titulo;
    document.getElementById('subtitulo-portada').innerText = subtitulo;
    document.getElementById('file-name').innerText = "Portada: " + subtitulo;

    // Mostrar/ocultar accesos directos solo en la portada principal
    const accesos = document.getElementById('accesos-directos');
    if (accesos) {
        if (titulo === 'FÍSICA APLICADA' && subtitulo === 'PORTAFOLIO ESTUDIANTIL') {
            accesos.style.display = 'block';
        } else {
            accesos.style.display = 'none';
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
    } catch (error) {
        contenedor.innerHTML = '<span style="padding: 10px; color: #ff6b6b;">No hay archivos o ocurrió un error.</span>';
        console.error(error);
    }
}
