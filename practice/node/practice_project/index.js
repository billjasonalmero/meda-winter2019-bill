//var lodash = require("lodash");

var _ = require("lodash");


//Practice on using loDash Numbers:
/*
var randomNumber = _.random(60,90);

var jsNumber = Math.floor((Math.random() * 90) + 60)

console.log(randomNumber,jsNumber)
*/

var loDashDivide = _.divide(1000, 6);
console.log(loDashDivide);

var loDashMin = _.min([10, 15, 30, 99]);
console.log(loDashMin);


//Practice on using loDash Strings:
var loDashCamelCase = _.camelCase('hello how are you. the weather is good right now');
console.log(loDashCamelCase);

var loDashCapitalize = _.capitalize('BILL JASON');
console.log(loDashCapitalize);




