var billLibrary = require("./library.js");
var avengers = require("./library2.js");

function runAll (nA, userName) {

  //billLibrary --> library.js
  var results = billLibrary.mathify(na[0], na[1], na[2], na[3]);
  //billLibrary.shouldNotBeAccessed(userName);
  console.log(results);
  
  
  
  //avengers --> library2.js
  var results = avengers.letter();
  console.log(results);
  
  var sum = avengers.spiderman(5,3);
  console.log(sum);
}



module.export = {
  runAll: runAll
}





//oct 30,2019
//day 8