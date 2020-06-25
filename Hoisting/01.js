// hoisting in functions and variables

//functions
function calculateAge(year) {
  console.log(2020 - year);
}
calculateAge(1990);

calculateAge(1996);
function calculateAge(year) {
  console.log(2020 - year);
}

var retirement = function (year) {
  console.log(65 - (2020 - year));
};
retirement(1990);

// retirement(1990);
// var retirement = function (year) {
//   console.log(65 - (2020 - year));
// };

// variables
console.log(age); // undefined
var age = 23;
console.log(age); //23

// var x = 60;
// console.log(x);//  error

var agee = 23;
function foo() {
  console.log(age); // undefined

  var age = 89;
  console.log(age); //89
}
foo();
console.log(age); //23
