import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import TokenGenerator from "../utils/jwtAuth.js";

//signup page
export const signup=async(req,res)=>{
    try{ 
        const{ fullName,username,password,confirmPassword,gender }=req.body;
        
        if(password !== confirmPassword){
            return res.status(400).json({
                error:"Password don't match try again!"
            })
        }
        const user=await User.findOne({username});
    
        if(user){
            return res.status(400).json({error:"User alredy exists"})
        }

        //Hash password
        const salt=await bcrypt.genSalt(10);
        const HashPassword=await bcrypt.hash(password,salt);
        //Profile pic from the api https://avatar.iran.liara.run/public/boy
        const profilePic = gender === 'male' ?
            `https://avatar.iran.liara.run/public/boy?username=${username}` :
            `https://avatar.iran.liara.run/public/girl?username=${username}`;
        
        const newUser=new User({
            fullName,
            username,
            password:HashPassword,
            gender,
            profilePic
        });

        if(newUser){
            //Generate JWT Token
            TokenGenerator(newUser._id,res); 
            await  newUser.save();

            res.status(201).json({
              _id:newUser._id,
              fullName:newUser.fullName,
              username:newUser.username,
              ProfilePic:newUser.profilePic
             })
        }
        else{
            res.status(400).json({ error:"Invalid User data"})
        }
      
    }catch(error){
        console.log("Error in signup controllrer ",error.message);
        res.status(500).json({error:"Something went wrong in db server"})
    }
}


//login page
export const login=async(req,res)=>{
   try{
    const {username ,password} =req.body;
    
    const user=await User.findOne({username});
    
    const isPasswordCorrect=await bcrypt.compare(password ,user?.password || "");
    
    if(!user ||!isPasswordCorrect){
        return res.status(500).json({error :"Wrong username or password"}) 
    }
    
    TokenGenerator(user._id,res);
    res.status(201).json({
        _id:user._id,
        fullName:user.fullName,
        username:user.username,
        ProfilePic:user.profilePic
        })
 

   }
   catch(error){
    console.log("Error in login page",error.message);
    res.status(500).json({error:"Something went wrong in db server"})
}
}


//Logout page
export const logout=(req,res)=>{
    try{
        res.cookie("jwtToken","",{
            maxAge:0
        });
        res.status(200).json({message:"Logged out successfully"})

    }
   catch(error){
    console.log("Error in logout page",error.message);
    res.status(500).json({error:"Something went wrong in db server"})

 }
}