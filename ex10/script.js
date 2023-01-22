function fatorial() {
    let num = parseInt(document.getElementById('num').value)
    let fat = 1

    for (let i = 1; i <= num; i++) {
        fat = fat * i
    }

    document.getElementById('fatorial').value = fat
}
