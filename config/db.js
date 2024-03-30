import mongoose from "mongoose";
import colors from 'colors';
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://Machagiri:Machagiri123@cluster0.kmtmbbz.mongodb.net/Practice");
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white);
    }
    catch(error){
        console.log(`Error in Mongodb ${error}`.bgCyan.white);
    }
}
export default connectDB;
