// Projektdaten
const projects = [
    {
        id: 1,
        title: "Space Explorer VR",
        description: "Ein immersives VR-Erlebnis, das Spieler durch ein realistisches Sonnensystem führt. Entwickelt mit Unity und C#.",
        tech: ["Unity", "C#", "VR", "SteamVR"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-space-shuttle"
    },
    {
        id: 2,
        title: "Pixel Quest",
        description: "Ein 2D-Plattformer mit retro-stilisiertem Design und komplexen Levelmechaniken.",
        tech: ["Unity", "C#", "2D", "Pixel Art"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-gamepad"
    },
    {
        id: 3,
        title: "AI Racing Simulation",
        description: "Eine Rennsimulation mit KI-gesteuerten Gegnern, die durch maschinelles Lernen verbessert werden.",
        tech: ["Unreal Engine", "C++", "AI", "Machine Learning"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-car"
    },
    {
        id: 4,
        title: "Fantasy RPG Engine",
        description: "Eine modulare RPG-Engine mit Skill-System, Quests und dynamischer Welt.",
        tech: ["C#", ".NET", "OpenGL", "SQLite"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-dragon"
    },
    {
        id: 5,
        title: "Multiplayer Shooter",
        description: "Ego-Shooter mit Netzwerk-Multiplayer und verschiedenen Spielmodi.",
        tech: ["Unity", "C#", "Networking", "Photon"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-crosshairs"
    },
    {
        id: 6,
        title: "Procedural Terrain Generator",
        description: "Tool zur Erstellung prozeduraler Landschaften mit Echtzeit-Bearbeitung.",
        tech: ["C++", "OpenGL", "Procedural Generation"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        icon: "fa-mountain"
    }
];

// Projekte in DOM laden
document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (projectsGrid) {
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }
});

// Projektkarte erstellen
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    
    // Tech-Tags als HTML
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
