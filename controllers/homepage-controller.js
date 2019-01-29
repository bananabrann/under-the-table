const { Game } = require("../models/Game");

module.exports = {
  index: (req, res) => {
      res.render("index")
  }
};
