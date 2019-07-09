const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

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
    { type: "protectobot", serialnumber: "R256384" },
    function(err, r) {
      assert.equal(null, err);
      assert.equal(1, r.insertedCount);

      // Insert multiple documents

      client.close();
    }
  );
});
