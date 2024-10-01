import mongoose, { Types } from "mongoose";

type BookingBlueprint = {
  businessId: Types.ObjectId;
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: "New" | "Confirmed" | "Pending" | "Cancelled";
};

const bookingsSchema = new mongoose.Schema<BookingBlueprint>(
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

const Booking = mongoose.model<BookingBlueprint>("Booking", bookingsSchema);
export default Booking;
