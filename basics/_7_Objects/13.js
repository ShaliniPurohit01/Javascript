// order of elements does not matter in objects

// object literal

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1999,
  family: ["Jane", "Mark", "Bob"],
  job: "teacher",
  isMarried: false,
};

console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

// new Object
var jane = new Object();
jane.firstName = "Jane";
jane.LastName = "Smith";
jane.age = 38;
console.log(jane);
