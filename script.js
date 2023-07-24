let input = "";
let opnum1;
let op;
let opnum2;
let displayVal = (document.querySelector("#display").innerHTML = "");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");
let num0 = document.querySelector("#num0");
let clear = document.querySelector("#clear");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");
let equals = document.querySelector("#equals");

function operate(op, num1, num2) {
  if (op === "+") {
    return add(num1, num2);
  }

  if (op === "-") {
    return subtract(num1, num2);
  }

  if (op === "*") {
    return multiply(num1, num2);
  }

  if (op === "/") {
    return divide(num1, num2);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function display(num) {
  displayVal = document.querySelector("#display").innerHTML += num;
  input += num;
}

num1.addEventListener("click", () => {
  display(1);
});

num2.addEventListener("click", () => {
  display(2);
});

num3.addEventListener("click", () => {
  display(3);
});

num4.addEventListener("click", () => {
  display(4);
});

num5.addEventListener("click", () => {
  display(5);
});

num6.addEventListener("click", () => {
  display(6);
});

num7.addEventListener("click", () => {
  display(7);
});

num8.addEventListener("click", () => {
  display(8);
});

num9.addEventListener("click", () => {
  display(9);
});

num0.addEventListener("click", () => {
  display(0);
});

clear.addEventListener("click", () => {
  displayVal = document.querySelector("#display").innerHTML = "";
});

plus.addEventListener("click", () => {
  opnum1 = Number(input);
  display("+");
  input = "";
  op = "+";
});

minus.addEventListener("click", () => {
  opnum1 = Number(input);
  display("-");
  input = "";
  op = "-";
});

multiplication.addEventListener("click", () => {
  opnum1 = Number(input);
  display("*");
  input = "";
  op = "*";
});

division.addEventListener("click", () => {
  opnum1 = Number(input);
  display("/");
  input = "";
  op = "/";
});

equals.addEventListener("click", () => {
  opnum2 = Number(input);
  let result = operate(op, opnum1, opnum2);
  displayVal = document.querySelector("#display").innerHTML = result;
});

add();
subtract();
multiply();
divide();
