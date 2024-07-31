import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';
import { useAuthContext } from '../../context/AuthContext';
import toast from "react-hot-toast";

const whoAreOnlineExcludedMe=async(onlineUsers)=>{     /// ✅✅✅✅ may be work on later
    const{authUser}=useAuthContext();
    try{
        const res=await fetch("/api/users");
        const data=await res.json();
        if(data.error){
            throw new Error(data.error);
        }
       
        const whoIsOnline = onlineUsers
      .filter(userId => userId !== authUser._id) // Exclude current user
      .map(userId => data.find(user => user._id === userId)) // Find user info
        
      toast.success(`${whoIsOnline.fullname} is online`)
      console.log(whoIsOnline);
    return whoIsOnline;
       
    }catch(error){
        toast.error(error.message)
    }
}

const Conversation = ({conversation}) => {
    const{selectedConversation,setSelectedConversation}=useConversation();
    const isSelected=selectedConversation?._id===conversation._id;
    const {onlineUsers}=useSocketContext();

    // if(onlineUsers.length>1){
    //     whoAreOnlineExcludedMe(onlineUsers);
    // }
   
   
    const isOnline=onlineUsers.includes(conversation._id);
    

    return (
        <>
    <div className={`flex gap-2 items-center hover:bg-violet-400 rounded p-2 py-1 cursor-pointer ${isSelected ?"bg-sky-500":""} }`} 
    onClick={()=>{setSelectedConversation(conversation)}}
    >
            <div className={`avatar ${isOnline ? "online" :""}`}>
            <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <p className='font-bold text-gray-200 '>{conversation.fullName}</p>
        </div>

    </div>
    <div className='divider my-0 py-0 h-1 rounded-md' />
    </>        
    );
}

export default Conversation;

/*
import React from 'react';

const Conversation = () => {
    return (
    <div className='flex gap-2 items-center hover:bg-violet-400 rounded p-2 py-1 cursor-pointer '>
         <div className="avatar online">
            <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <p className='font-bold text-gray-200'>Srijit Bera</p>
        </div>
        
    </div>
        
    );
}

export default Conversation;
*/