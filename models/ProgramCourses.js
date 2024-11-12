const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  credits: { type: Number, required: true },
  prerequisites: String,
  term: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  time: { type: String, required: true },
  days: { type: String, required: true },
  campus: { type: String, required: true },
  deliveryMode: { type: String, required: true },
  seatsAvailable: { type: Number, required: true },
  classSize: { type: Number, required: true }
});

const ProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  description: String,
  term: String,
  startDate: Date,
  endDate: Date,
  fees: String,
  category: String,
  courses: [CourseSchema]
});

module.exports = mongoose.model('Program', ProgramSchema);
