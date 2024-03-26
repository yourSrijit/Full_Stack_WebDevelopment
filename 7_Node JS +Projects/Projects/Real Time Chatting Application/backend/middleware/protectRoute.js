import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const protectRoute = async (req, res, next) => {
    try{
        const token=req.cookie.jwt;
        if(!token){
            return res.status(401).json({message: "Not authorized, no token"});
        }
        const decode=jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({message: "Not authorized, token failed"});
        }

        console.log(decode);

        const user=await User.findById(decode.userId).select("-password");
        if(!user){
            return res.status(401).json({message: "Not authorized, no user found"});
        }
        req.user=user;
        next();

    }catch(error){
        console.error(error);
        res.status(401).json({message: "Not authorized, token failed"});
    }
}

export default protectRoute;