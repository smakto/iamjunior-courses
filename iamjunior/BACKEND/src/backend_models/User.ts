import mongoose, { Types } from "mongoose";
import bcrypt from "bcryptjs";

interface UserBlueprint extends mongoose.Document {
  _id: Types.ObjectId;
  name: string;
  age: number;
  email: string;
  password: string;
  isCorrectPassword: (password: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserBlueprint>(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre<UserBlueprint>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isCorrectPassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model<UserBlueprint>("User", userSchema);
export default User;
