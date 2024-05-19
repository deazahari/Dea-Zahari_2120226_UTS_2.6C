function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Harap masukkan bilangan yang valid.');
        return;
    }

    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiplication = num1 * num2;
    var division = (num2 !== 0) ? (num1 / num2).toFixed(2) : 'Tidak dapat dibagi dengan nol';

    document.getElementById('addition').innerText = `Penjumlahan: ${addition}`;
    document.getElementById('subtraction').innerText = `Pengurangan: ${subtraction}`;
    document.getElementById('multiplication').innerText = `Perkalian: ${multiplication}`;
    document.getElementById('division').innerText = `Pembagian: ${division}`;
}
