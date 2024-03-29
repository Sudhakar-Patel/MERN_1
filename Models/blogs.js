import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    imgURL:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    creditedAt:{
        type:Date,
        default:Date.now
    }
})

export const Blog=mongoose.model("Blog",blogSchema);