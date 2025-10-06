window.onload = function() {
	const root = document.getElementById('contador-root');
	const container = document.createElement('div');
	container.className = 'contador-container';

	const header = document.createElement('div');
	header.className = 'contador-header';
	const titulo = document.createElement('h2');
	titulo.textContent = 'Total';
	const resetBtn = document.createElement('button');
	resetBtn.className = 'contador-reset';
	resetBtn.title = 'Resetar';
	resetBtn.innerHTML = '&#x21bb;';
	header.appendChild(titulo);
	header.appendChild(resetBtn);
	container.appendChild(header);

	const totalInput = document.createElement('input');
	totalInput.type = 'text';
	totalInput.className = 'contador-total';
	totalInput.value = 0;
	totalInput.readOnly = true;
	container.appendChild(totalInput);

	const iconsRow = document.createElement('div');
	iconsRow.className = 'contador-icons';
	const homemImg = document.createElement('img');

	homemImg.src = './assets/homem_icone.png';
	homemImg.alt = 'Homem';
	homemImg.className = 'contador-icon';

	const mulherImg = document.createElement('img');
	mulherImg.src = './assets/mulher_icone.png';
	mulherImg.alt = 'Mulher';
	mulherImg.className = 'contador-icon';

	iconsRow.appendChild(homemImg);
	iconsRow.appendChild(mulherImg);
	container.appendChild(iconsRow);

	const controlsRow = document.createElement('div');
	controlsRow.className = 'contador-controls';

	const homemControl = document.createElement('div');
	homemControl.className = 'contador-control'
    ;
	const homemMais = document.createElement('button');
	homemMais.className = 'contador-plus';
	homemMais.innerHTML = '+';

	const homemMenos = document.createElement('button');
	homemMenos.className = 'contador-minus';
	homemMenos.innerHTML = '-';

	homemControl.appendChild(homemMais);
	homemControl.appendChild(homemMenos);

	const mulherControl = document.createElement('div');
	mulherControl.className = 'contador-control';

	const mulherMais = document.createElement('button');
	mulherMais.className = 'contador-plus';
	mulherMais.innerHTML = '+';

	const mulherMenos = document.createElement('button');

	mulherMenos.className = 'contador-minus';
	mulherMenos.innerHTML = '-';
	mulherControl.appendChild(mulherMais);
	mulherControl.appendChild(mulherMenos);

	controlsRow.appendChild(homemControl);
	controlsRow.appendChild(mulherControl);
	container.appendChild(controlsRow);

	const labelsRow = document.createElement('div');
	labelsRow.className = 'contador-labels';

	const homemLabel = document.createElement('div');
	homemLabel.className = 'contador-label';
	homemLabel.textContent = 'Homens';

	const mulherLabel = document.createElement('div');
	mulherLabel.className = 'contador-label';
	mulherLabel.textContent = 'Mulheres';

	labelsRow.appendChild(homemLabel);
	labelsRow.appendChild(mulherLabel);
	container.appendChild(labelsRow);

	const valuesRow = document.createElement('div');

	valuesRow.className = 'contador-values';

	const homemValue = document.createElement('input');

	homemValue.type = 'text';
	homemValue.className = 'contador-value';
	homemValue.value = 0;
	homemValue.readOnly = true;

	const mulherValue = document.createElement('input');

	mulherValue.type = 'text';
	mulherValue.className = 'contador-value';
	mulherValue.value = 0;
	mulherValue.readOnly = true;

	valuesRow.appendChild(homemValue);
	valuesRow.appendChild(mulherValue);
	container.appendChild(valuesRow);

	let homens = 0;

	let mulheres = 0;

	function atualizar() {
		homemValue.value = homens;
		mulherValue.value = mulheres;
		totalInput.value = homens + mulheres;
	}

	homemMais.onclick = function() { homens++; atualizar(); };
	homemMenos.onclick = function() { if (homens > 0) homens--; atualizar(); };
    
	mulherMais.onclick = function() { mulheres++; atualizar(); };
	mulherMenos.onclick = function() { if (mulheres > 0) mulheres--; atualizar(); };

	resetBtn.onclick = function() { homens = 0; mulheres = 0; atualizar(); };
	atualizar();

	root.appendChild(container);
};
