var money = 20;
var bread = 20;
var Pizza = 30;
var Burger = 40;
var Sandwich = 50;
if (money >= bread) {
  console.log("Bread is purchased");
} else if (money >= Pizza) {
  console.log("Pizza is purchased");
} else if (money >= Burger) {
  console.log("Burger is purchased");
} else if (money >= Sandwich) {
  console.log("Sandwich is purchased");
} else {
  console.log("May be another day.");
}

// nested condition
var rain = true;
var umbrella = 1;
rainCoat = 0;
if (rain == true) {
  if (umbrella >= 1) console.log("You may go outside");
  else {
    console.log("Basai thak");
  }
} else {
  console.log("Basai tako");
}
