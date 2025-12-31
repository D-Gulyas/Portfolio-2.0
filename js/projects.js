// Projects Data
const projects = [
    {
        id: 1,
        title: "QUANTUM RIFT",
        description: "Ein VR-Erlebnis das Spieler durch verschiedene Dimensionen reisen lässt. Entwickelt mit Unity und C#.",
        tech: ["Unity", "C#", "VR", "Oculus"],
        github: "https://github.com/DEIN-USERNAME/quantum-rift",
        demo: "https://demolink.com",
        icon: "fa-atom",
        filter: "unity"
    },
    {
        id: 2,
        title: "NEON DASH",
        description: "Cyberpunk Rennspiel im Stil der 80er. Mit Retro-Grafik und Synthwave-Soundtrack.",
        tech: ["Unity", "C#", "2D", "Pixel Art"],
        github: "https://github.com/DEIN-USERNAME/neon-dash",
        demo: "https://demolink.com",
        icon: "fa-car",
        filter: "unity"
    },
    {
        id: 3,
        title: "DIMENSION DEFENDER",
        description: "Tower Defense Spiel mit interdimensionellen Portalen. Verteidige das Nexus gegen Wellen aus verschiedenen Realitäten.",
        tech: ["Unity", "C#", "3D", "Multiplayer"],
        github: "https://github.com/DEIN-USERNAME/dimension-defender",
        demo: "https://demolink.com",
        icon: "fa-shield-alt",
        filter: "unity"
    },
    {
        id: 4,
        title: "VOID RUNNER",
        description: "Endlos Runner in einer abstrakten Dimension. Sammle Energie und vermeide die Leere.",
        tech: ["Unreal", "C++", "3D", "Blueprint"],
        github: "https://github.com/DEIN-USERNAME/void-runner",
        demo: "https://demolink.com",
        icon: "fa-running",
        filter: "unreal"
    },
    {
        id: 5,
        title: "SYNTHSPACE VR",
        description: "Musik-Visualisierung in VR. Erlebe Sound in einer völlig neuen Dimension.",
        tech: ["Unity", "C#", "VR", "Audio"],
        github: "https://github.com/DEIN-USERNAME/synthspace",
        demo: "https://demolink.com",
        icon: "fa-music",
        filter: "vr"
    },
    {
        id: 6,
        title: "DATA STREAM",
        description: "Puzzle Spiel in einer digitalen Welt. Löse Rätsel durch Datenmanipulation.",
        tech: ["Unity", "C#", "Puzzle", "UI"],
        github: "https://github.com/DEIN-USERNAME/data-stream",
        demo: "https://demolink.com",
        icon: "fa-stream",
        filter: "unity"
    }
];

// Load Projects
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});

function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.filter = project.filter;
    
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
            </div>
        </div>
    `;
    
    return card;
}
