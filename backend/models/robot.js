const mongoose = require("mongoose");
const connection = require("./connection");

connection.connect();

const Schema = mongoose.Schema;

const RobotSchema = new Schema({
  type: {
    type: String,
    required: [true, "All robots need a type"]
  },
  name: {
    type: String,
    required: [true, "All robots need a name"],
    index: true,
    unique: true
  },

  serialnumber: {
    type: String,
    index: true,
    unique: true
  },
  weapons: {
    weapon: {
      type: String
    },
    serialnumber: {
      type: String,
      index: true,
      unique: true
    }
  },
  armours: {
    armour: { type: String },
    serialnumber: { type: String, unique: true, index: true }
  },

  // are the robots operational or in the junkyard
  condition: {
    type: Boolean,
    default: true
  }
});

const Robot = mongoose.model("robotchaingo", RobotSchema);

module.exports = Robot;
