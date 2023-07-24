import mongoose from "mongoose";

const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("database connected")
    } catch (error) {
        console.log("Connection Failed",error);
    }
}

export default mongoDB;


