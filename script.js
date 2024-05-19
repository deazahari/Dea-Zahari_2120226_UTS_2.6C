function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Masukkan kedua bilangan dengan benar!');
        return;
    }

    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;

    document.getElementById('additionResult').innerText = addition;
    document.getElementById('subtractionResult').innerText = subtraction;
    document.getElementById('multiplicationResult').innerText = multiplication;
    document.getElementById('divisionResult').innerText = division;
}
