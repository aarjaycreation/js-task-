function calculator() {
  const inputFirst = document.getElementById("inputFirst").value;
  const inputSecond = document.getElementById("inputSecond").value;
  const operator = document.getElementById("operator").value;
  const showResult = document.getElementById("showResult");
  const showError = document.getElementById("showError");

  switch (operator) {
    // addition
    case "+":
      result = parseInt(inputFirst) + parseInt(inputSecond);
      document.getElementById("showResult").innerHTML = result;
      break;
    // divide

    case "/":
      result = parseInt(inputFirst) / parseInt(inputSecond);
      document.getElementById("showResult").innerHTML = result;
      break;
    //Subtraction
    case "-":
      result = parseInt(inputFirst) - parseInt(inputSecond);
      document.getElementById("showResult").innerHTML = result;
      break;
    // multiply
    case "*":
      result = parseInt(inputFirst) * parseInt(inputSecond);
      document.getElementById("showResult").innerHTML = result;
      break;
    // default call
    default:
      // document.getElementById('showResult').innerHTML = result;
      break;
  }
}

const Button = document.getElementById("calculatorButton");
//function to call
function validation() {
  const inputFirst = document.getElementById("inputFirst").value;
  const inputSecond = document.getElementById("inputSecond").value;
  const operator = document.getElementById("operator").value;

  // check the  input field
  if ((inputFirst, inputFirst) == "" || (inputFirst, inputFirst) == null) {
    showError.innerText = "please enter first number";
    showError.style.color = "red";
    return false;
  }
  // check the second input field
  else if (inputFirst.length == 0 || inputSecond.length == 0) {
    showError.innerText = "please enter second number";
    showError.style.color = "red";
  }
  // all validation clear than run code
  else {
    // result = parseInt(inputFirst) + parseInt(inputSecond);
    // document.getElementById("showResult").innerHTML = result;
    showError.innerText = "no error";
    showError.style.color = "green";
  }
}

/*=========whan the button is click, it execute the  function===========*/
Button.addEventListener("click", () => {
  //function
  validation();
});
