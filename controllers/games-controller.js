const { Game, Comment } = require("../models/Game");

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
  },

  addComment: (req, res) => {
    let referenceGame = {};

    Game.findOne({ _id: req.params.id })
      .then(foundGame => {
        referenceGame = foundGame;
      })
      .then(() => {
        Comment.create({
          content: req.body.content
        }).then(x => {
          console.log(x);
          let newComment = x;
          referenceGame.comments.push(newComment);
          referenceGame.save(err => {
            res.redirect(`/games/${referenceGame._id}`);
          });
        });
      });
  },

  addCommentT: (req, res) => {

  },
  update: (req, res) => {
        let { content } = req.body;
        Game.findOne({ _id: req.params.id }).then(foundGame => {
          foundGame.comments.push({
            content,
            author: req.user._id
          });
          foundGame.save(err => {
            res.redirect(`/games/${foundGame._id}`);
          });
        });
  },

  destroy: (req, res) => {
    // removes game
  }
};
