//Global Variables
var num1 = ""; //store the first number for maths
var num2 = ""; //store the second number for maths
var operator; //The Action Button (+,-,*,/)
var flag = false; 
var equalTo = false; 
var display = document.getElementById("display");
//calcultor
//Clears the numbers 
//Makes the numnber you pressed to display
function setValue(number){
    if(equalTo === true){
        clearButton();
    }
    if (flag === false){
        num1 += number;
        display.innerHTML = num1;
    }
    if(flag === true){
        num2 += number;
        display.innerHTML += number;
    }
    if(num1.length > 8 || num2.length > 8){
        display.innerHTML="Max limit of digits reached";
        alert("You can't have more than 8 numbers");
    }
}
//Clears the numbers stored in the variables "num 1" and "num 2"
function clearButton(){
    num1 = "";
    num2 = "";
    display.innerHTML = "";
    equalTo = false;
    flag = false;
}
//Detects what the operator tied to the button pressed is and displays what the corresponding simbol is.
function setOperator(number){
    operator = number;
    var opString = "";
    flag = true;
    if(operator === 4){
        display.innerHTML += " / ";
        opString = " / ";
    }else if(operator === 3){
        display.innerHTML += " * ";
        opString = " * ";
    }else if(operator === 2){
        display.innerHTML += " - ";
        opString = " - ";
    }else{
        display.innerHTML += " + ";
        opString = " + ";
    }
    if(flag === true){
        display.innerHTML = num1 + opString;
    }
    if(flag === true && num1 === ""){
        clearButton();
    }
    if(equalTo === true){
        clearButton();
    }
}
//CHecks what operator its doing, grabs the num 1 and num 2 and performs the math based on the operator, whet it gets a
//response, it rounds it 
function equalClick(){
    equalTo = true;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult="";
    if(operator === 1){
        result = num1 + num2;
    }else if(operator === 2){
        result = num1 - num2;
    }else if(operator === 3){
        result = num1 * num2;
    }else{
        result = num1 / num2;
    }
    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;
    if(roundedResult === "Infinity"){
        display.innerHTML = "You cannot divide by zero";
    }else if( roundedResult === "NaN"){
        display.innerHTML = "invalid calculation";
    }
}
//Checks what is in each Variable Num1 and Num2 and deletes the past action/num/operator
function backspace(){
    var temp1 = "";
    var temp2 = "";
    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        temp1 = num1.substring(0, num1.length-1);
        num1 = temp1;
        display.innerHTML = num1;
    }
    else if(flag === true){
        display.innerHTML = num1;
        flag = false;
    }
    if(num2 !== ""){
        temp2 = num2.substring(0, num2.length-1);
        num2 = temp2;
        flag = true;
        opSetString(operator);
    }
}
//Sets the decumal based on the number you are storing, adding a decimal place after the previously stored number
function setDecimal(){
    if(flag === false){
        if(num1 === ""){
            num1="0."
            display.innerHTML = num1;
        }
        if(num1.indexOf(".") === -1){
            num1 += ".";
            display.innerHTML = num1;
        }
    }
    if(flag === true){
        if(num2 === ""){
            num2="0."
            display.innerHTML += num2;
        }
        if(num2.indexOf(".") === -1){
            num2 += ".";
            opSetString(operator);
        }
    }

}
//Displays what button you pressed, if pressed the +, displayes a + ect.
function opSetString(op){
        if(op === 1){
            display.innerHTML = num1 + " + " + num2;
        }else if(op === 2) {
            display.innerHTML = num1 + " - " + num2;
        }else if(op === 3){
            display.innerHTML = num1 + " * " + num2;
        }else{
            display.innerHTML = num1 + " / " + num2;
        }
}
