# Progreso — Portafolio de Física Aplicada

## ✅ Implementado (Quantum Lab OS v4.2)

### Sistema visual
- [x] 3 temas completos: **Quantum** (oscuro neón), **Blueprint** (técnico azul), **Photon** (claro)
- [x] Persistencia del tema en localStorage
- [x] Fondo grid pattern por tema
- [x] Glassmorphism en tarjetas y menús
- [x] Scroll progress bar animado
- [x] Scrollbar personalizada

### Hero
- [x] N-body particle canvas (80 partículas con atracción gravitacional + mouse)
- [x] 3D atom con 4 órbitas animadas
- [x] Formula ticker (cambia fórmulas cada 3.5s)
- [x] Gradient text en título
- [x] Click ripple effect en toda la página

### Perfil
- [x] Bento grid con foto, contador docs, contador labs, badge
- [x] Contadores animados con ease-out cúbico
- [x] Sparkline SVG decorativo

### Telemetría
- [x] Gauge SVG circular animado (porcentaje completado)
- [x] Barras de desglose por sección (Sílabo, Fundamentos, Labs, Mapas, Pruebas)

### Contenido
- [x] Grid de tarjetas con íconos por tipo
- [x] Filtros por categoría (chips)
- [x] Favoritos con persistencia localStorage
- [x] Animación de entrada escalonada (fadeUp)

### PDF Viewer
- [x] Modal con paginación (anterior/siguiente)
- [x] Botón de descarga directa
- [x] Cierre con backdrop click y botón X

### Lab Tools
- [x] Simulador de ondas (amplitud, frecuencia, fase)
- [x] Simulador de cinemática (MRUV con bola animada)
- [x] Calculadora de ley de Ohm (V = I·R)
- [x] Simulador de péndulo simple (T = 2π√(L/g))

### Navegación
- [x] Búsqueda global (Ctrl+K) con keyboard navigation
- [x] Floating action dock con tooltips
- [x] Nav responsivo con hamburger menu
- [x] Theme matrix switcher (3 botones)

---

## ⚠️ Por corregir / Mejorar

### Errores conocidos
- [ ] **Avatar**: `bento-avatar__img` usa `Curriculum.pdf` como src — no es una imagen, el fallback JS lo oculta pero hay que subir una foto real
- [ ] **Canvas resize**: Al redimensionar ventana, las partículas no se redistribuyen bien (init() se llama pero con datos viejos)
- [ ] **PDF.js worker**: El worker se carga de CDN cada vez, debería ser más robusto
- [ ] **Theme flicker**: Sin script en `<head>`, el tema guardado puede mostrar un flash del tema default antes de aplicar el saved

### UX/UI
- [ ] **Tema Photon**: Revisar contraste de texto en cards con fondo claro
- [ ] **Mobile**: El dock flotante se superpone con contenido en pantallas pequeñas
- [ ] **Animaciones**: Las transiciones de tema (CSS variables) son bruscas — agregar transition suave en body
- [ ] **Lab tools**: Los sliders no tienen valores numéricos visibles al lado
- [ ] **Search**: No hay highlight de resultados, solo listado plano
- [ ] **Tooltips del dock**: Se cortan en el borde inferior de la pantalla

### Rendimiento
- [ ] **Particle canvas**: No hace cleanup del animation frame al cambiar pestaña (requestAnimationFrame sigue corriendo)
- [ ] **Simuladores**: Múltiples requestAnimationFrame sin cancelación al cambiar de herramienta

### Accesibilidad
- [ ] **Skip to content**: Falta enlace de salto
- [ ] **Focus trap**: Los modales no atrapan el foco
- [ ] **ARIA**: Algunos botones y roles necesitan revisión

---

## 🔮 Posibles adiciones futuras

- [ ] Modo oscuro automático según preferencia del sistema (`prefers-color-scheme`)
- [ ] Loader / skeleton screen mientras carga PDF.js
- [ ] Sección "Favoritos" filtrable
- [ ] Vista de lista compacta vs grid
- [ ] Animación de ondas sonoras (FFT) en hero
- [ ] Exportar métricas como imagen
- [ ] i18n (es/en toggle)
- [ ] Tema "Hologram" (4to tema experimental)

---

*Documento de progreso actualizado al: Jul 2026*
