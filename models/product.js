const { truncate } = require("lodash");
const mongoose=require("mangoose");
const {ObjectId} =mangoose.schema;

const productSchema = new mongoose.schema({
    name:{
        type:String,
        require:true,
        trim:true,
        maxlength:32
    },
    description:{
        type:String,
        trim:true,
        require:true,
        maxlength:32
    },
    price:{
        type:Number,
        maxlength:32,
        require:true,
        trim:true
    },
    category:{
        type:ObjectId,
        ref:"Category",
        require:true
    },
    stock:{
        type:Number
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer,
        contentType:String
    }
},{timestamps:true})

module.exports=mongoose.model("Product",productSchema)