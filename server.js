const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const adminRoutes = require('./routes/admin');
const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patient');

const app = express();

mongoose.connect('mongodb://localhost:27017/doctor-appointment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());
app.use('/admin', adminRoutes);
app.use('/doctor', doctorRoutes);
app.use('/patient', patientRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
