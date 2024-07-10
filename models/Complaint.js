import mongoose from 'mongoose';

const ComplaintSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  enquiry: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Complaint = mongoose.model('Complaint', ComplaintSchema);

export default Complaint;

