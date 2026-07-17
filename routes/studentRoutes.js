import express from "express";
import { updateStudent
 } from "../controllers/studentController.js";
// router object
const router = express.Router();
// // get students  all
// router.get("/",getStudents);
// // getStudent by id:
// router.get("/:id",getstudentId);
// // post method:
// router.post("/",AddStudent);
router.put("/students",updateStudent)
// router.delete("/:id",DeleteStudent);
 export default router;