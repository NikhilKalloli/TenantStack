const Tenant = require('../../api/src/models/tenant');
const ContentstackClient = require('contentstack');

const client = ContentstackClient.client();

exports.createStack = async (req, res) => {
  try {
    const { name, description } = req.body;
    const stack = await client.stack().create({ name, description });
    
    const tenant = new Tenant({
      tenantId: stack.api_key,
      stackId: stack.uid,
      name: stack.name,
      status: 'active'
    });
    
    await tenant.save();
    
    res.status(201).json({ message: 'Stack created successfully', stack: tenant });
  } catch (error) {
    res.status(500).json({ message: 'Error creating stack', error: error.message });
  }
};

exports.updateStack = async (req, res) => {
  try {
    const { stackId } = req.params;
    const { name, description } = req.body;
    
    await client.stack(stackId).update({ name, description });
    
    const updatedTenant = await Tenant.findOneAndUpdate(
      { stackId },
      { name },
      { new: true }
    );
    
    res.json({ message: 'Stack updated successfully', stack: updatedTenant });
  } catch (error) {
    res.status(500).json({ message: 'Error updating stack', error: error.message });
  }
};

exports.deleteStack = async (req, res) => {
  try {
    const { stackId } = req.params;
    
    await client.stack(stackId).delete();
    
    await Tenant.findOneAndDelete({ stackId });
    
    res.json({ message: 'Stack deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting stack', error: error.message });
  }
};
