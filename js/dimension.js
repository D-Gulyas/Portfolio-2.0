// Dimension Riss Effekte und Interaktivität
document.addEventListener('DOMContentLoaded', function() {
    // Dimension Riss initialisieren
    initDimensionRift();
    
    // ASCII Hintergrund generieren
    generateASCIIBackground();
    
    // Glitch Effekte steuern
    initGlitchEffects();
    
    // Projekte Filter
    initProjectFilter();
    
    // Terminal Effekte
    initTerminalEffects();
    
    // Skill Radar Chart
    initSkillRadar();
    
    // Riss Controls
    initRiftControls();
});

// Dimension Riss Effekte
function initDimensionRift() {
    const rift = document.getElementById('dimension-rift');
    if (!rift) return;
    
    // Erstelle zufällige Riss-Linien
    for (let i = 0; i < 20; i++) {
        createRiftLine(rift);
    }
    
    // Erstelle Energie-Partikel
    for (let i = 0; i < 50; i++) {
        createEnergyParticle(rift);
    }
}

function createRiftLine(container) {
    const line = document.createElement('div');
    line.className = 'rift-energy-line';
    
    // Zufällige Position und Größe
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const length = Math.random() * 100 + 50;
    const angle = Math.random() * 360;
    const thickness = Math.random() * 2 + 1;
    
    // Zufällige Farbe
    const colors = ['#6c5ce7', '#00cec9', '#a29bfe', '#74b9ff', '#ff7675'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // CSS Styles
    line.style.cssText = `
        position: absolute;
        top: ${y}vh;
        left: ${x}vw;
        width: ${length}px;
        height: ${thickness}px;
        background: linear-gradient(90deg, transparent, ${color}, transparent);
        transform: rotate(${angle}deg);
        transform-origin: left center;
        opacity: ${Math.random() * 0.3 + 0.1};
        filter: blur(${thickness / 2}px);
        animation: riftLinePulse ${Math.random() * 3 + 2}s infinite ease-in-out;
    `;
    
    // Animation Keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes riftLinePulse {
            0%, 100% { opacity: ${Math.random() * 0.2 + 0.1}; }
            50% { opacity: ${Math.random() * 0.5 + 0.2}; }
        }
    `;
    document.head.appendChild(style);
    
    container.appendChild(line);
}

function createEnergyParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'energy-particle';
    
    // Zufällige Startposition
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    // Zufällige Bewegung
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.5 + 0.1;
    const size = Math.random() * 4 + 1;
    
    // Zufällige Farbe
    const colors = ['#6c5ce7', '#00cec9', '#a29bfe'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        position: absolute;
        top: ${startY}vh;
        left: ${startX}vw;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        filter: blur(1px);
        box-shadow: 0 0 ${size * 2}px ${color};
        opacity: ${Math.random() * 0.5 + 0.3};
    `;
    
    // Animation
    let x = startX;
    let y = startY;
    
    function animateParticle() {
        x += Math.cos(angle) * speed;
        y += Math.sin(angle) * speed;
        
        // Bildschirmbegrenzungen
        if (x > 100) x = 0;
        if (x < 0) x = 100;
        if (y > 100) y = 0;
        if (y < 0) y = 100;
        
        particle.style.left = `${x}vw`;
        particle.style.top = `${y}vh`;
        
        requestAnimationFrame(animateParticle);
    }
    
    animateParticle();
    container.appendChild(particle);
}

// ASCII Hintergrund generieren
function generateASCIIBackground() {
    const asciiContainer = document.getElementById('ascii-background');
    if (!asciiContainer) return;
    
    const asciiChars = '01█▓▒░░▒▓█01';
    const columns = Math.floor(window.innerWidth / 12);
    const rows = Math.floor(window.innerHeight / 12);
    
    let asciiArt = '';
    for (let i = 0; i < rows; i++) {
        let line = '';
        for (let j = 0; j < columns; j++) {
            const charIndex = Math.floor(Math.random() * asciiChars.length);
            line += asciiChars[charIndex];
        }
        asciiArt += line + '\n';
    }
    
    asciiContainer.textContent = asciiArt;
    
    // Animation für ASCII Zeichen
    function animateASCII() {
        const text = asciiContainer.textContent;
        const chars = text.split('');
        
        // Ändere zufällig einige Zeichen
        for (let i = 0; i < 10; i++) {
            const index = Math.floor(Math.random() * chars.length);
            const charIndex = Math.floor(Math.random() * asciiChars.length);
            chars[index] = asciiChars[charIndex];
        }
        
        asciiContainer.textContent = chars.join('');
        setTimeout(animateASCII, 100);
    }
    
    animateASCII();
}

// Glitch Effekte steuern
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        // Zufällige Glitch-Intervalle
        setInterval(() => {
            element.style.animation = 'none';
            void element.offsetWidth; // Trigger reflow
            element.style.animation = null;
        }, Math.random() * 5000 + 3000);
    });
    
    // Flicker Effekt für Name
    const flickerName = document.querySelector('.flicker');
    if (flickerName) {
        setInterval(() => {
            flickerName.style.opacity = Math.random() > 0.5 ? '1' : '0.3';
        }, 100);
    }
}

// Projekte Filter System
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aktiven Button markieren
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Projekte filtern
            projectCards.forEach(card => {
                const tech = card.dataset.tech || '';
                
                if (filter === 'all' || tech.includes(filter)) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Animation triggern
            setTimeout(() => {
                projectCards.forEach(card => {
                    if (card.style.display === 'block') {
                        card.classList.add('visible');
                    }
                });
            }, 50);
        });
    });
}

// Terminal Effekte
function initTerminalEffects() {
    const terminalLines = [
        "> scanning_system... [OK]",
        "> loading_portfolio... [DONE]",
        "> dimension_rift_stable... [STABLE]",
        "> visitor_detected... [WELCOME]",
        "> connection_established... [READY]"
    ];
    
    const terminal = document.querySelector('.terminal-content .typing');
    if (!terminal) return;
    
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';
    let isDeleting = false;
    
    function typeTerminal() {
        if (lineIndex >= terminalLines.length) {
            lineIndex = 0;
        }
        
        const currentText = terminalLines[lineIndex];
        
        if (!isDeleting) {
            currentLine = currentText.substring(0, charIndex);
            charIndex++;
            
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(typeTerminal, 2000);
                return;
            }
        } else {
            currentLine = currentText.substring(0, charIndex);
            charIndex--;
            
            if (charIndex < 0) {
                isDeleting = false;
                lineIndex++;
                setTimeout(typeTerminal, 500);
                return;
            }
        }
        
        terminal.innerHTML = `<span class="terminal-prompt">></span> ${currentLine}<span class="terminal-cursor">█</span>`;
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeTerminal, speed);
    }
    
    typeTerminal();
    
    // Footer Terminal
    const footerTerminal = document.getElementById('footer-terminal');
    if (footerTerminal) {
        const footerLines = [
            "INITIALIZING DIMENSIONAL INTERFACE...",
            "LOADING USER PROFILE...",
            "SCANNING FOR TEMPORAL ANOMALIES...",
            "CONNECTING TO MAINFRAME...",
            "ESTABLISHING QUANTUM LINK...",
            "SYSTEM READY."
        ];
        
        let footerIndex = 0;
        
        function typeFooterTerminal() {
            if (footerIndex < footerLines.length) {
                const line = document.createElement('div');
                line.className = 'terminal-line';
                line.textContent = footerLines[footerIndex];
                footerTerminal.appendChild(line);
                footerIndex++;
                
                // Scroll zum neuesten Eintrag
                footerTerminal.scrollTop = footerTerminal.scrollHeight;
                
                setTimeout(typeFooterTerminal, 1000);
            } else {
                // Wiederhole von vorne
                setTimeout(() => {
                    footerTerminal.innerHTML = '';
                    footerIndex = 0;
                    typeFooterTerminal();
                }, 5000);
            }
        }
        
        typeFooterTerminal();
    }
}

// Skill Radar Chart
function initSkillRadar() {
    const canvas = document.getElementById('skill-radar');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    
    const skills = [
        { label: 'C#', value: 95 },
        { label: 'C++', value: 85 },
        { label: 'Unity', value: 98 },
        { label: 'Unreal', value: 80 },
        { label: 'AI', value: 75 },
        { label: '3D', value: 70 }
    ];
    
    const numSkills = skills.length;
    const angleStep = (Math.PI * 2) / numSkills;
    
    // Radar Hintergrund zeichnen
    function drawRadar() {
        // Hintergrund
        ctx.fillStyle = 'rgba(10, 10, 24, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Konzentrische Kreise
        for (let i = 1; i <= 5; i++) {
            const r = radius * (i / 5);
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(108, 92, 231, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        
        // Skill Achsen
        ctx.strokeStyle = 'rgba(108, 92, 231, 0.5)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < numSkills; i++) {
            const angle = i * angleStep;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
            
            // Skill Labels
            const labelX = centerX + Math.cos(angle) * (radius + 20);
            const labelY = centerY + Math.sin(angle) * (radius + 20);
            
            ctx.fillStyle = '#fff';
            ctx.font = '12px Orbitron';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(skills[i].label, labelX, labelY);
        }
        
        // Skill Daten zeichnen
        ctx.beginPath();
        for (let i = 0; i < numSkills; i++) {
            const angle = i * angleStep;
            const value = skills[i].value / 100;
            const r = radius * value;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        
        // Füllung
        ctx.fillStyle = 'rgba(108, 92, 231, 0.3)';
        ctx.fill();
        
        // Umrandung
        ctx.strokeStyle = '#6c5ce7';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Datenpunkte
        for (let i = 0; i < numSkills; i++) {
            const angle = i * angleStep;
            const value = skills[i].value / 100;
            const r = radius * value;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#6c5ce7';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        
        // Scan-Linie
        const scanAngle = (Date.now() / 50) % 360;
        const scanRad = (scanAngle * Math.PI) / 180;
        const scanX = centerX + Math.cos(scanRad) * radius;
        const scanY = centerY + Math.sin(scanRad) * radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(scanX, scanY);
        ctx.strokeStyle = 'rgba(0, 206, 201, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    // Animation
    function animateRadar() {
        drawRadar();
        requestAnimationFrame(animateRadar);
    }
    
    animateRadar();
}

// Riss Controls
function initRiftControls() {
    const toggleGlitch = document.getElementById('toggle-glitch');
    const toggleStatic = document.getElementById('toggle-static');
    const toggleScanlines = document.getElementById('toggle-scanlines');
    const toggleRift = document.getElementById('toggle-rift-btn');
    
    const glitchOverlay = document.querySelector('.glitch-overlay');
    const staticOverlay = document.querySelector('.static-overlay');
    const scanlines = document.querySelector('.scanlines');
    const dimensionRift = document.querySelector('.dimension-rift');
    
    // Glitch Toggle
    if (toggleGlitch) {
        toggleGlitch.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (glitchOverlay) {
                glitchOverlay.style.opacity = this.classList.contains('active') ? '0.1' : '0';
            }
        });
    }
    
    // Static Toggle
    if (toggleStatic) {
        toggleStatic.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (staticOverlay) {
                staticOverlay.style.opacity = this.classList.contains('active') ? '0.05' : '0';
            }
        });
    }
    
    // Scanlines Toggle
    if (toggleScanlines) {
        toggleScanlines.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (scanlines) {
                scanlines.style.opacity = this.classList.contains('active') ? '0.3' : '0';
            }
        });
    }
    
    // Riss Toggle
    if (toggleRift) {
        toggleRift.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (dimensionRift) {
                dimensionRift.style.opacity = this.classList.contains('active') ? '0.3' : '0';
            }
        });
    }
    
    // Toggle Riss vom Footer
    const toggleRiftFooter = document.getElementById('toggle-rift');
    if (toggleRiftFooter) {
        toggleRiftFooter.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (toggleRift) {
                toggleRift.click();
            }
            
            // Scroll zurück nach oben
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Zufällige Glitch Effekte auf der ganzen Seite
function randomGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch-effect');
    
    setInterval(() => {
        // Zufälliges Element auswählen
        const randomElement = document.querySelectorAll('h1, h2, h3, p')[Math.floor(Math.random() * 5)];
        if (!randomElement) return;
        
        // Temporärer Glitch Effekt
        const originalHTML = randomElement.innerHTML;
        const glitchText = originalHTML.split('').map(char => {
            return Math.random() > 0.9 ? '█' : char;
        }).join('');
        
        randomElement.innerHTML = glitchText;
        
        // Zurück zur Original nach kurzer Zeit
        setTimeout(() => {
            randomElement.innerHTML = originalHTML;
        }, 100);
    }, 3000);
}

// Initialisiere zufällige Glitch Effekte
setTimeout(randomGlitchEffect, 5000);
