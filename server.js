// importing libraries and frameworks
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import 'express-async-errors';

//import userRoutes
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import jobsRoute from './routes/jobsRoutes.js'

//connwct MongoDB connection
connectDB();


//configure dotenv
dotenv.config()

//rest object
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
//routes
// app.get('/',(req,res)=>{
//     res.send("<h1>Welcome to Jobify, The best Job search Portal for finding your pasandida Jobs</h1>")
// });
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/job', jobsRoute);
//validation middleware
app.use(errorMiddleware)


app.listen(PORT,()=>{
    console.log(`Node Server Running Successfully in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
}); 