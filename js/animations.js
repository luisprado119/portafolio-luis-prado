// Sistema de animaciones avanzadas para el portafolio

class AnimationManager {
    constructor() {
        this.observers = new Map();
        this.animations = new Map();
        this.init();
    }

    init() {
        this.createObservers();
        this.setupAnimations();
        this.bindEvents();
    }

    createObservers() {
        // Observer para animaciones de entrada
        this.observers.set('entrance', new IntersectionObserver(
            (entries) => this.handleEntranceAnimations(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        ));

        // Observer para animaciones de scroll
        this.observers.set('scroll', new IntersectionObserver(
            (entries) => this.handleScrollAnimations(entries),
            {
                threshold: 0.5,
                rootMargin: '0px 0px 0px 0px'
            }
        ));

        // Observer para animaciones de hover
        this.observers.set('hover', new IntersectionObserver(
            (entries) => this.handleHoverAnimations(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px 0px 0px'
            }
        ));
    }

    setupAnimations() {
        // Configurar animaciones de entrada
        this.setupEntranceAnimations();

        // Configurar animaciones de scroll
        this.setupScrollAnimations();

        // Configurar animaciones de hover
        this.setupHoverAnimations();

        // Configurar animaciones especiales
        this.setupSpecialAnimations();
    }

    setupEntranceAnimations() {
        const entranceElements = document.querySelectorAll(
            '.fade-in, .fade-in-left, .fade-in-right, .scale-in, .bounce-in, .slide-in-up, .flip-in, .zoom-in, .rotate-in'
        );

        entranceElements.forEach(element => {
            this.observers.get('entrance').observe(element);
        });

        // Animaciones escalonadas
        const staggerElements = document.querySelectorAll('.stagger-in');
        staggerElements.forEach(element => {
            this.observers.get('entrance').observe(element);
        });
    }

    setupScrollAnimations() {
        const scrollElements = document.querySelectorAll('.parallax, .scroll-reveal');
        scrollElements.forEach(element => {
            this.observers.get('scroll').observe(element);
        });
    }

    setupHoverAnimations() {
        const hoverElements = document.querySelectorAll('.hover-animate, .card-lift, .icon-rotate');
        hoverElements.forEach(element => {
            this.observers.get('hover').observe(element);
            this.addHoverListeners(element);
        });
    }

    setupSpecialAnimations() {
        // Efecto de escritura
        this.setupTypewriterEffect();

        // Efecto de partículas
        this.setupParticleSystem();

        // Efecto de gradiente animado
        this.setupGradientAnimation();

        // Efecto de texto revelado
        this.setupTextReveal();
    }

    handleEntranceAnimations(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                if (element.classList.contains('stagger-in')) {
                    this.animateStaggeredChildren(element);
                } else {
                    element.classList.add('visible');
                }

                this.observers.get('entrance').unobserve(element);
            }
        });
    }

    handleScrollAnimations(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                if (element.classList.contains('parallax')) {
                    this.addParallaxEffect(element);
                }

                if (element.classList.contains('scroll-reveal')) {
                    element.classList.add('visible');
                }
            }
        });
    }

    handleHoverAnimations(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                this.addHoverListeners(element);
            }
        });
    }

    animateStaggeredChildren(element) {
        const children = element.children;
        element.classList.add('visible');

        Array.from(children).forEach((child, index) => {
            setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    addParallaxEffect(element) {
        const speed = parseFloat(element.dataset.speed) || 0.5;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrolled;
            const elementHeight = rect.height;

            if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
                const yPos = -(scrolled - elementTop) * speed;
                element.style.transform = `translateY(${yPos}px)`;
            }
        };

        window.addEventListener('scroll', updateParallax);
        updateParallax();
    }

    addHoverListeners(element) {
        if (element.classList.contains('card-lift')) {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-10px) scale(1.02)';
                element.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0) scale(1)';
                element.style.boxShadow = '';
            });
        }

        if (element.classList.contains('icon-rotate')) {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'rotate(360deg)';
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'rotate(0deg)';
            });
        }
    }

    setupTypewriterEffect() {
        const typewriterElements = document.querySelectorAll('.typewriter');

        typewriterElements.forEach(element => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.startTypewriter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(element);
        });
    }

    startTypewriter(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-color)';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Parpadear cursor
                setInterval(() => {
                    element.style.borderRight = element.style.borderRight === 'none' ? '2px solid var(--primary-color)' : 'none';
                }, 500);
            }
        };

        typeWriter();
    }

    setupParticleSystem() {
        const particleContainers = document.querySelectorAll('.particle-container');

        particleContainers.forEach(container => {
            this.createParticleSystem(container);
        });
    }

    createParticleSystem(container) {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1';

        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;

        const resizeCanvas = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        };

        const createParticle = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
        });

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 10000));
            for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle());
            }
        };

        const updateParticles = () => {
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            });
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();
            });

            ctx.globalAlpha = 1;
        };

        const animate = () => {
            updateParticles();
            drawParticles();
            animationId = requestAnimationFrame(animate);
        };

        const start = () => {
            resizeCanvas();
            initParticles();
            animate();
        };

        const stop = () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };

        // Iniciar cuando el contenedor sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    start();
                } else {
                    stop();
                }
            });
        });

        observer.observe(container);

        // Redimensionar canvas
        window.addEventListener('resize', resizeCanvas);
    }

    setupGradientAnimation() {
        const gradientElements = document.querySelectorAll('.gradient-animation');

        gradientElements.forEach(element => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        element.style.animation = 'gradient 15s ease infinite';
                    } else {
                        element.style.animation = 'none';
                    }
                });
            });

            observer.observe(element);
        });
    }

    setupTextReveal() {
        const textRevealElements = document.querySelectorAll('.text-reveal');

        textRevealElements.forEach(element => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.revealText(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(element);
        });
    }

    revealText(element) {
        const text = element.textContent;
        element.innerHTML = '';

        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(100%)';
            span.style.animation = `textReveal 0.6s ease forwards`;
            span.style.animationDelay = `${index * 0.05}s`;
            element.appendChild(span);
        });
    }

    bindEvents() {
        // Efecto de brillo en botones
        this.addShineEffect();

        // Efecto de ondas en clics
        this.addRippleEffect();

        // Animaciones de scroll personalizadas
        this.addCustomScrollAnimations();
    }

    addShineEffect() {
        const shineElements = document.querySelectorAll('.shine');

        shineElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.position = 'relative';
                element.style.overflow = 'hidden';

                const shine = document.createElement('div');
                shine.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    transition: left 0.5s;
                `;

                element.appendChild(shine);

                setTimeout(() => {
                    shine.style.left = '100%';
                }, 10);

                setTimeout(() => {
                    if (element.contains(shine)) {
                        element.removeChild(shine);
                    }
                }, 600);
            });
        });
    }

    addRippleEffect() {
        const rippleElements = document.querySelectorAll('.ripple');

        rippleElements.forEach(element => {
            element.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                setTimeout(() => {
                    if (this.contains(ripple)) {
                        this.removeChild(ripple);
                    }
                }, 600);
            });
        });
    }

    addCustomScrollAnimations() {
        let ticking = false;

        const updateScrollAnimations = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            // Efecto parallax en elementos específicos
            const parallaxElements = document.querySelectorAll('.parallax-slow');
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });

            // Efecto de rotación basado en scroll
            const rotateElements = document.querySelectorAll('.scroll-rotate');
            rotateElements.forEach(element => {
                const rotation = scrolled * 0.1;
                element.style.transform = `rotate(${rotation}deg)`;
            });

            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollAnimations);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }

    // Métodos públicos para controlar animaciones
    playAnimation(element, animationClass) {
        element.classList.add(animationClass);
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, 1000);
    }

    pauseAnimations() {
        document.querySelectorAll('*').forEach(element => {
            element.style.animationPlayState = 'paused';
        });
    }

    resumeAnimations() {
        document.querySelectorAll('*').forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }

    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
        this.animations.clear();
    }
}

// Inicializar el sistema de animaciones
document.addEventListener('DOMContentLoaded', () => {
    window.animationManager = new AnimationManager();
});

// Utilidades de animación globales
window.AnimationUtils = {
    // Crear animación personalizada
    createCustomAnimation: function (element, keyframes, options = {}) {
        return element.animate(keyframes, {
            duration: 1000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards',
            ...options
        });
    },

    // Animar contador
    animateCounter: function (element, start, end, duration = 2000) {
        const startTime = performance.now();
        const difference = end - start;

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + (difference * progress));

            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    },

    // Efecto de rebote
    bounce: function (element, intensity = 0.3) {
        element.style.animation = `bounce 0.6s ease`;
        setTimeout(() => {
            element.style.animation = '';
        }, 600);
    },

    // Efecto de pulso
    pulse: function (element, duration = 1000) {
        element.style.animation = `pulse ${duration}ms ease-in-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    }
};
