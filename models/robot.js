const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RobotSchema = new Schema({
  type: {
    type: String,
    required: [true, "All robots need a unique name"]
  },
  name: {
    type: String
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

  condition: {
    type: Boolean,
    default: true
  }
});

const Robot = mongoose.model("robotchaingo", RobotSchema);

module.exports = Robot;
