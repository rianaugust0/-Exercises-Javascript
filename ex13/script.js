var vet_nomes = []
var i = 0
var nome = ""
while (true) {
    nome = prompt('Digite um nome:')
    if (nome != null) {
        vet_nomes[i] = nome
        i++
    } else {
        break
    }
}

var conteudo = "<table>"
conteudo += '<tr><th>índice</th><th>Nome</th></tr>'
for (var j=0; j < vet_nomes.length; j++) {
    conteudo += '<tr>'
    conteudo += `<td> ${j} </td>`
    conteudo += `<td> ${vet_nomes} </td>`
    conteudo += '</tr>'
}

conteudo += '</table>'
document.getElementById('resp').innerHTML = conteudo

