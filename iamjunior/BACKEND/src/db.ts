const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGODB_URI = process.env.PORT || 8080;

async function connectToDb() {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: "iamjunior" });
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Could not connect to the database", error);
    process.exit(1);
  }
}

export { connectToDb, MONGODB_URI };
