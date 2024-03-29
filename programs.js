// 1. sorting

let arr = [4, 3, 1, 5, 8, 99];
// without using inbuilt function

function arrSort(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

console.log(arrSort(arr));

// using inbuilt function

function sortArray(arr) {
  let newArray = arr.sort((a, b) => a - b);
  return newArray;
}

console.log(sortArray(arr));

// 2. palindrome
// without using inbuilt function
function checkPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

console.log(checkPalindrome("madam"));
//Prints: It is a palindrome

console.log(checPalindrome("hello"));
//Prints: It is not a palindrome

//  using inbuilt methon
function palindrome(str) {
  const newStr = str.split("").reverse().join("");
  if (str === newStr) {
    return "palindrome";
  } else {
    return "not a palindrome";
  }
}

console.log(palindrome("hello"));
console.log(palindrome("madam"));

//  3. string Revise

// without using inbuilt methods
function strReverse(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res = str[i] + res;
  }
  return res;
}
console.log(strReverse("hello"));

// using inbuilt function

let message = "hello";
console.log(message.split(""));
console.log(message.split("").reverse());
console.log(message.split("").reverse().join(""));

function reverseStr(str) {
  const newStr = str.split("").reverse().join("");
  return newStr;
}

// 4. factorial
function fact(n) {
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(5));

function fact1(n) {
  let res = 1;
  if (n === 0 || n === 1) return 1;
  else {
    for (i = n; i > 1; i--) {
      res = res * i;
    }
  }
  return res;
}

console.log(fact1(5));

// write a program to reverse a string

console.log(reverseStr("hello"));

// fizzbuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// count number of vowels
function vowel(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count = count + 1;
    }
  }
  return count;
}

console.log(vowel("javascript"));

// occurence of letter in a string

// let arr = ["amir", "kali", "aqib"];
// let obj = {
//   name: "amir",
//   age: 20,
// };

// for (let i of arr) {
//   console.log(i);
// }

// for (let item in obj) {
//   console.log(obj[item]);
// }

function countLetter(str) {
  let newStr = str.toLowerCase();
  let count = {};
  for (let i of newStr) {
    if (count[i]) {
      count[i] = count[i] + 1;
    } else {
      count[i] = 1;
    }
  }
  return count;
}

console.log(countLetter("yahiya"));

// write a program, name of "iam_promise" which takes one parameter it should resolved the promise if the paramter is equal to "iam_boolean" else it should reject the promise.

function iam_promise(key) {
  return new Promise((resolve, reject) => {
    if (key === "iam_boolean") {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
}

iam_promise("iam_boolean")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// find the largest number from an array
const arr = [10, 80, 21, 513, 12, 40, 9, 37, 94, 100, 150, 120];

function max(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] < arr[i]) {
      arr[0] = arr[i];
    }
  }
  return arr[0];
}

console.log(max(arr));

// find the smallest number from an array

function min(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      arr[0] = arr[i];
    }
  }
  return arr[0];
}

console.log(min(arr));

// object comparing
const obj1 = {
  name: "Aejaz",
  place: "Anantapur",
  state: "Andhra Pradesh",
};

const obj2 = {
  name: "Aejaz",
  place: "Anantapur",
  state: "Andhra Pradesh",
};

const compare = (obj1, obj2) => {
  let val;
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    val = "objects are equal";
  } else {
    val = "objects are not equal";
  }
  return val;
};

console.log(compare(obj1, obj2));


function solve(grades) {
  return grades.map((n) => {
    let diff = 5 - (n % 5);
    if (diff < 3 && n >= 38) {
      n += diff;
    }

    return n;
  });
}

console.log(solve([72]));



