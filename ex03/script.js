function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)
    let media = (nota1+nota2+nota3)/3

    document.getElementById('media').value = media
    document.getElementById('conceito').value = verificadorDeMedia()
}

function verificadorDeMedia(media) {
    if (media >=6 ) {
        return 'Aprovado'
    } else if (media >= 3 && media < 6) {
        return 'Exame'
    } else {
        return 'Reprovado'
    }

}


