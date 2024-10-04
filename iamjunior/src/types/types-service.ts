export type Service = {
  _id: string;
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  imageUrl: { imgUrl: string }[];
  favorite: boolean;
};
