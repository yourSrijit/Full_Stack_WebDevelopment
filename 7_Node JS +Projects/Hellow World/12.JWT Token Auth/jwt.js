let jwt=require("jsonwebtoken")

let jwtMiddleware=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1];
    if(!token){
        res.status(401).json({
            msg:"Token is not present"
        })
    }
    try{

        let decode=jwt.verify(token,"1234abc");
        req.user=decode;
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({
            msg:"Error occure"
        })
    }
}

let jwtTokengenerate=(userData)=>{
    console.log(userData);
 let token=jwt.sign(userData,"1234abc");
 return token;
}

module.exports={
    jwtMiddleware,
    jwtTokengenerate
}