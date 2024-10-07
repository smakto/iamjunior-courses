import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { User } from "../types/types-user";

const createUser = async (user: User): Promise<User> => {
  const response = await axios.post(
    "http://localhost:3000/auth/register",
    user
  );
  return response.data;
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};
