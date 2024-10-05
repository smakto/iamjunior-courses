import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const expiresIn = "90d";

export function generateToken(payload: Types.ObjectId) {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET!, { expiresIn });
  return token;
}
