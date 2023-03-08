let banana = "Banane";
let apple = "Apple";
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;
let appleWeight = 0.34;
let bananaWeight = 0.22;

let applePerKilo = 1 / appleWeight;
let bananaPerKilo = 1 / bananaWeight;

let pricePerApple = applePricePerKilo / (1 / appleWeight);
let pricePerBanana = bananaPricePerKilo / (1 / bananaWeight);
let priceEigtApples = pricePerApple * 8;
let priceElevenBananas = pricePerBanana * 11; 
let oneTonApple = applePricePerKilo * 1000;
let oneTonBananas = bananaPricePerKilo * 1000;

console.log(applePerKilo);
console.log(bananaPerKilo);
console.log(pricePerApple);
console.log(pricePerBanana);
console.log(priceEigtApples);
console.log(priceElevenBananas);
console.log(oneTonApple);
console.log(oneTonBananas);
