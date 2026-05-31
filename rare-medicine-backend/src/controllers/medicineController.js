// src/controllers/medicineController.js
import Medicine from '../models/Medicine.js';
import { requireRole } from '../middlewares/auth.js';

// Create a new medicine (admin only)
export const createMedicine = [
  requireRole('admin'),
  async (req, res) => {
    try {
      const { name, description, price, shop, location } = req.body;
      const medicine = new Medicine({ name, description, price, shop, location });
      await medicine.save();
      res.status(201).json(medicine);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  },
];

// Get all medicines (any authenticated user)
export const getMedicines = [
  async (req, res) => {
    try {
      const medicines = await Medicine.find().populate('shop', 'name address');
      res.json(medicines);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  },
];

// Get a single medicine by ID
export const getMedicineById = [
  async (req, res) => {
    try {
      const med = await Medicine.findById(req.params.id).populate('shop', 'name address');
      if (!med) return res.status(404).json({ message: 'Medicine not found' });
      res.json(med);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  },
];

// Update medicine (admin only)
export const updateMedicine = [
  requireRole('admin'),
  async (req, res) => {
    try {
      const updated = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Medicine not found' });
      res.json(updated);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  },
];

// Delete medicine (admin only)
export const deleteMedicine = [
  requireRole('admin'),
  async (req, res) => {
    try {
      const del = await Medicine.findByIdAndDelete(req.params.id);
      if (!del) return res.status(404).json({ message: 'Medicine not found' });
      res.json({ message: 'Medicine deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  },
];
