const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const server = express();
const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 3001;
const robotRouter = require("./routes/robotRouter");

mongoose.connect("mongodb://localhost/robotschaingo");
mongoose.Promise = global.Promise;

server.use(bodyParser.json());
server.use("/api", robotRouter);

// Connection URL
const url = process.env.PORT || "mongodb://localhost:27017/robotschaingo";

// Database Name
const dbName = "robotschaingo";

// Create a new MongoClient
const client = new MongoClient(url);

server.get("/api", function(req, res) {
  console.log("GET request");
  res.send({ name: "derek" });
});

server.listen(port, function() {
  console.log("Listening on port " + port);
});
