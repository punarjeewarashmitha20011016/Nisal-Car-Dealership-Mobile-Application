const mongoose = require("mongoose");

const Car = mongoose.Schema({
  carRegNo: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  carImage: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Car", Car);
