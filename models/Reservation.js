import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  eventDetails: {
    type: String,
  },
  businessCategory: {
    type: String,
    required: true,
  },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

export default Reservation;



