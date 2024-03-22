# JSON WEB TOKEN
JWT consists of three parts `1.Header 2.Payload 3.Signature`  .They are typically encoded and signed using cryptographic alogo.

## Authentication Workflow



## Function used in JWT

- jwt.sign() is used to generate a new JWT token basec on the provide playload and options.It take 3 parameter payload secretKey amd options.

- jwt.verify() this funcion need the token and the secretKey
- jwt0decode() this will also decode without the secretKey

### Generate TokeN using `Sing()`
```
let jwt=require("jsonwebtoken")
let jwtTokengenerate=(userData)=>{
    console.log(userData);
 let token=jwt.sign(userData,"1234abc");
 return token;
}

```
### VERIFY TOKEN USING `SIGN()`
```


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
```

