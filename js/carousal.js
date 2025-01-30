document.addEventListener('DOMContentLoaded', function () {
    // Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('active');
    });
  
    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('open');
          navLinks.classList.remove('active');
        }
      });
    });
  
    // Navbar scroll => switch to white
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Hero Carousel - next/prev
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
  
    // Partners auto-scroll
    const partnersCarousel = document.querySelector('.partners-carousel');
    function autoScrollPartners() {
      if (!partnersCarousel) return;
      partnersCarousel.scrollBy({ left: 1, behavior: 'smooth' });
      if (
        partnersCarousel.scrollLeft + partnersCarousel.offsetWidth >=
        partnersCarousel.scrollWidth
      ) {
        partnersCarousel.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
    setInterval(autoScrollPartners, 20);
  });

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('active');
    
    // Force remove focus from any nav link that might have auto-focused
    setTimeout(() => {
      if (document.activeElement && document.activeElement.tagName === 'A') {
        document.activeElement.blur();
      }
    }, 10);
  });
  
  