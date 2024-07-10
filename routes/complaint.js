

// export default router;
import express from 'express';
import Complaint from '../models/Complaint.js'; // Assuming Complaint model is defined

const router = express.Router();

// Route: POST /api/contact
router.post('/contact', async (req, res) => {
  const { email, contactNumber, enquiry } = req.body;

  try {
    // Create new complaint
    const newComplaint = new Complaint({
      email,
      contactNumber,
      enquiry
    });

    // Save complaint to MongoDB
    await newComplaint.save();

    res.json({ msg: 'Complaint submitted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Failed to submit enquiry. Please try again later.');
  }
});

export default router;
