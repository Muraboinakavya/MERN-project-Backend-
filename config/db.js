import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "node:dns"
dns.setDefaultResultOrder("ipv4first")
dns.setServers(["8.8.8.8","1.1.1.1"])
// load.env variable
dotenv.config();
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB is connected")
    }catch(error){
        console.log("Database connection fail")
        console.log(error.message)

    }

}
export default connectDB;