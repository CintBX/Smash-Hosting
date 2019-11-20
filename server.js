const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// DataBase config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to MongoDB.."))
	.catch(err => console.log(err));

// Run Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`));