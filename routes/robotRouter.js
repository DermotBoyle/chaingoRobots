const express = require("express");
const robotRouter = express.Router();
const Robot = require("../models/robot");

robotRouter.get("/robots", function(req, res) {
  res.send({ type: "GET" });
});

robotRouter.post("/robots", function(req, res) {
  Robot.create(req.body).then(function(robot) {
    res.send(robot);
  });
});

robotRouter.put("/robots/:name", function(req, res) {
  res.send({ type: "PUT" });
});

robotRouter.delete("/robots/:name", function(req, res) {
  res.send({ type: "DELETE" });
});

module.exports = robotRouter;
