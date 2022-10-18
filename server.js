const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load environment variables
dotenv.config({ path: "./config/config.env" });
// middleware files
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");

// import routes
const authRoutes = require("./routes/auth");
const manageUsersRoutes = require("./routes/manageUsers");
const bikesRoutes = require("./routes/bikes");
const bookingRoutes = require("./routes/bookings");

// Connect to MongoDB
connectDB();

// Constants
const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.NODE_ENV;

// initialize express
const app = express();

// Middelware
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Dev logging middleware

if (ENVIRONMENT === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/auth", authRoutes);
app.use("/api/users", manageUsersRoutes);
app.use("/api/bikes", bikesRoutes);
app.use("/api/bookings", bookingRoutes);

// Create a route
app.get("/api", (req, res) => {
  // send a json response
  res.status(200).json({ success: true, message: "Welcome to the API" });
});

// Error Handler
app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`);
});
