var year, yearMark, yearJohn;

year = 2020;
yearMark = year - 23;
yearJohn = year - 28;

console.log(yearJohn);
console.log(yearMark);

// Math Operators
now = 2019;

console.log(now + 2);
console.log(now - 2);
console.log(now * 2);
console.log(now / 2);

// Logical Operators
ageJohn = 26;
ageMark = 30;
yearMark = now - ageJohn;
yearJohn = now - ageMark;

var johnOlder = yearJohn > yearMark;
console.log(johnOlder); //false

// typeOf operator
console.log(typeof johnOlder); //boolean
console.log(typeof ageJohn); //number
console.log(typeof y); //undefined
var x;
console.log(typeof x); //undefined
console.log(typeof "john is older"); //String
console.log(typeof undefined); //undefined
console.log(typeof johnOlder); //boolean
x = " ";
console.log(typeof x); //string
console.log(typeof null); //object
console.log(typeof Number); //function
console.log(typeof string); //undefined
