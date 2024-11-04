const mongoose = require('mongoose');

let DogModel = {};

// Create the definition of a dog schema (used for creating a dog model) -SJH
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});
// Create the model based upon the specified schema. -SJH
DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;
