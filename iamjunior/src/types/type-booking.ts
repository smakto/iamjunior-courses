export type Booking = {
  businessId: string;
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: "New" | "Confirmed" | "Pending" | "Cancelled";
};
