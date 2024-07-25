const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { port, dbURI } = require('./config');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/admin', require('./routes/admin'));
app.use('/doctor', require('./routes/doctor'));
app.use('/patient', require('./routes/patient'));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
