//conditional AND
var isGraduated = true;
var salary = 75000;
cars = 0;
if (isGraduated == true && salary >= 50000 && cars >= 1) {
  console.log("You are eligible to live in Dhaka");
} else {
  console.log("You need to shift the job ");
}

//conditional OR

var car = true;
var umbrella = 0;
var rainCoat = 0;
if (car == true || umbrella == 1 || rainCoat >= 1) {
  console.log("You can go outside in the rain");
} else {
  console.log("Prefer to stay at home ");
}

//
var car = true;
var umbrella = 0;
var rainCoat = 0;
if (car == true && (umbrella == 1 || rainCoat >= 1)) {
  console.log("You can go outside in the rain");
} else {
  console.log("Prefer to stay at home ");
}
