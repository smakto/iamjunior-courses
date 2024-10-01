import type { Request, Response } from "express";
import express from "express";
const businessRouter = express.Router();
import Business from "../backend_models/Businesses";
import authMiddleware from "../middlewares/authMiddleware";

businessRouter.get("/", async (req: Request, res: Response) => {
  try {
    const business = await Business.find();
    res.status(200).json(business);
  } catch (error) {
    res.status(500).send(error);
  }
});

businessRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const business = await Business.findById(req.params.id);
    res.status(200).json(business);
  } catch (error) {
    res.status(500).send(error);
  }
});

businessRouter.get(
  "/category/:category",
  async (req: Request, res: Response) => {
    try {
      const business = await Business.find({ category: req.params.category });
      res.status(200).json(business);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

businessRouter.post(
  "/",
  authMiddleware,
  async (req: Request, res: Response) => {
    const newBusiness = new Business(req.body);
    try {
      const savedBusiness = await newBusiness.save();
      res.status(201).json(savedBusiness);
    } catch (error) {
      res.status(500).send({ message: "Creating new business failed.", error });
    }
  }
);

businessRouter.put(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const updatedBusiness = await Business.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedBusiness);
    } catch (error) {
      res.status(500).send({ message: "Error updating the business", error });
    }
  }
);

export default businessRouter;
