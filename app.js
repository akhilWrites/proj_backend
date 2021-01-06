require('dotenv').config;
const mongoose=require("mongoose");
const express =require("express");
const app=express();
const bodyParser =require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require("cors");

const authRoutes= require("./routes/auth");



app.use(bodyParser.json());
// app.use(cookieParser.json());
// app.use(cors.json());


const port= process.env.PORT || 8005;

// DB CONNECTION
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology :true,
    useCreateIndex:true
}).then(()=>{
    console.log("**********DB CONNECTED*******************")
})


//MY ROUTUES

app.use("/api",authRoutes)



app.listen(port,() => {
    console.log(`App is running at ${port}`)
})