document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. MENÚ HAMBURGUESA PARA CELULARES
    // ==========================================
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Cerrar menú móvil al hacer clic en cualquier enlace
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // ==========================================
    // 2. CAMBIO DE ESTILO EN NAVBAR AL HACER SCROLL
    // ==========================================
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // ==========================================
    // 3. CARRUSEL DE FULL DAYS (SÓLO PÁGINA INICIO)
    // ==========================================
    const carruselContainer = document.getElementById("carruselContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (carruselContainer && prevBtn && nextBtn) {
        
        // Función para calcular la distancia de desplazamiento según el ancho de la tarjeta
        const getScrollAmount = () => {
            const card = carruselContainer.querySelector(".tour-card");
            return card ? card.offsetWidth + 30 : 300;
        };

        // Evento botón Siguiente (❯)
        nextBtn.addEventListener("click", () => {
            carruselContainer.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });
        });

        // Evento botón Anterior (❮)
        prevBtn.addEventListener("click", () => {
            carruselContainer.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });
        });
    }

    // ==========================================
    // 4. FILTRO DE CATEGORÍAS (SÓLO PÁGINA DESTINOS)
    // ==========================================
    const botonesFiltro = document.querySelectorAll(".btn-filtro");
    const tarjetasTours = document.querySelectorAll(".tours-grid-completo .tour-card");

    if (botonesFiltro.length > 0 && tarjetasTours.length > 0) {
        botonesFiltro.forEach(boton => {
            boton.addEventListener("click", () => {
                // Remover estado activo de todos los botones y asignarlo al actual
                botonesFiltro.forEach(btn => btn.classList.remove("active"));
                boton.classList.add("active");

                const categoriaSeleccionada = boton.getAttribute("data-categoria");

                tarjetasTours.forEach(tarjeta => {
                    const categoriaTarjeta = tarjeta.getAttribute("data-categoria");

                    if (categoriaSeleccionada === "todos" || categoriaTarjeta === categoriaSeleccionada) {
                        tarjeta.style.display = "flex";
                    } else {
                        tarjeta.style.display = "none";
                    }
                });
            });
        });
    }

});