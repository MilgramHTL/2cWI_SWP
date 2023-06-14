function generatenew() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let randomNumbers = parseInt(num2) - parseInt(num1) + 1;
    let randomNumber = Math.floor(Math.random() * randomNumbers) + parseInt(num1);
    document.getElementById('randomNumber').innerHTML = "Deine generierte Zahl ist: " + randomNumber;
}
 