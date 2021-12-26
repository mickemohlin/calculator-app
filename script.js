function calculate(leftOperand, operator, rightOperand) {
    console.log("equals!!");
}


function buttonPressed(icon) {
    if(icon != undefined || icon != null){
        switch(icon){
            case "C":
                document.getElementById("output").innerText = "0";
                break;
            case "=":
                calculate(1, "+", 1);
                break;
            default:
                updateOutputField(icon);
            
        }
    }
}

function updateOutputField(icon) {

    let existingOutput = document.getElementById("output").innerText

    if(existingOutput == "0") {
        document.getElementById("output").innerText = icon;
    } else {
        existingOutput += icon;
        document.getElementById("output").innerText = existingOutput;
    }
}