
const mongoose = require("./connection");
const data = require("./seedData");
const { Game } = require("../models/Game")
// const Game = require("../models/Game").Game;
// or

Game.collection.insert(data)

