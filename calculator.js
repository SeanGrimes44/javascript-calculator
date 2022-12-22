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
const buttons = document.querySelectorAll(".number");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        displayValue += buttons[i].innerText;
        document.querySelector("h1").innerHTML = displayValue;
    });
}