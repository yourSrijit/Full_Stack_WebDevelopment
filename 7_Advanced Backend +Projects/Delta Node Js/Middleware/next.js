//if the current middleware funtion does not end the request-response cycle.It must call next() to pass
// the control to the enxt middleare function 

let express=require("express");
let app=express();
let port=4000;

app.use((req,res,next)=>{
    console.log('Hi i am 1st middleware');
    next();
    // after next also execute but at the end
});

app.use((req,res,next)=>{
    console.log('Hi i am 2nd middleware');
    next();
});
app.get("/",(req,res)=>{
    res.send("Hello world");
});
app.get("/srijit",(req,res)=>{
    res.send("Hello world");
});

app.listen(port,()=>{
    console.log('App is running on port no 3000');
})