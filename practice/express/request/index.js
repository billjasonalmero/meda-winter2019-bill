//Include into our code, the F5 package (builtin)
const fs = require("fs");
//Includes into our code, Express.js, provided by NPM
const express = require("express");
//Includes into our code Body Parser, comes with Express.js
const bodyParser = require("body-parser") //located at node_modules/body parser
//Create an Express.js server object
const app = express();
//Includes the HTTP package (builtin), and we attach our Express.js server object to the HTTP object
const http = require("http").Server(app);
//We create a variable that will hold the port number we want to use.
const port = 3000;
//We pass the port variable to the listen function for the HTTP server.
http.listen(port);

//Signifyingthe Developer that Express.js is now running 
console.log("The express server is running on port " + port + "!");

//Needed to read data sent through POST request
app.use(bodyParser.json()); //bodyParser is a package via node_modules
//Gives body Parse specific options to run off of.
app.use(bodyParser.urlencoded({extended: false}));

//Custom Code for Express.js after this line

//variable to make sure the filenameis the same every time. 
let filename = "commentHistory.json";

//Routes
//First Argument is the route name, second argument is directory to load when someone requests the route name.
app.use("/", express.static("client/"));
        //route path           //directory path
//an HTTP Post Handler called submitComment.
//First argument is HTTP route name, second segment is the callback function. The callback function will run every time someone requests the /submitComment Post handler.
//Callback function parameters: request holds the object that was sent to us through the Internet, the response onject holds a reference of where to send the response to (like IP address)
app.post("/submitComment", (request, response) => {

  //Rename the data sent to us (located in  request.body) to something simpler like objectFromRequest.
  let objectFromRequest = request.body;

  console.log(objectFromRequest);

  //let text = objectFromRequest.message;
  //console.log("We received a request for submitComment: " + text);



  //If the file exist do...
  if(fs.existsSync(filename)) {

    //...read the file and store the contents in the variable comments...
    let comments = fs.readFileSync(filename, "utf8");
    //..parse the JSON and reuse the same comments variable...
    comments = JSON.parse(comments);
    //...add the new objectFromRequest object to the array inside of the comments object...
    comments.commentsArray.push(objectFromRequest);
    //...then convert comments back into a string as JSON...
    comments = JSON.stringify(comments);
    //...finally save the JSON string to a file.
    fs.writeFileSync(filename, comments, "utf8");
    console.log("New Comment Saved to Hard Drive!");
  }else {
    //If the file doesn't exist...
    //...We rebuild the object (which includes the comment we just recieve) to save as JSON
    let comments = {
      commentsArray: [objectFromRequest]
    };
    //...Convert it actual JSOn string...
    comments = JSON.stringify(comments);
    //...Finally save JSON string to new File. 
    fs.writeFileSync(filename, comments, "utf8");
    console.log("Note: No Save File Detected, creating New File. New Comment Saved to Hard Drive!");
  }

  //200 is the default value (everything is fine)
  // you can try 404;500 (they are error status)
  response.sendStatus(200);
});

//*** request object that has a detail. ex:what the Browser, what is the ip address ***
//*** response  where to send the request ***

//A second  HTTP Post Handler called /loadComments
app.post("/loadComments", (request,response) => {

  //Check if the JSON file exist...
  if (fs.existsSync(filename) {

    //...if it exist then read it...
    let comments = fs.readFileSync(filename, "utf8");

    //...and convert to a JavaScript Object
    comments = JSON.parse(comments);

    //...finally send it to the computer.
    response.send(comments);
  }else{
    //...If it doesn't exist, then send an error 500 to the requester
    response.sendStatus(500); //displays to the user that there was an issue to the server (500 is an error status)
  }

})

