const Bike = require("../../models/Bike");
const { formatBike } = require("../../utils/bike");

// @route   PUT api/bikes/update-bike/:id
// @desc    Update Bike
// @access  Public

// ○ Model.
// ○ Color.
// ○ Location.
// ○ Rating.
// ○ A checkbox indicating if the bike is available for rental or not.

exports.updateBike = async (req, res) => {
  const { id } = req.params;
  const { name, model, color, location, available } = req.body;
  const bike = await Bike.findById(id);

  if (!bike) {
    return res.status(400).json({ msg: "Bike not found" });
  }

  try {
    // Update the bike
    bike.name = name;
    bike.model = model;
    bike.color = color;
    bike.location = location;
    bike.available = available;
    // Save the bike to the database
    const savedBike = await bike.save();

    res.status(200).json({
      status: 200,
      data: { bike: formatBike(savedBike), msg: "Bike updated" },
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
