const express = require("express");
const categoriesRouter = express.Router();
const Category = require("../backend_models/Categories");
const authMiddleware = require("../middlewares/authMiddleware");

categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

categoriesRouter.post("/", authMiddleware, async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).send({ message: "Failed to add categoery", error });
  }
});

module.exports = categoriesRouter;

//////////////////////////
//// Before mongoose ////
////////////////////////

// categoriesRouter.get("/", (req, res) => {
//   try {
//     res.json(categories);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// categoriesRouter.post("/", (req, res) => {
//   const { id, name, bgcolor, icon } = req.body;
//   const newCategory = { id, name, bgcolor, icon };

//   try {
//     categories.push(newCategory);
//     res.status(201).json(newCategory);
//   } catch (error) {
//     res.status(500).send({ message: "Failed to add categoery", error });
//   }
// });
