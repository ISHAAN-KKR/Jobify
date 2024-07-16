import express from 'express';
import userAuth from "../middlewares/authMiddleware.js";
import { updateUserController } from "../controllers/userController.js";

//router object
const router = express.Router()

//routes
//GET USER || GET


//UPDATE USER || PUT
router.put('/updateuser', userAuth, updateUserController);

export default router