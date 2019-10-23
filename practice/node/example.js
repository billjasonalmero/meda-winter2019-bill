var doubleQoutes = "this is a string";
var singleQoutes = "this is a string";
var stringLiterals = `this
is
a string`;

var html =
"<html>" +
"<head>" +
"<style></style>" +
"<head>" +
"<body></body>" +
"</html>";


//string literals
//ALWAYS USE `` when doing string literals
var html2 = "<html><head><style></style></head><body></body></html>"

var html3 = 
`<html>
  <head>
    <style></style>
  </head>
  <body></body>
</html>
`;

//Updates this script to write the text of html3 to a file called sample.html

var fs = require("fs");

var text = fs.writeFileSync("sample.html", html3 ,"utf8");


console.log(text);