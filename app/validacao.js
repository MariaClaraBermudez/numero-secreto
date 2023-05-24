function verificaSeOChutePosuuiUmValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
       elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    } 
    
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML +=
        `<div>
        valor invalido: Fale um numero entre ${menorValor} e ${maiorValor}
        </div>`
        return //nao execute mais nada da funcao
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2> Você acertou ;)</h2>
        <h3>O número secreto era ${numeroSecreto}<h3>
     `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor ||  numero < menorValor
}                            //ou