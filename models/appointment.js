const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: String,
    name: String,
    age: Number,
    sex: String,
    doctorId: String,
    date: Date,
    problemDescription: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
