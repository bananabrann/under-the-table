const express = require("express");
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const session = require("express-session");
const methodOverride = require("method-override");
const app = express();
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const User = require("./models/User");

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(require("./routes/switchboard"));


// GA solution: 

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")}`);
});




// Stack Overflow popular solution:

// const host = '0.0.0.0';
// const port = process.env.PORT || 3000;
// app.listen(port, host, function() {
//     console.log("Server started.......");
//   });



// from JSON:
// "start": "node index.js"
