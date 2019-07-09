const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const robotModel = new Schema({
  type: { type: String },
  name: { type: String },
  serialnumber: { type: String },
  weapons: { weapon: { type: String }, serialnumber: { type: String } },
  armours: { armour: { type: String }, serialnumber: { type: String } }
});
module.exports = mongoose.model("robots", robotModel);
