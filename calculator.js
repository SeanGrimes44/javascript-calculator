function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (op, a, b) {
    if (op === "+") {
        return add(a, b);
    }
    else if (op === "-") {
        return subtract(a, b);
    }
    else if (op === "*") {
        return multiply(a, b);
    }
    else if (op === "/") {
        return divide(a, b);
    }
}
let displayValue = "";
function display (a) {

}
const numberButtons = document.querySelectorAll(".number");
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        displayValue += numberButtons[i].innerText;
        document.querySelector("h1").innerHTML = displayValue;
    });
}

let eval = "";
let firstNumber = 0;
let secondNumber = 0;

const opButtons = document.querySelectorAll(".operator");
for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener("click", () => {
        if (eval !== "") {
            firstNumber = operate(eval, firstNumber, secondNumber);
        }
        else {
            firstNumber = Number(displayValue);
            displayValue = "";
            eval = opButtons[i].innerText;
        }
    });
}

// equal button
const equalButton = document.querySelector(".equals");
equalButton.addEventListener("click", () => {
    if (eval === "") {
        firstNumber = Number(displayValue);
        displayValue = "";
    }
    else {
        secondNumber = Number(displayValue);
        displayValue = operate(eval, firstNumber, secondNumber).toString();
        document.querySelector("h1").innerHTML = displayValue;
        firstNumber = 0;
        secondNumber = 0;
        eval = "";
        displayValue = "";
    }
});