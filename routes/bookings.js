const express = require("express");
const { createBooking } = require("../controllers/Booking/createBooking");
const { bookingsByBikeId } = require("../controllers/Booking/bookingByBikeId");
const { bookingsByUserId } = require("../controllers/Booking/bookingsByUserId");
const { cancelBooking } = require("../controllers/Booking/deleteBooking");

const router = express.Router();

// Create Booking
router.post("/create-booking", createBooking);

// Cancel Booking
router.delete("/cancel-booking/:id", cancelBooking);

// Get All BookingsByBikeId
router.get("/bookings-by-bike-id/:id", bookingsByBikeId);

// Get All BookingsByUserId
router.get("/bookings-by-user-id/:id", bookingsByUserId);

module.exports = router;
