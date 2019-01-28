const { Game } = require("../models/Game");

module.exports = {
  show: (req, res) => {
    res.render('./games/new')
  },
  create: (req, res) => {
    // res.render("./games/new");
    res.send(req.body)
  },
  update: (req,res) => {
      // updating the game
  },
  destroy: (req,res) => {
      // removes game
  }
};