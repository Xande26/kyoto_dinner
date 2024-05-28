document.addEventListener('DOMContentLoaded', function () {
    // Botão "Dados Pessoais"
    const dadosPessoaisBtn = document.getElementById('dadosPessoaisBtn');
    const dadosPessoaisModal = document.getElementById('dadosPessoaisModal');

    // Exibir o modal ao clicar no botão "Dados Pessoais"
    dadosPessoaisBtn.addEventListener('click', function () {
        dadosPessoaisModal.style.display = 'block';
    });

    // Fechar o modal ao clicar no botão de fechar
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Botão "Histórico de Compras"
    const historicoComprasBtn = document.getElementById('historicoComprasBtn');
    const historicoComprasModal = document.getElementById('historicoComprasModal');

    // Exibir o modal ao clicar no botão "Histórico de Compras"
    historicoComprasBtn.addEventListener('click', function () {
        historicoComprasModal.style.display = 'block';
    });
});
