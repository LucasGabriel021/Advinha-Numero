function verificaValorValido(chute) {
     const numero = +chute

     if(chuteInvalido(numero)) {
          elementoChute.innerHTML += '<div>Valor inválido</div>';
     }

     if(numeroMaiorMenor(numero)) {
          elementoChute.innerHTML = `
               <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
          `
          console.log("Valor Inválido: o número deve estar entre o menor valor ou maior");
     }

     if(numero === numeroSecreto) {
          document.body.innerHTML = `
               <h2>Você acertou!</h2>
               <h3>O número secreto era ${numeroSecreto}</h3>
          `
     }
}

function chuteInvalido(numero) {
     return Number.isNaN(numero);
}

function numeroMaiorMenor(numero) {
     return numero > maiorValor || numero < menorValor;
}