//Node File

var fs = require("fs");

fs.writeFileSync("repeat.txt", "" , "utf8");

//fs.appendFileSync("repeat.txt", "This is a sample sentence", "utf8");
//fs.appendFileSync("repeat.txt", ` ${lineNumber}) This is a sample sentence.\n`, "utf8");

/*
for(var i = 0; i < 100; i++) {

  if (i < 9) {
    var sentence = "(" + (i + 1) + ") This is a sample sentence.\n";
  }else if (i > 8 && i <99) {
    var sentence = "(" + (i + 1) + ") This is a sample sentence.\n";
  }else {
    var sentence = "(" + (i +1) + ") This is a sample sentence.\n";
  }

  fs.appendFileSync("repeat.txt", sentence, "utf8");
}
*/

// if you want to add 000
for(var i = 0; i < 100; i++) {

  if (i < 9) {
    var sentence = "(00" + (i + 1) + ") This is a sample sentence.\n";
  }else if (i > 8 && i <99) {
    var sentence = "(0" + (i + 1) + ") This is a sample sentence.\n";
  }else {
    var sentence = "(" + (i + 1) + ") This is a sample sentence.\n";
  }

  fs.appendFileSync("repeat.txt", sentence, "utf8");
}