const port = process.env.PORT || 8080;
const app = express();
const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(process.env.CONNECTION);

app.use(express.json());
app.use(cors());
require("dotenv").config();

app.listen(port, () => console.log(`Server is running on port ${port}`));

let conn;
let db;

async function connect() {
  try {
    conn = await client.connect();
    db = conn.db("iamjunior");
  } catch (e) {
    console.error(e);
  }
}

connect();
