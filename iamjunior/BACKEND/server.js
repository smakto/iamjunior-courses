const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
const client = new MongoClient(process.env.CONNECTION);

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

///
const categoriesRouter = require("./backend_routes/categories-routes");
app.use("/categories", categoriesRouter);

const businessRouter = require("./backend_routes/business-routes");
app.use("/business", businessRouter);

const bookingsRouter = require("./backend_routes/bookings-routes");
app.use("/bookings", bookingsRouter);
