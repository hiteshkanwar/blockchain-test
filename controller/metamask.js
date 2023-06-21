const Web3 = require('web3');

// Initialize Web3 with the provider of your choice (e.g., Infura)
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// Define your controller method for the sign endpoint
exports.sign = async (req, res) => {
  const { message, address } = req.body;

  try {
    // Sign the message using MetaMask
    const signature = await web3.eth.personal.sign(message, address);

    // Return the signature in the response
    res.json({ signature });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while signing the message' });
  }
};