import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Service } from "../types/types-service";

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
