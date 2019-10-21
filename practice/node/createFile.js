var fs = require("fs");

//Write files will overwrite existing filename.
fs.writeFileSync("my first file.txt", "Hello this is my first file","utf8");

fs.writeFileSync("my second file.txt", "Hello This is my second file", "utf8");

fs.writeFileSync("this is another file.jpg", "Some other text", "utf8");


//Read files, must lead as utf8 to make sense.
var textThatWasReadFromFile = fs.readFileSync("some-file.txt","utf8");


//Update file
fs.appendFileSync("some-file.txt"," This text file was updated", "utf8");



console.log(textThatWasReadFromFile);