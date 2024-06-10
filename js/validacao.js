function verificaChute(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>';
    return;
  }
  if (numeroMaiorMenor(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    return;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2> 
    <h3>O número secreto secreto era ${numeroSecreto}</h3>
    <button id="Jogar-novamente" class="btn-jogar">jogar novamente</button>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>
        o numero secreto é menor <i class="fa-solid fa-circle-chevron-down"></i>
      </div>`
  } else {
    elementoChute.innerHTML += `<div>
        o numero secreto é maior <i class="fa-solid fa-circle-chevron-up"></i>
      </div>`
  }

}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
  if (e.target.id === 'Jogar-novamente') {
    window.location.reload()
  }
})


console.log(numeroSecreto)
