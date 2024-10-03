import mongoose from "mongoose";

type BusinessBlueprint = {
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  imageUrl: string[];
  favorite: boolean;
};

const businessSchema = new mongoose.Schema<BusinessBlueprint>(
  {
    name: { type: String, required: true, unique: true },
    about: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    imageUrl: [{ imgUrl: { type: String } }],
    favorite: { type: Boolean, default: false },
  },
  { timestamps: false, versionKey: false }
);

const Business = mongoose.model<BusinessBlueprint>("Business", businessSchema);
export default Business;
