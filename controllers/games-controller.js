const { Game } = require("../models/Game");

module.exports = {
  showOne: (req, res) => {
    Game.findOne({ _id: req.params.id }).then(games => {
      // res.send(oneGame)
      res.render("./games/show-one", { games });
    });
  },
  showAll: (req, res) => {
    Game.find({})
      .then(games => {
        res.render("./games/show-all", { games });
      })
      .catch(err => console.log(err));
  },
  showNewPage: (req, res) => {
    console.log("showNewGameScreen activated");
    res.render("./games/new")
    // res.send("hi!")
  },
  create: (req, res) => {
      // create a thing
  },
  update: (req, res) => {
    // updating the game
  },
  destroy: (req, res) => {
    // removes game
  }
};
