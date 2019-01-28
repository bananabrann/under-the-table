const { Game } = require("../models/Game");

module.exports = {
  show: (req, res) => {
      Game.findOne({ _id: req.params.id }).populate("title game.title").exec(function(err, g) {
          res.render("game/show", g)
      })



      
    //   res.send("hello")

      
    //   .populate("game").then(newGame => {
    //       newGame.comments = comments;
    //       res.render("game/solo", newGame)
    //       res.render("game/solo", newGame.comments)
    //   })
    // res.render("./games/solo");
  },
  create: (req, res) => {
    res.render("./games/new");
  }
};
