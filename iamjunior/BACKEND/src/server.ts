const categoriesRouter = require("../backend_routes/categories-routes");
const businessRouter = require("../backend_routes/business-routes");
const bookingsRouter = require("../backend_routes/bookings-routes");
const userRouter = require("../backend_routes/user-routes");
const authRouter = require("../backend_routes/auth-routes");
import { connectToDb, MONGODB_URI } from "./db";

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/categories", categoriesRouter);
app.use("/business", businessRouter);
app.use("/bookings", bookingsRouter);
app.use("/user", userRouter);
app.use("/auth", bookingsRouter);

connectToDb()
  .then(() => {
    app.listen(MONGODB_URI, () =>
      console.log(`Server is running on ${MONGODB_URI}`)
    );
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
  });
