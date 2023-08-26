var number1 = 13;
var number2 = 79;
var number3 = 45;
if (number1 > number2 && number1 > number3) {
  console.log(number1 + " is largest");
} else if (number2 > number1 && number2 > number3) {
  console.log(number2 + " is largest");
} else {
  console.log(number3 + " is largest");
}

//
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3) {
  console.log("Triangle is Isosceles");
} else if (side2 == side1 || side2 == side3) {
  console.log("Triangle is Isosceles");
} else {
  console.log("Triangle is not Isosceles");
}

//
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("Triangle is Isosceles");
} else {
  console.log("Triangle is not Isosceles");
}
