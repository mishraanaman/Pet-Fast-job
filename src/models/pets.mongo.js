const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    default: 2,
    min: 0,
    max: 20,
  },
});

module.exports = mongoose.model('pet', petsSchema);