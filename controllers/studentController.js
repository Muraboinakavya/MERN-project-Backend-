import student from "../models/Student.js";

// Add Student
export const addstudent = async (req, res) => {
  try {
    const studentdata = req.body;

    const newstudent = await student.create(studentdata);

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      student: newstudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Students
export const getstudents = async (req, res) => {
  try {
    const students = await student.find();

    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//updatestudents 
export const updatestudent = async (req, res) => {
  try {
    const updatedstudent = await student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedstudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      student: updatedstudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//deletestudent 
export async function deletestudent(req, res) {
  try {
    const deletedstudent = await student.findByIdAndDelete(req.params.id);

    if (!deletedstudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getstudentbyid = async (req, res) => {
  try {
    const foundstudent = await student.findById(req.params.id);

    if (!foundstudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      student: foundstudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};