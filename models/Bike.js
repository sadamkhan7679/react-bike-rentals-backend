const mongoose = require("mongoose");

// ○ Model.
// ○ Color.
// ○ Location.
// ○ Rating.
// ○ A checkbox indicating if the bike is available for rental or not.

// rating = {
//   rateCount: 0,
//   rateValue: 0,
//   rateAvg: 0,
// };

const BikeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  model: {
    type: String,
    required: [true, "Please add a model"],
  },
  color: {
    type: String,
    required: [true, "Please add a color"],
  },
  location: {
    type: String,
    required: [true, "Please add a location"],
  },
  rating: {
    rateCount: {
      type: Number,
      default: 0,
    },
    rateValue: {
      type: Number,
      default: 0,
    },
    rateAvg: {
      type: Number,
      default: 0,
    },
  },
  available: {
    type: Boolean,
    required: [true, "Please add a availability"],
  },
});

module.exports = mongoose.model("Bike", BikeSchema);
