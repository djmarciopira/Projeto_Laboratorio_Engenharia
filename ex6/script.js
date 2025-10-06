window.onload = function() {
	const root = document.getElementById('calc-root');
	const container = document.createElement('div');
	container.className = 'calc-container';

	const barra = document.createElement('div');
	barra.className = 'calc-barra';
	['#f55', '#fc3', '#3c3'].forEach(cor => {
		const bolinha = document.createElement('span');
		bolinha.className = 'calc-bolinha';
		bolinha.style.background = cor;
		barra.appendChild(bolinha);
	});
	container.appendChild(barra);

	const display = document.createElement('div');
	display.className = 'calc-display';
	display.textContent = '0';
	container.appendChild(display);

	const botoes = [
		['AC', '(', ')', '÷'],
		['7', '8', '9', '×'],
		['4', '5', '6', '-'],
		['1', '2', '3', '+'],
		['0', '.', '=', '']
	];
	const botoesContainer = document.createElement('div');
	botoesContainer.className = 'calc-botoes';
	botoes.forEach((linha, i) => {
		const linhaDiv = document.createElement('div');
		linhaDiv.className = 'calc-linha';
		linha.forEach((txt, j) => {
			if (txt === '') return;
			const btn = document.createElement('button');
			btn.className = 'calc-btn';
			btn.textContent = txt;
			linhaDiv.appendChild(btn);
		});
		botoesContainer.appendChild(linhaDiv);
	});
	container.appendChild(botoesContainer);

	let valorAtual = '0';
	let operador = '';
	let aguardandoNovo = false;
	let memoria = null;
	function atualizarDisplay() {
		display.textContent = valorAtual;
	}
	function limpar() {
		valorAtual = '0';
		operador = '';
		aguardandoNovo = false;
		memoria = null;
		atualizarDisplay();
	}
	botoesContainer.querySelectorAll('.calc-btn').forEach(btn => {
		btn.onclick = function() {
			const v = btn.textContent;
			if (v === 'AC') { limpar(); return; }
			if (v === '(' || v === ')') return;
			if (v === '÷' || v === '×' || v === '-' || v === '+') {
				operador = v;
				memoria = valorAtual;
				aguardandoNovo = true;
				return;
			}
			if (v === '=') {
				if (operador && memoria !== null) {
					let a = parseFloat(memoria.replace(',', '.'));
					let b = parseFloat(valorAtual.replace(',', '.'));
					let r = 0;
					switch (operador) {
						case '+': r = a + b; break;
						case '-': r = a - b; break;
						case '×': r = a * b; break;
						case '÷': r = b !== 0 ? a / b : 'Erro'; break;
					}
					valorAtual = r.toString().replace('.', ',');
					operador = '';
					memoria = null;
					aguardandoNovo = false;
					atualizarDisplay();
				}
				return;
			}
			if (v === '.') {
				if (!valorAtual.includes('.')) valorAtual += '.';
				atualizarDisplay();
				return;
			}
			if (/[0-9]/.test(v)) {
				if (valorAtual === '0' || aguardandoNovo) {
					valorAtual = v;
					aguardandoNovo = false;
				} else {
					valorAtual += v;
				}
				atualizarDisplay();
				return;
			}
		};
	});
	atualizarDisplay();
	root.appendChild(container);
};
