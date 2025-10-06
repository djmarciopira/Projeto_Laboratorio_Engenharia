function parOuImpar() {
    let num = parseInt(prompt('Digite um número inteiro positivo:'));
    if (isNaN(num) || num <= 0) {
        alert('Valor inválido!');
        return;
    }
    if (num % 2 === 0) {
        alert('O número ' + num + ' é PAR.');
    } else {
        alert('O número ' + num + ' é ÍMPAR.');
    }
}

function ehPrimo() {
    let num = parseInt(prompt('Digite um número inteiro positivo:'));
    if (isNaN(num) || num <= 0) {
        alert('Valor inválido!');
        return;
    }
    if (num === 1) {
        alert('1 não é primo.');
        return;
    }
    let primo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        alert('O número ' + num + ' é PRIMO.');
    } else {
        alert('O número ' + num + ' NÃO é primo.');
    }
}

function fatorial() {
    let num = parseInt(prompt('Digite um número inteiro positivo:'));
    if (isNaN(num) || num < 0) {
        alert('Valor inválido!');
        return;
    }
    let fat = 1;
    for (let i = 2; i <= num; i++) {
        fat *= i;
    }
    alert('O fatorial de ' + num + ' é ' + fat);
}

function verificaTipoDado() {
    let dado = prompt('Digite um dado:');
    let confirmar = confirm('Deseja verificar o tipo do dado informado?');
    if (confirmar) {
        let tipo;
        if (!isNaN(Number(dado)) && dado.trim() !== '') {
            tipo = 'Number';
        } else {
            tipo = 'String';
        }
        document.body.innerHTML += '<p>O tipo do dado informado é: ' + tipo + '</p>';
    } else {
        document.body.innerHTML += '<p>Obrigado por visitar esta página</p>';
    }
}
