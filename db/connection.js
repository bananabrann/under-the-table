const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/under-the-table");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/3000");
}

mongoose.Promise = Promise;
module.exports = mongoose;
