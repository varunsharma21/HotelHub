const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    unique: true,
    required: [true, "A name must be given."],
    trim: true,
  },
  address: {
    type: String,
    unique: true,
    required: [true, "Address must be provided."],
    trim: true,
  },
  city: {
    type: String,
    required: [true, "A city is required"],
    trim: true,
  },
  contactNumber: {
    type: String,
    required: [true, "A contact number is required."],
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: [true, "Category is required."],
  },
  starRating: Number,
  maxPrice: {
    type: Number,
    required: [true, "Max price is required."],
  },
  minPrice: {
    type: Number,
    required: [true, "Min price is required."],
  },
  photo: {
    type: String,
    required: [true, "A photo is required."],
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
