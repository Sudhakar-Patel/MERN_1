import jwt from "jsonwebtoken";

export const generateCookie=(user,res,statusCode=200,message)=>{
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)

    res.status(201).cookie("token",token,{
        sameSite:process.env.NODE_ENV==="Development"? "lax":"none",
        secure:process.env.NODE_ENV==="Development"? false:true,
        httpOnly:true,
        maxAge:10*60*1000,
    }).json({
        success:true,
        message,
    })
}