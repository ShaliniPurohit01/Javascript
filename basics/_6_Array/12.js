// Initialize new array
//1
var names = ["john", "mark", "jane "];

//2
var years = new Array(1999, 2008, 1985, 2300);

console.log(names[0]); //john
console.log(years[1]); //2008
console.log(names[3]); //undefined
console.log(names[2]); //jane
console.log(years[3]); //2300

console.log(names.length); //3
console.log(years.length); //4

//mutate array data
names[1] = "Ben";
names[5] = "Mary";
console.log(names); //john , Ben , jane , empty , empty , Mary

// different data type
var john = ["John", "Smith", 1990, "Teacher", false];
john.push("blue"); // add element at the end
john.unshift("Mr.. "); // add element at the begining
console.log(john);

john.pop(); // remove element at the end
john.shift(); //remove the element at the begining
console.log(john);

console.log(john.indexOf(1985)); //-1
console.log(john.indexOf(1990)); //2

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John is a designer";

console.log(isDesigner);
