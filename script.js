let input = "";
let opnum1;
let op;
let displayVal = (document.querySelector("#display").innerHTML = "");

document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", () => {
    input += button.innerHTML;
    display();
  });
});

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

function display() {
  document.querySelector("#display").innerHTML = input;
}

function clearDisplay() {
  input = "";
  display();
}

function handleOperation(operator) {
  if (input !== "") {
    if (op) {
      opnum1 = operate(op, opnum1, Number(input));
      displayVal = document.querySelector("#display").innerHTML = opnum1;
    } else {
      opnum1 = Number(input);
    }
    op = operator;
    input = "";
  }
}

function handleEquals() {
  if (op && input !== "") {
    let result = operate(op, opnum1, Number(input));
    input = result.toString();
    displayVal = document.querySelector("#display").innerHTML = result;
    op = null;
  }
}

document.querySelector("#clear").addEventListener("click", () => {
  clearDisplay();
});

document.querySelector("#plus").addEventListener("click", () => {
  handleOperation("+");
});

document.querySelector("#minus").addEventListener("click", () => {
  handleOperation("-");
});

document.querySelector("#multiplication").addEventListener("click", () => {
  handleOperation("*");
});

document.querySelector("#division").addEventListener("click", () => {
  handleOperation("/");
});

document.querySelector("#equals").addEventListener("click", () => {
  handleEquals();
});
