import jwt from "jsonwebtoken"

const verifyToken=async(req,res,next)=>{
 const token=req.cookies.jwtToken;
 if(!token){
   return res.status(401).json({success:false,message:"Unauthorized - no token provided"});
 }
 try{
    const decode=jwt.verify(token,process.env.JWT_SECRET);
    if(!decode){ 
        return res.status(401).json({success:false,message:"Unauthorized - invalid token"});
    }
   //  console.log(decode);
    req.userId=decode.userId;
    await next();
    

 }catch(error){
    console.log("Error in verify token",error);
    return res.status(500).json({success:false,message:"Server error"})
    
 }
}

export default verifyToken