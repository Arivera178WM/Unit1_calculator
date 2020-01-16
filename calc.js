// GLOBAL VARIABLES 

var num1 = ""; //STORES THE FIRST NUMBER IN OUR MATH
var num2 = ""; //STORES THE SECOND NUMBER IN OUR MATH
var operator; //STORE THE NUMBER OF OUR VARIABLE
var flag = false; //FALSE IF WE HAVENT USED AN OPERATOR YET
var display = document.getElementById("display");
var equalTo = false; //FALSE IF WE HAVENT PRESSED THE EQUALS BUTTON
var opString = ""; //OPSTRING

// CALCULATOR

// FUNCTION TO SET NUMBERS IN THE NUM1 AND NUM2 VARIABLES 
function setValue(number){
    //CLEARS THE DISPLAY IF WE ALREADY SOLVED A PROBLEM
  if(equalTo === true){
    clearButton();
    }     
    //IF WE HAVENT USED AN OPERATOR WE ADD THE NUMBER TO THE END OF NUM1
    if(flag === false){
        num1+= number;
        display.innerHTML = num1;
    }if(flag === true){
        num2 += number;
        display.innerHTML += number;
    }
    //MAX NUMBERS REACHED  
    if (num1.length > 10 || num2.length > 10){
        display.innerHTML = "SYNTAX ERROR"
    }


}
//FUNCTION TO ADD OPERATORS
function setOperator(number){
    operator = number; 
   
    flag = true; 
    //A BUNCH OF IF'S AND IF ELSES TO PLACE THE CORRECT OPERATOR
    if (operator === 4){
        display.innerHTML += " / "
        opString = " / ";

    }else if (operator === 3){ 
        display.innerHTML += " * "; 
        opString = " * "; 
    }else if (operator === 2){
        display.innerHTML += " - " 
        opString = " - "
    }else if (operator === 1){
        display.innerHTML += " + "
        opString = " + "
    }else if (operator == 5){ 
        result = Math.sqrt(num1);
        display.innerHTML = result
    }else if (operator == 6){
        result = Math.pow(num1, 2);
        display.innerHTMK = result;
    }else if (operator == 7){
        result = 1 / num1;
        display.innerHTML = result;
        
    }

    //ONLY ALLOWS FOR 1 OPERATOR AT A TIME
    if(flag === true){
        display.innerHTML = num1 + opString;
    }
    else{
        num2 += number; 
        display.innerHTML += number;
    }
    //IF WE PRESSED AN OPERATOR AND THERE IS NO NUM1, CLEAR EVERYTHING
    if(flag === true && num1 === ""){
        clearButton();
    }
    //IF WE HAVE SOLVED THE PROBLEM, CLEAR EVERYTHING
    if(equalTo === true){
        clearButton();
    }

}
function clearButton(){
    display.innerHTML = "";
    num1 = "";
    num2 = "";
    flag = false; 
    equalTo = false;
}

//FUNCTION TO SOLVE WITH MATH EQUATION

function equalClick(){
    equalTo = true; 
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2); 
    var result = "";
    var roundedResult = "";

    if (operator === 1){
         result = num1 + num2;
    }else if (operator == 2){
        result = num1 - num2;
    }else if (operator == 3){
        result = num1 * num2;
    }else if (operator ==4){
        result = num1 / num2;
    }else if (operator == 5){ 
        result = Math.sqrt(num1);
        display.innerHTML = result;
    }else if (operator == 6){
        result = Math.pow(num1, 2);
    }else if (operator == 7){
        result = 1 / num1;
    }

    roundedResult = result.toFixed(2);
    display.innerHTML = roundedResult;


    if(roundedResult === "Infinity"){ 
        display.innerHTML =  "You cannot devide by 0"
    }
    if(roundedResult === "NaN"){
        display.innerHTML = "Invalid Caluclation"
    }
}

function backSpace(){
    var temp1 = "";
    var temp2 = "";

    if(equalTo === true){
        clearButton();
    }
    if(flag == false){
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
    display.innerHTML = num1 + opString + num2;
}
}
function setDecimal(){
    if(flag === false);
    if(num1 === ""){
        num1 = "0.";
        display.innerHTML = num1;
    }
    if(num1.indexOf(".")=== -1){
        num1 += ".";
        display.innerHTML = num1;
    }
    if(flag === true){
        if(num2 === ""){
            num2 = "0.";
            display.innerHTML = num2;
        }
        if(num2.indexOf(".")=== -1){
            num2 += ".";
            display.innerHTML = num1 + opString + num2;
        }
    }

   } 
   function setDecimal(){
    if(flag === false){
    if(num1 === ""){
        num1 = "0.";
        display.innerHTML = num1;
    }
    if(num1.indexOf(".")=== -1){
        num1 += ".";
        display.innerHTML = num1;
    }
}
    if(flag === true){
        if(num2 === ""){
            num2 = "0.";
            display.innerHTML = num2;
        }
        if(num2.indexOf(".")=== -1){
            num2 += ".";
            display.innerHTML = num1 + opString + num2;
        }
    }
}
function cEntry(){
    if(flag === false){
        display.innerHTML = "";
        num1 = "";
    }
    else {
        display.innerHTML = num1 + opString; 
        num2 = "";
    }
}
 




