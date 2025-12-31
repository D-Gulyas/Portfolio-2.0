// Projects Data for Dennis Gulyas
const projects = [
    {
        id: 1,
        title: "QUANTUM RIFT VR",
        description: "Ein immersives VR-Erlebnis das Spieler durch verschiedene Dimensionen reisen lässt. Mit prozedural generierten Welten und physikalisch basierten Shadern.",
        tech: ["Unity", "C#", "VR", "Oculus", "Shader"],
        github: "https://github.com/D-Gulyas/quantum-rift",
        demo: "https://d-gulyas.itch.io/quantum-rift",
        icon: "fa-atom",
        filter: "unity"
    },
    {
        id: 2,
        "title": "CYBER RUNNER",
        description: "Cyberpunk Endless Runner mit dynamischen Level-Generation. Sammle Upgrades, vermeide Hindernisse und erreiche Highscores in einer neon-beleuchteten Stadt.",
        tech: ["Unity", "C#", "3D", "Procedural"],
        github: "https://github.com/D-Gulyas/cyber-runner",
        demo: "https://d-gulyas.itch.io/cyber-runner",
        icon: "fa-running",
        filter: "unity"
    },
    {
        id: 3,
        title: "DIMENSION DEFENDER",
        description: "Tower Defense mit interdimensionellen Portalen. Verteidige das Nexus gegen Wellen aus verschiedenen Realitäten. Mit KI-gesteuerten Gegnern und Upgrade-System.",
        tech: ["Unity", "C#", "Tower Defense", "AI", "Multiplayer"],
        github: "https://github.com/D-Gulyas/dimension-defender",
        demo: "https://d-gulyas.itch.io/dimension-defender",
        icon: "fa-shield-alt",
        filter: "unity"
    },
    {
        id: 4,
        title: "VOID EXPLORER",
        description: "Space Exploration Spiel in Unreal Engine 5. Erkunde fremde Planeten, sammle Ressourcen und entdecke antike Alien-Artefakte mit Nanite und Lumen.",
        tech: ["Unreal", "C++", "3D", "Blueprint", "UE5"],
        github: "https://github.com/D-Gulyas/void-explorer",
        demo: "https://d-gulyas.itch.io/void-explorer",
        icon: "fa-space-shuttle",
        filter: "unreal"
    },
    {
        id: 5,
        title: "SYNTHSPACE AR",
        description: "Augmented Reality Musik-Visualisierung. Erlebe Sound in einer völlig neuen Dimension durch deine Handykamera. Erstelle eigene visuelle Effekte.",
        tech: ["Unity", "C#", "AR", "Audio", "Mobile"],
        github: "https://github.com/D-Gulyas/synthspace-ar",
        demo: "https://d-gulyas.itch.io/synthspace",
        icon: "fa-music",
        filter: "vr"
    },
    {
        id: 6,
        title: "DATA STREAM PUZZLE",
        description: "Puzzle Spiel in einer digitalen Welt. Löse Rätsel durch Datenmanipulation und Logik-Puzzles. Mit über 50 Leveln und steigendem Schwierigkeitsgrad.",
        tech: ["Unity", "C#", "Puzzle", "UI", "2D"],
        github: "https://github.com/D-Gulyas/data-stream",
        demo: "https://d-gulyas.itch.io/data-stream",
        icon: "fa-stream",
        filter: "unity"
    },
    {
        id: 7,
        title: "NEO-TOKYO RACER",
        description: "Futuristisches Rennspiel in einer Cyberpunk-Metropole. Mit custom Car Physics, Day/Night Cycle und dynamischem Wettersystem.",
        tech: ["Unreal", "C++", "Racing", "Physics", "3D"],
        github: "https://github.com/D-Gulyas/neo-tokyo-racer",
        demo: "https://d-gulyas.itch.io/neo-tokyo",
        icon: "fa-car",
        filter: "unreal"
    },
    {
        id: 8,
        title: "BIOME SIMULATOR",
        description: "Ecosystem Simulation mit evolutionären Algorithmen. Beobachte wie digitale Lebensformen sich an ihre Umgebung anpassen und entwickeln.",
        tech: ["Unity", "C#", "Simulation", "AI", "Procedural"],
        github: "https://github.com/D-Gulyas/biome-simulator",
        demo: "https://d-gulyas.itch.io/biome-sim",
        icon: "fa-seedling",
        filter: "unity"
    }
];

// Load Projects
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    createProjectOverlay();
});

function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.filter = project.filter;
    card.dataset.id = project.id;
    
    const techTags = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="project-image">
            <i class="fas ${project.icon}"></i>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <div class="project-tech">
                ${techTags}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> Code
                </a>
                <a href="${project.demo}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>
                <a href="#" class="project-link info-btn" data-id="${project.id}">
                    <i class="fas fa-info-circle"></i> Infos
                </a>
            </div>
        </div>
    `;
    
    // Add click event for info button
    const infoBtn = card.querySelector('.info-btn');
    if (infoBtn) {
        infoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openProjectModal(project.id);
        });
    }
    
    return card;
}

function createProjectOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';
    document.body.appendChild(overlay);
}

function openProjectModal(projectId) {
    const project = projects.find(p => p.id == projectId);
    if (!project) return;
    
    const overlay = document.querySelector('.project-overlay');
    if (!overlay) return;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'project-modal-content';
    
    modalContent.innerHTML = `
        <div class="project-modal-header">
            <h3>${project.title} - DETAILS</h3>
            <button class="project-modal-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="project-modal-body">
            <div class="project-modal-main">
                <div class="project-modal-icon">
                    <i class="fas ${project.icon}"></i>
                </div>
                <div class="project-modal-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <p class="project-modal-description">${project.description}</p>
                
                <div class="project-details-grid">
                    <div class="detail-section">
                        <h4><i class="fas fa-cogs"></i> TECHNISCHE DETAILS</h4>
                        <ul>
                            <li><strong>Engine:</strong> ${project.tech.includes('Unity') ? 'Unity Engine' : 'Unreal Engine 5'}</li>
                            <li><strong>Programmiersprache:</strong> ${project.tech.includes('C#') ? 'C#' : 'C++'}</li>
                            <li><strong>Render Pipeline:</strong> ${project.tech.includes('UE5') ? 'Lumen & Nanite' : 'URP'}</li>
                            <li><strong>Plattform:</strong> ${project.tech.includes('Mobile') ? 'iOS/Android' : 'Windows'}</li>
                            <li><strong>Version Control:</strong> Git / GitHub</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4><i class="fas fa-tasks"></i> MEINE AUFGABEN</h4>
                        <ul>
                            <li>Gameplay-Programmierung</li>
                            <li>Level-Design & Balancing</li>
                            <li>UI/UX Implementierung</li>
                            <li>Performance Optimierung</li>
                            <li>Bug Fixing & Testing</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4><i class="fas fa-star"></i> BESONDERE FEATURES</h4>
                        <ul>
                            <li>Dynamische Spielmechaniken</li>
                            <li>Responsive Steuerung</li>
                            <li>Atmosphärische Soundeffekte</li>
                            <li>Innovative Level-Designs</li>
                            <li>Optimierte Performance</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4><i class="fas fa-chart-line"></i> HERAUSFORDERUNGEN</h4>
                        <ul>
                            <li>Performance-Optimierung für VR</li>
                            <li>Komplexe KI-Implementierung</li>
                            <li>Dynamische Level-Generation</li>
                            <li>Cross-Platform Entwicklung</li>
                            <li>Realistische Physik-Simulation</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="project-modal-sidebar">
                <div class="project-stats">
                    <h4><i class="fas fa-chart-bar"></i> PROJEKTSTATS</h4>
                    <div class="stat-item">
                        <span class="stat-label">Entwicklungszeit</span>
                        <span class="stat-value">3-4 Monate</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Teamgröße</span>
                        <span class="stat-value">Solo-Projekt</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Code-Zeilen</span>
                        <span class="stat-value">5.000+</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Assets</span>
                        <span class="stat-value">200+</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Status</span>
                        <span class="stat-value status-active">Aktiv</span>
                    </div>
                </div>
                
                <div class="project-links-modal">
                    <h4><i class="fas fa-external-link-alt"></i> LINKS</h4>
                    <a href="${project.github}" target="_blank" class="project-link-modal">
                        <i class="fab fa-github"></i> GitHub Repository
                    </a>
                    <a href="${project.demo}" target="_blank" class="project-link-modal">
                        <i class="fas fa-gamepad"></i> Live Demo
                    </a>
                    <a href="#" class="project-link-modal" onclick="window.print()">
                        <i class="fas fa-print"></i> Als PDF speichern
                    </a>
                </div>
                
                <div class="project-skills">
                    <h4><i class="fas fa-tools"></i> VERWENDETE SKILLS</h4>
                    <div class="skills-tags">
                        ${getSkillTags(project).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="project-modal-footer">
            <div class="project-actions">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> Code ansehen
                </a>
                <a href="${project.demo}" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-play"></i> Demo testen
                </a>
            </div>
        </div>
    `;
    
    // Add modal to overlay
    overlay.innerHTML = '';
    overlay.appendChild(modalContent);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add close event
    const closeBtn = modalContent.querySelector('.project-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }
    
    // Close when clicking outside modal
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeProjectModal();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

function closeProjectModal() {
    const overlay = document.querySelector('.project-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.innerHTML = '';
        }, 300);
    }
    document.body.style.overflow = '';
}

function getSkillTags(project) {
    const skillMap = {
        'Unity': ['Game Development', 'C# Programming', 'Unity Engine'],
        'Unreal': ['C++ Programming', 'Unreal Engine', 'Blueprint'],
        'C#': ['Object-Oriented Programming', '.NET', 'Game Logic'],
        'C++': ['Memory Management', 'Performance', 'Game Systems'],
        'VR': ['Virtual Reality', '3D Interaction', 'Immersive Design'],
        'AR': ['Augmented Reality', 'Mobile Development', 'Camera Integration'],
        '3D': ['3D Modeling', 'Texturing', 'Animation'],
        'AI': ['Artificial Intelligence', 'Pathfinding', 'Behavior Trees'],
        'Procedural': ['Algorithm Design', 'Mathematics', 'Random Generation'],
        'Physics': ['Game Physics', 'Collision Detection', 'Simulation'],
        'Multiplayer': ['Networking', 'Client-Server', 'Synchronization'],
        'Mobile': ['iOS Development', 'Android Development', 'Touch Controls']
    };
    
    let skills = [];
    project.tech.forEach(tech => {
        if (skillMap[tech]) {
            skills.push(...skillMap[tech]);
        }
    });
    
    // Remove duplicates
    return [...new Set(skills)];
}

// CSS for modal (add to style.css)
const modalStyles = `
.project-modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1000px;
    max-height: 90vh;
    background: rgba(10, 10, 24, 0.98);
    border: 2px solid var(--primary);
    border-radius: 10px;
    overflow: hidden;
    z-index: 2001;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 50px rgba(108, 92, 231, 0.5);
    backdrop-filter: blur(10px);
}

.project-modal-header {
    background: rgba(15, 15, 35, 0.9);
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(108, 92, 231, 0.3);
}

.project-modal-header h3 {
    font-family: var(--font-digital);
    color: var(--light);
    font-size: 1.5rem;
}

.project-modal-close {
    background: rgba(108, 92, 231, 0.2);
    border: 1px solid var(--primary);
    color: var(--light);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s;
}

.project-modal-close:hover {
    background: var(--primary);
    transform: rotate(90deg);
}

.project-modal-body {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.project-modal-main {
    flex: 2;
    padding: 30px;
    overflow-y: auto;
}

.project-modal-sidebar {
    flex: 1;
    background: rgba(15, 15, 35, 0.7);
    padding: 30px;
    border-left: 1px solid rgba(108, 92, 231, 0.3);
    overflow-y: auto;
}

.project-modal-icon {
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 20px;
    text-align: center;
}

.project-modal-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.project-modal-description {
    color: #ccc;
    line-height: 1.8;
    margin-bottom: 30px;
    font-size: 1.1rem;
}

.project-details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 30px;
}

.detail-section h4 {
    color: var(--light);
    margin-bottom: 15px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.detail-section h4 i {
    color: var(--primary);
}

.detail-section ul {
    list-style: none;
    padding-left: 0;
}

.detail-section li {
    margin-bottom: 8px;
    color: #ccc;
    padding-left: 20px;
    position: relative;
}

.detail-section li:before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--primary);
}

.project-stats .stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(108, 92, 231, 0.1);
}

.stat-label {
    color: #ccc;
    font-size: 0.9rem;
}

.stat-value {
    color: var(--light);
    font-weight: 600;
}

.status-active {
    color: var(--matrix-green) !important;
}

.project-links-modal {
    margin-top: 30px;
}

.project-links-modal h4 {
    color: var(--light);
    margin-bottom: 15px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.project-link-modal {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 15px;
    background: rgba(108, 92, 231, 0.1);
    border: 1px solid rgba(108, 92, 231, 0.3);
    color: var(--light);
    text-decoration: none;
    border-radius: 4px;
    margin-bottom: 10px;
    transition: all 0.3s;
}

.project-link-modal:hover {
    background: rgba(108, 92, 231, 0.2);
    border-color: var(--primary);
    transform: translateX(5px);
}

.project-link-modal i {
    color: var(--primary);
    width: 20px;
}

.project-skills {
    margin-top: 30px;
}

.project-skills h4 {
    color: var(--light);
    margin-bottom: 15px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.skill-tag {
    background: rgba(0, 206, 201, 0.1);
    color: var(--secondary);
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.project-modal-footer {
    background: rgba(15, 15, 35, 0.9);
    padding: 20px 30px;
    border-top: 1px solid rgba(108, 92, 231, 0.3);
}

.project-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
}

@media (max-width: 768px) {
    .project-modal-body {
        flex-direction: column;
    }
    
    .project-modal-sidebar {
        border-left: none;
        border-top: 1px solid rgba(108, 92, 231, 0.3);
    }
    
    .project-actions {
        flex-direction: column;
    }
}
`;

// Add modal styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
