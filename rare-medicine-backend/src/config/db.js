// src/config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rare-medicine';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      // Mongoose 8 removes useNewUrlParser etc., defaults are fine
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
