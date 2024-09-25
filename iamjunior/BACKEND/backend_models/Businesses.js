const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    about: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    images: [{ url: { type: String } }],
  },
  { timestamps: false, versionKey: false }
);

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;
