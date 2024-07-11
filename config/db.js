import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config()

const connectDB = async () => {
    const uri = process.env.MONGO_URL;
    try{
        const conn = await mongoose.connect(uri);
        console.log(`connected to MongoDb ${mongoose.connection.host}`.bgMagenta.white);
    }
    catch(error){
        console.log(`MongoDB error ${error}`.bgRed.white);
    }
};

export default connectDB;