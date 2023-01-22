function impostoRenda() {
    let sal = parseFloat(document.getElementById('sal').value)
    let imposto = ''

    if (sal <= 1434) {
        imposto = '0% (isento)'
    } else if (sal > 1434 && sal <= 2150) {
        imposto = sal * 0.075
    } else if (sal > 2150 && sal <= 2866) {
        imposto = sal * 0.15
    } else if (sal > 2866 && sal <= 3582) {
        imposto = sal * 0.225
    } else if (sal > 3582) {
        imposto = sal * 0.275
    }

    document.getElementById('imposto').value = imposto
}