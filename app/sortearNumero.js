// console.log("Olá Mundo");

// Const com menores e maiores valores
const menorValor = 1;
const maiorValor = 1000;

// Número ecreto será o retorno da função gerarNumeroAleatorio()
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
     // O resultado aqui será entre o menor e o maior, só que queremos que este número possa ser o maior, então acrescentamos + 1
     return parseInt(Math.random() * maiorValor + 1);
}

console.log("Número Secreto:", numeroSecreto);

const elementoMenorValor = document.getElementById("menorValor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maiorValor");
elementoMaiorValor.innerHTML = maiorValor;