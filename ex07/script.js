function calcularImc() {
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)
    let imc = peso / (altura*altura)
     document.getElementById('imc').value = imc

    let sexo = 0

    if (document.getElementById('masc').checked) {
        sexo == 1
    } else if (document.getElementById('fem').checked) {
        sexo == 2
    }

    let mensagem = conceitoImc(imc, sexo)
    document.getElementById('condicao').value = mensagem

}

function conceitoImc(imc, sexo) {
    let condicao = ''
    if (sexo = 1)  {
         if (imc < 20.7) {
            condicao = 'Abaixo do peso'
         } else if (imc >= 20.7 && imc < 26.4) {
            condicao = 'No peso normal'
         } else if (imc >= 26.4 && imc < 27.8) {
            condicao = 'Marginalmente acima do peso'
         } else if (imc >= 27.8 && imc < 31.1) {
            condicao = 'Acima do peso ideal'
         } else if (imc > 31.1) {
            condicao = 'Obeso'
         }
    } else {
        if (imc < 19.1) {
            condicao = 'Abaixo do peso'
        } else if (imc >= 19.1 && imc < 25.8) {
            condicao = 'no peso normal'
        } else if (imc >= 25.8 && imc < 27.3) {
            condicao = 'Marginamlmente acima do peso'
        } else if (imc >= 27.3 && imc < 32.3) {
            condicao = 'Acima do peso ideal'
        } else if (imc > 32.3) {
            condicao = 'Obeso'
        }


    }

    return condicao
}