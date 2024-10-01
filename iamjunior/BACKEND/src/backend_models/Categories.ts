import mongoose from "mongoose";

type CategoryBlueprint = {
  name: string;
  bgcolor: string;
  icon: string;
};

const categorySchema = new mongoose.Schema<CategoryBlueprint>(
  {
    name: { type: String, required: true, unique: true },
    bgcolor: { type: String },
    icon: { type: String, required: true },
  },
  { timestamps: false, versionKey: false }
);

const Category = mongoose.model<CategoryBlueprint>("Category", categorySchema);
export default Category;
