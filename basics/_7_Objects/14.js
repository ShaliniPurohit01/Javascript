// objects and methods

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1999,
  family: ["Jane", "Mark", "Bob"],
  job: "teacher",
  isMarried: false,
  calcAge: function (birthYear) {
    return 2020 - birthYear;
  },
};

console.log(john);

console.log(john.calcAge(1990));

// introducing this keyword
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1999,
  family: ["Jane", "Mark", "Bob"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    return 2020 - this.birthYear;
  },
};

console.log(john.calcAge());

john.age = john.calcAge();
console.log(john.age);

//
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1999,
  family: ["Jane", "Mark", "Bob"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2020 - this.birthYear;
  },
};

john.calcAge();
console.log(john);
