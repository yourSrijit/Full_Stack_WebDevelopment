const express=require("express");
const app=express();
// console.dir(app);  

// To get the info or listed from the clien request there have a listen method
let port=3000;
app.listen(port,()=>{
    console.log(`App is listening on port no ${port}`);
});


app.use((req,rep)=>{
    console.log("Request received");
    rep.send("This is a basic Response");
}); 

app.get("/",(req,res)=>{ 
    console.log('You connected to rout path ');
});

app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    let html=`<h1> Welcome in the page of ${username} of id ${id} </h1>`;
    res.send(html)
});


// app.get("/search",(req,res)=>{
//     console.log('You connected to search path');
// });
// app.get("*",(req,res)=>{
//     console.log('You connected to wrong path');
// })


// Query String 
app.get("/search",(req,res)=>{
    let{q}=req.query;
    res.send(`<h1> Search results for query ${q}</h1>`);
})