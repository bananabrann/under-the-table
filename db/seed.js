const mongoose = require("./connection");
const data = require("./seedData");
const Game = require("../models/Game").Game;
// or
// const {Game } = require("../models/Game")

Game.collection.insert(data)
// .then(newGames => {
//   console.log(newGames);
// });

// Game.remove({}).then(() => {
// });
