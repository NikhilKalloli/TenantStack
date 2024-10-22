const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  tenantId: { type: String, required: true, unique: true },
  stackId: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive', 'suspended'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  settings: { type: Object, default: {} }
});

module.exports = mongoose.model('Tenant', tenantSchema);
