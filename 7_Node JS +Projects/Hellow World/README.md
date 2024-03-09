# NODE Js Bootcamp
This is a Node js Bootcamp from this channel [Hello World](https://youtube.com/playlist?list=PLzjZaW71kMwScTRKzoasdyB1sX-a9EbFp&si=Z4gOZ3LFdENYxxAx)


 `Package.json` :ensure the list of packages with their version.

 `Package-lock.json` :Ensure detailed of every package installe with version,sub dependencies.

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

## 5.METHODS
  - GET -> request data from the server
  - POST
  - PATCH
  - DELETE
