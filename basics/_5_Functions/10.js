// functions
// used for code reusability

function ageCalculator(birthYear) {
  return 2020 - birthYear;
}

var birthYear = 1996;
console.log("I 'm " + ageCalculator(birthYear) + " years old today");

// do not repeat the code
function ageCalculator(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = ageCalculator(1999);
var ageMack = ageCalculator(2009);
var ageAnnie = ageCalculator(1984);

console.log(ageJohn, ageAnnie, ageMack);

function yearsUntilRetirement(year, firstName) {
  var age = ageCalculator(year);
  var retirement = 65 - age;

  console.log(firstName + " retires in " + retirement + " years");
}

yearsUntilRetirement(1990, "Yoshi");
