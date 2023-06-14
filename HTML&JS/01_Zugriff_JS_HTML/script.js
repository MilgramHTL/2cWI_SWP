

function plus(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseInt(num1) + parseInt(num2);
    document.getElementById('result').innerHTML = "Ergebnis: " + result;
}

function minus(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseInt(num1) - parseInt(num2);
    document.getElementById('result').innerHTML = "Ergebnis: " + result;
}

function multiply(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseInt(num1) * parseInt(num2);
    document.getElementById('result').innerHTML = "Ergebnis: " + result;
}

function divide(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseInt(num1) / parseInt(num2);
    document.getElementById('result').innerHTML = "Ergebnis: " + result;
}

