const { Game } = require("../models/Game");

module.exports = {
  show: (req, res) => {
    res.render("homepage");
  }
};
