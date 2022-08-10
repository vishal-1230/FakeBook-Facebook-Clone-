import mongoose from "mongoose";

const schema=new mongoose.Schema({
    user:String,
    pswd:String
})

const userpass=mongoose.model('userPass', schema)
export default userpass