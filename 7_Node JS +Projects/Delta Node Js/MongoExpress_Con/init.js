const mongoose = require('mongoose');
const Chat=require("./models/chat.js")
main()
.then(()=>{
    console.log('Connection successfull');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  }

  let allChats=[
    {
        from:"Srijit",
        to:"Kamalika",
        msg:"can we go for dinner?",
        created_at:new Date()
    },
    {
        from:"adam",
        to:"adamgf",
        msg:"can we go for fun?",
        created_at:new Date()
    },
    {
        from:"bob",
        to:"bobgf",
        msg:"can we go for date?",
        created_at:new Date()
    },
    {
        from:"bisthu",
        to:"rumi",
        msg:"send me the notes?",
        created_at:new Date()
    },
    {
        from:"mark",
        to:"markGf",
        msg:"can we go for dinner?",
        created_at:new Date()
    },
    {
        from:"Smith",
        to:"black wideo",
        msg:"hlelloo?",
        created_at:new Date()
    },
    {
        from:"tony",
        to:"peper",
        msg:"where is my iron suit",
        created_at:new Date()
    },
  ]

Chat.insertMany(allChats);

