const fs = require("fs");
let data = fs.readFileSync("2018entries.json", "utf8");
data = JSON.parse(data); //convert string into an onject

//Question 1

console.log("What month has the most eviction?");










for(let i =0; i < data.length; i++) {

  let evictionObject = new EvictionNotice();
}









class EvictionNotice {
  constructor(month, zip, ellisAct) {
    this.month = month;
    this.zip = zip;
    this.ellis = ellisAct;
    this.condoConversion = condoConversion;
  }
}

console.log(stringToObject(data.data[1000]));


function stringToObjects(string) { //object(from line 5).array(from the 2018entires.json)
  //Split up the entry string into its individual parts.
  let entryArray = string.split(","); //the object is split by a comma

  let entryDate = entryArray[5].split("/");
  let evictionObject = new EvictionNotice(entryDate[0], entryArray[4],entryArray,[17], entryArray[18]);

  return stringToObjects;
}