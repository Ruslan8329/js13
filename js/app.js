let carInfo = {
  manufacturer: "bmw",
  model: "f90",
  year: 2020,
  speed: 120,
};
//////////////////////////////////
function displayCarInfo() {
  console.log(carInfo);
}
displayCarInfo();
///////////////////////////////////////////

function averageTime(distance, speed) {
  let time = distance / speed;
  return time;
}
let newAverage = averageTime(200, 40);
console.log(`${newAverage} (времени в часах)`);

////////////////////////////////////////////////////////////////////////////////////////////////////////

let fraction = {
  numerator: 34,
  denominator: 10,
};

/////////

function addition(fraction) {
  let { numerator, denominator } = fraction;
  return numerator + denominator;
}
let result = addition(fraction);
console.log("result", result);

/////////

function subtraction(fraction) {
  let { numerator, denominator } = fraction;
  return numerator - denominator;
}
let result1 = subtraction(fraction);
console.log("result", result1);

//////

function multiplication(fraction) {
  let { numerator, denominator } = fraction;
  return numerator * denominator;
}
let result2 = multiplication(fraction);
console.log("result", result2);

////////////

function division(fraction) {
  let { numerator, denominator } = fraction;
  return numerator / denominator;
}
let result3 = division(fraction);
console.log("result", result3);

////////////////////////////////////////////////////////////////////////////////////////////////////

let time = {
  hours: 12,
  minutes: 34,
  seconds: 45,
};

function displayTime(hours, minutes, seconds) {
  return `${hours}:${minutes}:${seconds}`;
}
let newDisplayTime = displayTime(12, 45, 55);
console.log(newDisplayTime);

///////////////////////////////////

function secondsAdd(time, secondsAdd) {
  let totalSeconds =
    time.hours * 3600 + time.minutes * 60 + time.seconds + secondsAdd;

  let newHours = Math.floor(totalSeconds / 3600) % 24;
  let newMinutes = Math.floor(totalSeconds % 3600) / 60;
  let newSeconds = Math.floor(totalSeconds % 60);

  time.hours = newHours;
  time.minutes = newMinutes;
  time.seconds = newSeconds;
}

console.log(displayTime(time));

secondsAdd(time, 100);
console.log(displayTime(time));
