import app from "./app.js";

import { connectDB } from "./Data/database.js";

 connectDB(); 

app.get("/",(req,res)=>{

    res.send("<h1> Hello now I am fine  <h1/> ");
 })

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is running on port  ${process.env.PORT} in ${process.env.NODE_ENV} Mode  `);
})
