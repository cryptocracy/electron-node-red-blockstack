var express = require("express");
var app = express();
var cors = require("cors");
var blockstack = require('blockstack')

var server = app.listen(9876);
app.use(cors());

app.get("/manifest.json", function (req, res) {
  res.sendFile(__dirname + "/manifest.json");
});

app.get("/callback", function (req, res) {
  process.send({ url: 'nodered://auth?authResponse=' + req.query.authResponse });
  // res.redirect('nodered://auth?authResponse=' + req.query.authResponse);
});

// Process to handle quit app
process.on("message", message => {
  server.close();
});