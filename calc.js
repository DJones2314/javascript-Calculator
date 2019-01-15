function addition() {
    
    let num1 = document.getElementById("userInputOne").value; 
    let num2 =  document.getElementById("userInputTwo").value;
    let result = +num1 + +num2;
    document.getElementById("answer").innerHTML = result;
}

function subtract() {
    
    let num1 = document.getElementById("userInputOne").value; 
    let num2 =  document.getElementById("userInputTwo").value;
    let result = +num1 - +num2;
    document.getElementById("answer").innerHTML = result;
}

function multiply() {
    
    let num1 = document.getElementById("userInputOne").value; 
    let num2 =  document.getElementById("userInputTwo").value;
    let result = num1 * num2;
    document.getElementById("answer").innerHTML = result;
}

function divide() {
    
    let num1 = document.getElementById("userInputOne").value; 
    let num2 =  document.getElementById("userInputTwo").value;
    let result = num1 / num2;
    document.getElementById("answer").innerHTML = result;
}
