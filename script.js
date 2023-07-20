let opnum1;
let op;
let opnum2;
let displayVal = document.querySelector("#display").innerHTML = "";
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");


function operate() {
  
}

function add() {
  console.log(1 + 1);
}

function subtract() {
  console.log(1 - 1);
}

function multiply() {
  console.log(1 * 1);
}
function divide() {
  console.log(1 / 1);
}

num1.addEventListener("click", ()=> {
  displayVal = document.querySelector("#display").innerHTML += "1";
})

num2.addEventListener("click", ()=> {
  displayVal = document.querySelector("#display").innerHTML += "2";
})

num3.addEventListener("click", ()=> {
  displayVal = document.querySelector("#display").innerHTML += "3";
})

num4.addEventListener("click", ()=> {
  displayVal = document.querySelector("#display").innerHTML += "4";
})

num5.addEventListener("click", ()=> {
  displayVal = document.querySelector("#display").innerHTML += "5";
})

num6.addEventListener("click", ()=> {
  displayVal = document.querySelector("#display").innerHTML += "6";
})

num7.addEventListener("click", ()=> {
  displayVal = document.querySelector("#display").innerHTML += "7";
})

num8.addEventListener("click", ()=> {
  displayVal = document.querySelector("#display").innerHTML += "8";
})

num9.addEventListener("click", ()=> {
  displayVal = document.querySelector("#display").innerHTML += "9";
})

add();
subtract();
multiply();
divide();