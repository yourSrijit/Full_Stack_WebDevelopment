let express=require("express");
let app=express();
let port=4000;

app.get("/err",(req,res)=>{
    a=a;
})
app.use((err,req,res,next)=>{
    console.log("Eror handeler 1");
    next(err);
})
app.use((err,req,res,next)=>{
    console.log("Eror handeler 2");
    next(err);
})
app.listen(port,()=>{
    console.log('App is running on port no 3000');
})