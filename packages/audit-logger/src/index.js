const express = require('express');
const dotenv = require('dotenv');
const { logActivity } = require('./loggers/activityLogger');
const { generateReport } = require('./reporters/reportGenerator');

dotenv.config();

const app = express();
const port = process.env.TENANTSTACK_AUDIT_PORT || 3003;

app.use(express.json());

// Logging route
app.post('/log', logActivity);

// Reporting route
app.get('/report', generateReport);

app.listen(port, () => {
  console.log(`Audit Logger Service running on port ${port}`);
});
