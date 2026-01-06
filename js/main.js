/* ============================================
   MÉTODO FAROL - JAVASCRIPT INTERATIVO
   ============================================ */

// Scroll suave para seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Animação de entrada dos elementos
document.addEventListener('DOMContentLoaded', function() {
    // Animar elementos com classe animate-fade-in-up ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos os elementos com classe animate-fade-in-up
    document.querySelectorAll('.animate-fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Animar cards ao scroll
    const cardObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
                entry.target.style.opacity = '0';
                cardObserver.unobserve(entry.target);
            }
        });
    }, cardObserverOptions);

    // Observar cards
    document.querySelectorAll('.problema-card, .lista-item, .pilar-card, .resultado-card, .funciona-card, .nao-faco-item').forEach(el => {
        cardObserver.observe(el);
    });

    // Adicionar efeito de hover aos botões
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito parallax na hero section
    window.addEventListener('scroll', function() {
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            const scrollPosition = window.pageYOffset;
            heroBackground.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });

    // Adicionar classe ativa ao link de navegação baseado no scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Função para rastrear eventos (analytics)
function rastrearEvento(categoria, acao, label) {
    if (window.gtag) {
        gtag('event', acao, {
            'event_category': categoria,
            'event_label': label
        });
    }
}

// Rastrear cliques em botões CTA
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            rastrearEvento('CTA', 'click', this.textContent.trim());
        });
    });
});

// Adicionar suporte a temas (opcional)
function alternarTema() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('tema', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Carregar tema salvo
window.addEventListener('load', function() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
