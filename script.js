const ERROR_MESSAGE = "ERROR";

var leftOperand;
var rightOperand;
var operator;
var numberOfOperators = 0;

function buttonPressed(icon) {
    if(icon != undefined || icon != null){
        switch(icon){
            case "C":
                reset();
                updateOutput("0");
                break;
            case "=":
                calculate();
                break;
            default:
                updateLogic(icon);
                updateInput(icon);
        }
    }
}


function updateLogic(icon) {
    if(operator == undefined) {
        if(isNaN(icon)) {
            operator = icon;
            return;
        }

        // Update left operand:
        if(leftOperand == undefined) { 
            leftOperand = icon;
        } else {
            leftOperand += icon;
        }
    } else { 
        // Update right operand:
        if(rightOperand == undefined) {
            rightOperand = icon;
        } else {
            rightOperand += icon;
        }
    }
}


function calculate() {
    if(leftOperand == undefined || operator == undefined || rightOperand == undefined) {
        updateOutput(ERROR_MESSAGE);
        return;
    } else {
        let leftOperandInt = parseInt(leftOperand);
        let rightOperandInt = parseInt(rightOperand);

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
                reset();
                return;
        }

        reset();
        updateOutput(result);
    }
}

function updateInput(icon) {
    let existingOutput = document.getElementById("output").innerText

    if(existingOutput == "0") {
        document.getElementById("output").innerText = icon;
    } else {
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