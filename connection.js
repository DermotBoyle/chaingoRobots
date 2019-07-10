const mongoose = require("mongoose");

function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        process.env.MONGODB_URI || "mongodb://localhost:27017/robotschaingo",
        {
          useNewUrlParser: true,
          useCreateIndex: true
        }
      )
      .then((res, err) => {
        if (err) return reject(err);
        resolve();
      });
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
