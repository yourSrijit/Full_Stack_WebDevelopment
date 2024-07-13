import mongoose from "mongoose";
const conversationSchema=new mongoose.Schema({
    participants:[
       { 
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    ],
    message:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]
    },
]
  
},
{timestamps:true}  //createdAt and updateAt
)

const Conversation=mongoose.model("Conversation",conversationSchema);
export default Conversation;