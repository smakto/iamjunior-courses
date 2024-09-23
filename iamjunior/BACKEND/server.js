const express = require("express");
const { connectToDb, PORT } = require("./db");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
});

///
const categoriesRouter = require("./backend_routes/categories-routes");
app.use("/categories", categoriesRouter);

const businessRouter = require("./backend_routes/business-routes");
app.use("/business", businessRouter);

const bookingsRouter = require("./backend_routes/bookings-routes");
app.use("/bookings", bookingsRouter);
