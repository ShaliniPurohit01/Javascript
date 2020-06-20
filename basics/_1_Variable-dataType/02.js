// ##2 Variable mutation and type coercion

var firstName = "Shaily";
var age = 23;

console.log(firstName + " " + age); //Shaily 23
// age is a number but automatically converted into string when added with a string

console.log(1 + 3); //4
console.log(1 + "4"); //14
console.log("5" + "4"); //54
console.log("6" + 3); //63
console.log(1 + 0); //1
console.log(0 + 3); //3
console.log(" " + 3); //3
console.log(1 + "hey"); //1hey
console.log("hey" + 3); //hey3
console.log(null + 3); //3
console.log(1 + null); //1
console.log(undefined + 3); //NaN
console.log(1 + undefined); //NaN
console.log(undefined + null); //NaN

// type coercion
var job, isMarried;
job = "developer";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is she married ? " +
    isMarried
); //Shaily is a 23 year old developer. Is she married ? false

//variable mutation
age = "twenty three";
firstName = "john";
job = "driver";
console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married ? " +
    isMarried
);

// window.alert("Hey!!");
// alert("Hey!!");
// it will show a alert window

// var lastName=prompt("What is your last name ?");
// console.log(firstName + " " + lastName);
// it used for taking input from prompt box

// confirm("Hey!!");
