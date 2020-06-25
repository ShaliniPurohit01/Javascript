//scoping and scope chain
//  execution stack vs scope chain
// execution stack- order in which functions are called
// scope chain -order in which functions are written lexically

var a = "hello";
console.log(a);

first();

function first() {
  var b = "hi";
  console.log(a);
  console.log(b);

  second();

  function second() {
    var c = "hey";
    console.log(a);
    console.log(b);
    console.log(c);
    third();
  }
}
function third() {
  //   console.log(c); // error
  var d = 8;
  console.log(a);
  console.log(d);
}
