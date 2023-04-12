let num1 = Math.random(0,100);
let num2 = Math.random(0,100);

if(num1 < num2 && num1 <50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}

if(num1 < 30 || num2 < 30){
    console.log("Eine der beiden ist kleiner als 30");
}

if(num1 < 50 && num2 != 50){
    console.log("Erste Zahl klein, zweite kein 50iger");
}
