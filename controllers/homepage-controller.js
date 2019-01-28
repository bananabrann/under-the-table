const { Game } = require("../models/Game");

module.exports = {
  show: (req, res) => {
    //   Game.find({}).populate('title').then(games => {
    //       res.render("layout")
    //   })
    res.render("layout");
  }
};
