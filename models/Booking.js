const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  bike: {
    type: mongoose.Schema.ObjectId,
    ref: "Bike",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  startDate: {
    type: Date,
    required: [true, "Please add a start date"],
  },
  endDate: {
    type: Date,
    required: [true, "Please add a end date"],
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
