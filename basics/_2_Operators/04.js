// Operator Precedence

var now = 2020;
var yearJohn = 1996;
var fullAge = 23;

var isFullAge = now - yearJohn >= fullAge;
// 1. result = now - yearJohn
// 2. result >= fullAge
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 30;
var avgAge = ageJohn + ageMark / 2; // wrong
console.log(avgAge); // 39
var avgAge = (ageJohn + ageMark) / 2; // correct
console.log(avgAge); // 27

// Multiple assignments
var x, y;
x = (3 + 5) * 4 - 6;
// 8*4-6
// 32-6
//26
console.log(x); //26

// assignment through  right to left
x = y = (3 + 5) * 4 - 6;
console.log(x, y); //26 26

// short hand operators
var z = 9;
z = z + 2;
console.log(z); //11

z += 2;
console.log(z); //13
