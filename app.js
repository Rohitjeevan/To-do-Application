import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { register } from "./controller/user.js";
import cookieParser from "cookie-parser";
import { errormiddleware } from "./middlewares/error.js";
import cors from "cors"

const app =  express();

config({
    path: "./data/config.env",
});

//using middleware 

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:[process.env.FRONTEND_URL],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    })
)
//using routes 

app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);


//error handling 

app.use(errormiddleware)
export default app;




