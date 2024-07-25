const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');
const Appointment = require('../models/appointment');

// Get doctor's appointments
router.get('/appointments/:doctorId', async (req, res) => {
    try {
        const appointments = await Appointment.find({ doctorId: req.params.doctorId });
        res.send(appointments);
    } catch (err) {
        res.status(400).send(err);
    }
});

// View doctor details
router.get('/details/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        res.send(doctor);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Fetch doctor details
router.get('/details/:doctorId', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.doctorId);
        if (!doctor) {
            return res.status(404).send();
        }
        res.send(doctor);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;

// Edit doctor account
router.put('/edit/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(doctor);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete doctor account
router.delete('/delete/:id', async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.send({ message: 'Doctor account deleted' });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;

