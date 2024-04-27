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

let operators = "";
let btnReset = createElements("Button", "Clear Screen");
let row = "";
let square = "";

//Helper functions for creating and setting elements on DOM
function createElements(element, text = "") {

    let create = document.createElement(element)

    create.textContent = text;

    return create;
}


function setAttributes(attributes, element) {
    let properties = Object.keys(attributes);
    let values = Object.values(attributes);

    let attribs = "";

    let valueCount = 0;

   for (let i = 0; i < Object.keys(attributes).length; i++) {
        attribs = attribs + properties[i] + ": " + values[i] + ";";
    
    }
    
    element.setAttribute("style", attribs)   
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

for (let i = 1; i <= 3; i++) {
        
}