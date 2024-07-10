//creating schemas for our project

//schema of our data
/*
  todo = {
      titls : string,
      description : string,
      completed : boolean,
  }
*/

const mongoose = require("mongoose");

//mongoDB url handy
//mongodb+srv://Dadu:DaduMDB%402003@cluster0.mzwtfbm.mongodb.net/todos

//put the above url in .env file not in the github repo

//connection to the db
moongose.connect(
  "mongodb+srv://Dadu:DaduMDB%402003@cluster0.mzwtfbm.mongodb.net/todos"
);

//create Schema

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: boolean,
});

//last thing creation of the model

const todo = moongose.model("todos", todoSchema);

module.exports = {
  todo: todo,
};
