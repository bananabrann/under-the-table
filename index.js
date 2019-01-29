const express = require("express");
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      console.log(email, password);
      done("email");
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
    .then(user => {
      if (user) {
        done(null, user);
      }
    })
    .catch(err => {
      done(err);
    });
});

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials");
// app.use(express.static("public"));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

app.use(require("./routes/switchboard"));

app.listen(3000, () => console.log("server is running"));
