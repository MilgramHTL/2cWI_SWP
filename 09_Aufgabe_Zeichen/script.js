let a = 0;
let b = 0;

// Erste Schleife
for (let index = 1; index < 3; index ++) {
    console.log("XXXX");
    console.log("OOOO");
    console.log("XXXX");
    console.log("OOOO");
    console.log("");
}

// Zweite Schleife
for (let index2 = 1; index2 < 101; index2 ++) {
    if(index2%1==0){
        a = a + index2;
    }
    if(index2%2==0){
        b = b + index2;
    }
}

console.log(a);
console.log(b);

// Dritte Schleife
for (let index3 = 1; index3 < 2; index3 ++) {
    console.log("X     ");
    console.log("X     ");
    console.log("X     ");
    console.log("X     ");
    console.log("X     ");
    console.log("XXXXXX");
}