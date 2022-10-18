const User = require("../../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { formatUser } = require("../../utils/auth");

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password } = req.body;
  try {
    // See if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user instance and save it to the database
    user = new User({
      fullName,
      email,
      password,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);

    // Hash the password
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    const savedUser = await user.save();

    const payload = {
      user: savedUser,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          status: 200,
          data: { token, user: formatUser(savedUser) },
        });
      }
    );
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
