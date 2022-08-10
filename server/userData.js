import mongoose from "mongoose";

const dataSchema=new mongoose.Schema({
    user:String,
    dp:String,
    name:String,
    about:String,   
    dob:Date,
    friends:[String],
    posts:[String]
})

const userData=mongoose.model('userData', dataSchema)
export default userData