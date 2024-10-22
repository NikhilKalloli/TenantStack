const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { createStack, updateStack, deleteStack } = require('./stack/stackManager');
const { checkQuota, updateQuota } = require('./quota/quotaManager');

dotenv.config();

const app = express();
const port = process.env.TENANTSTACK_TENANT_MANAGER_PORT || 3001;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Tenant Manager: Connected to MongoDB'))
  .catch(err => console.error('Tenant Manager: MongoDB connection error:', err));

// Stack management routes
app.post('/stacks', createStack);
app.put('/stacks/:stackId', updateStack);
app.delete('/stacks/:stackId', deleteStack);

// Quota management routes
app.get('/quotas/:tenantId', checkQuota);
app.put('/quotas/:tenantId', updateQuota);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to TenantStack Tenant Manager' });
});

app.listen(port, () => {
  console.log(`Tenant Manager Service running on port ${port}`);
});
