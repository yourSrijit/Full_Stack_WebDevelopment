import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]    // add enum
    },
    profilePic:{
        type:String,
        default:""
    }
},
{timestamps:true}
);

const User=mongoose.model("User",userSchema);

export default User;