/*
*
* Hi :)
* Welcome and enjoy your stay, fiddle with this JS file as
* mush as you want. Feel free to stop by and say 'Hello' at http://hardlycoded.com
*
* Binary Calculator v0.1
*
*/

/*
*
* Firstly lets set out the variables to use
* operand1 will hold the first numeric value (left side)
* operand2 will hold the second numeric value (right side)
* operator will hold the mathemtical operation we will be doing i.e. +, -, / or *
*
*/
let operand1 = "";
let operand2 = "";
let operator = "";

/*
*
* this constant is the results section that displays the operation as 
* its being input and also the result of the opration
*
*/
const result = document.getElementById("result");

//This function will determine the button thats been clicked and what to do
function btn_click(btn) {
    //this is the button value i.e. either the digit 1 or 0 or the operation
    const value = btn.innerHTML;

    //first check if the 'C' (clear) button is clicked and empty out all the data
    if (value === "C") {
        //reset result to be blank
        result.innerHTML = "";
        //empty out the variables
        operand1 = "";
        operand2 = "";
        operator = "";
        //if an operator button hasn't been clicked yet
        //then assign the left side to 'operand1'
    } else if (!operator) {
        result.append(value);
        operand1 += value;
        //if an operator button has been clicked then assign
        //the right hand side to 'opernad2'
    } else {
        result.append(value);
        operand2 += value;
    }
}

//Here we check which operator button is cliked and assign it to 'operator'
function op_click(op) {
    operator = op.innerHTML;
    result.append(op.innerHTML);
}

//Output the answer of the operation
function answer() {
    //first empty out the results section so its blank
    result.innerHTML = "";
    //create the answer var
    let ans = "";
    //Check if the operator is / because we need to round down the number if it is
    //we're not deailing with decimals here
    if (operator === "/") {
        ans = Math.floor(
            eval(parseInt(operand1, 2) + operator + parseInt(operand2, 2))
        );
        //if its any of the other operators, +, - or * then perform the calculation
    } else {
        ans = eval(parseInt(operand1, 2) + operator + parseInt(operand2, 2));
    }
    //set the answer to the results section
    result.innerHTML = ans.toString(2);
}
