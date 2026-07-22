import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    studentName:{
      type:String,
      required:true,
      trim:true
    },
   email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
   },
   phone:{
    type:String,
    required:true,
    unique:true,
    maxlength:10,
    minlength:10,
   },
    Cgpa:{
        type:Number,
        required:true,
        min:0,
        max:10
    },
    // Databse stores the image fielname or relative path not image in database
    image:{
        type:String,
        default:""
    }
},{
    timestamps:true
})
// Model:represent a Mongodb collection and used to perform CRUD operations 
const Student = mongoose.model(
    "Student",
    studentSchema
);
export default Student;