console.log("Test");

demo();
function demo() {
  console.log("inside Funciton");
}

var demoFn = function () {
  console.log("Demo Fn...");
};

demoFn();

// SlefInvoking
(function () {
  console.log("Self Fn...");
})();

// fat-arrow

var arroFn = () => {
  console.log("Arrow Fn...");
};

arroFn();

// pass Arguments / Parameters

// console.log(

var num1 = function (a) {
  return a;
};

console.log(sum(10, 10, num1(20)) + 10);
console.log(sum(10, 10, num1(20)) + 20);
// );
// sum(20, 20);
// sum(11, 22);
// sum(44, 33);
// sum(1, 2);
function sum(a, b, fn) {
  //   console.log(a + b);

  return a + b + fn;
}

// scope, Hoisting, closure

var globalVal = "global"; // global scope

function outerFunction() {
  var localValu = "Local"; // local Scope
  console.log(globalVal, localValu);

  function insideFunction() {
    console.log(localValu);
  }

  insideFunction();
}

outerFunction();
console.log(localValu);
