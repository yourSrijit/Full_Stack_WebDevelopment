import React from 'react'

function Message() {
  return (
    <>
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-11 rounded-full">
            <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
       </div>
       <div className="chat-bubble chat-bubble-accent">You were the Chosen One!</div>
       <time className="text-xs ">12:45</time>

    </div>


    <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-11 rounded-full">
            <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
       </div>
       <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
       <time className="text-xs ">12:20</time>

    </div>

</>
    
  )
}

export default Message