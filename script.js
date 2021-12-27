const ERROR_MESSAGE = "ERROR";
const DEFAULT_OUTPUT = "0";

var leftOperand;
var rightOperand;
var operator;

function buttonPressed(icon) {
    if(icon != undefined || icon != null){
        switch(icon){
            case "C":
                reset();
                updateOutput(DEFAULT_OUTPUT);
                break;
            case "=":
                calculate();
                break;
            default:
                updateLogic(icon);
        }
    } else {
        updateOutput(ERROR_MESSAGE);
    }
}


function updateLogic(icon) {
    let currentInput = document.getElementById("output").innerText;

    if(currentInput == ERROR_MESSAGE && icon != "C") {
        console.log("Press C to reset from error state!");
        return;
    } else {
        if(operator == undefined) {
            if(isNaN(icon)) { // Assign operator if not exists.
                operator = icon;
            } else {
                // Update left operand:
                if(leftOperand == undefined) { 
                    leftOperand = icon;
                } else {
                    leftOperand += icon;
                }
            }        
        } else { 
            if (isNaN(icon)){ // One operator already exists in the input field --> leave this function.
                console.log("Can only exist one operator!");
                return;
            } else {
                 // Update right operand:
                if(rightOperand == undefined) {
                    rightOperand = icon;
                } else {
                    rightOperand += icon;
                }
            }
        }
    
        updateInput(icon);
    }
}


function calculate() {
    if(leftOperand == undefined || operator == undefined || rightOperand == undefined) {
        updateOutput(ERROR_MESSAGE);
        return;
    } else {
        let leftOperandInt = parseInt(leftOperand);
        let rightOperandInt = parseInt(rightOperand);

        console.log("left: " +  leftOperandInt);
        console.log("right: " + rightOperandInt);

        let result;

        switch(operator){
            case "+":
                result = leftOperandInt + rightOperandInt;
                break;
            case "-":
                result = leftOperandInt - rightOperandInt;
                break;
            case "x":
                result = leftOperandInt * rightOperandInt;
                break;
            case "/":
                if(rightOperandInt == 0){
                    result = ERROR_MESSAGE
                } else {
                    result = leftOperandInt / rightOperandInt;
                }
                break;
            default:
                updateOutput(ERROR_MESSAGE);
                return;
        }

        reset();
        leftOperand = result;
        updateOutput(result);
    }
}

function updateInput(icon) {
    let existingOutput = document.getElementById("output").innerText

    if(existingOutput == DEFAULT_OUTPUT) {
        document.getElementById("output").innerText = icon;
    } else if (existingOutput == ERROR_MESSAGE && !isNaN(icon)) {
        leftOperand = icon;
        document.getElementById("output").innerText = icon;
    }
     else {
        existingOutput += icon;
        document.getElementById("output").innerText = existingOutput;
    }
}


function reset() {
    leftOperand = undefined;
    rightOperand = undefined;
    operator = undefined;
}


function updateOutput(result) {
    document.getElementById("output").innerText = result;
}