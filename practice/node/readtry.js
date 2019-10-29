var fs = require("fs");

//try to run the following code
try {
  var fileText = fs.readFileSync("ex.txt, utf8");

//...if there is an error, then run the following
}catch (e) {
  console.log("we tried to read ex.txt but it seems it dosent exist. We have created it for you");

  fs.writeFileSync("ex.txt", "", "utf8")

//whether there was an error or not, run this 
}finally {
  fs.appendFileSync("ex.txt", "This is a string. \n","utf8");
}


//because our code was in a try catch, it will not stop the program, and will complete
console.log("the prgram has finished");

















//my failed excercise 
// try{
//   someFucntion();
//   console.log("Append Text!");
//   fs.appendFileSync("ex.txt", "Text created" ,"utf8");

// } catch (error) {
//   console.log("Error Program!");
//   fs.writeFileSync("ex.txt", "write file" ,"utf8");

// }


// console.log("your program has sucessfully completed");

