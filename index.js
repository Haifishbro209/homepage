

const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-category, .stat-card');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.floating-orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

const texts = [
    "DIGITAL ARCHITECT",
    "CODE MAGICIAN",
    "SAAS BUILDER",
    "TECH VISIONARY",
    "FUTURE MILLIONAIRE"
];

let currentIndex = 0;
const heroTitle = document.querySelector('.hero-title');

setInterval(() => {
    heroTitle.style.opacity = '0';
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        heroTitle.textContent = texts[currentIndex];
        heroTitle.style.opacity = '1';
    }, 500);
}, 3000);

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-20px) rotateX(5deg)';
        this.style.boxShadow = '0 30px 60px rgba(74, 145, 226, 0.55)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotateX(0deg)';
        this.style.boxShadow = 'none';
    });
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(5, 5, 5, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

const style = document.createElement('style');
style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
document.head.appendChild(style);

// Performance Optimization - Lazy Loading
const lazyElements = document.querySelectorAll('.project-card, .skill-category');

const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.willChange = 'transform';
            setTimeout(() => {
                entry.target.style.willChange = 'auto';
            }, 1000);
        }
    });
});

lazyElements.forEach(el => lazyObserver.observe(el));