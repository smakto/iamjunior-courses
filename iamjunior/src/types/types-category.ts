export type Category = {
  name: string;
  bgcolor: string;
  icon: string;
};

export type NewCategory = Omit<Category, "name">;
