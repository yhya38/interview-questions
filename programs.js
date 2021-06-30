// 1. sorting

let arr = [4, 3, 1, 5, 8, 99];

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


// 2. palindrome
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

//  3. string Revise
function strReverse(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res = str[i] + res;
  }
  return res;
}
console.log(strReverse("hello"));

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
