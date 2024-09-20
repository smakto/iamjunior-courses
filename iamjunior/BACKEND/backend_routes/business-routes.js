const express = require("express");
const businessRouter = express.Router();

const business = [
  {
    id: 1,
    name: "Business One",
    about: "Description One",
    address: "Address One",
    category: "Food",
    contactPerson: "Person One",
    email: "email@example.com",
    images: [{ url: "http://example.com/image1.png" }],
  },
  {
    id: 2,
    name: "Business Two",
    about: "Description Two",
    address: "Address Two",
    category: "Retail",
    contactPerson: "Person Two",
    email: "email2@example.com",
    images: [{ url: "http://example.com/image2.png" }],
  },
];

businessRouter.get("/", (req, res) => {
  try {
    res.status(200).json(business);
  } catch (error) {
    res.status(500).send(error);
  }
});

businessRouter.get("/:id", (req, res) => {
  const businessById = business.filter((b) => b.id === parseInt(req.params.id));
  try {
    res.status(200).json(businessById);
  } catch (error) {
    res.status(500).send(error);
  }
});

businessRouter.get("/category/:category", (req, res) => {
  const filteredBusiness = business.filter(
    (b) => b.category.toLocaleUpperCase() === req.params.category.toLowerCase()
  );
  try {
    res.status(200).json(filteredBusiness);
  } catch (error) {
    res.status(500).send(error);
  }
});

businessRouter.post("/", (req, res) => {
  const { id, name, about, address, category, contactPerson, email, imageUrl } =
    req.body;

  if (
    !id ||
    !name ||
    !about ||
    !address ||
    !category ||
    !contactPerson ||
    !email ||
    !imageUrl
  ) {
    return res.status(400).json({
      message:
        "All fields are required. Re-submit request with complete information.",
    });
  }

  if (
    typeof id !== "number" ||
    typeof name !== "string" ||
    typeof about !== "string" ||
    typeof address !== "string" ||
    typeof category !== "string" ||
    typeof contactPerson !== "string" ||
    typeof email !== "string" ||
    typeof imageUrl !== "string"
  ) {
    return res.status(400).json({
      message: "Invalid data type for one or more fields.",
    });
  }

  const newBusiness = {
    id,
    name,
    about,
    address,
    category,
    contactPerson,
    email,
    images: [{ url: imageUrl }],
  };
  try {
    business.push(newBusiness);
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(500).send({ message: "Creating new business failed.", error });
  }
});

businessRouter.put("/:id", (req, res) => {
  const businessById = business.find((b) => b.id === parseInt(req.params.id));

  if (businessById) {
    try {
      businessById.name = req.body.name || businessById.name;
      businessById.about = req.body.about || businessById.about;
      businessById.address = req.body.address || businessById.address;
      businessById.category = req.body.category || businessById.category;
      businessById.contactPerson =
        req.body.contactPerson || businessById.contactPerson;
      businessById.email = req.body.email || businessById.email;
      businessById.images = req.body.imageUrl
        ? [{ url: req.body.imageUrl }]
        : businessById.images;
      res.status(200).json(businessById);
    } catch (error) {
      res.status(500).send({ message: "Error updating the business", error });
    }
  } else {
    res.status(404).send("Business with this ID not found");
  }
});

// GET /businesses/:businessId/bookings/date/:date - Gauna visus užsakymus konkrečiai įmonei nurodytą dieną.
// ^^^^ padaryta @ bookings-routes

module.exports = businessRouter;
