import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "../types/types-user";

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
