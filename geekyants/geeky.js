//1. call -> this method invokes a function by specifying the original object
function sayHello() {
  return "Hello " + this.name;
}

obj = { name: "yahiya" };

console.log(sayHello.call(obj));

//2. apply -> call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message) {
  return this.name + " is " + message;
}
let person2 = { name: "yahiya" };
let res = saySomething.apply(person2, ["fabulous"]);
console.log(res);

// "this" -> This method returns a new function, where the value of “this” skeyword will be bound to the owner object, which is provided as a parameter.

var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return (
      this.name +
      " , " +
      "bike details: " +
      registrationNumber +
      " , " +
      brandName
    );
  },
};

var person1 = { name: "Vivek" };

var detailsOfPerson1 = bikeDetails.displayDetails.bind(
  person1,
  "TS0122",
  "Bullet"
);

// Binds the displayDetails function to the person1 object

console.log(detailsOfPerson1());

// Object prototypes
// Prototypes are the mechanism by which javascript object inherit features from one another.

// Constructor - constructor functions are used to create objects in javascript
// If we want to create multiple objects having similar properties and methods, constructor functions are used.
function Person(first, last, age, address) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.address = address;
}

let person2 = new Person("yahiya", "khan", 22, "humnabad");
console.log(person2);

// Rest parameter -> it will give all the arguments
// eg:
function addNumbers(...args) {
  console.log(args);
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

console.log(addNumbers(1, 2, 3, 4));

// What is a Temporal Dead Zone?
// -> Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. it is a behaviour where we try to access a variable before it is initialized