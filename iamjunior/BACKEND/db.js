const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8080;

async function connectToDb() {
  try {
    await mongoose.connect(process.env.CONNECTION, { dbName: "iamjunior" });
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Could not connect to the database", error);
    process.exit(1);
  }
}

module.exports = { connectToDb, PORT };
