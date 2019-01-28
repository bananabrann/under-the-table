const { Game } = require("../models/Game");

module.exports = {
  create: (req, res) => {
    res.render("./games/new");
  },
  show: (req, res) => {
      res.render("./games/solo")
  }
};
