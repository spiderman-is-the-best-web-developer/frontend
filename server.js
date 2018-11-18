const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialized Express App
const app = express();

// MongoDB Connection Config
const db = require('./configs/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));

// Body Parser Middleware
app.use(bodyParser.json());

// Listen to a port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running and listening to port ${port}`));
