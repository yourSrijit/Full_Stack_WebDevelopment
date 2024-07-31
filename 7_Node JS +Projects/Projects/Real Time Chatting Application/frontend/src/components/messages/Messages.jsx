import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import ShimmerUi from '../shimmerui/ShimmerUi';
import useListenMessages from '../../hooks/useListenMessages';

function Messages() {
  const { loading, messages } = useGetMessages();

  useListenMessages();

  const lastMessageRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    },100)
  },[messages]);
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
        
      ))}
      
      {loading && [...Array(3)].map((_, id) => (
        <ShimmerUi key={id} />
      ))}
      
      {!loading && messages.length === 0 && (
        <p className='text-center text-xl'>Send a message 🙋‍♂️ to start the conversation</p>
      )}
    </div>
  );
}

export default Messages;
