const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middlewares/authMiddleware.js");

userRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = userRouter;
