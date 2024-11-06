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

userRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const userToUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!userToUpdate) {
      return res.status(404).send("User does not exist");
    }
    return res.status(200).json(userToUpdate);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update user", error });
  }
});

userRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const userToDelete = await User.findByIdAndDelete(req.params.id);
    if (!userToDelete) {
      return res.status(404).send("User does not exist");
    } else return res.status(200).json(userToDelete);
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete user.", error });
  }
});

export default userRouter;
