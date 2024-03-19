let express=require("express")
let app=express();
const mongoose=require("./db")
let port=3000;

const bodyParser=require("body-parser")
app.use(bodyParser.json()); //storein req.body()

const User=require("./model/Person");

app.get("/",(req,res)=>{
    res.send("Hi srijit")
});

app.post("/user",async (req,res)=>{
    const data= req.body;
    const newUser=new User(data);
    await newUser.save()
    .then(()=>{
        res.status(200).json({
            msg:'Successfully Stored in DB'
        })
    })
    .catch(()=>{
        res.status(500).json({
            msg:"Database not stored in DB"
        })
    })
})

app.get("/user",async (req,res)=>{
    const data=await User.find();
    res.json({
        data
    })
})

app.listen(port,()=>{
  console.log('Server is runnig on port 3000');  
})
