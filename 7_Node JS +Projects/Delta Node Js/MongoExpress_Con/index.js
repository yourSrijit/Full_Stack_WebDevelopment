let express=require("express")
let app=express();
let port=3000;
let path=require("path");
const mongoose = require('mongoose');
const Chat=require("./models/chat.js")
const methodOvrride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOvrride("_method"));

main()
.then(()=>{
    console.log('Connection successful');
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }


app.get(("/"),(req,res)=>{
    res.send(("Hello srijit"));
})

app.get("/chats",async (req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats})
})
//new route
app.get("/chats/new",async (req,res)=>{
  res.render("new.ejs");
})
//Creating new chat 
app.post("/chats",(req,res)=>{
  let{from,msg,to}=req.body;
  let newChat=new Chat({
    from:from,
    msg:msg,
    to:to,
    created_at:new Date()
  });
  console.log(newChat);
  newChat
  .save()
  .then((res)=>{
    console.log('Saving successful');
  })
  .catch((err)=>{
    console.log('Somthing went wrong');
  })
  res.redirect("/chats");
})

//Edit the chat route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//update route
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedMsg=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidator:true,new:true})
    console.log(updatedMsg);
    res.redirect("/chats");
})

// Update route
// app.put("/chats/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { msg: newMsg } = req.body;
//         const updatedMsg = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
//         console.log(updatedMsg);
//         res.redirect("/chats"); // Redirect to the chats page after successful update
//     } catch (error) {
//         console.error(error);
//         res.redirect("/chats"); // Redirect to the chats page even if there's an error
//     }
// });


//Destroy Route
app.delete("/chats/:id",async (req,res)=>{
    let {id} =req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})


app.listen(port,()=>{
    console.log('App is listening in port no 3000');
})