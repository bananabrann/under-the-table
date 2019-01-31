const { Game, Comment } = require("../models/Game");

module.exports = {
  show: (req, res) => {
    console.log("edit-controller show");
    Game.findOne({ _id: req.params.id }).then(fish => {
      // res.render("games/update")
      res.render("games/update.hbs", { fish });
    });
  },
  update: (req, res) => {
    Game.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("something went wrong");
        }
        console.log("done!");
        console.log(req.body);
      }
    ).then((result) => {
        res.redirect(`/games/${result._id}`)
    });
  }
};
