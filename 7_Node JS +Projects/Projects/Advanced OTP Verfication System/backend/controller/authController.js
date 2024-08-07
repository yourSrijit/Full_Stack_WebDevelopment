import {User} from '../models/userModel.js'
import bcrypt from "bcryptjs"
import { verificationCodeGenerator } from '../utils/verificationCodeGenerator.js';
import { TokenGenerator } from '../utils/TokenGenerator.js';
import { sendVerificationEmail } from '../mailtrap/emails.js';


export const signup=async(req,res)=>{
    const {email,password,name}=req.body;

    try
    {
    if(!email || !password ||!name){
    throw new Error("All fields are required");
    }
    const user=await User.findOne({email});
    if(user){
        return res.status(400).json({success:false,message:"User already exists"})
    }
    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);
    // console.log(hashPassword);
    const verificationToken=verificationCodeGenerator();
    const newUser=new User({
        name,
        email,
        password:hashPassword,
        verificationToken,
        verificationTokenExpireAt:Date.now() + 24*60*60*1000 //24 hours
    })

    if(newUser){
        const token=await TokenGenerator(newUser._id,res);

        await sendVerificationEmail(newUser.email,verificationToken);

        await  newUser.save();
        res.status(201).json({
         success:true,
         message:"User created successfully",
          user:{
          ...newUser._doc,
          password:undefined,
        }
         })
    }
    else{
        res.status(400).json({ error:"Invalid User data"})
    }
    
    }
    catch(error){
        console.log("Error in signup controllrer ",error.message);
        res.status(500).json({error:error.message})
    }
    
    
}
export const login=async(req,res)=>{
    
}
export const logout=async(req,res)=>{
    
}