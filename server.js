const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const scores = require("./routes/api/scores");
const path = require('path')


const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./models') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');


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


app.use('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});



// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/scores")
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise






// Route requires
const user = require('./routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user)






// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);


module.exports = mongoose.connection









