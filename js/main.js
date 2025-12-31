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
});

// Navigation
function initNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
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
        "SYSTEM STATUS: ONLINE",
        "LOADING GAME DEVELOPMENT DATA...",
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

// Dimension Effects Controls
function initDimensionEffects() {
    const toggleRift = document.getElementById('toggle-rift');
    const toggleGlitch = document.getElementById('toggle-glitch');
    const toggleMatrix = document.getElementById('toggle-matrix');
    
    const rift = document.querySelector('.dimension-rift');
    const glitch = document.querySelector('.glitch-overlay');
    const staticOverlay = document.querySelector('.static-overlay');
    const matrix = document.querySelector('.matrix-background');
    
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

// Projects Filter
function initProjects() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter projects
            projectCards.forEach(card => {
                const cardFilter = card.dataset.filter || 'all';
                
                if (filter === 'all' || filter === cardFilter) {
                    card.style.display = 'block';
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
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section, .project-card, .skill-category');
    
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
