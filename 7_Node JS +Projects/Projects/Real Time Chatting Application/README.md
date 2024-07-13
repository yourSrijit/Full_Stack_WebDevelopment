# Complete Chatting App with MERN Stack | JWT, Socket.io, MongoDB 
---
Install Packages in Backend side
```
npm i express dotenv cookie-parser bcryptjs mongoose sockert.io jsonwebtoken
```

### To Encrypt the password use bycryptjs Package

```
import bcrypt from "bcryptjs";

//Hash password
const salt=await bcrypt.genSalt(10);
const HashPassword=await bcrypt.hash(password,salt);


<!-- For Comparing  -->
const isPasswordCorrect=await bcrypt.compare(password ,user.password || "");
```