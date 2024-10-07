import categoriesRouter from "./backend_routes/categories-routes";
import businessRouter from "./backend_routes/business-routes";
import bookingsRouter from "./backend_routes/bookings-routes";
import userRouter from "./backend_routes/user-routes";
import authRouter from "./backend_routes/auth-routes";
import { connectToDb, PORT } from "./db";

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/categories", categoriesRouter);
app.use("/business", businessRouter);
app.use("/bookings", bookingsRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
  });
