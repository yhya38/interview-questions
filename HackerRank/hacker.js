// const arr = [1, 1, 2, 2, 4, 4, 5, 5, 5];

// // [1,1,2,2]
// // 4,4, 5,5,5

// function subArr(arr) {
//   const newArr = arr.sort((a, b) => a - b);
//   console.log(newArr)
//   let arr1 = [];
//   let arr2 = [];
//   for (let i = 0; i < newArr.length; i++){
//     for (let j = i + 1; j < newArr.length; j++){
//       console.log(newArr[j]-newArr[i])
//       if (newArr[j] - newArr[i] === 1 || newArr[j] - newArr[i] === 0) {
//         if (arr1.indexOf(newArr[i])===-1) {
//           arr1.push(newArr[i])
//         }
//       } else {
//         arr2.push(newArr[i])
//       }
//     }
//   }

//   return { arr1, arr2 };
// }

// console.log(subArr(arr).arr1);

// function compareTriplets(arr1, arr2) {
//   let alice = 0;
//   let bob = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > arr2[i]) {
//       alice += 1;
//     } else if (arr1[i] < arr2[i]) {
//       bob += 1;
//     }
//   }
//   return [alice, bob];
// }

// console.log(compareTriplets([6, 10, 2], [9, 9, 7]));

function diagonalSums(matrix) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length <= 1 || matrix[i].length > 3) {
      matrix.shift();
    }
    firstDiagonal += matrix[i][i];
    secondDiagonal += matrix[i][matrix.length - 1 - i];
  }
  return firstDiagonal - secondDiagonal;
}

console.log(diagonalSums([[2], [6, 8], [-6, 9]]));
// inputs
// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// 2
// 6 8
// 7 9

// output -> the diffrence of diagonals but not negative number it should be positive

// let arr = [-4, 3, -9, 0, 4, 1];
// function plusMinus(arr) {
//   let positive = 0;
//   let negative = 0;
//   let neutral = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       neutral += 1 / arr.length;
//     } else if (arr[i] >= 1) {
//       positive += 1 / arr.length;
//     } else if (arr[i] < 1) {
//       negative += 1 / arr.length;
//     }
//   }
//   return positive.toFixed(6) + " " + negative.toFixed(6) + " " + neutral.toFixed(6);
// }

// console.log(plusMinus(arr));

let num = 6;

function stairCase(num) {
  for (var i = 1; i <= num; i++) {
    console.log("#".repeat(i).padStart(num));
  }
}

console.log(stairCase(5));
