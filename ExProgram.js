// copying of objects

// Note: Both spread and Object.assign() perform a shallow copy while the JSON methods carry a deep copy.

let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};


// let copiedPerson = Object.assign({}, person);

// copiedPerson.firstName = "Jane"; // disconnected

// copiedPerson.address.street = "Amphitheatre Parkway"; // connected
// copiedPerson.address.city = "Mountain View"; // connected

// console.log(copiedPerson);
// console.log(person)



let p1 = {
  ...person,
};

console.log(p1);

let p2 = Object.assign({},person);

console.log(p2);

let p3=JSON.parse(JSON.stringify(person))
console.log(p3)

// Two independent objects are not equal, even though they look alike

// eg: 
let a = { name: "john" };
let b = { name: "john" };

console.log(a == b);
// Prints: false

// HOF - higher order function
function common(a, b, fun) {
  return fun(a, b);
}

function add(a, b) {
  return a + b;
}
const multiply = (a, b) => a * b;

console.log(common(2, 2, add));


// closure example

function countNumber() {
  let count = 0;
  return (countIncrease = () => {
    return (count += 1);
  });
}

let res = countNumber();
console.log(res());
console.log(res());
console.log(res());

// currying example

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));
// prints: 6

function volume(length) {
  return function (width) {
    return function (height) {
      return height * width * length;
    };
  };
}

console.log(volume(2)(3)(4));
// prints: 24

// let - block scope
// var - function scope
// eg - 

let arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(i);

for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}
console.log(j);


// impure function
let message = "Welcome";

function greeting(str) {
  return message + " " + str;
}

console.log(greeting("yahiya"));