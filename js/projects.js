// Erweiterte Projektdaten mit Dimension-Thema
const projects = [
    {
        id: 1,
        title: "Quantum Rift Engine",
        description: "Eine Game Engine, die Quantenphysik mit Spielmechaniken verbindet. Erzeugt dynamische Dimensionen mit prozeduralen Welten.",
        tech: ["Unity", "C#", "VR", "Quantum", "Procedural"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-atom",
        filter: "unity"
    },
    {
        id: 2,
        title: "Neo-Tokyo VR Experience",
        description: "Immersives Cyberpunk-Erlebnis in vollständig begehbarer Megacity. Mit Raytracing und KI-gesteuerten NPCs.",
        tech: ["Unreal", "C++", "VR", "Raytracing", "AI"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-city",
        filter: "unreal"
    },
    {
        id: 3,
        title: "Chrono Shift Platformer",
        description: "2.5D Plattformer mit Zeitmanipulations-Mechanik. Ändere die Vergangenheit, um die Zukunft zu beeinflussen.",
        tech: ["Unity", "C#", "2.5D", "Time Manipulation"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-clock",
        filter: "unity"
    },
    {
        id: 4,
        title: "Aethernet MMORPG",
        description: "Massively Multiplayer Online RPG in einer magisch-technologischen Welt. Mit KI-Dungeons und dynamischen Quests.",
        tech: ["C++", "Networking", "AI", "Database"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-network-wired",
        filter: "ai"
    },
    {
        id: 5,
        title: "Synthwave Racer XR",
        description: "Augmented Reality Rennspiel im Synthwave-Stil. Die Strecke erscheint in deiner realen Umgebung.",
        tech: ["Unity", "C#", "AR", "XR", "Multiplayer"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-car-side",
        filter: "vr"
    },
    {
        id: 6,
        title: "Nexus Tower Defense",
        description: "Tower Defense mit interdimensionellen Portalen. Verteidige das Nexus gegen Wellen aus verschiedenen Realitäten.",
        tech: ["Unity", "C#", "Tower Defense", "Portals"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-fort-awesome",
        filter: "unity"
    },
    {
        id: 7,
        title: "Bio-Digital Evolution Sim",
        description: "Simulation von evolutionären Prozessen in digitalen Ökosystemen. Künstliches Leben mit genetischen Algorithmen.",
        tech: ["C++", "AI", "Simulation", "Genetic Algorithms"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-dna",
        filter: "ai"
    },
    {
        id: 8,
        title: "Stellar Command VR",
        description: "VR-Befehlssimulation eines Raumschiffs. Steuere Systeme, bekämpfe Feinde und navigiere durch Nebel.",
        tech: ["Unreal", "C++", "VR", "Physics", "Multiplayer"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-space-shuttle",
        filter: "vr"
    }
];

// Projekte in DOM laden
document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projects-grid');
    const navDots = document.querySelector('.nav-dots');
    
    if (projectsGrid) {
        // Clear existing content
        projectsGrid.innerHTML = '';
        
        // Create project cards
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
        
        // Create navigation dots
        if (navDots) {
            const pages = Math.ceil(projects.length / 4);
            for (let i = 0; i < pages; i++) {
                const dot = document.createElement('button');
                dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
                dot.dataset.page = i;
                navDots.appendChild(dot);
            }
        }
        
        // Initialize project navigation
        initProjectNavigation();
        
        // Initialize hover effects
        initProjectHoverEffects();
    }
});

// Verbesserte Projektkarte mit Hologramm-Effekt
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in neon-card';
    card.dataset.tech = project.filter;
    
    // Tech-Tags als HTML
    const techTags = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="project-hologram">
            <div class="hologram-layer"></div>
            <div class="project-icon">
                <i class="fas ${project.icon}"></i>
            </div>
            <div class="energy-orb orb-1"></div>
            <div class="energy-orb orb-2"></div>
        </div>
        <div class="project-content">
            <h3 class="project-title glitch" data-text="${project.title}">${project.title}</h3>
            <div class="project-tech">
                ${techTags}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link portal-link">
                    <i class="fab fa-github"></i> 
                    <span>Code</span>
                </a>
                <a href="${project.demo}" target="_blank" class="project-link portal-link">
                    <i class="fas fa-external-link-alt"></i> 
                    <span>Demo</span>
                </a>
                <button class="project-info-btn">
                    <i class="fas fa-info-circle"></i>
                    <span>Details</span>
                </button>
            </div>
        </div>
        <div class="project-glow"></div>
    `;
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
        card.style.boxShadow = '0 20px 40px rgba(108, 92, 231, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    // Add click event for details
    const infoBtn = card.querySelector('.project-info-btn');
    if (infoBtn) {
        infoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showProjectDetails(project);
        });
    }
    
    return card;
}

// Projekt Navigation
function initProjectNavigation() {
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const navDots = document.querySelectorAll('.nav-dot');
    const projectCards = document.querySelectorAll('.project-card');
    
    let currentPage = 0;
    const cardsPerPage = 4;
    const totalPages = Math.ceil(projectCards.length / cardsPerPage);
    
    function showPage(page) {
        // Update current page
        currentPage = page;
        
        // Update active dot
        navDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === page);
        });
        
        // Show/hide cards
        projectCards.forEach((card, index) => {
            const cardPage = Math.floor(index / cardsPerPage);
            if (cardPage === page) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.add('visible');
                }, 50);
            } else {
                card.style.display = 'none';
                card.classList.remove('visible');
            }
        });
    }
    
    // Previous arrow
    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            currentPage = (currentPage - 1 + totalPages) % totalPages;
            showPage(currentPage);
        });
    }
    
    // Next arrow
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            currentPage = (currentPage + 1) % totalPages;
            showPage(currentPage);
        });
    }
    
    // Navigation dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showPage(index);
        });
    });
    
    // Initialize first page
    showPage(0);
}

// Projekt Hover Effekte
function initProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const hologram = card.querySelector('.project-hologram');
        const orbs = card.querySelectorAll('.energy-orb');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Move orbs based on cursor position
            if (orbs.length >= 2) {
                const xPercent = x / rect.width;
                const yPercent = y / rect.height;
                
                orbs[0].style.transform = `translate(${(xPercent - 0.5) * 20}px, ${(yPercent - 0.5) * 20}px)`;
                orbs[1].style.transform = `translate(${(0.5 - xPercent) * 20}px, ${(0.5 - yPercent) * 20}px)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset orb positions
            orbs.forEach(orb => {
                orb.style.transform = 'translate(0, 0)';
            });
        });
    });
}

// Projekt Details Modal
function showProjectDetails(project) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content neon-card">
            <div class="modal-header">
                <h3 class="modal-title glitch" data-text="${project.title}">${project.title}</h3>
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="modal-icon">
                    <i class="fas ${project.icon}"></i>
                </div>
                <div class="modal-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <p class="modal-description">${project.description}</p>
                <div class="modal-features">
                    <h4><i class="fas fa-star"></i> Hauptfeatures</h4>
                    <ul>
                        <li>Dynamische Dimensionsgenerierung</li>
                        <li>Echtzeit-Raytracing</li>
                        <li>KI-gesteuerte NPCs</li>
                        <li>Multiplayer Support</li>
                        <li>Prozedurale Inhalte</li>
                    </ul>
                </div>
                <div class="modal-links">
                    <a href="${project.github}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-github"></i> GitHub Repository
                    </a>
                    <a href="${project.demo}" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add close functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    function closeModal() {
        modal.classList.add('closing');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Add escape key support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.contains(modal)) {
            closeModal();
        }
    });
}
