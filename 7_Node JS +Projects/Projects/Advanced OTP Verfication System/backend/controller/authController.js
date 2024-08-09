import {User} from '../models/userModel.js'
import bcrypt from "bcryptjs"
import { verificationCodeGenerator } from '../utils/verificationCodeGenerator.js';
import { TokenGenerator } from '../utils/TokenGenerator.js';
import { sendVerificationEmail, sendWelcomeEmail,sendPasswordResetEmail,sendResetSuccessEmail } from '../mailtrap/emails.js';
import crypto from "crypto"



export const signup=async(req,res)=>{
    const {email,password,name}=req.body;

    try
    {
    if(!email || !password ||!name){
    throw new Error("All fields are required");
    }
    if(password.length<4){
        throw new Error("Password should be more than 4 character")
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

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please fill all the fields" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        // Generate a token for the user
        await TokenGenerator(user._id, res);

        // Update last login time
        user.lastLogin = new Date();
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            user: {
                ...user.toObject(),
                password: undefined // Exclude the password from the response
            }
        });

    } catch (error) {
        console.log("Error in login:", error.message);
        res.status(500).json({ success: false, message: "Something went wrong during login" });
    }
};

export const logout=async(req,res)=>{
    res.clearCookie("jwtToken");
    res.status(200).json({success:true,message:"Logged out successfully"})   
}

export const forgotPassword=async(req,res)=>{
    const {email} =req.body;
    try{
    const user=await User.findOne({email});
    if(!user){
       return res.status(400).json({success:false,message:"User not found"})
    }

    //Generate rset token
    const resetToken=crypto.randomBytes(20).toString('hex');
    const resetTokenExpireAt=Date.now() + 1*60*60*1000; //1 houre
    user.verificationToken=resetToken;
    user.verificationTokenExpireAt=resetTokenExpireAt;
    await user.save();
    
    //send email
    await sendPasswordResetEmail(user.email,`${process.env.CLIENT_URL}/reset-password/${resetToken}`)
    res.status(200).json({success:true,message:"Password reset link send to your email"})
    console.log("Forget password send successfully");
    }
    catch(error){
        console.log("Something went wrong in forgot password");
        res.status(400).json({success:false,message:"Password reset link sending issue"})     
    }
}

export const resetPassword=async(req,res)=>{
    try{
        const {token}=req.params;
        const {password}=req.body;
        if(password.length<4){
            throw new Error("Password should be more than 4 character")
        }
        const user=await User.findOne({
            verificationToken:token,
            verificationTokenExpireAt: {$gt:Date.now()}
        })
        if(!user){
            return res.status(400).json({success:false,message:"Invalid or expired reset token"})
        }
        //update password
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt)
        
        user.password=hashPassword;
        user.verificationToken=undefined,
        user.verificationTokenExpireAt=undefined
        await user.save();
        await sendResetSuccessEmail(user.email);

        console.log("Succesfully done reset password");
        res.status(200).json({success:true,message:"Succesfully done reset password"})
        
    }catch(error){
        console.log("Something went wrong while doing reset password");
        res.status(200).json({success:false,message:"Something went wrong while doing reset password"})
    }
   
}

export const checkAuth=async(req,res)=>{
    try{        
        const user=await User.findById(req.userId).select("-password");
                
        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }
        res.status(200).json({success:true,user})

    }catch(error){
                console.log("Error in checkAuth",error);
                res.status(400).json({success:false,message:error.message})
    }
    
}