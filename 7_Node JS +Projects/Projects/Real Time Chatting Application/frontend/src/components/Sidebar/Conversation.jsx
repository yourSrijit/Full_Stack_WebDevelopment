import React from 'react';

const Conversation = () => {
    return (
    <div className='flex gap-2 items-center hover:bg-violet-400 rounded p-2 py-1 cursor-pointer '>
            <div className="avatar online">
            <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <p className='font-bold text-gray-200'>Srijit Bera</p>
        </div>
        <div className='divider my-0 py-0 h-1' />
        
    </div>
   
        
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