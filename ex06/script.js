function calcular() {
    let valor = parseInt(document.getElementById('valor').value)
    let formaDePagamento = parseInt(document.getElementById('pagamento').value)
    let valorTotal = 0

    switch(formaDePagamento) {
        case 1: valorTotal = valor - (valor * 0.10)
        break

        case 2: valorTotal = valor - (valor * 0.5)
        break

        case 3: valorTotal = valor + (valor * 0.10)
        break
        
    }

    document.getElementById('real').value = valor
    document.getElementById('pagar').value = valorTotal
}