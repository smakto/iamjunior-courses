import type { Request, Response } from "express";
import express from "express";
import User from "../backend_models/User";
import authMiddleware from "../middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default userRouter;
