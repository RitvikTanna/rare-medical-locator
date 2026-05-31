// src/routes/medicines.js
import { Router } from 'express';
import {
  createMedicine,
  getMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
} from '../controllers/medicineController.js';

const router = Router();

router.post('/', createMedicine);
router.get('/', getMedicines);
router.get('/:id', getMedicineById);
router.put('/:id', updateMedicine);
router.delete('/:id', deleteMedicine);

export default router;
