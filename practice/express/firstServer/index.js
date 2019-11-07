//Use th express package
const express = require("express");


//Run the Express server
const app = express();

//Feed Express server to the HTTP package
const http = require("http").Server(app);
//http request: messages and signals

const port = 8080; //represents the webdev

//3000 default node port

//Tell HTTP to which port to listen to
//.listen what port to listens to given port...
http.listen(port);

console.log("The express server is running on port " + port + "!")

//Express Routes
app.use("/client", express.static("./web_files"));
//app.use("/profile", express.static("user/") );

app.use("/specialfile", express.static("../../../../Git Repositories/meda/pracrice"))

app.use("/myproject", express.static("../../../../meda-fall2019-bill/projects/portfolio/websitebill"))

//https://localhost:8080/client --> Gets sent to  --> web_files folder