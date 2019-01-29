const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/under-the-table");
mongoose.Promise = Promise;
module.exports = mongoose;

// express-api solution:

// const mongoose = require("mongoose");
// const mongoUri = "mongodb://localhost/under-the-table";

// mongoose.Promise = Promise;

// mongoose
//   .connect(
//     mongoUri,
//     { useMongoClient: true }
//   )
//   .then(connection => console.log(`Connection established at ${connection}`))
//   .catch(err => console.log("Connection failed!", err));

// module.exports = mongoose;