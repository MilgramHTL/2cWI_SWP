function add(a, b){
    console.log(a+b);
}
add(3, 6);

function substract(a, b){
    console.log(a-b);
}
substract(9, 8);

function mulitply(a, b){
    console.log(a*b);
}
mulitply(9, 9);

function supercalculation(a, b){
    console.log((a+b)/2 * a);
}
supercalculation(3, 18)

function printEasterDate(year){
    let N = year-1900;
    let A = N%19;
    let B = Math.floor((7*A+1)/19);
    let M = (11*A+4-B)%29;
    let Q = Math.floor(N/4);
    let W = (N+Q+31-M)%7;
    let P = (25-M-W);

    return P;
}

let P = printEasterDate(2023);

if(P > 0){
    console.log("Ostern ist der " + P + " April.");
}
else{
    console.log("Ostern ist der " + P + 31 + " März.");
}