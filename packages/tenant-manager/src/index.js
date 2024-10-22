const express = require('express');
const dotenv = require('dotenv');
const { createStack, updateStack, deleteStack } = require('./stack/stackManager');
const { checkQuota, updateQuota } = require('./quota/quotaManager');
const { createWorkflow, updateWorkflow } = require('./workflows/workflowManager');

dotenv.config();

const app = express();
const port = process.env.TENANTSTACK_TENANT_MANAGER_PORT || 3001;

app.use(express.json());

// Stack management routes
app.post('/stacks', createStack);
app.put('/stacks/:stackId', updateStack);
app.delete('/stacks/:stackId', deleteStack);

// Quota management routes
app.get('/quotas/:tenantId', checkQuota);
app.put('/quotas/:tenantId', updateQuota);

// Workflow management routes
app.post('/workflows', createWorkflow);
app.put('/workflows/:workflowId', updateWorkflow);

app.listen(port, () => {
  console.log(`Tenant Manager Service running on port ${port}`);
});
