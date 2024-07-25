const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: String,
    age: Number,
    sex: String,
    doctorId: mongoose.Schema.Types.ObjectId,
    appointmentDate: Date,
    problemDescription: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
