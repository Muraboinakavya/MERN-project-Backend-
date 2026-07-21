import student from "../models/Student.js";

// Add Student
export const addstudent = async (req, res) => {
  try {
    const sortfield = req.query.sort ||"studentName";
    const order = req.query.order ||"asc";
    const sortOrder = order === "asc"?1: -1
    const page = Number(req.query.page);
    const limit = Number(req.query.limit) || 10;
    const skip = (page-1)*limit;
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
// export const getstudents = async (req, res) => {
//   try {
//     const students = await student.find();

//     res.status(200).json({
//       success: true,
//       count: students.length,
//       students,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
export const getstudents = async (req, res) => {
  try {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit) || 10;
    const skip = (page-1)*limit ;
    //counting students from MOngoDb
    const totalstudents = await Student.countDocuments();
    const totalpages = Math.ceil(totalStudents/limit)
    const students = await student.find()
    .sort{

    }
    .skip(skip) //skip the privious records
    .limit(limit);//return only required reports


    res.status(200).json({
      success: true,
      count: students.length,
      students,
      currentPage:page,
      totalPages,
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
export const searchstudents = async(req,res) =>{
  try{

  
  const search = req.query.q || "";
  const students = await Student.find({
    studentName:{
      // matches the student data
      $regex:search,
      // ignore upper case and lower case
      $options:"i"
    }

  
  })
  res.status(200).json({
    success:true,
    students
  });
}
catch(error){
  res.status(500).json({
     success: false,
      message: error.message,
    });
  }
};
