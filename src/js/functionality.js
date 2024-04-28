
let keys = Array.from(document.querySelectorAll("button"));
let expression = "";
let value1 = value2 = operator = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

function percentage(num1) {
    return num1 / 100;
}

function clear() {
    results.textContent = 0;
    operation.textContent = "";
    expression = "";
}



keys.map(key => {
    let keyClass = key.className;

    let keyName = document.querySelector("." + keyClass);

    keyName.onclick = () => {
        if (keyClass === "ac") {
            clear()
        }
        
        if (keyClass !== "ac" && keyClass !== "equal" && keyClass !== "bin" && keyClass !== "percentage") {
            if (keyClass === "addition" ||keyClass === "subtract" || keyClass === "multiply" || keyClass === "divide") {
                expression = expression + " " + keyName.textContent + " ";
            }else{expression = " " + expression  + keyName.textContent}

            
        operation.textContent = expression;
        }
        
    }
})
