const fs = require("fs");// ** 
const express = require("express");
const bodyParser = require("body-parser") //located at node_modules/body parser
const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);

console.log("The express server is running on port " + port + "!");

//Needed to read data sent through POST request
app.use(bodyParser.json()); //bodyParser is a package via node_modules
app.use(bodyParser.urlencoded({extended: false}));

//Custo Code for Express.js after this line

//Routes
app.use("/", express.static("client/"));

app.post("/updateData", (request, response) => {

  let objectFromRequest = request.body;
  console.log(request.body.message);

  //let text = objectFromRequest.message;

  let text = objectFromRequest.message;

  console.log("We received a request for updateData");

  let data = {
    text: "Thank you for your message"
  };

  response.send(data)

  response.sendStatus(200);
  //200 is the default value (everything is fine)
  // you can try 404;500 (they are error status)
});
//request object that has a detail. ex:what the Browser, what is the ip address
//response  where to send the request 