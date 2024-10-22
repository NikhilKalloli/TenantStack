const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.TENANTSTACK_API_PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/v1/tenants', require('./routes/tenants'));
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/quotas', require('./routes/quotas'));

app.listen(port, () => {
  console.log(`API Service running on port ${port}`);
});
