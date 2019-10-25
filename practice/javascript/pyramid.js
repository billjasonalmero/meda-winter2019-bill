//oct 25, 2019
// Pryramid challenge

// console.log("*")
// console.log("**")
// console.log("***")

//can use the slice method
//can use array method 

var stars = "";

/*
*/
for (var counter = 0; counter < 10; counter = counter +1) {
  stars = stars + "*";
  console.log(stars);
}


//Array Method

var starsArray = stars.split(""); // the " "  will split on every spaces

//Array Method top pyramid
/* 
for (var counter = 0; counter < 10; counter = counter + 1) {
  starsArray.pop();
  console.log(starsArray.join("")); //join() joining 
  
}


//Array Method bottom pyramid
for (var counter = 0; counter < 10; counter = counter + 1) {
  starsArray.pop();
  starsArray.pop();
  starsArray.pop();
  console.log(starsArray.join("")); //join() joining 
  
}
*/



//Slice Method bottom pyramid
var newString =  stars.slice(0,9);
console.log("this is the slice version " + newString);

var newString =  stars.slice(0,8);
console.log("this is the slice version " + newString);

var newString =  stars.slice(0,7);
console.log("this is the slice version " + newString);

for ( var counter = 9; counter > 0; counter = counter -1) {
  var newString = stars.slice(0, counter);
  console.log(newString);

}