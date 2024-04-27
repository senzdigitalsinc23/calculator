let mainContainer = document.querySelector(".container");

let calcContainer = createElements("div");
let screen = createElements("div");
let operation = createElements("div", "1 + 8");
let results = createElements("div", 9);
let numbersContainer = createElements("div");
let keysContainer = createElements('div');
let operatorsContainer = createElements('div');
let otherOperatorsCont = createElements("div");
let numberKeysCon = createElements("div");
let btnReset = createElements("Button", "Clear Screen");

let operatorsKeys = "";
let numberKeys = "";
let operators = ['/', '*', '-', '+', '='];
let otherOperators = ['AC', '%', 'MOD'];
let numbers = [7, 8, 9,4, 5, 6, 1, 2, 3,  0, "."];
let row = "";
let square = "";

//Helper functions for creating and setting elements on DOM
function createElements(element, text = "") {

    let create = document.createElement(element)

    create.textContent = text;

    return create;
}


function setAttributes(attributes, elements = []) {
    let properties = Object.keys(attributes);
    let values = Object.values(attributes);

    let attribs = "";

    let valueCount = 0;

   for (let i = 0; i < Object.keys(attributes).length; i++) {
        attribs = attribs + properties[i] + ": " + values[i] + ";";
    
    }
    
    elements.map((element) => {
        element.setAttribute("style", attribs)
    })   
}

function attachElements(parent, children = []) {
    children.map((child) => parent.append(child));
}


//Container for calculator interface
calcContainer.classList.add('calc-container');

attachElements(mainContainer, [calcContainer]);


//Calculator Screen
screen.classList.add('screen');
results.classList.add('result');
operation.classList.add('operation');

attachElements(calcContainer, [screen]);
attachElements(screen, [operation, results]);

//attach keys container
keysContainer.classList.add('keys-container');

attachElements(calcContainer, [keysContainer])

//Attach keys
numbersContainer.classList.add('numbers-container');
operatorsContainer.classList.add('operators-container');

attachElements(keysContainer, [numbersContainer, operatorsContainer])

otherOperatorsCont.classList.add('other-operators');
numberKeysCon.classList.add('number-keys');

attachElements(numbersContainer, [otherOperatorsCont, numberKeysCon])

operators.map((operator) => {
    operatorsKeys = createElements('button', `${operator}`);

    let opKeys = "";

    if (operatorsKeys.textContent === "/") {
        operatorsKeys.classList.add('divide');
    }else if (operatorsKeys.textContent === "*") {
        operatorsKeys.classList.add('multiply');
    }else if (operatorsKeys.textContent === "-") {
        operatorsKeys.classList.add('subtract');
    }else if (operatorsKeys.textContent === "+") {
        operatorsKeys.classList.add('addition');
    }else if (operatorsKeys.textContent === "=") {
        operatorsKeys.classList.add('equal');
    }

    attachElements(operatorsContainer, [operatorsKeys])    
});


otherOperators.map((otherOperator) => {
    otherOperatorKeys = createElements('button', `${otherOperator}`);

    if (otherOperatorKeys.textContent === "AC") {
        otherOperatorKeys.classList.add('ac');
    }else if (otherOperatorKeys.textContent === "%") {
        otherOperatorKeys.classList.add('percentage');
    }else if (otherOperatorKeys.textContent === "MOD") {
        otherOperatorKeys.classList.add('mod');
    }

    attachElements(otherOperatorsCont, [otherOperatorKeys])
});



numbers.map((number) => {
    numberKeys = createElements('button', `${number}`);

    numberKeys.classList.add('number-' + `${number}`);

    attachElements(numberKeysCon, [numberKeys])
});

let numberSel = document.querySelectorAll(".number-7, .number-4, .number-1, .number-8, .number-5, .number-2");

numberSel = Array.from(numberSel);


console.log(numberSel)

setAttributes({
    'margin-right': "3px",
    
}, numberSel);

setAttributes({'width': "133px", 'margin-right': "3px"}, [document.querySelector(".number-0")])