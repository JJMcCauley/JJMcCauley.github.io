const calculator = document.getElementById("calculator-interface");
const display = document.getElementById("display");
const operandDisplay = document.getElementById("operand");
let currentOper = "";
let currentOperValue = "";
let currentDisplay = "default";
let displayText = "";
let currentVal = "";
let totalVal = "";
let readyToCalc = false;
let totaled = false;
let hasDecimal = false;
let operands = [
    `X<sup>Y</sup>`,
    `+`,
    `-`,
    `*`,
    `&#247;`
]


// Resets display only
const resetDisplay = () => {
    display.textContent = "";
    displayText = display.textContent;
}

// Resets current totaled value
const resetCurrentValue = () => {
    currentVal = "";
}

// Code to convert value to scientific notation with two decimals taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential
function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
}

// calculates current total based on currently selected operator
const parseTotalValue = () => {
    if (currentOper === "exponent") {
        totalVal = Math.pow(totalVal, parseFloat(currentVal));
    }
    else if (currentOper === "add") {
        totalVal += parseFloat(currentVal);
    }
    else if (currentOper === "subtract") {
        totalVal -= parseFloat(currentVal);
    }
    else if (currentOper === "multiply") {
        totalVal = (parseFloat(totalVal) * parseFloat(currentVal));
    }
    else if (currentOper === "divide") {
        totalVal = (parseFloat(totalVal) / parseFloat(currentVal));
    }
    if (totalVal > 999999999) {
        totalVal = expo(totalVal, 2);
    }
    display.innerText = totalVal;
}

// displays currently selected operation in corner of display
const displayCurrentOper = () => {
    if (currentOper === "exponent") {
        currentOperValue = operands[0];
        operandDisplay.style.fontSize = `1rem`;
    }
    else if (currentOper === "add") {
        currentOperValue = operands[1];
        operandDisplay.style.fontSize = `1.25rem`;
    }
    else if (currentOper === "subtract") {
        currentOperValue = operands[2];
        operandDisplay.style.fontSize = `1.25rem`;
    }
    else if (currentOper === "multiply") {
        currentOperValue = operands[3];
        operandDisplay.style.fontSize = `1.25rem`;
    }
    else if (currentOper === "divide") {
        currentOperValue = operands[4];
        operandDisplay.style.fontSize = `1.25rem`;
    }
    operandDisplay.innerHTML = currentOperValue
}

// Updates displayed value with a number or decimal
const updateDisplay = (num) => {
    currentVal += num;
    currentDisplay = "num";
    displayText += num;
    display.textContent = displayText;

}


// Decided what to do if a number button is pressed
const parseNum = (num) => {
    if (currentDisplay === "default" || currentDisplay === "oper" || totaled)  {
        resetDisplay();
        resetCurrentValue();
    }
    if (currentDisplay === "oper") {
        readyToCalc = true;
    }
    if(totaled) {
        totalVal = "";
        totaled = false;
        readyToCalc = false;
    }
    updateDisplay(num);
}

// Decided what to do if a decimal is pressed
const parseDecimal = () => {
    if (totaled) {
        totalVal = "";
        totaled = false;
        readyToCalc = false;
        resetCurrentValue();
        resetDisplay();
    }
    if (!hasDecimal) {
        if (currentDisplay === "default" || currentDisplay === "oper") {
            currentDisplay = "num";
            resetDisplay();
            updateDisplay("0.")        
        }
        else if (currentDisplay === "num"){
            updateDisplay(".")
        }
        hasDecimal = true;
    }
}

//Decides what to do if an operation button is pressed
const parseOper = (oper) => {
    if (readyToCalc) {
        parseTotalValue();
    }
    else {
        totalVal = parseFloat(currentVal);
    }
    if (totaled) {
        totaled = false;
    }
    currentOper = oper;
    currentDisplay = "oper"
    displayCurrentOper();
    hasDecimal = false;
}

// Decides what to do if equal sign is pressed
const equals = () => {
    parseTotalValue();
    display.innerText = totalVal;
    operandDisplay.innerText = "";
    totaled = true;
    hasDecimal = false;
    currentOper = "";
}

// Clears and resets calculator to default state
const clearEverything = () => {
    resetDisplay();
    resetCurrentValue();
    updateDisplay("0");
    currentDisplay = "default";
    currentOper = "";
    currentOperValue = "";
    operandDisplay.innerHTML = "";
    hasDecimal = false;
    totaled = false;
    readyToCalc = false;
}
 
// Clears the current display
const clearDisplay = () => {
    resetDisplay();
    updateDisplay("0");
    currentDisplay = "default"
}

// Decides what to do if any of the function buttons are pressed
const parseFunct = (funct) => {
    if (funct === "equals" && readyToCalc) {
        equals();
    }
    else if (funct === "clear-everything") {
        clearEverything();
    }
    else if (funct === "clear-display") {
        clearDisplay();
    }
}

// Listens for clicks on the various buttons and passes the results based on their class
calculator.addEventListener("click", (e) => {
    const btn = e.target
    if (btn.id !== "calculator-interface"){
        if (btn.classList.contains('num')) {
            parseNum(btn.id);
        }
        else if (btn.classList.contains('oper')) {
            if(currentDisplay === "num" || currentDisplay === "oper")
                parseOper(btn.id);
        }
        else if (btn.classList.contains('funct')) {
            parseFunct(btn.id);
        }
        else if (btn.classList.contains("dec")) {
            parseDecimal()
        }
    } 
})