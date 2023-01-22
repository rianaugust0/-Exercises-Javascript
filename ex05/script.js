function maiorOuIgual() {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)

    if(num1 > num2) {
        alert(`${num1} é maior`)
    } else if (num2 > num1) {
        alert(`${num2} é maior`)
    } else if (num1 === num2 || num2 === num1) {
        alert(`Eles são iguais`)
    } else {
        alert('existe um problema')
    }
}