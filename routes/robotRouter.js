const express = require("express");
const Robot = require("../models/robotModel");

const robotRouter = express.Router();

robotRouter.route("/").get((req, res) => {
  console.log("route");
  Robot.find({}, (err, robots) => {
    console.log("results");
    res.json(robots);
  });
});

module.exports = robotRouter;
