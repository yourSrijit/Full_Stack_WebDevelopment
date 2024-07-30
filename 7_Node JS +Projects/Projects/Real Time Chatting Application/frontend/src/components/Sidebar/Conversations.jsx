import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
    const { loading, conversation } = useGetConversations();
    
    
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversation.map((conversation) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                />
            ))}
            {loading && <span className='loading loading-spinner mx-auto'></span>}
        </div>
    );
}

export default Conversations;


/*
import React from 'react';
import Conversation from './Conversation';

const Conversations = () => {
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    );
}

export default Conversations;
*/