const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const scores = require("./routes/api/scores");

const app = express();
const PORT = process.env.PORT || 5000;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use("/api/scores", scores);

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/scores")
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
