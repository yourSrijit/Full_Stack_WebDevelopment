import React from 'react';
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation}) => {
    const{selectedConversation,setSelectedConversation}=useConversation();
    const isSelected=selectedConversation?._id===conversation._id;
    return (
        <>
    <div className={`flex gap-2 items-center hover:bg-violet-400 rounded p-2 py-1 cursor-pointer ${isSelected ?"bg-sky-500":""} }`} 
    onClick={()=>{setSelectedConversation(conversation)}}
    >
            <div className="avatar online">
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