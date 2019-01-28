const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/under-the-table");
mongoose.Promise = Promise;
module.exports = mongoose;