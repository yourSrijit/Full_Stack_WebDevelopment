const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/',(req,res)=>{
   res.send("Hello Jiiiiiii")
})

app.post('/api/cars',(req,res)=>{
    const{name,brand}=req.body;
    console.log(name+" "+brand);
    res.send("Successfulle")
})
app.listen(8000,()=>{
    console.log("Server is stared");
})