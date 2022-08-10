import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postedBy:String,
    postedAt:{
        type:Date,
        default:(new Date()).getTime()
    },
    url:String,
    likes:Number,
})

export default mongoose.model('posts', postSchema)