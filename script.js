
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value; 
    const resultado = document.getElementById('resultado');
    const peso = document.getElementById('peso').value;

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let calssificacao = "";

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso!';
        }else if (valorIMC < 25) {
            classificacao = 'Com seu peso idael. Parabéns!!!';
        }else if (valorIMC < 30) {
            classificacao = 'Levemente acima do peso.';
        }else if (valorIMC < 35) {
            classificacao = 'Com obesidade grau I.';
        }else if (valorIMC <40) {
            classificacao = 'Com obesidade grau II.';
        }else {
            classificacao = 'Com obesidade grau III. CUIDADO!!!';
        }

        resultado.textContent = `${nome} Seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

calcular.addEventListener('click', imc);