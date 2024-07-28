import React, { useState } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TbMessageCircleHeart } from "react-icons/tb";


function MessageContainer() {
  const [isChatSeleted,setChatSelected]=useState(false);
  return (
   
    <div className='md:min-w-[450px] flex flex-col'>
       { isChatSeleted ? (
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>Tony Stark</span>
        </div>
       <Messages/>
        <MessageInput/>
    </>
        
      ) : 
      (<NoChatSelected/>)
    }
        
    </div>
  )
}

const NoChatSelected=()=>{
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-sl text-gray-200 font-semibold felx flex-col items-center gap-2'>
        <p>Welcome to <span className='text-[rgb(0,205,183)] text-2xl'>Huu Chat App</span></p>
        <span>Select a chat to start messaging</span><TbMessageCircleHeart className='text-2xl md:text-2xl text-center ml-2 inline-block '/>
        <img src="icon.png" alt="" className='w-80 ' />
        {/* <TbMessageCircleHeart className='text-3xl md:text-6xl text-center text-[rgb(57,153,24)]'/> */}

      </div>

    </div>
  )
}

export default MessageContainer