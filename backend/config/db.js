import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
    
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI) //Can generate an error
        console.log("MongoDB connected: " + conn.connection.host);
    } catch (error) { //Dynamicall creates an error variable if an error is generated from above
        console.error("Error connecting to MONGODB: " + error.message)
        process.exit(1); //1 means there was an error, 0 means success
    }
}