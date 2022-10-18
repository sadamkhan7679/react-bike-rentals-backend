const Bike = require("../../models/Bike");
const { formatBike } = require("../../utils/bike");

// @route   GET api/bikes/get-all-bikes
// @desc    Get all bikes
// @access  Public

exports.getAllBikes = async (req, res) => {
  try {
    const bikes = await Bike.find();
    res
      .status(200)
      .json({
        status: 200,
        data: { bikes: bikes.map((bike) => formatBike(bike)) },
      });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
