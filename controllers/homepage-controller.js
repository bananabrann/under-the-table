const { Game } = require("../models/Game");

module.exports = {
  index: (req, res) => {
    //   res.render("index")
    Game.find({}).limit(2)
      .then(games => {
        res.render("index", { games })
      })
  }
};
