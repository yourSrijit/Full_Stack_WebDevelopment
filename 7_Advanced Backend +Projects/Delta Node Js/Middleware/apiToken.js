//if the current middleware funtion does not end the request-response cycle.It must call next() to pass
// the control to the enxt middleare function 

let express=require("express");
let app=express();
let port=4000;


app.use("/api",(req,res,next)=>{
    let {token }=req.query;
    if(token ==="giveaccess"){
        console.log("Successful")
        next();
    }
    res.send("Access Denied");
})
app.use((req,res,next)=>{
    res.send("Successful");
    next();
    // after next also execute but at the end
});

app.listen(port,()=>{
    console.log('App is running on port no 3000');
})