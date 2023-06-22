const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/amazon")
//   .then(() => console.log("Connected to database..."))
//   .catch((error) => console.log("Something went wrong with database", error));
mongoose
  .connect(
    "mongodb+srv://asotica500:elektronsko@elektronsko.gck3k6y.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database..."))
  .catch((error) => console.log("Something went wrong with database", error));
