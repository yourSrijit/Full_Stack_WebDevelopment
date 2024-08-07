import jwt from "jsonwebtoken";

export const TokenGenerator=(userId,res)=>{
    const jwtsecret=process.env.JWT_SECRET;
    const token=jwt.sign({userId},jwtsecret,{
        expiresIn:'7d'
    })

    res.cookie("jwtToken",token,{
        maxAge:7 * 24 * 60 * 60 *1000, //ms
        httpOnly:true,     //prevent XSS attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks cross-site request forgery arracks
        secure: process.env.NODE_ENV === "production"
    })
    return token;
} 