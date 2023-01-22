window.onload = function() {
    document.getElementById('botao').onclick = function() {
        calcular() 
    }
}
function calcular() {
    let elementos_compra = document.getElementById('txtvalor')
    let elementos_parcela = document.getElementById('txtparcelas')
    let elementos_resposta = document.getElementById('txtresultado')

    let valorCompra = parseFloat(elementos_compra.value)
    let qtdParcelas = parseFloat(elementos_parcela.value)
    
    let msg = ''
    let valorFinal = 0
    let cor = ''

    if (qtdParcelas === 1) {

        valorFinal  = valorCompra
        msg = "1X" + valorFinal
        cor = "#16c4f8"

    } else if (qtdParcelas === 2) {
        valorFinal = (valorCompra + (valorCompra * 0.03)/2)
        msg = "2X" + valorFinal
        cor = "#f87504"

    } else {
        valorFinal = (valorCompra + (valorCompra * 0.07)/2) 
        msg = "4X" + valorFinal
        cor = "#d93c3c"
    }

    elementos_compra.value = ""
    elementos_resposta.value = msg
    elementos_resposta.style.background = cor




     
}