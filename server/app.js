const express = require("express");
const morgan = require("morgan");
const hotelRouter = require("./routes/hotelRoutes");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware 1.");
  next();
});

// Routes
app.use("/api/v1/hotels", hotelRouter);

module.exports = app;
