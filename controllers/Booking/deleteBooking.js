const Booking = require("../../models/Booking");

// @route   DELETE api/bookings/cancel-booking/:id
// @desc    Cancel a booking
// @access  Public

exports.cancelBooking = async (req, res) => {
  const { id } = req.params;
  try {
    // Delete the booking
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ status: 200, data: { msg: "Booking cancelled" } });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
