var fs = require("fs");

//Oct 28, 2019
//Week 2 day 6

// Math.random();

//converts a JSON string into an actual JavaScript Object.
// JSON.parse();

//converts a javaScript Object into actual JSON string.
//JSON stringift();

//mainKey is a proterty
var exampleObject = {
  mainKey: 105,
  isThisTrue: true,
  someText: "some Text",
  arrays: [100, "string", false],
  childObject: {nestedKey: "inside"},
  aCoolFunction: function() {
    console.log("I am a method that belongs to example Object");
  } 
};

console.log(exampleObject.mainKey); //suggest yo use "." ; 1st option
console.log(exampleObject["mainKey"]);//2nd option
exampleObject.mainKey = 106;
exampleObject.mainKey2 = 120; //you can make a new key w/o adding var exampleObject{}

exampleObject.aCoolFunction()

//console logging a normal object
console.log(exampleObject);

var jsonText = JSON.stringify(exampleObject);
//console logging JSON representation of the same Object.
console.log(jsonText);


fs.writeFileSync("exampleJSON.json", jsonText ,"utf8"); //it takes 3 argurements (filename,text,characterset)
console.log("File successfully created");