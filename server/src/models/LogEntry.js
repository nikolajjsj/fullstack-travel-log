const mongoose = require('mongoose');

const {Schema} = mongoose;

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: String,
  comments: String,
  rating: {
    type: Number,
    min: [1, 'Rating minimum is 1'],
    max: [10, 'Rating maximum is 10'],
    default: 1,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  visit_date: {
    type: Date,
    default: Date.now,
  },
},
{
  timestamps: true,
});

module.exports = logEntrySchema;
