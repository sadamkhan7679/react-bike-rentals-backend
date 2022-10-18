const Bike = require("../../models/Bike");

// @route   DELETE api/bikes/delete-bike/:id
// @desc    Delete Bike
// @access  Public

exports.deleteBike = async (req, res) => {
  const { id } = req.params;
  try {
    // Delete the bike
    await Bike.findByIdAndDelete(id);
    res.status(200).json({ status: 200, data: { msg: "Bike deleted" } });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
