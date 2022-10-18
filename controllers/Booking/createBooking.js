const Booking = require("../../models/Booking");

// @route   POST api/bookings/create-booking
// @desc    Create a booking
// @access  Public

exports.createBooking = async (req, res) => {
  const { user, bike, startDate, endDate } = req.body;
  try {
    // Create a new booking
    const newBooking = new Booking({
      user,
      bike,
      startDate,
      endDate,
    });
    await newBooking.save();
    res.status(200).json({ status: 200, data: { msg: "Booking created" } });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
