import { User } from "../Models/users.js";
import { Blog } from "../Models/blogs.js";
import jwt  from "jsonwebtoken";

export const isAuthenticated=async(req,res,next)=>{
    const {token}=req.cookies

    if(!token) return res.status(400).json({
        success:false,
        message:"please login..."
    })

    const decode=jwt.verify(token,process.env.JWT_SECRET)
    console.log("decoded data ",decode)

    req.user=await User.findById(decode._id)
    next();
}