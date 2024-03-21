let express =require("express");
let app=express();
let path=require('path');
let port =3000;


app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
// Interpolation Syntax  <%= value %>
//Passing data to EJS
app.get("/rolldice",(req,res)=>{ 
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
});

//Instagram EJS
app.get("/ig/:username",(req,res)=>{ 
    let {username}=req.params;
    res.render("instagram.ejs",{username});
});
app.listen(port,(req,res)=>{
    console.log(`Listening on port no ${port}`);
})
