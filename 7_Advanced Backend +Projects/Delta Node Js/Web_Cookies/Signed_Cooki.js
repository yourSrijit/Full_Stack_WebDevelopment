let express=require("express")
let app=express()
const port=4000;
let cookieparse=require("cookie-parser");
app.use(cookieparse("secretcode"));

app.get("/getsignedcookies",(req,res)=>{
    res.cookie("name","srijit" ,{signed:true})
    res.cookie("madein","india" ,{signed:true})
    res.send("This is cookies")
})
app.get("/",(req,res)=>{
    console.log(req.cookies);
    res.send("Cookies are printed on consol")
})
app.get("/verify",(req,res)=>{
    res.send(req.signedCookies);
})

app.listen(port,()=>{
    console.log('Port is working on port no 4000');
})