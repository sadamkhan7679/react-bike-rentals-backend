const express = require("express");

const { updateUser } = require("../controllers/ManageUsers/UpdateUser");
const { getUsers } = require("../controllers/ManageUsers/getUsers");
const { deleteUser } = require("../controllers/ManageUsers/deleteUser");

// Initialize Express Router
const router = express.Router();

router.get("/get-users", getUsers);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

module.exports = router;
