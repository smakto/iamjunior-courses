const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    bgcolor: { type: String },
    icon: { type: String, required: true },
  },
  { timestamps: false, versionKey: false }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
