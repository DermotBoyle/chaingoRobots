const express = require("express");
const robotRouter = express.Router();
const Robot = require("../models/robot");

//find by name of Robot
robotRouter.get("/robots/name", function(req, res, next) {
  Robot.find({ name: "magnetic field" }).then(function(robots) {
    res.send(robots);
  });
});

//find by weapon
robotRouter.get("/robots/weapons/code", function(req, res, next) {
  Robot.find({ "weapons.weapon": "code" }).then(function(robots) {
    res.send(robots);
  });
});

robotRouter.get("/robots/weapons/laser", function(req, res, next) {
  Robot.find({ "weapons.weapon": "laser" }).then(function(robots) {
    res.send(robots);
  });
});

robotRouter.get("/robots/weapons/acid", function(req, res, next) {
  Robot.find({ "weapons.weapon": "acid" }).then(function(robots) {
    res.send(robots);
  });
});

//find by armour
robotRouter.get("/robots/armour/shield", function(req, res, next) {
  Robot.find({ "armours.armour": "shield" }).then(function(robots) {
    res.send(robots);
  });
});

robotRouter.get("/robots/armour/magneticfield", function(req, res, next) {
  Robot.find({ "armours.armour": "magnetic field" }).then(function(robots) {
    res.send(robots);
  });
});

robotRouter.get("/robots/armour/invisiblefield", function(req, res, next) {
  Robot.find({ "armours.armour": "invisible field" }).then(function(robots) {
    res.send(robots);
  });
});

robotRouter.post("/robots", function(req, res, next) {
  Robot.create(req.body)
    .then(function(robot) {
      res.send(robot);
    })
    .catch(next);
});

robotRouter.put("/robots/:id", function(req, res, next) {
  Robot.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(
    robot
  ) {
    Robot.findOne({ _id: req.params.id }).then(function(robot) {
      res.send(ninja);
    });
  });
});

robotRouter.delete("/robots/:id", function(req, res, next) {
  Robot.findByIdAndRemove({ _id: req.params.id }).then(function(robot) {
    res.send(robot);
  });
});

module.exports = robotRouter;
