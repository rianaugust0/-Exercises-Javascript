function retangulo() {
    let base = document.getElementById('base')
    let altura = document.getElementById('altura')
    let area = document.getElementById('area')

    let valorBase = parseInt(base.value)
    let valorAltura = parseInt(altura.value)
    let valorArea = valorBase*valorAltura

    area.value = valorArea
}