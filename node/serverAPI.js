// Get our dependencies
var express = require('express');
var app = express();
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

//Testing endpoint
app.get('/', function (req, res) {
  var response = [{ response: 'hello' }, { code: '200' }]
  res.json(response);
})

function read(connection, dataBase, table, callback) {
  var query = 'SELECT * FROM ' + dataBase + '.' + table + ';';
  connection.query(query, function (err, result) {
      if (err) throw err;
      callback(result);
  });
}

// Implement the movies API endpoint
app.get('/movies', function (req, res) {
  read(connection, "movie_db", "moviereview",(movies) => {
    res.json(movies);
  });
})

// Implement the reviewers API endpoint
app.get('/reviewers', function (req, res) {
  read(connection, "movie_db", "reviewer",(authors) => {
    res.json(authors);
  });
})

// Implement the publications API endpoint
app.get('/publications', function (req, res) {
  read(connection, "movie_db", "publication",(authors) => {
    res.json(authors);
  });
})

// Implement the pending reviews API endpoint
app.get('/pending', function (req, res) {
  var pending = [
    { title: 'Superman: Homecoming', release: '2017', score: 10, reviewer: 'Chris Harris', publication: 'International Movie Critic' },
    { title: 'Wonder Woman', release: '2017', score: 8, reviewer: 'Martin Thomas', publication: 'TheOne' },
    { title: 'Doctor Strange', release: '2016', score: 7, reviewer: 'Anthony Miller', publication: 'ComicBookHero.com' }
  ]
  res.json(pending);
})

// Launch our API Server and have it listen on port 3000.
app.listen(process.env.PORT_API, () => {
  console.log("Servidor en puerto: " + process.env.PORT_API);
});

module.exports = app;
