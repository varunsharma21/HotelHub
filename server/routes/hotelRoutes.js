const express = require("express");
const hotelControllers = require("./../controllers/hotelControllers");

const router = express.Router();

router
  .route("/")
  .get(hotelControllers.getAllHotels)
  .post(hotelControllers.createHotel);

router
  .route("/:id")
  .get(hotelControllers.getHotel)
  .delete(hotelControllers.deleteHotel);

module.exports = router;
