const express = require("express");
const { connectToDb, PORT } = require("./db");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
  });

///
const categoriesRouter = require("./backend_routes/categories-routes");
app.use("/categories", categoriesRouter);

const businessRouter = require("./backend_routes/business-routes");
app.use("/business", businessRouter);

const bookingsRouter = require("./backend_routes/bookings-routes");
app.use("/bookings", bookingsRouter);

const userRouter = require("./backend_routes/user-routes");
app.use("/user", userRouter);

const authRouter = require("./backend_routes/auth-routes");
app.use("/auth", bookingsRouter);
