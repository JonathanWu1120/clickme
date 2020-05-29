console.log('Server-side code running');

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// serve files from the public directory
app.use(express.static('public'));

// connect to the db and start the express server

let db;
const url =  "mongodb+srv://jonathanwu1120:v3572pg767i@cluster0-rnb3s.mongodb.net/test?retryWrites=true&w=majority";
const port = process.env.PORT || 3000

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    return console.log(err);
  }
  db = client.db("testDatabase");
  // start the express web server listening on 8080
  app.listen(port, () => {
    console.log("listening on 3000");
  });
});
// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  console.log(db);

  db.collection('clicks').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(201);
  });
});

app.get('/clicks', (req, res) => {

  db.collection('clicks').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});
