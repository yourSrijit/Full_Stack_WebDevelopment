let express=require("express");
const { jwtMiddleware, jwtTokengenerate } = require("./jwt");
let app=express();

app.get("/",(req,res)=>{
    res.send("This is Home Page");
});
app.post("/jwt",(req,res)=>{
    let payLoad={
        username:"Srijit",
        age:52
    }
    const toke=jwtTokengenerate(payLoad);
    console.log(toke);
    res.status(200).json({toke})
})
app.post("/jwtVerify",jwtMiddleware,(req,res)=>{
    res.json({
        msg:"Sign in successfull"
    })
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})