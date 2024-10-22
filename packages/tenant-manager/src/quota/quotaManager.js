const Quota = require('../../api/src/models/quota');

exports.checkQuota = async (req, res) => {
  try {
    const { tenantId } = req.params;
    const quotas = await Quota.find({ tenantId });
    res.json(quotas);
  } catch (error) {
    res.status(500).json({ message: 'Error checking quota', error: error.message });
  }
};

exports.updateQuota = async (req, res) => {
  try {
    const { tenantId } = req.params;
    const { resourceType, limit, used } = req.body;
    
    const updatedQuota = await Quota.findOneAndUpdate(
      { tenantId, resourceType },
      { limit, used, updatedAt: Date.now() },
      { new: true, upsert: true }
    );
    
    res.json({ message: 'Quota updated successfully', quota: updatedQuota });
  } catch (error) {
    res.status(500).json({ message: 'Error updating quota', error: error.message });
  }
};
