const User = require("../../models/User");

// @route   DELETE api/manage-users/delete-user/:id
// @desc    Delete User
// @access  Public

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    // Delete the user
    await User.findByIdAndDelete(id);
    res.status(200).json({ status: 200, msg: "User deleted" });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
