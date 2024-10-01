import express from "express";
import User from "../backend_models/User";
import { generateToken } from "../utilities/password";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  try {
    let newUser = req.body;
    const user = await User.findOne({ email: newUser.email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      newUser = new User(newUser);
      await newUser.save();
      return res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "User not registered", error });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    if (!(await user.isCorrectPassword(password))) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    const token = generateToken(user._id);
    const userWithoutPassword = await User.findById(user._id).select(
      "-password"
    );
    return res
      .status(200)
      .json({ status: "success", token, user: userWithoutPassword });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in.", error });
  }
});

export default authRouter;