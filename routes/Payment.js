import express from 'express';

const router = express.Router();

// Mock payment processing
router.post('/pay', (req, res) => {
  const { name, email, amount } = req.body;

  // Simulate payment processing logic here
  console.log(`Processing payment for ${name}, ${email}, amount: ${amount}`);

  // After successful payment processing
  res.json({ msg: 'Payment successful' });
});

export default router;
