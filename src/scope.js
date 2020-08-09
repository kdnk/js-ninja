function outer() {
  var a = 1;
  function inner() {}

  var b = 2;
  if (a == 1) {
    var c = 3;
  }
}

outer();
