let CustomErrClass=require("./CustomErrClass");
let express=require("express");
let app=express();

let port=4000;


app.get("/api",(req,res,next)=>{
    let {token }=req.query;
    if(token ==="system"){
        res.send("Successful");
        next();
    }
    else{
        throw new CustomErrClass(401,"Access Denied");
    }
})
app.get("any",(err,res,res,next)=>{
    abcd=abcd;
    
})

app.use((err,req,res,next)=>{
 let {status=500,message="some error occurred"}=err;
 res.status(status).send(message);
});
app.listen(port,()=>{
    console.log('App is running on port no 3000');
})