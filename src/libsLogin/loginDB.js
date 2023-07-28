import mongoose from "mongoose";

const loginDB = async () => {
    try {

        await mongoose.connect(process.env.LOGIN_URL)

        console.log('login database connected');

    } catch (error) {
        console.log('error agya',error);
    }
} 

export default loginDB