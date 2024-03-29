import { User } from "../Models/users.js";
import bcrypt from 'bcrypt'
import {generateCookie} from '../utils/feature.js' 
import jwt from "jsonwebtoken";

export const userRegister=async(req,res)=>{
    const {name,email,password}=req.body

    let user=await User.findOne({email});
    if(user) return req.status(404).json({
        success:true,
        message:"user already exist.."
    })

    const hashPassword=await bcrypt.hash(password,10)

    user=await User.create({
        name,
        email,
        password:hashPassword
    })
    generateCookie(user,res,201,"user register successfully..")
}

export const userLogin=async(req,res)=>{
    const {email,password}=req.body

    let user=await User.findOne({email});
    if(!user) return res.status(400).json({
        success:false,
        message:"user not exist.."
    })

    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch) return res.status(400).json({
        success:false,
        message:"invalid credentials.."
    })
    generateCookie(user,res,201,`Welcome! ${user.name}`)
}

export const userLogout=(req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"logout successfully.."
    })
}

export const getMyProfile=(req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user
    })
}

export const getUserById=async(req,res)=>{

    const id=req.params.id;
    const user=await User.findById(id);

    if(!user) return res.status(404).json({
        success:false,
        message:"invalid ID"
    })
    res.json({
        success:true,
        message:"this is single user ",
        user
    })

}

