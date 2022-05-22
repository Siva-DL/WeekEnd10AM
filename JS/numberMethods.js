//  Random / Round

// Math.round, Math.ceil, Math.floor, Math.random
var price = 10.5;

console.log("Math.Round", Math.round(price));

price = 10.00001;
console.log("Math.ceil", Math.ceil(price));

price = 10.9999;
console.log("Math.floor", Math.floor(price));

console.log("Math.random", Math.ceil(Math.random() * 100));

console.log(Math.random().toFixed(2));

console.log(+Math.random().toFixed(2));

console.log(parseInt("121.12312"));

console.log(parseFloat("1234.132"));
