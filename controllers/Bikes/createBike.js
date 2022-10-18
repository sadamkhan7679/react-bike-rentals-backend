const Bike = require("../../models/Bike");
const { formatBike } = require("../../utils/bike");

// @route   POST api/bikes/create-bike
// @desc    Create Bike
// @access  Public

// Name
// ○ Model.
// ○ Color.
// ○ Location.
// ○ Rating.
// ○ A checkbox indicating if the bike is available for rental or not.

exports.createBike = async (req, res) => {
  const { name, model, color, location, available } = req.body;
  try {
    // Create the bike
    const bike = await Bike.create({
      name,
      model,
      color,
      location,
      available,
    });
    res
      .status(200)
      .json({
        status: 200,
        data: { bike: formatBike(bike) },
        msg: "Bike created",
      });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
