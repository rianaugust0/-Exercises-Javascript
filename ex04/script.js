function imparoupar() {
    let numero = parseInt(document.getElementById('numero').value)
    let res = document.getElementById('res')

let cor = ''

    if (numero % 2 === 0) {
        res.innerHTML = 'Par'
        cor = 'purple'
     } else if (numero % 2 !== 0) {
        res.innerHTML = 'Ímpar'
        cor = 'green'
     }
    
    res.style.background = cor
}

