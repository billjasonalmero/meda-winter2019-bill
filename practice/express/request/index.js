const express = require("express");
const bodyParser = require("body-parser") //located at node_modules/body parser
const app = express();

const http = require("http").Server(app);

const port = 3000;

http.listen(port);

console.log("The express server is running on port " + port + "!");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use("/", express.static("client/"));

app.post("/updateData", (request, response) => {
  console.log(request.body);
  console.log("We received a request for updateData");
  response.sendStatus(200);
  //200 is the default value (everything is fine)
  // you can try 404;500 (they are error status)
});
//request object that has a detail. ex:what the Browser, what is the ip address
//response  where to send the request 