import express from "express";
import studentRoutes from "./routes/studentRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors";
const app = express();

 dotenv.config();
 connectDB();
// it convert the Json format into json-object(middleware)
app.use(express.json());
app.use(cors());

// call connection  

app.use("/students",studentRoutes);
// app.use("/home",studentRoutes);
app.listen(8000,()=>{
    console.log("server is started with 8000")
})