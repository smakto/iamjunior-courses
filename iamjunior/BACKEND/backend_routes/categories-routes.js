const express = require("express");
const categoriesRouter = express.Router();

const categories = [
  {
    id: 1,
    name: "Food",
    bgcolor: { hex: "#f00" },
    icon: { url: "http://example.com/icon1.png" },
  },
  {
    id: 2,
    name: "Retail",
    bgcolor: { hex: "#0f0" },
    icon: { url: "http://example.com/icon2.png" },
  },
];

categoriesRouter.get("/", (req, res) => {
  try {
    res.json(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

categoriesRouter.post("/", (req, res) => {
  const newCategory = { id: req.body.id, category: req.body.name };

  try {
    categories.push(newCategory);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = categoriesRouter;
