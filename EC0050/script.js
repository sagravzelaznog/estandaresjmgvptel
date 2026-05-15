document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sideMenu = document.getElementById('side-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // 1. Funcionalidad del Menú Hamburguesa
    hamburgerBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });

    // 2. Lógica SPA (Single Page Application) para reducir Carga Cognitiva
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evitar salto de ancla

            // Identificar qué sección se quiere ver
            const targetId = this.getAttribute('data-target');

            // Ocultar todas las secciones
            sections.forEach(sec => {
                sec.classList.remove('active');
            });

            // Mostrar solo la sección seleccionada
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Cerrar el menú lateral en dispositivos móviles después de hacer clic
            if (window.innerWidth < 768) {
                sideMenu.classList.remove('open');
            }
        });
    });
});
