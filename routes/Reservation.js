


import express from 'express';
import Reservation from '../models/Reservation.js';

const router = express.Router();

// Route: POST /api/reservations
router.post('/reservations', async (req, res) => {
  const { firstName, lastName, email, companyName, phoneNumber, businessType, eventDetails, businessCategory } = req.body;

  try {
    // Check if reservation already exists with the same email
    let reservation = await Reservation.findOne({ email });

    if (reservation) {
      return res.status(400).json({ msg: 'Reservation with this email already exists' });
    }

    // Create new reservation instance
    reservation = new Reservation({
      firstName,
      lastName,
      email,
      companyName,
      phoneNumber,
      businessType,
      eventDetails,
      businessCategory,
    });

    // Save reservation to MongoDB
    await reservation.save();

    res.json({ msg: 'Reservation submitted successfully' });
  } catch (err) {
    console.error(err.message); // Log the error message
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router;
