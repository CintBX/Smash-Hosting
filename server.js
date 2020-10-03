const mongoose = require('mongoose');
const express = require('express');
const app = express();
const config = require('config');


// Middleware
app.use(express.json());


// DB Config
// You can get all your config/ values with config.get('')
const db = config.get('mongoURI');


// Connect to MongoDB
mongoose
	.connect(process.env.URI || db, { 
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => console.log("Connected to MongoDB.."))
	.catch(err => console.log(err));


// Available Routes
const tournaments = require('./routes/api/tournaments');
const users = require('./routes/api/users');
// Use Routes
app.use('/tournaments', tournaments);
app.use('/users', users);


// Run Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`));