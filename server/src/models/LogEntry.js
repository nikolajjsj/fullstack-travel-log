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
    min: [-90, 'Latitude minimum is -90'],
    max: [90, 'Latitude maximum is 90'],
  },
  longitude: {
    type: Number,
    required: true,
    min: [-180, 'Longitude minimum is -180'],
    max: [180, 'Longitude maximum is 180'],
  },
  visit_date: {
    type: Date,
    default: Date.now,
  },
},
{
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
