import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors';
//Configure env
dotenv.config()

//Database 
connectDB()
// rest object
const app=express();

//middlewares 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'));

//Routes
app.use('/api/v1/auth',authRoutes);
//rest api


//PORT

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`Serving in mode on ${process.env.DEV_MODE} running on port http://localhost:${PORT}`.bgCyan.white);
})