import type { Request, Response } from "express";
import express from "express";
const categoriesRouter = express.Router();
import Category from "../backend_models/Categories";
import authMiddleware from "../middlewares/authMiddleware";

categoriesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

categoriesRouter.post(
  "/",
  authMiddleware,
  async (req: Request, res: Response) => {
    const newCategory = new Category(req.body);

    try {
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(500).send({ message: "Failed to add categoery", error });
    }
  }
);

export default categoriesRouter;
