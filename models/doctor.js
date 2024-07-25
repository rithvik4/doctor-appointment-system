const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  experience: String,
  schedule: [{
    day: String,
    startTime: String,
    endTime: String,
  }],
  email: String,
  password: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);
