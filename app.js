const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = process.env.PORT || 5656;
const robotRouter = require("./routes/robotRouter");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/api", robotRouter);

server.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});

server.listen(port, function() {
  console.log("Listening on port " + port);
});

module.exports = server;
