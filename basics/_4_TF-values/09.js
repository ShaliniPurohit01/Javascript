// truthy, falsy value, equality operator
//  falsy value= undefined, null , 0 , ''
// truthy value = not falsy value

var height;
if (height) {
  console.log("height is a truthy value");
} else {
  console.log(" height is a falsy value");
}

var height = 23;
if (height) {
  console.log("height is a truthy value");
} else {
  console.log(" height is a falsy value");
}

var H = 0;
if (H || H === 0) {
  console.log("H  is defined");
} else {
  console.log("H is not been defined");
}

// equality operator
if (height === "23") {
  console.log(" === operator does type coersion");
} else {
  console.log(" === operator does not work for  type coersion");
}

if (height == "23") {
  console.log(" == operator does type coersion");
} else {
  console.log(" == operator does not work for  type coersion");
}
