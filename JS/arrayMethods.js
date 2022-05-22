// push, unshift
// pop, shift
// splice
// slice
// split
// indexOf
// lastIndexOf
// includes

var arr = [];

// arr[0] = 1;

arr.push(4);
arr.push(1);
arr.push(2);
arr.push(3);

arr.unshift(0);
arr.unshift(-1);
arr.unshift(-2);

console.log(arr);
arr.pop();
// arr.pop();
arr.shift();
// arr.shift();

// Delete
arr.splice(2, 1);
console.log(arr);

console.log(arr.slice(0, 1));

console.log(arr);

var str = "1 2 3";

console.log(str.split(" "));
console.log(arr.lastIndexOf(1));

console.log(arr.includes(-11));
