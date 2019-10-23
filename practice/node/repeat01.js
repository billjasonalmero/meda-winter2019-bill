//OCT23, 2019 DAY 3

var fs = require("fs");

//Receives text as a string and stores it in the variable text.
var text = fs.readFileSync("repeat.txt", "utf8");

console.log(text);