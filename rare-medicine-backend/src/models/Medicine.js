import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const MedicineSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  // Reference to the shop that offers this medicine
  shop: { type: Schema.Types.ObjectId, ref: 'MedicalShop', required: true },
  // Optional location field if medicine is stored at a specific location (e.g., warehouse)
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] } // [longitude, latitude]
  }
}, { timestamps: true });

// Create 2dsphere index for location queries if location is used
MedicineSchema.index({ location: '2dsphere' });

export default model('Medicine', MedicineSchema);
