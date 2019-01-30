const { Game } = require("../models/Game");

module.exports = {
  showOne: (req, res) => {
    Game.findOne({ _id: req.params.id }).then(games => {
      // res.send(oneGame)
      res.render("./games/show-one", { games });
    });
  },
  showAll: (req, res) => {
    Game.find({})
      .then(games => {
        res.render("./games/show-all", { games });
      })
      .catch(err => console.log(err));
  },
  showNewPage: (req, res) => {
    console.log("showNewGameScreen activated");
    res.render("./games/new");
    // res.send("hi!")
  },
  create: (req, res) => {
    // create a thing
    Game.create({
      title: req.body.games.title,
      description: req.body.games.description,
      rating: req.body.games.rating,
      type: req.body.games.type,
      //   author: req.user._id,
      compness: req.body.games.compness
    }).then(newGame => {
      res.redirect(`/games/${newGame._id}`);
    });
    //   .then(newGame => {
    //       res.redirect(`/games/${newGame._id}`)
    //   })
    //   .then(result => {
    //       req.user.games.push(result)
    //       req.user.save(err => {
    //           res.redirect(`/games/${games.id}`)
    //       })
    //   })
  },
  update: (req, res) => {
    // updating the game
  },
  destroy: (req, res) => {
    // removes game
  }
};
