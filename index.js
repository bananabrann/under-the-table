const express = require("express");
const app = express();
const mongoose = require("mongoose");
const parser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.use(require("./routes/switchboard"));

app.listen(3000, () => {
  console.log("Live on port 3000!");
});

// module.exports = router
