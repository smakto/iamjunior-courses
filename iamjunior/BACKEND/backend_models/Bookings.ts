const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema(
  {
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Booking = mongoose.model("Booking", bookingsSchema);
module.exports = Booking;
