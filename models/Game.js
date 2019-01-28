const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const GameSchema = new Schema({
  title: String,
  description: String,
  rating: String,
  // is an option of three numbers, 1, 2, and 3
  type: String,
  // will have two options for someone to select: 1) Party or 2) Strategy
  compness: String,
  // (^ is competitiveness) will have two options for someone to select: 1) PvP, 2) Co-op or 3) Mix
  comments: [CommentSchema]
});


module.exports = {
  Game: mongoose.model("Game", GameSchema),
  Comment: mongoose.model("Comment", CommentSchema),
  mongoose
};