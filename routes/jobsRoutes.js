import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { createJobsController, getJobsController } from '../controllers/jobsController.js';


//router object
const router = express.Router();

//routes
//CREATE JOBS || POST
router.post('/createjobs', userAuth, createJobsController);

//GET JOBS || GET
router.post('/getjobs', userAuth, getJobsController);

export default router