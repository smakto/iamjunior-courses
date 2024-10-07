import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Category } from "../types/types-category";

const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get("http://localhost:3000/categories");
  return response.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
