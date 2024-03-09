let express=require("express");
let app=express();
const port=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let{username,password}=req.query;
 res.send(`Standard GET response Welcome ${username}`);
});

app.post("/register",(req,res)=>{
    let{username,password}=req.body;
    console.log(req.body);
    res.send(`Standard POST response Welcome ${username}`);
   });


app.listen(port,()=>{
    console.log(`Listening to port no ${port}`);
});