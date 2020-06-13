// Express is a flexible Node.js web application framework that provides a robust set of features for web applications
var express = require("express");

// Handlebars view engine for express
var exphbs = require('express-handlebars');

// Create a new express application
var app = express();

// Parse incoming request bodies (req.body)
var body_parser = require("body-parser");

// Loads environment variables from a .env file into process.env
require('dotenv');
const route = require("./routes/route");

const path = require('path')
// Parses the text as URL encoded data and exposes the resulting object on req. body
app.use(body_parser.urlencoded({
    extended: true
}));

// Returns middleware that only parses json
app.use(body_parser.json())

// Mount middleware for all routes of the app
var hbs = exphbs.create({
  defaultLayout: 'main'
});

app.use("/newuploads", express.static(path.join(__dirname, 'newuploads')));
app.use(route);	
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'lib/public')));

// Define port
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Express running");
});

module.exports= app; // For testing
