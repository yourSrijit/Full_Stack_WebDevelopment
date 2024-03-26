import Conversation from "../model/conversationModel.js";
import Message from "../model/messageModel.js";

export const sendMessage =async(req,res)=>{
    try{
        const {message}=req.body;
        const {id: receiverId}=req.params;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        });

        if(!conversation){ //1st message creation
            conversation=await Conversation.create({
                participants:[senderId,receiverId], 
            });
        }
        
        let newMessage=new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.message.push(newMessage);

            //Socket IO function


            // await newMessage.save(); This will run serially
            // await conversation.save();

            //This will run parallely ⭐⭐
            await Promise.all([newMessage.save(),conversation.save()]);
        }

        res.status(200).json({message:"Message sent successfully",newMessage});

    }
    catch(error){
        console.log('Erro5r in sendMessage controller ',error.message);
        res.status(500).json({ error:"Internal server error"})
    }
}


export const getMessage =async(req,res)=>{
    try{
        const {id: receiverId}=req.params;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        }).populate("message");

        if(!conversation){
            res.status(200).json({messages:[]});
        }
       
        const messages=conversation.message;
        res.status(200).json({messages});
    }
    catch(error){
        console.log('Error in getMessage controller ',error.message);
        res.status(500).json({ error:"Internal server error"})
    }
}