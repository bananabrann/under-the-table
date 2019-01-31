const { Game } = require("../models/Game");

module.exports = {
  index: (req, res) => {

    // ATTEMPTING TO DSPLAY NEWEST ADDED GAME WITHOUT ADDING TIME TRACKER TO GAMES
    //   res.render("index")
    // function printReverse() {
    //   let gameArray = Game.find({})
      
    //       console.log(gameArray[0]);


        // res.render("index", {})

      //     for (i = 2; i > 0; i--) {
      //     }
      // }

      // for (i = 2; i > 0; i--) {
      //   Game.findOne({}).limit(1);
      // }
    // }
    

        

      // WORKING:
      Game.find({})
        .limit(2)
        .then(games => {
          res.render("index", { games });
        });
    
  }
};
