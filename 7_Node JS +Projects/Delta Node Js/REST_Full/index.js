let express =require("express");
let app=express();
let port=3000;
const path=require("path");
const{ v4:uuidv4 }=require('uuid');
const methodOverride=require("method-override");

app.use(express.urlencoded({extends:true}));
app.use(methodOverride("_method"));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")))

let posts=[ 
    {
        id:uuidv4(),
        username:"yoursrijit",
        content:"i love coding"
    },
    {   id:uuidv4(),
        username:"kamalika",
        content:"i love food"
    },
    {   id:uuidv4(),
        username:"bishtu",
        content:"i love webDev"
    }
];

app.get("/posts",(req,res)=>{
res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
    });

 app.post("/posts",(req,res)=>{
    let{ username,content }=req.body;
    let id=uuidv4();
    posts.push({id, username, content });
    res.redirect("/posts");
    });

    app.get("/posts/:id",(req,res)=>{
        let{id}=req.params;
    let post=posts.find((p)=> id===p.id);
     res.render("view.ejs" ,{post});
    });

    app.patch("/posts/:id",(req,res)=>{
    let{ id }=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=> id===p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
    });

    app.get("/posts/:id/edit" ,(req,res)=>{
        let{ id }=req.params;
        let post=posts.find((p)=> id===p.id);
        res.render("edit.ejs",{post});
    });

    
app.listen(port,()=>{
    console.log('listening to port :3000');
});