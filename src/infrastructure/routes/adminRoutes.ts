import express from 'express';
import { Request, Response } from 'express-serve-static-core';
import {adminController} from '../../providers/controllers'; 
import upload from '../../middilewares/multer';

const router = express.Router();

const handleGetAllUser = (req: Request, res: Response) => adminController.fetchUsers(req, res);
const handleUserBlockAndUnblock = (req:Request,res:Response) => adminController.updateUserActiveStatus(req,res);
const handleAddCategory = (req:Request,res:Response)=>  adminController.addCategory(req,res);
const handleGetAllCategory = (req:Request,res:Response)=>adminController.getAllCategory(req,res);
const handleUpdateCategory = (req: Request, res: Response) =>  adminController.updateCategory(req, res); 
const handleDeleteCategory = (req:Request,res:Response)=>adminController.deleteCategory(req,res);   
router.get('/get-user', handleGetAllUser);
router.post('/user-status',handleUserBlockAndUnblock)
router.post('/categories', upload.fields([{ name: 'image' }, { name: 'icon' }]),handleAddCategory);
router.get('/categories',handleGetAllCategory)
router.put('/categories/:id',upload.fields([{name:'image'},{name:'icon'}]), handleUpdateCategory);
router.delete('/categories/:id',handleDeleteCategory);

export default router;