const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ScoreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: [],
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

module.exports = Score = mongoose.model("score", ScoreSchema);
