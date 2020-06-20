// functon expressions and function statements

// function declaration
// function yearsUntilRetirement(year, firstName) {}

// function expression
var whatDoYouDo = function (job, name) {
  switch (job) {
    case "teacher":
      return name + " teaches ";
    case "driver":
      return name + " drives a cab ";
    default:
      return name + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "john"));
console.log(whatDoYouDo("driver", "mike"));
console.log(whatDoYouDo("retier", "Annie"));
