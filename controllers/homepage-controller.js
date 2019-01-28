const { Game } = require("../models/Game");

module.exports = {
  show: (req, res) => {
      
      res.render("index")
    // Game.find({}).then(games => {
    //     console.log(games)
    // })
  }
};
