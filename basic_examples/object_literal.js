var a = {
  a: 1,
  b: "bla bla",
  c: [1, 2, 3],
  d: {
    a: 1,
    b: "bla bla"
  }
};

console.log(a.d.b);

function foo(a, b) {
  display(a + " + " + b + " = " + (a + b));
}

indirectCaller(function (a, b) {
  display(a + " + " + b + " = " + (a + b));
}, 1, 2);

function caller(f, v1, v2) {
  // Call the given function
  f(v1, v2);
}

function indirectCaller(f, v1, v2) {
  // Call `caller`, who will in turn call `f`
  caller(f, v1, v2);
}

// Do it
indirectCaller(foo, 1, 2); // alerts "1 + 2 = 3"