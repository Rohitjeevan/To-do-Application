import mongoose from "mongoose";




export const connectDB = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2",{
        dbname : "To-do",
    }
    )
    .then (() => console.log("Database is connected "))
    .catch((e) => console.log(e));
}
