const { Game, Comment } = require("../models/Game");

module.exports = {

  show: (req, res) => {
      console.log("edit-controller show")
    Game.findOne({ _id: req.params.id }).then(fish => {
      // res.render("games/update")
      res.render("games/update.hbs", { fish });
    });
  },
  update: (req, res) => {
    //   console.log("edit-controller's update has been triggered")
    // res.send("sent from edit-controller update!")
    // res.render("./games/")


    // {$set:{title: "hi"}}

    Game.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, doc) => {
        if (err) {
            console.log("something went wrong")
        }
        console.log("done!")
        console.log(req.body)
    })
    // .then(theGame => {
        // console.log("Routing to ");
        // console.log(theGame)
        // res.json(theGame)
        //this works!


        


    // router.put('/:title', (req, res) => {
    //     Bookmark.findOneAndUpdate({title: req.params.title}, req.body)
    //         .then(bookmark => {
    //             res.json(bookmark)
    //         })
    // })


    // Game.update(
    //   { title: req.body.games.title },
    //   { description: req.body.games.description },
    //   { rating: req.body.games.rating },
    //   { type: req.body.games.type },
    //   //   author: req.user._id,
    //   { compness: req.body.games.compness },
    //   function(err, updateGame) {
    //     if (err) return handleError(err);
    //     res.send(updateGame);
    //   }
    // )
    // .then(newGame => {
        // console.log(newGame)
        // console.log("We are making it t edit-controller.update")
    //   res.redirect(`/games/${newGame._id}`);
    // });
  }
};
