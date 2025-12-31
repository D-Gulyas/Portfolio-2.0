// Dimension Riss Effects
document.addEventListener('DOMContentLoaded', function() {
    initDimensionRift();
    initMatrixBackground();
    createRiftElements();
    initFooterLog();
});

// Create Dimension Rift
function initDimensionRift() {
    const rift = document.querySelector('.dimension-rift');
    if (!rift) return;
    
    // Create rift lines
    for (let i = 0; i < 15; i++) {
        createRiftLine(rift);
    }
    
    // Create energy particles
    for (let i = 0; i < 30; i++) {
        createEnergyParticle(rift);
    }
}

// Create individual rift line
function createRiftLine(container) {
    const line = document.createElement('div');
    line.className = 'rift-line';
    
    // Random position and properties
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const width = Math.random() * 200 + 50;
    const delay = Math.random() * 10;
    
    line.style.cssText = `
        top: ${top}%;
        left: ${left}%;
        width: ${width}px;
        animation-delay: ${delay}s;
        opacity: ${Math.random() * 0.5 + 0.2};
    `;
    
    container.appendChild(line);
}

// Create energy particle
function createEnergyParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'energy-particle';
    
    // Random position
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = Math.random() * 3 + 2;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        left: ${left}%;
        top: ${top}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
}

// Create additional rift elements
function createRiftElements() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        // Add data streams
        for (let i = 0; i < 3; i++) {
            createDataStream(section);
        }
        
        // Add rift cracks
        if (Math.random() > 0.5) {
            createRiftCrack(section);
        }
    });
}

// Create data stream
function createDataStream(container) {
    const stream = document.createElement('div');
    stream.className = 'data-stream';
    
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 5 + 3;
    
    stream.style.cssText = `
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${Math.random() * 0.3 + 0.1};
    `;
    
    container.appendChild(stream);
}

// Create rift crack
function createRiftCrack(container) {
    const crack = document.createElement('div');
    crack.className = 'rift-crack';
    
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const height = Math.random() * 200 + 100;
    const rotation = Math.random() * 180;
    
    crack.style.cssText = `
        left: ${left}%;
        top: ${top}%;
        height: ${height}px;
        transform: rotate(${rotation}deg);
    `;
    
    container.appendChild(crack);
}

// Matrix Background
function initMatrixBackground() {
    const matrix = document.getElementById('matrix-background');
    if (!matrix) return;
    
    // Create matrix characters
    const chars = '01アイウエオカキクケコサシスセソ';
    const columns = Math.floor(window.innerWidth / 20);
    
    let matrixText = '';
    for (let i = 0; i < 50; i++) { // 50 lines
        let line = '';
        for (let j = 0; j < columns; j++) {
            const charIndex = Math.floor(Math.random() * chars.length);
            line += chars[charIndex];
        }
        matrixText += line + '\n';
    }
    
    matrix.textContent = matrixText;
    
    // Animate matrix
    function animateMatrix() {
        const text = matrix.textContent;
        const lines = text.split('\n');
        
        // Shift lines up
        lines.shift();
        lines.push(generateMatrixLine(columns));
        
        matrix.textContent = lines.join('\n');
    }
    
    // Generate new matrix line
    function generateMatrixLine(length) {
        let line = '';
        for (let i = 0; i < length; i++) {
            const charIndex = Math.floor(Math.random() * chars.length);
            line += chars[charIndex];
        }
        return line;
    }
    
    // Update matrix every 100ms
    setInterval(animateMatrix, 100);
}

// Footer Terminal Log
function initFooterLog() {
    const log = document.getElementById('footer-log');
    if (!log) return;
    
    const messages = [
        "SYSTEM: All systems operational",
        "DIMENSION: Stable",
        "NETWORK: Connected",
        "SECURITY: Encrypted",
        "PROJECTS: Loaded successfully",
        "CONTACT: Ready for transmission",
        "TIME: " + new Date().toLocaleTimeString(),
        "STATUS: Portfolio active"
    ];
    
    let messageIndex = 0;
    
    function addLogMessage() {
        if (messageIndex < messages.length) {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.textContent = messages[messageIndex];
            log.appendChild(line);
            messageIndex++;
            
            // Scroll to bottom
            log.scrollTop = log.scrollHeight;
        } else {
            // Clear and restart
            setTimeout(() => {
                log.innerHTML = '';
                messageIndex = 0;
            }, 5000);
        }
    }
    
    // Add initial messages
    for (let i = 0; i < 3; i++) {
        setTimeout(() => addLogMessage(), i * 1000);
    }
    
    // Continue adding messages
    setInterval(() => {
        if (Math.random() > 0.3) {
            addLogMessage();
        }
    }, 3000);
}

// Random Dimension Events
function initRandomEvents() {
    setInterval(() => {
        if (Math.random() > 0.8) {
            triggerDimensionEvent();
        }
    }, 10000);
}

// Trigger random dimension event
function triggerDimensionEvent() {
    const events = [
        'glitch',
        'pulse',
        'static',
        'scan'
    ];
    
    const event = events[Math.floor(Math.random() * events.length)];
    
    switch (event) {
        case 'glitch':
            triggerGlitchEvent();
            break;
        case 'pulse':
            triggerPulseEvent();
            break;
        case 'static':
            triggerStaticEvent();
            break;
        case 'scan':
            triggerScanEvent();
            break;
    }
}

// Trigger glitch event
function triggerGlitchEvent() {
    const body = document.body;
    body.classList.add('glitch-event');
    
    setTimeout(() => {
        body.classList.remove('glitch-event');
    }, 500);
}

// Trigger pulse event
function triggerPulseEvent() {
    const rift = document.querySelector('.dimension-rift');
    if (rift) {
        rift.style.animation = 'none';
        void rift.offsetWidth;
        rift.style.animation = 'riftPulse 1s ease';
        
        setTimeout(() => {
            rift.style.animation = '';
        }, 1000);
    }
}

// Trigger static event
function triggerStaticEvent() {
    const staticOverlay = document.querySelector('.static-overlay');
    if (staticOverlay) {
        staticOverlay.style.opacity = '0.1';
        
        setTimeout(() => {
            staticOverlay.style.opacity = '';
        }, 300);
    }
}

// Trigger scan event
function triggerScanEvent() {
    const scanlines = document.querySelector('.scanlines');
    if (scanlines) {
        scanlines.style.opacity = '0.3';
        
        setTimeout(() => {
            scanlines.style.opacity = '';
        }, 1000);
    }
}

// Initialize random events
setTimeout(initRandomEvents, 15000);
