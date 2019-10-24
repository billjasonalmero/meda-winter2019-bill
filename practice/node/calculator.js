//Renaming ARGV arrray for easier reading
//When using ARGV, start with index 2, because 0 and 1 are not useful in or code 
var terminalArguments = process.argv; //holds all information about node

/*
if(terminalArguments = process.argv) {
  if(parseInt(terminalArguments[2] == NaN))
  console.log("You are missing two numbers, please type in two numbers after the command with spaces. Example: node calculator.js 50 100")
  return;
}
*/

if (isNaN(parseInt(terminalArguments[2])  )) {
  console.log("You are missing the first number, please type in two numbers after the command with spaces. Example: node calculator.js 50 100")

  return;
}

if (isNaN(parseInt(terminalArguments[3])  )) {
  console.log("You are missing the second number, please type in two numbers after the command with spaces. Example: node calculator.js 50 100")

  return;
}

if(terminalArguments[4] != undefined) {
  console.log("Unforunately this program can only use the first two numbers. Subscribe for future updates.")
}

var number1 = parseInt(terminalArguments[2]);
var number2 = parseInt(terminalArguments[3]);
//Safe to use number1 and number2 as they are Number Datatypes.
//add(number1,number2);


/*
//More readable an dcan be reused in the futire if we still want the number
var number1 = parseInt(terminalArguments[2]);

var sum = number1 + parseInt(terminalArguments[3]);

console.log(sum);
console.log(true);
*/




//Decide what we want to do with numbers.
if(terminalArguments[4] == undefined) {
  console.log("You need to type in hte operation after the two numbers, try the following values: add, subtract, multiply, divide, remainder ")

  return;
}else if (terminalArguments[4] == "add") {
  add(number1, number2);
}else if (terminalArguments[4] == "subract") {
  subtract(number1, number2);
}else if (terminalArguments[4] == "multiply") {
  multiply(number1, number2);
}else if (terminalArguments[4] == "divide") {
  divide(number1, number2);
}else if (terminalArguments[4] == "remainder") {
  modulate(number1, number2);
}else{
  console.log("Sorry, we did not understand the operator you required");
}
 
// add(num1,num2);
// subtract(num1,num2);
// divide(num1,num2);
// multiply(num1,num2);
// modulate(num1,num2)
















//create divide, multiply, subtract, and leftover function

function add(num1,num2) {
  var sum = num1 + num2;
  console.log(sum);
}
function subtract(num1,num2) {
  var difference = num1 - num2;
  console.log(difference);
}

function divide(num1,num2) {
  var qoutient = num1 / num2;
  console.log(qoutient);
  
}
console.log(divide);

function multiply(num1,num2) {
  var product = num1 * num2;
  console.log(product); 
}

function modulate(num1,num2) {
  var remainder = num1 % num2;
  console.log(remainder);
}