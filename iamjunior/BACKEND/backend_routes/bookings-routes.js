const express = require("express");
const bookingsRouter = express.Router();

const bookings = [];

bookingsRouter.get("/", (req, res) => {
  try {
    res.json(bookings);
  } catch (error) {
    res.status(500).send(error);
  }
});

bookingsRouter.get("/user/:email", (req, res) => {
  const userBookings = bookings.filter((b) => b.userEmail === req.params.email);
  try {
    res.json(userBookings);
  } catch (error) {
    res.status(500).send(error);
  }
});

bookingsRouter.post("/", (req, res) => {
  const { businessId, date, time, userEmail, userName } = req.body;
  const newBooking = {
    id: bookings.length + 1,
    businessId,
    date,
    time,
    userEmail,
    userName,
    status: "Booked",
  };

  try {
    bookings.push(newBooking);
    res.status(201).json(newBooking);
  } catch {
    res.status(500).send(error);
  }
});

bookingsRouter.delete("/:id", (req, res) => {
  const bookingById = bookings.find((b) => b.id === parseInt(req.params.id));
  let index = bookings.indexOf(bookingById);

  if (bookingById) {
    try {
      bookings.splice(index, 1);
      res.status(201).send("Booking deleted");
    } catch {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("Booking ID not found.");
  }
});

bookingsRouter.get("/business/:businessId/date/:date", (req, res) => {
  const businessBookings = bookings.filter(
    (b) =>
      b.businessId === parseInt(req.params.businessId) &&
      b.date === String(req.params.date)
  );
  try {
    res.json(businessBookings);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = bookingsRouter;
