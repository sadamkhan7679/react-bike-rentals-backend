const express = require("express");

const { register } = require("../controllers/Auth/register");
const { login } = require("../controllers/Auth/login");

// Initialize Express Router
const router = express.Router();

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post("/register", register);
router.post("/login", login);

module.exports = router;
