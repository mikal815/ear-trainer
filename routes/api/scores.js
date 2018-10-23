const express = require("express");
const router = express.Router();

// Item Model
const Score = require("../../models/Score");

// @route  GET api/scores
// @desc   Get All scores
// @access Private
router.get("/", (req, res) => {
  Score.find()
    .sort({ score: -1 })
    .then(scores => res.json(scores));
});

// @route  POST api/scores
// @desc   Create An Score
// @access Public
router.post("/", (req, res) => {
  const newScore = new Score({
    name: req.body.name,
    score: req.body.score,
    rank: req.body.rank
  });

  newScore.save().then(score => res.json(score));
});

// @route  DELETE api/scores
// @desc   Delete an Score
// @access Public
router.delete("/:id", (req, res) => {
  Score.findById(req.params.id)
    .then(score => score.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
