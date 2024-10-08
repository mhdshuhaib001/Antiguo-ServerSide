import express,{Request,Response  } from "express";
import { userController } from "../../providers/controllers";
import upload from "../../middilewares/multer";

const route = express.Router()


const handleAddAddress = (req:Request,res:Response)=>userController.addAddress(req,res);
const handleGetAddress = (req:Request,res:Response)=>userController.getAddress(req,res);
const handleGetAllAddress = (req:Request,res:Response)=>userController.getAllAddress(req,res);
const handleUpdateUser = (req:Request,res:Response)=>userController.updateUser(req,res);
const handleGetUser = (req:Request,res:Response)=>userController.getUser(req,res);
const handleUpdateAddress = (req:Request,res:Response)=>userController.updateAddress(req,res);
const handleDeleteAddress = (req:Request,res:Response)=>userController.deleteAddress(req,res);
const handleGetCategory = (req:Request,res:Response)=>userController.getCategory(req,res);
route.post("/address",handleAddAddress)
route.get("/address",handleGetAllAddress)
route.get("/address/:id",handleGetAddress)
route.put("/user", upload.single('profileImage'), handleUpdateUser);
route.get("/user/:id", handleGetUser);
route.put("/address/:id",handleUpdateAddress)
route.delete("/address/:id",handleDeleteAddress)
route.get('/categories',handleGetCategory)
export default route    