// Advanced Animations and Effects

// Cursor Follow Effect
class CursorEffect {
    constructor() {
        this.cursor = null;
        this.cursorTrail = [];
        this.init();
    }
    
    init() {
        this.createCursor();
        this.bindEvents();
    }
    
    createCursor() {
        // Main cursor
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transition: transform 0.1s ease;
            opacity: 0;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(this.cursor);
        
        // Cursor trail
        for (let i = 0; i < 5; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.cssText = `
                position: fixed;
                width: ${15 - i * 2}px;
                height: ${15 - i * 2}px;
                background: var(--accent-color);
                border-radius: 50%;
                pointer-events: none;
                z-index: ${9999 - i};
                opacity: ${0.8 - i * 0.15};
                transition: all 0.1s ease;
                mix-blend-mode: difference;
            `;
            this.cursorTrail.push(trail);
            document.body.appendChild(trail);
        }
    }
    
    bindEvents() {
        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            this.cursor.style.opacity = '1';
            this.cursor.style.left = mouseX - 10 + 'px';
            this.cursor.style.top = mouseY - 10 + 'px';
        });
        
        document.addEventListener('mouseenter', () => {
            this.cursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            this.cursor.style.opacity = '0';
        });
        
        // Animate trail
        const animateTrail = () => {
            let currentX = mouseX;
            let currentY = mouseY;
            
            this.cursorTrail.forEach((trail, index) => {
                trailX += (currentX - trailX) * 0.3;
                trailY += (currentY - trailY) * 0.3;
                
                trail.style.left = trailX - (7.5 - index) + 'px';
                trail.style.top = trailY - (7.5 - index) + 'px';
                
                currentX = trailX;
                currentY = trailY;
            });
            
            requestAnimationFrame(animateTrail);
        };
        
        animateTrail();
        
        // Hover effects
        document.addEventListener('mouseover', (e) => {
            if (e.target.matches('a, button, .project-card, .skill-item')) {
                this.cursor.style.transform = 'scale(1.5)';
                this.cursor.style.background = 'var(--accent-color)';
            }
        });
        
        document.addEventListener('mouseout', (e) => {
            if (e.target.matches('a, button, .project-card, .skill-item')) {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'var(--primary-color)';
            }
        });
    }
}

// Floating Elements Animation
class FloatingElements {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        this.createFloatingElements();
        this.animateElements();
    }
    
    createFloatingElements() {
        const symbols = ['⚡', '💡', '🚀', '💻', '🎯', '⭐', '🔥', '💎'];
        
        for (let i = 0; i < 8; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.textContent = symbols[i];
            element.style.cssText = `
                position: fixed;
                font-size: 24px;
                pointer-events: none;
                z-index: 1;
                opacity: 0.1;
                animation: float-around 20s infinite linear;
                animation-delay: ${i * 2.5}s;
            `;
            
            element.style.left = Math.random() * window.innerWidth + 'px';
            element.style.top = Math.random() * window.innerHeight + 'px';
            
            this.elements.push(element);
            document.body.appendChild(element);
        }
        
        // Add CSS animation
        if (!document.querySelector('#floating-elements-styles')) {
            const style = document.createElement('style');
            style.id = 'floating-elements-styles';
            style.textContent = `
                @keyframes float-around {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    25% {
                        transform: translate(100px, -100px) rotate(90deg);
                    }
                    50% {
                        transform: translate(-50px, -200px) rotate(180deg);
                    }
                    75% {
                        transform: translate(-150px, -50px) rotate(270deg);
                    }
                    100% {
                        transform: translate(0, 0) rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    animateElements() {
        setInterval(() => {
            this.elements.forEach(element => {
                const newX = Math.random() * (window.innerWidth - 50);
                const newY = Math.random() * (window.innerHeight - 50);
                element.style.left = newX + 'px';
                element.style.top = newY + 'px';
            });
        }, 20000);
    }
}

// Text Reveal Animation
class TextReveal {
    static init() {
        const textElements = document.querySelectorAll('h1, h2, h3, .hero-subtitle, .hero-description');
        
        textElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.cssText = `
                    display: inline-block;
                    opacity: 0;
                    transform: translateY(50px);
                    animation: revealChar 0.6s ease forwards;
                    animation-delay: ${index * 0.03}s;
                `;
                element.appendChild(span);
            });
        });
        
        // Add CSS animation
        if (!document.querySelector('#text-reveal-styles')) {
            const style = document.createElement('style');
            style.id = 'text-reveal-styles';
            style.textContent = `
                @keyframes revealChar {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Parallax Scrolling Effect
class ParallaxEffect {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        this.setupParallaxElements();
        this.bindScrollEvent();
    }
    
    setupParallaxElements() {
        // Add parallax to hero elements
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            this.elements.push({
                element: heroVisual,
                speed: 0.5
            });
        }
        
        // Add parallax to section backgrounds
        const sections = document.querySelectorAll('.about, .skills, .projects');
        sections.forEach(section => {
            this.elements.push({
                element: section,
                speed: 0.3
            });
        });
    }
    
    bindScrollEvent() {
        let ticking = false;
        
        const updateParallax = () => {
            const scrollTop = window.pageYOffset;
            
            this.elements.forEach(({ element, speed }) => {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + scrollTop;
                const elementHeight = rect.height;
                const windowHeight = window.innerHeight;
                
                if (scrollTop + windowHeight > elementTop && scrollTop < elementTop + elementHeight) {
                    const yPos = -(scrollTop - elementTop) * speed;
                    element.style.transform = `translateY(${yPos}px)`;
                }
            });
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });
    }
}

// Magnetic Button Effect
class MagneticButtons {
    static init() {
        const buttons = document.querySelectorAll('.btn, .project-link, .social-links a');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// Stagger Animation for Lists
class StaggerAnimation {
    static init() {
        const lists = document.querySelectorAll('.nav-menu, .skill-items, .contact-methods');
        
        lists.forEach(list => {
            const items = list.children;
            
            Array.from(items).forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                item.style.animation = `staggerIn 0.6s ease forwards`;
                item.style.animationDelay = `${index * 0.1}s`;
            });
        });
        
        // Add CSS animation
        if (!document.querySelector('#stagger-styles')) {
            const style = document.createElement('style');
            style.id = 'stagger-styles';
            style.textContent = `
                @keyframes staggerIn {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Morphing Background Shapes
class MorphingShapes {
    constructor() {
        this.shapes = [];
        this.init();
    }
    
    init() {
        this.createShapes();
        this.animateShapes();
    }
    
    createShapes() {
        for (let i = 0; i < 3; i++) {
            const shape = document.createElement('div');
            shape.className = 'morphing-shape';
            shape.style.cssText = `
                position: fixed;
                width: 200px;
                height: 200px;
                background: linear-gradient(45deg, var(--primary-color)20, var(--accent-color)10);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                opacity: 0.1;
                filter: blur(40px);
                animation: morph 15s infinite ease-in-out;
                animation-delay: ${i * 5}s;
            `;
            
            shape.style.left = Math.random() * window.innerWidth + 'px';
            shape.style.top = Math.random() * window.innerHeight + 'px';
            
            this.shapes.push(shape);
            document.body.appendChild(shape);
        }
        
        // Add CSS animation
        if (!document.querySelector('#morphing-shapes-styles')) {
            const style = document.createElement('style');
            style.id = 'morphing-shapes-styles';
            style.textContent = `
                @keyframes morph {
                    0%, 100% {
                        border-radius: 50% 50% 50% 50%;
                        transform: scale(1) rotate(0deg);
                    }
                    25% {
                        border-radius: 30% 70% 60% 40%;
                        transform: scale(1.2) rotate(90deg);
                    }
                    50% {
                        border-radius: 60% 40% 30% 70%;
                        transform: scale(0.8) rotate(180deg);
                    }
                    75% {
                        border-radius: 40% 60% 70% 30%;
                        transform: scale(1.1) rotate(270deg);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    animateShapes() {
        setInterval(() => {
            this.shapes.forEach(shape => {
                const newX = Math.random() * (window.innerWidth - 200);
                const newY = Math.random() * (window.innerHeight - 200);
                shape.style.left = newX + 'px';
                shape.style.top = newY + 'px';
            });
        }, 10000);
    }
}

// Loading Animation
class LoadingAnimation {
    static show() {
        const loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <div class="loader-text">Loading Amazing Portfolio... 🚀</div>
            </div>
        `;
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-color);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 1;
            transition: opacity 0.5s ease;
        `;
        
        // Add loader styles
        const style = document.createElement('style');
        style.textContent = `
            .loader-content {
                text-align: center;
            }
            
            .loader-spinner {
                width: 60px;
                height: 60px;
                border: 4px solid var(--border-color);
                border-top: 4px solid var(--primary-color);
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            
            .loader-text {
                color: var(--text-color);
                font-weight: 600;
                font-size: 1.2rem;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(loader);
        
        return loader;
    }
    
    static hide(loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1500);
    }
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    // Show loading animation
    const loader = LoadingAnimation.show();
    
    // Initialize effects after a short delay
    setTimeout(() => {
        // Hide loader
        LoadingAnimation.hide(loader);
        
        // Initialize all effects
        if (window.innerWidth > 768) {
            new CursorEffect();
            new FloatingElements();
            new ParallaxEffect();
            new MorphingShapes();
        }
        
        TextReveal.init();
        MagneticButtons.init();
        StaggerAnimation.init();
    }, 1000);
});

// Resize handler
window.addEventListener('resize', () => {
    // Update floating elements positions
    document.querySelectorAll('.floating-element').forEach(element => {
        element.style.left = Math.random() * window.innerWidth + 'px';
        element.style.top = Math.random() * window.innerHeight + 'px';
    });
    
    // Update morphing shapes positions
    document.querySelectorAll('.morphing-shape').forEach(shape => {
        shape.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        shape.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    });
});
