// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import authRoutes from './routes/auth.js';
// import eventRoutes from './routes/events.js';
// import complaintRoutes from './routes/complaint.js'; // Assuming complaint routes
// import dbConnection from './db/db.js';

// dotenv.config({ path: "./config/config.env" });

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// dbConnection();

// // Routes
// app.use('/api', authRoutes); // Auth routes for login and signup
// app.use('/api', eventRoutes); // Event routes
// app.use('/api', complaintRoutes); // Complaint routes

// // Error handler middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';
import paymentRoutes from './routes/Payment.js'
import complaintRoutes from './routes/complaint.js'; // Assuming complaint routes
import reservationRoutes from './routes/Reservation.js';
import dbConnection from './db/db.js'; // New reservation route

dotenv.config({ path: './config/config.env' });

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
// mongoose.connect(process.env.MONGOOSE_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.error(err));
dbConnection();
// Routes
app.use('/api', authRoutes); // Auth routes for login and signup
app.use('/api', eventRoutes); // Event routes
app.use('/api', complaintRoutes); // Complaint routes
app.use('/api', reservationRoutes); // Reservation routes
app.use('/api', paymentRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
