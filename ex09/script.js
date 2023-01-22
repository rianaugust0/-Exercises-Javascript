
let num1, num2
window.onload = function() {
    document.getElementById('soma').onclick = somar
    document.getElementById('sub').onclick = sub
    document.getElementById('mult').onclick = mult
    document.getElementById('div').onclick = div


}



function calculando() {
     num1 = parseFloat(document.getElementById('primeiro').value)
     num2 = parseFloat(document.getElementById('segundo').value)
}

function resultado(res) {
   document.getElementById('res').value = res
}

function somar() {
    calculando() 
    resultado(num1+num2)
}

function sub() {
    calculando() 
    resultado(num1-num2)
}

function mult() {
    calculando() 
    resultado(num1*num2)
}

function div() {
    calculando() 
    resultado(num1/num2)
}
