const express = require("express");
const app = express();
const mongoose = require('mongoose')
const parser = require('body-parser')
const cors = require('cors')

// const router = express.Router();

const switchboardRouter = require('./routes/switchboard')

app.use(cors())
// app.use(mongoose)
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

// app.use('./')

app.use(switchboardRouter)

// app.get("/", (req, res) => {
//   res.send("We made it!");
// });


app.listen(3000, () => {
  console.log("Live on port 3000...");
});

// module.exports = router