const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Plz write a real positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age >= 50) {
  console.log("you need to becareful");
} else {
  console.log("you can drink");
}
