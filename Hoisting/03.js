//this
// in regular function call= this keyword points to the global object
// in method call - this variable points to the object that is calling the "method"

// console.log(this); // window

calculateAge(1996);
function calculateAge(year) {
  console.log(2020 - year); //24
  console.log(this); // global object
}

var john = {
  name: "john",
  year: 1990,
  calculateAge2: function () {
    //method
    console.log(this);
    console.log(this.year);

    // function innerFunction() {
    //   //regular function
    //   console.log(this); // window
    // }
    // innerFunction();
  },
};

john.calculateAge2();

var mike = {
  name: "mike",
  year: 1996,
};

mike.calculateAge2 = john.calculateAge2;
mike.calculateAge2();
