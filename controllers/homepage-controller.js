const { Game } = require("../models/Game");

module.exports = {
  show: (req, res) => {
    //   Game.find({}).populate('title').then(games => {
    //       res.render("layout")
    //   })
    // res.render("layout");

    // Game.find({})
    //   .then(game => {
    //     res.json(game);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    Game.find({}).then(games => {
        res.render("app/index", { games })
    })
  }
};
