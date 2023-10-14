import { Task } from "../Models/task.js";
import ErrorHandler from "../middlewares/error.js";
export const newTask = async (req,res,next)=>{
     try{

      const {title,description} = req.body;

      await Task.create({
       title,
       description,
       User:req.user
      }); 
   
      res.status(201).json({
       success:true,
       message:"task is created successfully "
      });
     }catch(error){
      next(error);
     }
}

export const getAllTask = async (req,res,error) =>{
   try{
      const userId  = req.body._id;

      const task = await  Task.find({user:userId});
      
      res.status(201).json({
           success:true,
           task
      })
   }catch(error){
      next(error);
   }
}


export const updateTask = async (req,res,next) =>{
    try{
      const {id} = req.params;

      const task = await Task.findById(id);
      task.isCompleted = !task.isCompleted;
      await task.save();
 
      res.status(200).json({
         success:true,
         message:"task is updated successfully "
      })
    }catch(error){
      next(error)
    }
}
export const deleteTask = async (req, res,next) => {
    try {
       const { id } = req.params;
 
       console.log("hi  11");
       const task = await Task.findById(id);
 
       if (!task) {
          return next(new ErrorHandler("Task is not found",404));
       }
 
       await task.deleteOne();
 
       console.log("hi  33");
 
       return res.status(200).json({
          success: true,
          message: "Task deleted successfully",
       });
    } catch (error) {
       console.error(error);
       return res.status(500).json({
          success: false,
          message: "Internal Server Error",
       });
    }
 };