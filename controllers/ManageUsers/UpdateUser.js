const User = require("../../models/User");
const { validationResult } = require("express-validator");
const { formatUser } = require("../../utils/auth");

// @route   PUT api/manage-users/update-user/:id
// @desc    Update User
// @access  Public

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Get the user from the database
  const user = await User.findById(id);
  if (!user) {
    return res.status(400).json({ msg: "User not found" });
  }
  const { fullName, email, gender, role } = req.body;
  try {
    // Update the user
    user.fullName = fullName;
    user.email = email;
    user.gender = gender;
    user.role = role;
    // Save the user to the database
    const savedUser = await user.save();
    res
      .status(200)
      .json({ status: 200, data: { user: formatUser(savedUser) } });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
