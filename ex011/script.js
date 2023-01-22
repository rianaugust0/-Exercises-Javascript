function oi() {
    let num = parseInt(document.getElementById('num').value)
    let soma = 0

    for (let i = 1; i <= num; i++) {
        soma = soma + i
    }
    document.getElementById('res').value = soma

}