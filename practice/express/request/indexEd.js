const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);

console.log("Express server running on port " + port);

// Needed to read data sent through POST request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Custom Code for Express.js after this line.

// Routes
app.use("/", express.static("client/"));

app.post("/updateData", (request, response) => {

    let objectFromRequest = request.body;
    
    console.log(objectFromRequest);

    // let text = objectFromRequest.message;
    // console.log("We recieved a request for updateData: " + text);

    let filename = "commentHistory.json";


    // WRITE COMMENTS
    if (fs.existsSync(filename)) {

        let comments = fs.readFileSync(filename, "utf8");

        comments = JSON.parse(comments);

        comments.commentsArray.push(objectFromRequest);

        comments = JSON.stringify(comments);

        fs.writeFileSync(filename, comments, "utf8");
        console.log("New Comment Saved to Hard Drive!");

    } else {
        let comments = {commentsArray: [objectFromRequest]};

        comments = JSON.stringify(comments);

        fs.writeFileSync(filename, comments, "utf8");
        console.log("Note: No Save File Detected, creating New File. New Comment Saved to Hard Drive!");
    }

    // {commentsArray: []}


    // If you don't want to send any data back, you can use .sendStatus(). You can only use sendStatus or send once to "fulfill" front-end request.
    //response.sendStatus(200);

    let data = {
        text: "Thank you for your message"
    }

    response.send(data);
});
