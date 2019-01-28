const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Game = new Schema({
  title: String,
  description: String,
  rating: String,
  // is an option of three numbers, 1, 2, and 3
  type: String,
  // will have two options for someone to select: 1) Party or 2) Strategy
  compness: String,
  // (^ is competitiveness) will have two options for someone to select: 1) PvP, 2) Co-op or 3) Mix
  comments: [Comment]
});


module.exports = {
  Game: mongoose.model("Game", Game),
  Comment: mongoose.model("Comment", Comment),
  mongoose
};