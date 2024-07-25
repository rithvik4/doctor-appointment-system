const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let doctors = [];
let appointments = [];

app.post('/add-doctor', (req, res) => {
    const doctor = req.body;
    doctors.push(doctor);
    res.send({ message: 'Doctor added successfully' });
});

app.get('/doctors', (req, res) => {
    res.json(doctors);
});

app.post('/book-appointment', (req, res) => {
    const appointment = req.body;
    appointments.push(appointment);
    res.send({ message: 'Appointment booked successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
