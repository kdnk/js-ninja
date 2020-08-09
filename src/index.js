import "./styles.css";

function assert(value, desc) {
  var li = document.createElement("li");
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("results").appendChild(li);
}

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
  function inner() {
    assert(
      typeof inner === "function",
      "inner()は宣言後のスコープに入っている"
    );
    assert(
      window.inner === undefined,
      "inner() はグローバルスコープに入っていない。"
    );
  }
}
outer();

assert(
  window.inner == undeined,
  "inner() はまだグローバルスコープに入っていない。"
);
