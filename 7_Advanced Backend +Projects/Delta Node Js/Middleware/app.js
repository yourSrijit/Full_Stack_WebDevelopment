let express=require("express");
let app=express();
let port=8000;

app.use((req,res)=>{
    res.send("Hi iam srijit")
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