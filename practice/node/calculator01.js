// Renaming ARGV array for easier reading.
// When using ARGV, start with index 2, because 0 and 1 are not useful in or code.
var terminalArguments = process.argv;

// Tests if index 2 has something and can be converted to number, otherwise send error message.
if (  isNaN( parseInt(terminalArguments[2]) )  ) {
    console.log("You are missing the first number, please type in two numbers with an operation in between. Example: node calculator.js 50 add 100");

    return;
}

// Tests if index 3 has something and can be converted to number, otherwise send error message.
if (  isNaN( parseInt(terminalArguments[4]) )  ) {
    console.log("You are missing the second number, please type in two numbers with an operation name in between. Example: node calculator.js 50 add 100");

    return;
}

// Warns user that we can only use the first two numbers.
if (terminalArguments[5] != undefined) {
    console.log("Unfortunately this program can only use the first two numbers. Subcribe for future updates.")
}



var number1 = parseInt(terminalArguments[2]);
var number2 = parseInt(terminalArguments[4]);
// Safe to use number1, and number2 as they are Number Datatypes.

// Decide what we want to do with these numbers.
if (terminalArguments[3] == undefined) {
    console.log("You need to type in the operation after the two numbers, try the following values: add, subtract, multiply, divide, remainder");

    return;
} else if (terminalArguments[3] == "add" || terminalArguments[4] == "addd") {
    add(number1, number2);
} else if (terminalArguments[3] == "subtract") {
    subtract(number1, number2);
} else if (terminalArguments[3] == "multiply") {
    multiply(number1, number2);
} else if (terminalArguments[3] == "divide") {
    divide(number1, number2);
} else if (terminalArguments[3] == "remainder") {
    modulate(number1, number2);
} else {
    console.log("Sorry, we did not understand the operator you requested.")
}




























function add(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}

function subtract(num1, num2) {
    var difference = num1 - num2;
    console.log(difference);
}

function divide(num1, num2) {
    var quotient = num1 / num2;
    console.log(quotient);
}

function multiply(num1, num2) {
    var product = num1 * num2;
    console.log(product);
}

function modulate(num1, num2) {
    var remainder = num1 % num2;
    console.log(remainder);
}