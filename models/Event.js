import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

export default mongoose.model('Event', EventSchema);

