// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initThemeToggle();
    initNavigation();
    initSmoothScrolling();
    initContactForm();
    initScrollAnimations();
    initTypingAnimation();
    initParticleBackground();
    initProgrammingLanguages();
});

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update icon based on theme
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add a subtle animation to the toggle button
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (theme === 'light') {
        themeIcon.className = 'fas fa-moon';
    } else {
        themeIcon.className = 'fas fa-sun';
    }
}

// Navigation Functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Update active navigation link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '350px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
    });
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(45deg, #10b981, #059669)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
    } else {
        notification.style.background = 'linear-gradient(45deg, #6366f1, #8b5cf6)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.about-card, .skill-category, .project-card, .contact-info, .contact-form');
    animatedElements.forEach(el => observer.observe(el));
}

// Typing Animation for Hero Section
function initTypingAnimation() {
    const codeElement = document.querySelector('.typing-animation');
    if (!codeElement) {
        console.log('Typing animation element not found');
        return;
    }
    
    // Set initial content to ensure element is visible
    codeElement.textContent = 'Loading...';
    
    const codeSnippets = [
        `const developer = {
  name: "Akshat Srivastava",
  skills: ["JavaScript", "React", "Node.js"],
  passion: "Creating amazing web experiences",
  status: "Ready for new challenges! 🚀"
};

console.log(developer.passion);`,
        `function createAwesomeProject() {
  const idea = getInnovativeIdea();
  const code = writeCleanCode(idea);
  const result = deployToProduction(code);
  
  return result; // 🎉 Success!
}

createAwesomeProject();`,
        `// Building the future, one line at a time
const skills = ["Frontend", "Backend", "DSA"];
const languages = ["C++", "JavaScript", "Java"];

skills.forEach(skill => {
  console.log(\`Mastering \${skill} development\`);
});

// Always learning, always growing 📚`
    ];
    
    let currentSnippet = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeCode() {
        const current = codeSnippets[currentSnippet];
        
        if (!isDeleting) {
            codeElement.textContent = current.slice(0, currentChar + 1);
            currentChar++;
            
            if (currentChar === current.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 2000); // Pause before deleting
            }
        } else {
            codeElement.textContent = current.slice(0, currentChar - 1);
            currentChar--;
            
            if (currentChar === 0) {
                isDeleting = false;
                currentSnippet = (currentSnippet + 1) % codeSnippets.length;
            }
        }
        
        const typingSpeed = isDeleting ? 25 : 45;
        setTimeout(typeCode, typingSpeed);
    }
    
    // Start typing animation after a delay
    setTimeout(() => {
        codeElement.textContent = '';
        typeCode();
    }, 500);
}

// Particle Background Effect
function initParticleBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 0;
    `;
    
    hero.style.position = 'relative';
    hero.appendChild(particleContainer);
    
    // Create particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.6;
            animation: float 10s infinite linear;
        `;
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        
        // Add CSS animation
        if (!document.querySelector('#particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes float {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.6;
                    }
                    90% {
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 10000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 500);
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(248, 250, 252, 0.98)';
        if (document.body.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        }
    } else {
        navbar.style.background = 'rgba(248, 250, 252, 0.95)';
        if (document.body.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    }
});

// Dynamic skill bars animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('skill-animate');
    });
}

// Initialize skill animations when skills section is visible
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Dynamic project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Copy email functionality
document.addEventListener('click', function(e) {
    if (e.target.closest('.contact-method') && e.target.closest('.contact-method').textContent.includes('@')) {
        const email = e.target.closest('.contact-method').querySelector('span').textContent;
        navigator.clipboard.writeText(email).then(() => {
            showNotification('Email copied to clipboard!', 'success');
        });
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'T' to toggle theme
    if (e.key.toLowerCase() === 't' && !e.target.matches('input, textarea')) {
        document.getElementById('themeToggle').click();
    }
    
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-menu').classList.remove('active');
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Programming Languages Progress Animation
function initProgrammingLanguages() {
    const languageCards = document.querySelectorAll('.language-card');
    
    languageCards.forEach(card => {
        const progressFill = card.querySelector('.progress-fill');
        const level = card.getAttribute('data-level');
        
        if (progressFill && level) {
            // Set CSS custom property for progress width
            progressFill.style.setProperty('--progress-width', level + '%');
        }
        
        // Add hover effects for progress bar display
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.language-icon');
            const progressBar = this.querySelector('.progress-bar');
            
            // Show progress bar and animate icon on hover
            if (icon) {
                icon.style.transform = 'scale(1.15) rotateY(180deg)';
            }
            
            if (progressBar) {
                progressBar.style.opacity = '1';
                progressBar.style.transform = 'translateY(0)';
                progressFill.style.width = level + '%';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.language-icon');
            const progressBar = this.querySelector('.progress-bar');
            
            // Reset icon and hide progress bar
            if (icon) {
                icon.style.transform = 'scale(1) rotateY(0deg)';
            }
            
            if (progressBar) {
                progressBar.style.opacity = '0';
                progressBar.style.transform = 'translateY(10px)';
                progressFill.style.width = '0';
            }
        });
    });
}
