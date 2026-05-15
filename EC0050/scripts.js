document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Funcionalidad para abrir/cerrar el menú hamburguesa
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Opcional: Animar barras de la hamburguesa para formar una 'X'
        hamburger.classList.toggle('toggle'); 
    });

    // Funcionalidad para cambiar de sección de contenido
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // 1. Prevenir comportamiento por defecto
            e.preventDefault();

            // 2. Obtener el ID de la sección objetivo
            const targetId = link.getAttribute('data-target');

            // 3. Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 4. Mostrar la sección seleccionada
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // 5. Actualizar estilos visuales del menú (opcional)
            navLinks.forEach(nav => nav.classList.remove('active-btn'));
            link.classList.add('active-btn');

            // 6. Cerrar el menú hamburguesa automáticamente en dispositivos móviles
            if (window.innerWidth < 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('toggle');
            }
        });
    });
});
