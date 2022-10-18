const Booking = require("../../models/Booking");

// @route   GET api/bookings/bookings-by-user-id/:id
// @desc    View all bookings by user id
// @access  Public

exports.bookingsByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const bookings = await Booking.find({ user: id }).populate("user bike");
    res.status(200).json({ status: 200, data: { bookings: bookings } });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
