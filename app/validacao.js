function verificaValorValido(chute) {
     const numero = +chute

     if(chuteInvalido(numero)) {
          elementoChute.innerHTML += '<div>Valor inválido</div>';
          return
     }

     if(numeroMaiorMenor(numero)) {
          elementoChute.innerHTML = `
               <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
          `
          console.log("Valor Inválido: o número deve estar entre o menor valor ou maior");
          return
     }

     if(numero === numeroSecreto) {
          document.body.innerHTML = `
               <h2>Você acertou!</h2>
               <h3>O número secreto era ${numeroSecreto}</h3>

               <button id="jogarNovamente" class="btn-jogar">Jogar Novamente></button>
          `
     } else if (numero > numeroSecreto) {
          elementoChute.innerHTML = `
               <div>O número secreto é menor <i class="bi bi-arrow-up"></i></div>
          `
     } else {
          elementoChute.innerHTML = `
               <div>O número secreto é maior <i class="bi bi-arrow-down"></i></div>
          `
     }
}

function chuteInvalido(numero) {
     return Number.isNaN(numero);
}

function numeroMaiorMenor(numero) {
     return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
     if(e.target.id == 'jogarNovamente') {
          window.location.reload();
     }
});