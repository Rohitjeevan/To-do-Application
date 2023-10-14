import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name :String,
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        select:true
    },
    createdAt:{
        type:String,
        default:Date.now(),
    }
});


export const User = mongoose.model("User",schema);