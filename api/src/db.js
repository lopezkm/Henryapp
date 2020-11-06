require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const { DATABASE_URL } = process.env;

let connectDb = () => {
  return mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connectDb };
