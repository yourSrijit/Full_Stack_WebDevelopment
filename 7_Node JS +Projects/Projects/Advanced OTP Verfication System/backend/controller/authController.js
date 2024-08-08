import {User} from '../models/userModel.js'
import bcrypt from "bcryptjs"
import { verificationCodeGenerator } from '../utils/verificationCodeGenerator.js';
import { TokenGenerator } from '../utils/TokenGenerator.js';
import { sendVerificationEmail, sendWelcomeEmail } from '../mailtrap/emails.js';


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

export const verifymail = async (req, res) => {
    const { code } = req.body;

    try {
        // Find the user with the provided verification token and check if it is still valid
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpireAt: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
        }

        // Mark user as verified and clear the verification token and its expiration
        if(user){

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpireAt = undefined;
        }
        

        await user.save();

        // Send a welcome email to the user
        await sendWelcomeEmail(user.email, user.name);

        res.status(200).json({
            success: true,
            message: "Email verified successfully",
            user: {
                ...user.toObject(), // Use toObject() to get a plain JS object
                password: undefined // Exclude the password from the response
            }
        });
    } catch (error) {
        console.log("Something went wrong in the verification process:", error.message);
        res.status(500).json({ success: false, message: "Something went wrong in the verification process" });
    }
};


export const login=async(req,res)=>{
    const {email,password} =req.body;
    if(!email || !password){
        return res.status(500).json({success:false,message:"Please fill all the fields"})
    }
    
    const response=await User.findOne({
        email:email
    })
    if(!response){

    }
}
export const logout=async(req,res)=>{
    res.clearCookie("jwtToken");
    res.status(200).json({success:true,message:"Logged out successfully"})
    
}