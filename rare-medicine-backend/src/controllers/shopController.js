// src/controllers/shopController.js
import MedicalShop from '../models/MedicalShop.js';
import { requireRole } from '../middlewares/auth.js';

// Search for nearby medical shops (any authenticated user)
export const searchNearby = [
  // Optional: only authenticated users can access; you can add requireRole if needed
  async (req, res) => {
    const { lat, lng, radius } = req.query;
    if (!lat || !lng) {
      return res.status(400).json({ message: 'lat and lng query parameters are required' });
    }
    const distance = radius ? Number(radius) : 5000; // default 5km
    try {
      const shops = await MedicalShop.aggregate([
        {
          $geoNear: {
            near: { type: 'Point', coordinates: [Number(lng), Number(lat)] },
            distanceField: 'dist.calculated',
            maxDistance: distance,
            spherical: true,
          },
        },
        { $project: { passwordHash: 0 } }, // hide sensitive fields if any
      ]);
      res.json(shops);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  },
];
