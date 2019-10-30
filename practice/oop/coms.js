var billLibrary = require("./library.js");

var avengers = require("./library2.js");


//billLibrary --> library.js
var results = billLibrary.mathify(100, 38, 48, 93);
billLibrary.shouldNotBeAccessed();
console.log(results);



//avengers --> library2.js
var results = avengers.letter();
console.log(results);

var sum = avengers.spiderman(5,3);
console.log(sum);


module.export = {
  runAll: runAll
}





//oct 30,2019
//day 8