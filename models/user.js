const mongoose = require("mongoose");
const uuidv1=require('uuid/v1');
const crypto=require('crypto');
const { functions } = require("lodash");



  var userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxlength:32,
        trim:true
    },
    lastname:{
        type:String,
        maxlength:32,
        trim:true
    },
    email:{
        type:String,
        maxlength:32,
        trim: true
    },
    userinfo:{
        type:String,
        trim:true
    },
    encrypt_password:{
        type:String,
        require:true
    },
    salt:String,
    role:{
        type:Number,
        default:0
    },

    purchase:{
        type:Array,
        default : []

    }
    
  },{timestamps:true});

  userSchema.virtual("password")
  .set(function(password){
      this._password= password;
      this.salt= uuidv1();
      this.encrypt_password=getSecuredPassword(password);
  }
  )
  .get(function(){
      return this._password
  }
  )

  
  userSchema.methods={

    authentication : function(password){
        return this.getSecuredPassword(password) == this.encrypt_password
    },
      getSecuredPassword: function(password){
      if(!password){
          return ""
      }else{
          return crypto.createHmac('sha256',this.salt)
          .update(password).digest('hex')
      }
      }

}

  module.exports=mongoose.model("",userSchema)