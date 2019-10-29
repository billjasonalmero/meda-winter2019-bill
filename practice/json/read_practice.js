
//Import the Package FS
var fs = require("fs");

//variable for future objects
var convertedObject;

//Read file saved.json to work on content.
var JSONText = fs.readFileSync("saved.json","utf8");

//Converting JSON to a javascript Object. Must be JSON format or will break
convertedObject = JSON.parse(JSONText);

console.log(convertedObject);

//Update teh age property
convertedObject.age = 1501;

//Add the legs property
convertedObject.legs = 2;

console.log(convertedObject)

//Convert Javascript Object to JSON text
var stringifiedObject = JSON.stringify(convertedObject);

//This section adds a historical record of the data to a file called "history text"

//Previous way of writing history, but unusable for JS programs
// fs.appendFileSync("history.txt",stringifiedObject + "\n","utf8") // "\n" creates a new line

//Read history file
var historyString = fs.readFileSync("history.json","utf8");

//Convert JSON to JS objects
var historyObject = JSON.parse(historyString); //string --> javascript

//"Pullout" arrays fro history object 
var historyArray =  historyObject.objectsArray;
var timestampArray = historyObject.timestamp;

//Add new information to the arrays
historyArray.push(convertedObject);
timestampArray.push(new Date().toLocaleString());

//Update arrays in HistoryObject with the modified arrays
historyObject.objectsArray = historyArray;
historyObject.timestamp = timestampArray;

//Convert Object to JSON
var newUpdatedJSON = JSON.stringify(historyObject);

//overwrite new JSON on history.json
fs.writeFileSync("history.json", newUpdatedJSON,"utf8");

//End of History Record Save



//Save the JSON file to the same file, replacing old content
fs.writeFileSync("saved.json", stringifiedObject,"utf8");






//oct 29, 2019
//WEEK 2 day 7