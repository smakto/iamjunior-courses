import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Service } from "../types/types-service";

// All services
const fetchServices = async (): Promise<Service[]> => {
  const response = await axios.get("http://localhost:3000/business");
  return response.data;
};

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });
};

// Single service
const fetchService = async (serviceId: string): Promise<Service> => {
  const response = await axios.get(
    `http://localhost:3000/business/${serviceId}`
  );
  return response.data;
};

export const useService = (serviceId: string) => {
  return useQuery({
    queryKey: ["service"],
    queryFn: () => fetchService(serviceId),
    enabled: !!serviceId,
  });
};
