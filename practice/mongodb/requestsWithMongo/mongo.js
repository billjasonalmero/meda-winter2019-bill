//Use the mongoose package so we can talk to MongoDB Atlas
const mongoose = require("mongoose");

//The credentials and location to log into the MongoDB account. This should normally be somewhere else that's more secure.
const dbConnect = "mongodb+srv://practiceUser:123456abcdef@cluster0-u833i.mongodb.net/test?retryWrites=true&w=majority";
//commentsProjectUser:123456abcdef

//Additional options when connecting to MongoDB
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

//Acually connect to the MongoDB database. Attach the login credentials string and the options object.
mongoose.connect(dbConnect, options, (error) => {
  if (error) {
    console.log("Something happened connecting to the database! cannot connect", error.reason);

  }else {
    console.log("Sucessfully connected to MongoDB!");
  }
} );

//Store the object "connection" in a variable called db
let db = mongoose.connection //open the communications; it represents the 

//Hookup any MOngoDB errors we receive to the console.
db.on("error", console.error.bind(console, "MOngoDB connection erroe"));

//Tell mongoose what a Promise is by providing the Class to it
mongoose.Promise = global.Promise;

//Finished connecting to MongoDB.

//A Schema for our database.

let Schema = mongoose.Schema;
let practiceSchema = new Schema({
  note: String, 
  old: Boolean,
  timesUpdated: Number
});

let practiceModel  = new mongoose.model("myfirstCollections", practiceSchema);
                                        //collectionName

let newEntry = new practiceModel ({
  note: "This is my second note on the database",
  old: true,
  timesUpdated: 3
})

newEntry.save((error) => {
  if (error) {
    console.log("There was an error at mongoDB Atlas" + error.reason);//.reason gives description on the error via the terminal
  }else {
    console.log("We saved the data");
  }
});