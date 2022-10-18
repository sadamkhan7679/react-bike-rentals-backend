const Bike = require("../../models/Bike");
const { formatBike } = require("../../utils/bike");

// @route   PUT api/bikes/rate-bike/:id
// @desc    Rate Bike
// @access  Public

// ○ Rating.

exports.rateBike = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  const bike = await Bike.findById(id);

  if (!bike) {
    return res.status(400).json({ msg: "Bike not found" });
  }

  // rating = {
  //   rateCount: 0,
  //   rateValue: 0,
  //   rateAvg: 0,
  // };

  try {
    bike.rating = {
      rateCount: bike.rating.rateCount + 1,
      rateValue: bike.rating.rateValue + rating,
      rateAvg: (bike.rating.rateValue + rating) / (bike.rating.rateCount + 1),
    };

    // Save the bike to the database
    const savedBike = await bike.save();

    res.status(200).json({
      status: 200,
      data: { bike: formatBike(savedBike), msg: "Bike rated" },
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
