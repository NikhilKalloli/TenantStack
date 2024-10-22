const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { authenticate, authorize } = require('./rbac/authMiddleware');

dotenv.config();

const app = express();
const port = process.env.TENANTSTACK_AUTH_PORT || 3002;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Auth Service: Connected to MongoDB'))
  .catch(err => console.error('Auth Service: MongoDB connection error:', err));

// Authentication middleware
app.use(authenticate);

// Protected routes
app.use('/api', authorize);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to TenantStack Auth Service' });
});

app.listen(port, () => {
  console.log(`Auth Service running on port ${port}`);
});
