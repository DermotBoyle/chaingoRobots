const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const server = express();
const port = process.env.PORT || 3001;
const robotRouter = require("./routes/robotRouter");

mongoose.connect("mongodb://localhost/robotschaingo");
mongoose.Promise = global.Promise;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/api", robotRouter);

server.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});

server.listen(port, function() {
  console.log("Listening on port " + port);
});
