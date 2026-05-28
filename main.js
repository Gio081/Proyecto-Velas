document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. INICIALIZACIÓN DE SWIPER.JS (CARRUSEL PREMIUM)
       ========================================================================== */
    const swiper = new Swiper('.product-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Adaptabilidad fluida según la pantalla (Responsive)
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3, // 3 tarjetas visibles en pantallas grandes
            }
        }
    });

    /* ==========================================================================
       2. EFECTO REVEAL (INTERSECTION OBSERVER)
       Hace que los bloques emerjan elegantemente al hacer scroll continuo.
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se agrega la clase de activación CSS
                entry.target.classList.add('active');
                // Se deja de observar para que la animación solo se ejecute una vez
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // Ventana del navegador por defecto
        rootMargin: '0px',
        threshold: 0.12 // El elemento debe estar visible al menos un 12%
    });

    // Vinculamos cada elemento identificable al observador
    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    /* ==========================================================================
       3. EFECTO DINÁMICO EN NAVBAR AL HACER SCROLL
       ========================================================================== */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 5%';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
        } else {
            navbar.padding = '25px 5%';
            navbar.style.boxShadow = 'none';
        }
    });
});