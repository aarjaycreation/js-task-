/*        ██  █████  ██    ██  █████  ███████  ██████ ██████  ██ ██████  ████████ ███████ 
          ██ ██   ██ ██    ██ ██   ██ ██      ██      ██   ██ ██ ██   ██    ██    ██      
          ██ ███████ ██    ██ ███████ ███████ ██      ██████  ██ ██████     ██    ███████ 
     ██   ██ ██   ██  ██  ██  ██   ██      ██ ██      ██   ██ ██ ██         ██         ██ 
      █████  ██   ██   ████   ██   ██ ███████  ██████ ██   ██ ██ ██         ██    ███████     */

const result = document.getElementById("result");
const error = document.getElementById("error");

// addition
function Addition() {
  const num1 = document.getElementById("inputFirst").value;
  const num2 = document.getElementById("inputSecond").value;
  if ((num1, num2) == "" || (num1, num2) == null) {
    error.innerHTML = "please enter a value !";
    error.style.color = "red";
    return false;
  } else if (isNaN(num1) || isNaN(num2)) {
    error.innerHTML = "please enter only number";
    error.style.color = "red";
    return false;
  } else {
    const sum = parseInt(inputFirst.value) + parseInt(inputSecond.value);
    result.innerHTML = parseInt(sum);
    error.innerHTML = "congratulation no error";
    error.style.color = "green";
    return false;
  }
}

//Subtraction
function Subtraction() {
  const num1 = document.getElementById("inputFirst").value;
  const num2 = document.getElementById("inputSecond").value;
  if ((num1, num2) == "" || (num1, num2) == null) {
    error.innerHTML = "please enter a value !";
    error.style.color = "red";
    return false;
  } else if (isNaN(num1) || isNaN(num2)) {
    error.innerHTML = "please enter only number";
    error.style.color = "red";
    return false;
  } else {
    const sub = parseInt(inputFirst.value) - parseInt(inputSecond.value);
    result.innerHTML = parseInt(sub);
    error.innerHTML = "congratulation no error";
    error.style.color = "green";
    return false;
  }
}

// divide
function divide() {
  const num1 = document.getElementById("inputFirst").value;
  const num2 = document.getElementById("inputSecond").value;
  if ((num1, num2) == "" || (num1, num2) == null) {
    error.innerHTML = "please enter a value !";
    error.style.color = "red";
    return false;
  } else if (isNaN(num1) || isNaN(num2)) {
    error.innerHTML = "please enter only number";
    error.style.color = "red";
    return false;
  } else {
    const div = parseInt(inputFirst.value) / parseInt(inputSecond.value);
    result.innerHTML = parseInt(div);
    error.innerHTML = "congratulation no error";
    error.style.color = "green";
    return false;
  }
}

// multiply
function multiply() {
  const num1 = document.getElementById("inputFirst").value;
  const num2 = document.getElementById("inputSecond").value;
  if ((num1, num2) == "" || (num1, num2) == null) {
    error.innerHTML = "please enter a value !";
    error.style.color = "red";
    return false;
  } else if (isNaN(num1) || isNaN(num2)) {
    error.innerHTML = "please enter only number";
    error.style.color = "red";
    return false;
  } else {
    const multi = parseInt(inputFirst.value) * parseInt(inputSecond.value);
    result.innerHTML = parseInt(multi);
    error.innerHTML = "congratulation no error";
    error.style.color = "green";
    return false;
  }
}
