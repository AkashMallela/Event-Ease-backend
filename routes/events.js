
import { Router } from 'express';
import { check, validationResult } from 'express-validator';
import auth from './auth.js';
import Event from '../models/Event.js';

const router = Router();

// Get all events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create a new event
router.post('/events', [
  auth,
  [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('date', 'Date is required').not().isEmpty(),
    check('location', 'Location is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, date, location, price } = req.body;

  try {
    const newEvent = new Event({
      name,
      description,
      date,
      location,
      price
    });

    const event = await newEvent.save();

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;


