import mongoose from "mongoose";

async function connectDB() {
    try{
        if(mongoose.connections[0].readyState) return;
        await mongoose.connect(process.env.MONGO_URI);
        console.log('now connected :)');
    } catch(err){
        console.log('failed to connect');
    }
}

export default connectDB;