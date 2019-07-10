const mongoose = require("mongoose");
const connection = require("../connection");

connection.connect();

const Schema = mongoose.Schema;

const RobotSchema = new Schema({
  type: {
    type: String,
    required: [true, "All robots need a type"]
  },
  name: {
    type: String,
    required: [true, "All robots need a name"]
  },

  serialnumber: {
    type: String
  },
  weapons: {
    weapon: {
      type: String
    },
    serialnumber: {
      type: String
    }
  },
  armours: {
    armour: { type: String },
    serialnumber: { type: String }
  },

  // are the robots operational or in the junkyard
  condition: {
    type: Boolean,
    default: true
  }
});

const Robot = mongoose.model("robotchaingo", RobotSchema);

module.exports = Robot;
