const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  tenantId: { type: String, required: true },
  userId: { type: String, required: true },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  details: { type: Object }
});

module.exports = mongoose.model('AuditLog', auditLogSchema);
