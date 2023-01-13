import express from 'express';
import { add, edit, list, remove } from '../controllers/productController.js';
const router = express.Router();
import multer from 'multer';
const upload = multer({dest:'public/images'})
router.get('/list',list);
router.post('/add',upload.array('img'),add);
router.post('/edit',edit);
router.post('/remove/:id',remove);
export default router;