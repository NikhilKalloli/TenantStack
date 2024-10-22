const AuditLog = require('../../api/src/models/auditLog');

exports.generateReport = async (req, res) => {
  try {
    const { tenantId, startDate, endDate } = req.query;
    
    const query = { tenantId };
    if (startDate && endDate) {
      query.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    
    const logs = await AuditLog.find(query).sort({ timestamp: -1 });
    
    res.json({ logs });
  } catch (error) {
    res.status(500).json({ message: 'Error generating report', error: error.message });
  }
};
