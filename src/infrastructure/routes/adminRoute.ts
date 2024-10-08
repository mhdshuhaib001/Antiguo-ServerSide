import express from 'express';
import { Request, Response } from 'express-serve-static-core';
import {adminController} from '../../providers/controllers'; 

const router = express.Router();

const handleGetAllUser = (req: Request, res: Response) => adminController.fetchUsers(req, res);
const handleUserBlockAndUnblock = (req:Request,res:Response) => adminController.updateUserActiveStatus(req,res);


router.get('/get-user', handleGetAllUser);
router.post('/user-status',handleUserBlockAndUnblock)
export default router;
