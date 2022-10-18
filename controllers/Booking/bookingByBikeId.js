const Booking = require("../../models/Booking");

// @route   GET api/bookings/bookings-by-bike-id/:id
// @desc    View all bookings by bike id
// @access  Public

exports.bookingsByBikeId = async (req, res) => {
  const { id } = req.params;
  try {
    const bookings = await Booking.find({ bike: id }).populate("user bike");
    res.status(200).json({ status: 200, data: { bookings: bookings } });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
