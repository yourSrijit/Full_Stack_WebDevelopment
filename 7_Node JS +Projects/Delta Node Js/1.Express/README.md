# Creating server using Express
```
const express=require("express");
const app=express();

// To get the info or listed from the client request there have a listen method
let port=3000;
app.listen(port,()=>{
    console.log(`App is listening on port no ${port}`);
});


app.use((req,res)=>{
    console.log('Request received');
})

app.get("/",(req,res)=>{
    console.log('You connected to rout path ');
});

app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    let html=`<h1> Welcome in the page of ${username} of id ${id} </h1>`;
    res.send(html)
});

app.get("/search",(req,res)=>{
    let{q}=req.query;
    res.send(`<h1> Search results for query ${q}</h1>`);
})
```

- Port is a logical endpoint of a logical connection  
- app.use() run all time for all kind of request post get 

We also can create route using

## Path Parameter
```
app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    let html=`<h1> Welcome in the page of ${username} of id ${id} </h1>`;
    res.send(html)
});
```
Here username or id act like a variable.It hold the variable from the url and store into `req.params`

## Query String
It hold the query send bt `?q=orange` in the url .
orange will store inside `req.query`.