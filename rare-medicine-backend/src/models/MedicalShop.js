// src/models/MedicalShop.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const medicalShopSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }, // [lng, lat]
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

// Create 2dsphere index for geospatial queries
medicalShopSchema.index({ location: '2dsphere' });

export default model('MedicalShop', medicalShopSchema);
