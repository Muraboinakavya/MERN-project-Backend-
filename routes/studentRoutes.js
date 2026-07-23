import express from "express";
import {  addStudent,getStudents, updateStudent ,deleteStudent, getStudentsById ,searchStudents
 } from "../controllers/studentController.js";
 import upload from  "../middleware/upload.js";
// router object
const router = express.Router();
router.get("/search",searchStudents);
// // get students  all
// router.get("/",getStudents);
// // getStudent by id:
// router.get("/:id",getstudentId);
// // post method:
// router.post("/",AddStudent);
router.put("/:id", updateStudent );
router.get("/", getStudents);
// Add student with image upload
router.post("/",upload.single("image"), addStudent );
router.delete("/:id",deleteStudent);
router.get("/:id", getStudentsById)
// router.delete("/:id",DeleteStudent);
//  router.get("/search",searchStudents);
 export default router;
