const User = require("../../models/User");
const { formatUser } = require("../../utils/auth");

// @route   GET api/manage-users/get-users
// @desc    Get all users
// @access  Public
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({
        status: 200,
        data: { users: users.map((user) => formatUser(user)) },
      });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
