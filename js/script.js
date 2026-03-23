
(function () {
    // Elementos do menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const menuOverlay = document.getElementById('menuOverlay');

    // Função para fechar o menu
    function closeMenu() {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Libera scroll
    }

    // Função para abrir o menu
    function openMenu() {
        navLinks.classList.add('active');
        menuToggle.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita scroll com menu aberto
    }

    // Toggle do menu
    function toggleMenu() {
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Evento do botão hambúrguer
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Fechar menu ao clicar no overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Fechar menu ao clicar em um link do menu
    const menuItems = document.querySelectorAll('.nav-links a');
    menuItems.forEach(link => {
        link.addEventListener('click', function (e) {
            closeMenu();

            // Scroll suave para a seção
            const hash = this.getAttribute('href');
            if (hash && hash !== '#' && hash.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Scroll suave para o logo também
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
        logoLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
        });
    }

    // Fechar menu ao redimensionar a tela para desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    // Formulário de agendamento
    const form = document.getElementById('agendamentoForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nome = document.getElementById('nome')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const telefone = document.getElementById('telefone')?.value.trim();
            const tipo = document.getElementById('tipoAtendimento')?.value;
            if (!nome || !email || !telefone || !tipo) {
                alert('Por favor, preencha todos os campos obrigatórios (*).');
                return;
            }
            alert(`Olá ${nome}, seu pedido de agendamento foi recebido! Em breve entrarei em contato via WhatsApp ou e-mail para confirmar a sessão. 🤍`);
            form.reset();
        });
    }
})();
