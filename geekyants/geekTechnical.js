// write a program which takes one parameter, if the parameter is equal to "iam_boolean" then it should resolved the promise else it should reject the promise

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
// output -> resolved

// what will be the output of this function
function objCompare(param) {
    if (param == { name: 'yahiya' }) {
        return true
    } else {
        return false
    }
}

let res=objCompare({name:'yahiya'})
console.log(res)
// output -> false

// what will be the output of this function

for (let i = 0; i < 4; i++){
    setTimeout(()=>console.log(i), 0)
}
// output -> 0 1 2 3

for (var i = 0; i < 4; i++){
    setTimeout(()=>console.log(i), 0)
}
// output -> 4 4 4 4