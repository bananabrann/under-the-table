const { Game } = require("../models/Game");

module.exports = {
  showOne: (req, res) => {
      Game.find({ "_id": req.params.id }).then(games => {
          res.render("./games/show-one", { games })
      })
    // res.render("./games/show-one");
  },
  showAll: (req, res) => {
    Game.find({}).then(games => {
      res.render("./games/show-all", { games });
    });
  },
  show: (req, res) => {
    res.render("./games/new");
  },
  create: (req, res) => {
    // res.render("./games/new");

    // express-api-lab
    Game.create({
      name: req.body.name,
      url: req.body.url
    });
    res.redirect("/");
  },
  update: (req, res) => {
    // updating the game
  },
  destroy: (req, res) => {
    // removes game
  }
};
