document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Scroll Event for Navbar Background
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open'); // Toggle 'open' class
        navLinks.classList.toggle('active');
    });

    // Close Mobile Menu When a Link is Clicked
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('open');
                navLinks.classList.remove('active');
            }
        });
    });

    // Hero Carousel "Next" / "Prev" Logic
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const slide = document.querySelector('.slide');

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            slide.appendChild(items[0]);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            slide.prepend(items[items.length - 1]);
        });
    }

    // Smooth Auto-Scroll for Partners Section
    const partnersCarousel = document.querySelector('.partners-carousel');

    function autoScroll() {
        partnersCarousel.scrollBy({ left: 1, behavior: 'smooth' });
        if (
            partnersCarousel.scrollLeft + partnersCarousel.offsetWidth >=
            partnersCarousel.scrollWidth
        ) {
            partnersCarousel.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }
    setInterval(autoScroll, 20); // Adjust interval as needed

    // Handle keyboard events for accessibility
    hamburger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('active');
        }
    });
});
