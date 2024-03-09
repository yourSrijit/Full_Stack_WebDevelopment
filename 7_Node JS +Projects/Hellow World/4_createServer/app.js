let express=require("express");
let app=express();
let port=3000;
app.get("/",(req,res)=>{
 res.send("Hoi srijit");
})

app.listen(port,()=>{
    console.log('Port is listenig in 3000');
})