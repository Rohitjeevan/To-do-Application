import express from "express";
import { deleteTask, getAllTask, newTask, updateTask } from "../controller/task.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();


router.post("/newtask",isAuthenticated,newTask);
router.get("/all",isAuthenticated,getAllTask);
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask);


export default router;