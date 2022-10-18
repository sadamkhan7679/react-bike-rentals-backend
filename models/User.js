const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
  },
  role: {
    type: String,
    enum: ["user", "manager"],
    default: "user",
  },
});

module.exports = mongoose.model("User", UserSchema);
