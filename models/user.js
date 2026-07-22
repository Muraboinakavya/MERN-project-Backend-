import mongoose from "mongoose";
const user=new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true,
        unique:true
    },
    password:{
        type:"String",
        required:true
    },
    role:{
        type:"String",
        enum:["admin","student"],
        default:"studeent"
    },
    timestamps:true

    }
