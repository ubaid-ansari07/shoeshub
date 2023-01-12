import express from 'express';
import { add, edit, list, remove } from '../controllers/productController.js';
const router = express.Router();


router.get('/list',list);
router.post('/add',add);
router.post('/edit',edit);
router.post('/remove/:id',remove);
export default router;