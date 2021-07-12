function dateTime(s) {
  let AMPM = s.slice(-2);

  let timeArr = s.slice(0, -2).split(":");
  console.log(timeArr);
  console.log((timeArr[0] % 12) + 12);

  if (AMPM === "AM" && timeArr[0] === "12") {
    // catching edge-case of 12AM
    timeArr[0] = "00";
  } else if (AMPM === "PM") {
    // everything with PM can just be mod'd and added with 12 - the max will be 23
    timeArr[0] = (timeArr[0] % 12) + 12;
  }

  console.log(timeArr.join(":"));

  return timeArr.join(":");
}
let res = dateTime("07:05:45PM");
console.log(res);
// prints: 19:05:45
