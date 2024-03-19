# NODE Js Bootcamp
This is a Node js Bootcamp from this channel [Hello World](https://youtube.com/playlist?list=PLzjZaW71kMwScTRKzoasdyB1sX-a9EbFp&si=Z4gOZ3LFdENYxxAx)


 `Package.json` :ensure the list of packages with their version.

 `Package-lock.json` :Ensure detailed of every package installe with version,sub dependencies.

---

 ## 4. Creating Server
 fs and os
 ```
let fs=require("fs");
let os=require("os");

let user=os.userInfo();
console.log(user);

fs.appendFile('temp.txt',"Hi Srijit ",()=>{
    console.log('Successfully Write in the file');
})
 ```
How to Start a server
 ```
let express=require("express");
let app=express();
let port=3000;
app.get("/",(req,res)=>{
 res.send("Hlow srijit");
})

app.listen(port,()=>{
    console.log('Port is listenig in 3000');
})
```
---

## 5.METHODS
  - GET -> request data from the server
  - POST
  - PATCH
  - DELETE
---

## 7. MongoDb connection with Nodejs
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

`Informational responses (100 – 199)`
`Successful responses (200 – 299)`
`Redirection messages (300 – 399)`
`Client error responses (400 – 499)`
`Server error responses (500 – 599)`

### How to connect with MongoDB
```
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/hotel');
  ///here hotel is the DB name

}

main().
then((resolve)=>{
    console.log('Mongodb Connection Successfull');
})
.catch(err => console.log(err));
module.exports=mongoose;
```

1.First create a Schema for the DB 
2.Then create Model for theat
3.Then Try to connect

### Create Model and Schema
```
const { mongoose, mongo, model } = require("mongoose")

let userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],  //here enum make sure only this people allow to enter into db
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

let User=mongoose.model('User',userSchema);
module.exports=User;
```

### body-parser & bodyParser.json()
this is a middleware library for Express.js
it is used to to parse ans extract the body of incoming HTTP request
`bodyParser.json()` automatically parse the JSON data from the request body and convert it into a javascript object.whcih is then stored in the `req.body`

```
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
```

```
HTTP METHODS
POST      -> Create
GET       -> Read
PUT/PATCH -> Update
DELETE    -> dELETE
```