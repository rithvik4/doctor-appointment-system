const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

router.post('/book', async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).send(appointment);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Fetch all appointments for a patient
router.get('/appointments/:patientId', async (req, res) => {
    try {
        const appointments = await Appointment.find({ patientId: req.params.patientId });
        res.send(appointments);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Create patient account
router.post('/create', async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).send(patient);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Edit patient account
router.put('/edit/:id', async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(patient);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete patient account
router.delete('/delete/:id', async (req, res) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
        res.send({ message: 'Patient account deleted' });
    } catch (err) {
        res.status(400).send(err);
    }
});
