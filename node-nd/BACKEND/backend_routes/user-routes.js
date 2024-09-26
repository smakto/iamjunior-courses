const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middlewares/authMiddleware.js");

userRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = userRouter;
