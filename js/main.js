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

// Calculadora de simulador
function calcularSimulador() {
    const ticketInput = document.getElementById('ticket');
    const ticket = parseFloat(ticketInput.value);

    if (!ticket || ticket <= 0) {
        alert('Por favor, insira um valor válido para o ticket médio.');
        return;
    }

    // 22 contatos por mês × 25% de conversão = 5.5 clientes
    const contatosPorMes = 22;
    const taxaConversao = 0.25;
    const clientesGerados = contatosPorMes * taxaConversao;
    const receitaMensal = clientesGerados * ticket;

    // Exibir resultado
    const resultadoDiv = document.getElementById('resultado-simulador');
    const valorSpan = document.getElementById('valor-resultado');

    valorSpan.textContent = formatarMoeda(receitaMensal);
    resultadoDiv.style.display = 'block';

    // Animar o resultado
    resultadoDiv.style.animation = 'none';
    setTimeout(() => {
        resultadoDiv.style.animation = 'fadeInUp 0.5s ease-out';
    }, 10);

    // Scroll para o resultado
    setTimeout(() => {
        resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
}

// Formatar valor em moeda
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Abrir formulário (placeholder)
function abrirFormulario() {
    alert('Formulário de auditoria. Redirecionando para WhatsApp...');
    window.location.href = 'https://wa.me/5511999999999?text=Gostaria%20de%20solicitar%20uma%20auditoria%20gratuita%20do%20M%C3%A9todo%20Farol';
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
    document.querySelectorAll('.resultado-card, .beneficio-card, .pilar-card').forEach(el => {
        cardObserver.observe(el);
    });

    // Permitir Enter no input do simulador
    document.getElementById('ticket').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcularSimulador();
        }
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

    // Animação de números contadores
    function animarNumeros() {
        const numeros = document.querySelectorAll('.resultado-numero');
        
        numeros.forEach(numero => {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !numero.dataset.animado) {
                        numero.dataset.animado = 'true';
                        const valor = parseInt(numero.textContent);
                        let atual = 0;
                        const incremento = valor / 30;
                        
                        const intervalo = setInterval(() => {
                            atual += incremento;
                            if (atual >= valor) {
                                numero.textContent = valor;
                                clearInterval(intervalo);
                            } else {
                                numero.textContent = Math.floor(atual);
                            }
                        }, 30);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(numero);
        });
    }

    animarNumeros();

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
