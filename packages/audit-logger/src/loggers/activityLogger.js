const AuditLog = require('../../api/src/models/auditLog');

exports.logActivity = async (req, res) => {
  try {
    const { tenantId, userId, action, details } = req.body;
    
    const log = new AuditLog({
      tenantId,
      userId,
      action,
      details
    });
    
    await log.save();
    
    res.status(201).json({ message: 'Activity logged successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging activity', error: error.message });
  }
};
