// DOM geladen
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Schließe Mobile Menu beim Klicken auf einen Link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Smooth Scrolling für Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Skill-Bars animieren beim Scrollen
    const skillItems = document.querySelectorAll('.skill-item');
    
    function animateSkills() {
        skillItems.forEach(item => {
            const skillLevel = item.querySelector('.skill-level');
            const level = item.getAttribute('data-level');
            
            if (isElementInViewport(item) && !skillLevel.classList.contains('animated')) {
                skillLevel.style.width = level + '%';
                skillLevel.classList.add('animated');
            }
        });
    }
    
    // Hilfsfunktion: Überprüfen, ob Element im Viewport ist
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
            rect.bottom >= 0
        );
    }
    
    // Initial Animation und bei Scroll
    animateSkills();
    window.addEventListener('scroll', animateSkills);
    
    // Formular-Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hier würde normalerweise die Formularverarbeitung erfolgen
            // Für dieses Beispiel zeigen wir nur eine Alert-Nachricht
            alert('Vielen Dank für Ihre Nachricht! Ich werde mich so schnell wie möglich bei Ihnen melden.');
            contactForm.reset();
        });
    }
    
    // Scroll-basierte Navigation Hervorhebung
    function highlightNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-menu a[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Fade-in Animation für Elemente beim Scrollen
    const fadeElements = document.querySelectorAll('.section, .hero-content, .project-card');
    
    function checkFadeElements() {
        fadeElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('fade-in', 'visible');
            }
        });
    }
    
    // Initial check und bei Scroll
    checkFadeElements();
    window.addEventListener('scroll', checkFadeElements);
    
    // Partikel-Hintergrund initialisieren
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#6c5ce7" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6c5ce7",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
});
