function validarNome() {
    const nome = document.getElementById('nome').value.trim();
    const erro = document.getElementById('erroNome');
    erro.textContent = nome.length >= 3 ? '' : 'Nome inválido';
    return nome.length >= 3;
}

function validarEmail() {
    const email = document.getElementById('email').value.trim();
    const erro = document.getElementById('erroEmail');
    const regex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    erro.textContent = regex.test(email) ? '' : 'Email inválido';
    return regex.test(email);
}

function validarNascimento() {
    const nasc = document.getElementById('nascimento').value.trim();
    const erro = document.getElementById('erroNascimento');
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    erro.textContent = regex.test(nasc) ? '' : 'Data inválida';
    return regex.test(nasc);
}

function validarFixo() {
    const fixo = document.getElementById('fixo').value.trim();
    const erro = document.getElementById('erroFixo');
    const regex = /^\(\d{2}\)\d{4}-\d{4}$/;
    erro.textContent = regex.test(fixo) ? '' : 'Telefone fixo inválido';
    return regex.test(fixo);
}

function validarCelular() {
    const cel = document.getElementById('celular').value.trim();
    const erro = document.getElementById('erroCelular');
    const regex = /^\(\d{2}\)\d{5}-\d{4}$/;
    erro.textContent = regex.test(cel) ? '' : 'Telefone celular inválido';
    return regex.test(cel);
}

function validarArea() {
    const area = document.getElementById('area').value.trim();
    const erro = document.getElementById('erroArea');
    erro.textContent = area.length >= 3 ? '' : 'Área inválida';
    return area.length >= 3;
}

function validarCurso() {
    const curso = document.getElementById('curso').value.trim();
    const erro = document.getElementById('erroCurso');
    erro.textContent = curso.length >= 3 ? '' : 'Curso inválido';
    return curso.length >= 3;
}

function validarMatricula() {
    const matricula = document.getElementById('matricula').value.trim();
    const erro = document.getElementById('erroMatricula');
    const regex = /^\d{10}$/;
    erro.textContent = regex.test(matricula) ? '' : 'Matrícula inválida';
    return regex.test(matricula);
}

function validarLattes() {
    const lattes = document.getElementById('lattes').value.trim();
    const erro = document.getElementById('erroLattes');
    erro.textContent = lattes.length >= 10 ? '' : 'Lattes inválido';
    return lattes.length >= 10;
}

function validarForm() {
    let ok = true;
    ok &= validarNome();
    ok &= validarEmail();
    ok &= validarNascimento();
    ok &= validarFixo();
    ok &= validarCelular();
    ok &= validarMatricula();
    ok &= validarLattes();
    const perfil = document.querySelector('input[name=perfil]:checked').value;
    if (perfil === 'professor') {
        ok &= validarArea();
    } else {
        ok &= validarCurso();
    }
    return !!ok;
}
    function mascaraData(valor) {
        valor = valor.replace(/\D/g, "");
        if (valor.length > 2) valor = valor.slice(0,2) + '/' + valor.slice(2);
        if (valor.length > 5) valor = valor.slice(0,5) + '/' + valor.slice(5,9);
        return valor.slice(0,10);
    }

    window.onload = function() {
        document.getElementById('nascimento').addEventListener('input', function(e) {
            e.target.value = mascaraData(e.target.value);
        });
        document.getElementById('fixo').addEventListener('input', function(e) {
            e.target.value = mascaraFixo(e.target.value);
        });
        document.getElementById('celular').addEventListener('input', function(e) {
            e.target.value = mascaraCelular(e.target.value);
        });
    };
