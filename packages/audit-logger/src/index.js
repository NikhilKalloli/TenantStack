const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.TENANTSTACK_AUDIT_PORT || 3003;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Audit Logger: Connected to MongoDB'))
  .catch(err => console.error('Audit Logger: MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to TenantStack Audit Logger' });
});

app.listen(port, () => {
  console.log(`Audit Logger Service running on port ${port}`);
});
