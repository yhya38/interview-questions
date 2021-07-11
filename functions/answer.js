// 1. Write a function which returns another function and execute it after calling

function higherOrderFunction() {
  return function displayHello() {
    console.log("Hello");
  };
}

let res = higherOrderFunction();
res();

// 2. Write a function which executes another function recieved as an argument
function callbackExecutor(callback) {
  if (typeof callback === "function") {
    callback();
  }
}

function callbackFunc() {
  console.log("Callback function executed");
}
callbackExecutor(callbackFunc);

// 3. Create a function having no parameters declared and print all the arguments passed to it
function func() {
  for (let key in arguments) {
    console.log(arguments[key]);
  }
}
func("hello", "hii", [1, 2, 3]);
// Arrow functions will not have arguments object

// 4. Write a function which executes only if the number of arguments math the number of parameters the function is expecting
function func1(a, b, c) {
  if (func1.length === arguments.length) {
    console.log("Number of arguments passed match the expected arguments");
  } else {
    console.log(
      "Number of arguments passed do not match the expected arguments"
    );
  }
}
func1();

// 5. Design a function which can recieve variable number of arguments in parameters and print them

function varArgsFunc(...params) {
  params.forEach((item) => console.log(item));
}
varArgsFunc("Hello", ",", "world", "!!!");

//6. Write a program where hoisting can be visualized
num1 = 10;
printHello();

var num1;
function printHello() {
  console.log("Hello");
}

// 7. Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface
function Calculator(num1, num2) {
  function add() {
    return num1 + num2;
  }
  function sub() {
    return num1 - num2;
  }
  function multiply() {
    return num1 * num2;
  }
  function divide() {
    return num1 / num2;
  }

  return { add, sub, multiply, divide };
}
let ans = Calculator(12, 6);
console.log(ans.add());
console.log(ans.sub());
console.log(ans.multiply());
console.log(ans.divide());

//8. write a IIFE (immediately invoked function expression)
(function () {
  console.log("I am an Immediately invoked function");
})();

// Create an IIFE which receives arguments and executes
(function IIFE(param1, param2) {
  console.log("I am an Immediately invoked function");
  console.log("Parameter 1: " + param1);
  console.log("Parameter 2: " + typeof param2);
  console.log("Parameter 2 output: " + param2());
})("hello", function () {
  return "I am a string from a function passed to IIFE";
});

// 9. Write a function which can set default value to the parameters of function when an argument is not passed. Also show how to use exisiting parameters to set the value of another parameter

function defaultValueFunc(
  num = 10,
  num2 = 20,
  string = "Hello",
  bool = false,
  sum = num1 + num2
) {
  console.log(num, string, bool, sum);
}

// driver code
defaultValueFunc(); //  10, 20, false, 30
defaultValueFunc(4, 8); //  4, 8, false, 12
defaultValueFunc(10, 4, true); //  10, 4, true, 14
defaultValueFunc(5, 6, false, 11); //  5, 6, false, 11
defaultValueFunc(undefined, undefined, false);    