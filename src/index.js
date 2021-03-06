var text = "かたじけない";
function useless(callback) {
  return callback();
}
assert(
  useless(function () {
    return text;
  }) === text,
  `この関数は使える！ ${text}`
);

// p.044

window.isNimble = function isNimble() {
  return true;
};

console.log(typeof window.isNimble);
console.log(typeof window.isNimble === "function");
assert(typeof window.isNimble === "function", `isNimble は定義されている`);
assert(window.isNimble.name === "isNimble", "isNimble() には名前がある");

window.canFly = function () {
  return true;
};

assert(typeof window.canFly === "function", "canFly()は定義されている");
assert(window.canFly.name === "", "canFly() には名前がない。");

window.isDeadly = function () {
  return true;
};

assert(typeof window.isDeadly === "function", "isDeadly は定義されている");

function outer() {
  assert(
    typeof inner === "function",
    "inner()は宣言の前にスコープに入っている。"
  );
  assert(
    typeof inner2 === "function",
    "inner2()は宣言の前にスコープに入っている。"
  );
  console.log("inner2: ", inner2);
  function inner() {}
  assert(typeof inner === "function", "inner()は宣言後のスコープに入っている");
  assert(
    window.inner === undefined,
    "inner() はグローバルスコープに入っていない。"
  );

  const inner2 = () => {};
  assert(typeof inner === "function", "inner2()は宣言後のスコープに入っている");
  assert(
    window.inner2 === undefined,
    "inner2() はグローバルスコープに入っていない。"
  );
}
outer();

assert(
  window.inner === undefined,
  "inner() はまだグローバルスコープに入っていない。"
);
