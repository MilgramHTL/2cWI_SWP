let a = [4,1,2,3];

a.push(17);
a.push(199);

for (let i = 0; i < a.length; i++){
    console.log(a[i]);
}

let sum = a.reduce((total, a) => {
  return total + a;
}, 0);

console.log(sum); 
let average = sum / a.length;
console.log(average); 

let f = ["Susi", "Paula", "Hans"];

console.log("Meine Freunde sind " + f[0] + ", " +f[1] + " und " + f[2] + ".");

f.push("Sepp");

console.log("Meine Freunde sind " + f[0] + ", " +f[1] + ", " + f[2] + " und " + f[3] + ".");
