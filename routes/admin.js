const express = require('express');
const router = express.Router();
const Doctor = require('models/doctor');

// Add doctor
router.post('/addDoctor', async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).send(doctor);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Fetch all doctors
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.send(doctors);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a doctor
router.delete('/deleteDoctor/:id', async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.send({ message: 'Doctor deleted' });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
