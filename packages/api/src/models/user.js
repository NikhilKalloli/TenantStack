const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  tenantId: { type: String, required: true },
  role: { type: String, required: true },
  permissions: [String],
  lastLogin: { type: Date }
});

module.exports = mongoose.model('User', userSchema);
