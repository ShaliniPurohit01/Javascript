// loops and iteration

// for
for (var i = 0; i <= 20; i++) {
  console.log(i);
}
console.log("\n");

for (var i = 1; i < 20; i += 2) {
  console.log(i);
}
console.log("\n");

var john = ["John", "Smith", 1990, "Teacher", false];
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log("\n");

for (var j = 0; j < john.length; j++) {
  console.log(john[j]);
}
console.log("\n");

// while
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
console.log("\n");

// continue and break statement
for (var j = 0; j < john.length; j++) {
  if (typeof john[j] !== "string") continue;
  console.log(john[j]);
}
console.log("\n");

for (var j = 0; j < john.length; j++) {
  if (typeof john[j] !== "string") break;
  console.log(john[j]);
}
console.log("\n");

// looping backwards
for (var j = john.length - 1; j >= 0; j--) {
  console.log(john[j]);
}
console.log("\n");
