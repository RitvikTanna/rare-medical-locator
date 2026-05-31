// src/routes/shops.js
import { Router } from 'express';
import { searchNearby } from '../controllers/shopController.js';

const router = Router();

// GET /api/shops/nearby?lat=...&lng=...&radius=...
router.get('/nearby', searchNearby);

export default router;
