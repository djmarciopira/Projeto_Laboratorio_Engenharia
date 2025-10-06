function mostrarDataAtual() {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const hoje = new Date();
    const diaSemana = dias[hoje.getDay()];
    const dia = hoje.getDate();
    const mes = meses[hoje.getMonth()];
    const ano = hoje.getFullYear();
    document.getElementById('dataAtual').textContent = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

function atualizarRelogio() {
    const agora = new Date();
    let h = String(agora.getHours()).padStart(2, '0');
    let m = String(agora.getMinutes()).padStart(2, '0');
    let s = String(agora.getSeconds()).padStart(2, '0');
    document.getElementById('relogio').textContent = `${h}:${m}:${s}`;
    setTimeout(atualizarRelogio, 1000);
}

function verificarPalindromo() {
    const texto = document.getElementById('textoPalindromo').value;
    const limpo = texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const invertido = limpo.split('').reverse().join('');
    if (limpo && limpo === invertido) {
        alert('É um palíndromo!');
    } else {
        alert('Não é um palíndromo.');
    }
}

window.onload = function() {
    mostrarDataAtual();
    atualizarRelogio();
};
