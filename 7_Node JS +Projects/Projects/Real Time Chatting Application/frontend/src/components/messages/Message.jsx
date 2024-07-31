import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import formatDateTime from '../../utils/extractTime';


function Message({message}) {
   const {authUser}=useAuthContext();
  
   const msgTime=formatDateTime(message.createdAt); // get the time of send and receive msg
  
   const {selectedConversation}=useConversation();
   
   const fromMe=message?.senderId === authUser?._id;
   const chatClassName=fromMe ? "chat-end" :"chat-start";
   const ProfilePic=fromMe ? authUser?.ProfilePic : selectedConversation?.profilePic;
   const bgCol=fromMe ? "chat-bubble-accent" :"chat-bubble-primary"
  return (
    <>
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-11 rounded-full">
            <img
                alt="Tailwind CSS chat bubble component"
                src={ProfilePic} />
            </div>
       </div>
       <div className={`chat-bubble ${bgCol} break-words max-w-xs md:max-w-md lg:max-w-lg`}>{message.message}</div>
       <time className="text-xs ">{msgTime}</time>

    </div>

</>
    
  )
}

export default Message