import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ?? 8080;

async function connectToDb() {
  try {
    const url = process.env.CONNECTION;

    if (!url) {
      throw new Error(
        "MongoDB connection URL is not set in environment variables."
      );
    }

    await mongoose.connect(url, { dbName: "iamjunior" });
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Could not connect to the database", error);
    process.exit(1);
  }
}

export { connectToDb, PORT };
