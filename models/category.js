const mongoose = require("mangoose");
const { Mongoose } = require("mongoose");

const categorySchema = new mongoose.schema({
    name:{
        type:String,
        trim:true,
        require:true,
        maxlength:32
    }
},{timestamps:true})

module.exports=mongoose.model("Category",categorySchema)