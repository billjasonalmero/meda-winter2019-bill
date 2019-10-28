//oct 25, 2019 
var fs = require("fs");
var terminalArguments = process.argv;

var textFromFile = fs.readFileSync(terminalArguments[2],"utf8");






// console.log(terminalArguments)

characterSearch(textFromFile, terminalArguments[3]);















function characterSearch (text, letter) {
  
  console.log("Searching the string:" + text);
  
  var foundLetters = 0;


  for (var i = 0; i < text.length; i++) {
    

    if (text.charAt(i) == letter) {
      foundLetters = foundLetters + 1;


      //foundLetters++, adds one to the existing variable
      //foundLetters += 1, a lot like ++ but adds one to existing variable
    }
  }

  console.log("We found a total of " + foundLetters + " " + letter + "'s");

}






