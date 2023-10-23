import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.MOGODB_CONNECTION_STRING;
export const coonectToMongoDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("connection to mongodb successful".bgCyan);
    } catch (error) {
        console.log(`Connection Faild: ${error.message} `.bgCyan);
    }
};

