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
  console.log("Unforunately this program can only use the first two numbers. Subscribe for future updates")
}

//More readable an dcan be reused in the futire if we still want the number
var number1 = parseInt(terminalArguments[2]);

var sum = number1 + parseInt(terminalArguments[3]);

console.log(sum);
console.log(true);