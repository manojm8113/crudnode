const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    Name:{type:String},
    Email:{type:String,unique:true},
    Phone:{type:Number,unique:true},
    State:{type:String},
    Pincode:{type:Number},
    Course:{type:String},
    Year:{type:Number}
})
module.exports=mongoose.model("studentdata",userSchema)