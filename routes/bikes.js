const express = require("express");
const { getAllBikes } = require("../controllers/Bikes/getAllBikes");
const { deleteBike } = require("../controllers/Bikes/deleteBike");
const { updateBike } = require("../controllers/Bikes/updateBike");
const { rateBike } = require("../controllers/Bikes/RateBike");

const { isAuth } = require("../middleware/isAuth");
const { createBike } = require("../controllers/Bikes/createBike");

const router = express.Router();

// Get All Bikes
router.get("/get-bikes", getAllBikes);

// Create Bike
router.post("/create-bike", createBike);

// Delete Bike
router.delete("/delete-bike/:id", deleteBike);

// Update Bike
router.put("/update-bike/:id", updateBike);

// Rate Bike
router.post("/rate-bike/:id", rateBike);

module.exports = router;
