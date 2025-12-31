// Main Application Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initNavigation();
    initTypingEffect();
    initSkillBars();
    initContactForm();
    initDimensionEffects();
    initProjects();
    initScrollAnimations();
    initProjectFilters();
    initLightbox();
    
    // Fix overflow issues on mobile
    preventHorizontalScroll();
});

// Fix horizontal scroll on mobile
function preventHorizontalScroll() {
    // Prevent horizontal scroll
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Fix for touch devices
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Check for elements causing horizontal overflow
    function checkForOverflow() {
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.left < 0 || rect.right > window.innerWidth) {
                console.log('Overflow element:', element);
                element.style.maxWidth = '100%';
                element.style.overflowX = 'hidden';
            }
        });
    }
    
    // Run check on load and resize
    checkForOverflow();
    window.addEventListener('resize', checkForOverflow);
}

// Navigation
function initNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Typing Effect
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const messages = [
        "WILLKOMMEN IM DIMENSIONALEN PORTFOLIO",
        "GAME DEVELOPMENT IS MY PASSION",
        "CREATING WORLDS BEYOND IMAGINATION",
        "READY FOR INSPECTION"
    ];
    
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function type() {
        if (isPaused) return;
        
        const currentMessage = messages[messageIndex];
        
        if (!isDeleting) {
            typingElement.textContent = currentMessage.substring(0, charIndex);
            charIndex++;
            
            if (charIndex > currentMessage.length) {
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true;
                    setTimeout(type, 100);
                }, 2000);
                return;
            }
        } else {
            typingElement.textContent = currentMessage.substring(0, charIndex);
            charIndex--;
            
            if (charIndex < 0) {
                isDeleting = false;
                messageIndex = (messageIndex + 1) % messages.length;
            }
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

// Skill Bars Animation
function initSkillBars() {
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
    
    // Initial check and on scroll
    animateSkills();
    window.addEventListener('scroll', animateSkills);
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate sending
        const statusIndicator = document.querySelector('.status-indicator');
        const statusText = document.querySelector('.status-text');
        
        statusIndicator.style.background = '#ffbd2e';
        statusText.textContent = 'SENDET...';
        
        setTimeout(() => {
            statusIndicator.style.background = '#27ca3f';
            statusText.textContent = 'GESENDET!';
            contactForm.reset();
            
            // Reset after 3 seconds
            setTimeout(() => {
                statusIndicator.style.background = '';
                statusText.textContent = 'BEREIT ZUM SENDEN';
            }, 3000);
        }, 1500);
    });
}

// Dimension Effects Controls - KORRIGIERT: Alle Buttons starten aktiv
function initDimensionEffects() {
    const toggleRift = document.getElementById('toggle-rift');
    const toggleGlitch = document.getElementById('toggle-glitch');
    const toggleMatrix = document.getElementById('toggle-matrix');
    
    const rift = document.querySelector('.dimension-rift');
    const glitch = document.querySelector('.glitch-overlay');
    const staticOverlay = document.querySelector('.static-overlay');
    const matrix = document.querySelector('.matrix-background');
    
    // Alle Effekte sind standardmäßig aktiv
    if (rift) rift.style.opacity = '0.3';
    if (glitch) glitch.style.opacity = '0.05';
    if (staticOverlay) staticOverlay.style.opacity = '0.03';
    if (matrix) matrix.style.opacity = '0.03';
    
    // Toggle Rift
    if (toggleRift && rift) {
        toggleRift.addEventListener('click', function() {
            this.classList.toggle('active');
            rift.style.opacity = this.classList.contains('active') ? '0.3' : '0';
        });
    }
    
    // Toggle Glitch
    if (toggleGlitch && glitch) {
        toggleGlitch.addEventListener('click', function() {
            this.classList.toggle('active');
            glitch.style.opacity = this.classList.contains('active') ? '0.05' : '0';
            staticOverlay.style.opacity = this.classList.contains('active') ? '0.03' : '0';
        });
    }
    
    // Toggle Matrix
    if (toggleMatrix && matrix) {
        toggleMatrix.addEventListener('click', function() {
            this.classList.toggle('active');
            matrix.style.opacity = this.classList.contains('active') ? '0.03' : '0';
        });
    }
}

// Projects Filter System
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter projects
            filterProjects(filter);
        });
    });
}

// Filter projects based on category - KORRIGIERT
function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const cardFilter = card.dataset.filter;
        
        if (filter === 'all' || filter === cardFilter) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Projects
function initProjects() {
    // Projects are loaded via projects.js
    // Add event listeners for info buttons
    setTimeout(() => {
        document.querySelectorAll('.info-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const projectCard = this.closest('.project-card');
                const projectId = projectCard.dataset.id;
                
                if (projectId) {
                    openProjectModal(projectId);
                }
            });
        });
    }, 100);
}

// Lightbox for project images
function initLightbox() {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close"><i class="fas fa-times"></i></button>
        <div class="lightbox-nav">
            <button class="lightbox-prev"><i class="fas fa-chevron-left"></i></button>
            <button class="lightbox-next"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="lightbox-content">
            <img class="lightbox-img" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    let currentImageIndex = 0;
    let images = [];
    
    // Open lightbox
    window.openLightbox = function(imgSrc, caption, galleryImages) {
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Store all images in gallery
        images = galleryImages || [];
        currentImageIndex = images.findIndex(img => img.src === imgSrc);
    };
    
    // Close lightbox
    function closeLightbox() {
        const lightbox = document.querySelector('.lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Next image
    function nextImage() {
        if (images.length > 0) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateLightboxImage();
        }
    }
    
    // Previous image
    function prevImage() {
        if (images.length > 0) {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateLightboxImage();
        }
    }
    
    // Update lightbox image
    function updateLightboxImage() {
        const lightboxImg = document.querySelector('.lightbox-img');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        
        if (images[currentImageIndex]) {
            lightboxImg.src = images[currentImageIndex].src;
            lightboxCaption.textContent = images[currentImageIndex].caption;
        }
    }
    
    // Event listeners
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-prev').addEventListener('click', prevImage);
    document.querySelector('.lightbox-next').addEventListener('click', nextImage);
    
    // Close on click outside
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
        if (e.key === 'ArrowRight') {
            nextImage();
        }
        if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section, .project-card, .skill-category, .about-content');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
}

// Helper function: Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
    );
}

// Random Glitch Effects
function initRandomGlitches() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            const elements = document.querySelectorAll('h1, h2, h3, .terminal-line');
            if (elements.length > 0) {
                const randomElement = elements[Math.floor(Math.random() * elements.length)];
                const originalText = randomElement.textContent;
                
                // Create glitched version
                const glitched = originalText.split('').map(char => {
                    return Math.random() > 0.9 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : char;
                }).join('');
                
                randomElement.textContent = glitched;
                
                // Restore after short time
                setTimeout(() => {
                    randomElement.textContent = originalText;
                }, 100);
            }
        }
    }, 3000);
}

// Initialize random glitches after page load
setTimeout(initRandomGlitches, 5000);
