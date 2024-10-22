const express = require('express');
const dotenv = require('dotenv');
const { authenticate, authorize } = require('./rbac/authMiddleware');
const { initializeSSO } = require('./sso/ssoManager');
const { enforcePolicy } = require('./policies/policyEnforcer');

dotenv.config();

const app = express();
const port = process.env.TENANTSTACK_AUTH_PORT || 3002;

app.use(express.json());

// Authentication middleware
app.use(authenticate);

// SSO routes
app.use('/sso', initializeSSO());

// Protected routes
app.use('/api', authorize, enforcePolicy);

app.listen(port, () => {
  console.log(`Auth Service running on port ${port}`);
});
