import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Booking } from "@/types/type-booking";

const fetchBookings = async (): Promise<Booking[]> => {
  const response = await axios.get("http://localhost:3000/bookings");
  return response.data;
};

export const useBookings = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });
};
