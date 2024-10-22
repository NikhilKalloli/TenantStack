const mongoose = require('mongoose');

const quotaSchema = new mongoose.Schema({
  tenantId: { type: String, required: true },
  resourceType: { type: String, required: true },
  limit: { type: Number, required: true },
  used: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quota', quotaSchema);
