let express=require("express")
let app=express()
const port=4000;
let cookieparse=require("cookie-parser");
app.use(cookieparse());

app.get("/getcookies",(req,res)=>{
    res.cookie("name","srijit")
    res.cookie("madein","india")
    res.send("This is cookies")
})
app.get("/",(req,res)=>{
    console.log(req.cookies);
    res.send("Cookies are printed on consol")
})

app.listen(port,()=>{
    console.log('Port is working on port no 4000');
})