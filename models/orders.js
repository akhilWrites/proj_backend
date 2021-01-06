const mongoose=require("mangoose");
const { model } = require("mongoose");
const {ObjectId} =mangoose.schema;

const ProductsInCartSchema=new mongoose.schema({
    product:{
        type:ObjectId,
        ref : "Product"
    },
    name:String,
    count: Number,
    price: Number
})

const OrderSchema=new mongoose.schema({
    products:[ProductsInCartSchema],
    transaction_id:{

    },
    amount:Number,
    address:String,
    updatedDate : Date,
    user: {
        type:ObjectId,
        ref: "User"
    }
  
    
},{timestamps:true})

const ProductsInCart = mongoose.model("ProductsInCart",ProductsInCartSchema);
const Order =mongoose.model("Order",OrderSchema);

module.exports ={Order,ProductsInCart}