(function () {
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
            // Simulação de sucesso
            alert(`Olá ${nome}, seu pedido de agendamento foi recebido! Em breve entrarei em contato via WhatsApp ou e-mail para confirmar a sessão. 🤍`);
            form.reset();
            // Opcional: redirecionar ou evento de agradecimento
        });
    }
    // Suave scroll para links internos
    document.querySelectorAll('.nav-links a, .logo a[href="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
})();