const express = require("express");
const server = express();
const Mongoose = require("mongoose");
//const assert = require("assert");
const port = process.env.PORT || 3001;
//const robotRouter = require("./routes/robotRouter");

//server.use("/api/robots", robotRouter);

// Connection URL
//const url = process.env.PORT || "mongodb://localhost:27017/chaingorobots";
const url = "mongodb://localhost:27017/robotschaingo";

Mongoose.connect(url);

const RobotModel = Mongoose.model("robot", {
  type: String,
  name: String,
  serialnumber: String
});

(async () => {
  console.log("in");

  // this should be in post
  var robot = new RobotModel({
    type: "whatever",
    name: "whaeva",
    serialnumber: "whaeva"
  });
  await robot.save();

  // this should be in get
  let result = await RobotModel.find().exec();
  console.log("results:");
  console.log(result);
})();

//server.post("/")

server.get("/", async (req, res) => {
  let result = await RobotModel.find().exec();
  console.log("results:");
  console.log(result);
  res.json(result);
});

/*

const Schema = mongoose.Schema;
const robotModel = new Schema({
  type: { type: String },
  name: { type: String },
  serialnumber: { type: String },
  weapons: { weapon: { type: String }, serialnumber: { type: String } },
  armours: { armour: { type: String }, serialnumber: { type: String } }
});



// Database Name
const dbName = "robotschaingo";

// Create a new MongoClient
const client = new MongoClient(url);

Connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  db.collection("robotchaingo").insertOne(
    {
      type: "attackrobot",
      serialnumber: "R454545",
      name: "sirkillabot",
      weapons: { weapon: "lightsaber", serialnumber: "W636375" },
      armours: { armour: "the force", serialnumber: "A523406" }
    },
    function(err, r) {
      assert.equal(null, err);
      assert.equal(1, r.insertedCount);

      Insert multiple documents

      client.close();
    }
  );
});
*/

server.listen(port, function() {
  console.log("Listening on port " + port);
});

/*
const express = require("express");
const server = express();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const port = process.env.PORT || 3001;
const robotRouter = require("./routes/robotRouter");

server.use("/api/robots", robotRouter);

// Connection URL
const url = process.env.PORT || "mongodb://localhost:27017/chaingorobots";

// Database Name
const dbName = "robotschaingo";

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  db.collection("robotchaingo").insertOne(
    {
      type: "attackrobot",
      serialnumber: "R454545",
      name: "sirkillabot",
      weapons: { weapon: "lightsaber", serialnumber: "W636375" },
      armours: { armour: "the force", serialnumber: "A523406" }
    },
    function(err, r) {
      assert.equal(null, err);
      assert.equal(1, r.insertedCount);

      // Insert multiple documents

      client.close();
    }
  );
});

server.listen(port, function() {
  console.log("Listening on port " + port);
});
*/
