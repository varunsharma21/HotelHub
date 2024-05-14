const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const hotelRouter = require("./routes/hotelRoutes");

const app = express();

// Middlewares
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Hello from the middleware 1.");
  next();
});

// Routes
app.use("/api/v1/hotels", hotelRouter);

module.exports = app;
