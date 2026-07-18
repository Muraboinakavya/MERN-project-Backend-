import express from "express";
import { addstudent,getstudents,updatestudent ,deletestudent,getstudentbyid
 } from "../controllers/studentController.js";
// router object
const router = express.Router();
// // get students  all
// router.get("/",getStudents);
// // getStudent by id:
// router.get("/:id",getstudentId);
// // post method:
// router.post("/",AddStudent);
router.put("/:id",updatestudent );
router.get("/", getstudents);
router.post("/",addstudent );
router.delete("/:id",deletestudent);
router.get("/:id",getstudentbyid)
// router.delete("/:id",DeleteStudent);
 export default router;
