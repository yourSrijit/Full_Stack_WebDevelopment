import jwt from "jsonwebtoken";

const TokenGenerator=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    res.cookie("jwtToken",token,{
        maxAge:15 * 24 * 60 * 60 *1000, //ms
        httpOnly:true,     //prevent XSS attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks cross-site request forgery arracks
        secure: process.env.NODE_ENV != "development"
    })

}

export default TokenGenerator;