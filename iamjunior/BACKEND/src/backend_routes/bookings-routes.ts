import type { Request, Response } from "express";
import express from "express";
const bookingsRouter = express.Router();
import Booking from "../backend_models/Bookings";
import authMiddleware from "../middlewares/authMiddleware";

bookingsRouter.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).send(error);
  }
});

bookingsRouter.get(
  "/user/:email",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const booking = await Booking.find({ userEmail: req.params.email });
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

bookingsRouter.post("/", async (req: Request, res: Response) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).send({ message: "Failed to post booking.", error });
  }
});

bookingsRouter.delete(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
      res.status(200).send("Booking deleted");
    } catch (error) {
      res.status(500).send({ message: "Failed to delete booking.", error });
    }
  }
);

bookingsRouter.get(
  "/business/:businessId/date/:date",
  async (req: Request, res: Response) => {
    try {
      const businessBookings = await Booking.find({
        businessId: req.params.businessId,
        date: req.params.date,
      });
      res.status(200).json(businessBookings);
    } catch (error) {
      res.status(500).send({ message: "Server error.", error });
    }
  }
);

export default bookingsRouter;
