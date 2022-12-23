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
            secondNumber = Number(displayValue);
            // Check for divice by zero.
            firstNumber = operate(eval, firstNumber, secondNumber);
            document.querySelector("h1").innerHTML = firstNumber.toString();
            displayValue = "";
            secondNumber = 0;
            eval = opButtons[i].innerText;
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
        // Check for divide by zero.
        let answer = operate(eval, firstNumber, secondNumber);
        displayValue = answer.toString();
        document.querySelector("h1").innerHTML = displayValue;
        firstNumber = answer;
        secondNumber = 0;
        eval = "";
    }
});