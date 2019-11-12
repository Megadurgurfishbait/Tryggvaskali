//server.js
const express = require("express");
const path = require("path");
const port = process.env.PORT || 3006;
const bodyParser = require("body-parser");
var compression = require("compression");

// Simple, no?

const cors = require("cors");
const app = express();
app.use(compression());
app.use(cors());
//app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../build"), { maxAge: "360d" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"), {
    maxAge: "360d"
  });
});

app.get(
  [
    "/*"
  ],
  (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"), {
      maxAge: "360d"
    });
  }
);

app.listen(port);

