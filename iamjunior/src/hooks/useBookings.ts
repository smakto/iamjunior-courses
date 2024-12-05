import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Booking } from "@/types/type-booking";

// fetch all bookings
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

//fetch all specific user bookings
const fetchBusinessBookings = async (
  businessId: string
): Promise<Booking[]> => {
  const response = await axios.get(
    `http://localhost:3000/bookings/business/${businessId}`
  );
  return response.data;
};

export const useBusinessBookings = (businessId: string) => {
  return useQuery({
    queryKey: ["businessBookings"],
    queryFn: () => fetchBusinessBookings(businessId),
    enabled: !!businessId,
  });
};

// create booking
const createBooking = async (booking: Booking): Promise<Booking> => {
  const response = await axios.post("http://localhost:3000/bookings", booking);
  return response.data;
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBooking,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookings"] }),
  });
};
