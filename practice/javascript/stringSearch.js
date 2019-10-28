characterSearch("This is another string example", "i" );

characterSearch("This is yet another string!", "o")



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











/*
for (var i = 0; i < text.length; i++) {
  
  if (text.charAt(i) == "e") {
    console.log("We found an e at index " + i);
  }
}
 */