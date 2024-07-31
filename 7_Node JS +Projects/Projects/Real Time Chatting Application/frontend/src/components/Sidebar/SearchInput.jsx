import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../zustand/useConversation';
import toast from "react-hot-toast";

const SearchInput = () => {
    const[search,setSearch]=useState("");
    const {conversation } = useGetConversations();
    const {setSelectedConversation}=useConversation();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            toast.error("Please enter at least 3 characters...");
            return;
        }
        setLoading(true);
        try {
            const searchResult = conversation.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
            if (searchResult) {
                setSelectedConversation(searchResult);
                setSearch("");
            } else {
                toast.error("No such user found!");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while searching.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'
        value={search} onChange={(e)=>{setSearch(e.target.value)}} disabled={loading}
        />
            
            <button type="submit" className='btn btn-circle bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mr-2 text-white' disabled={loading}>
            <IoSearchSharp className='w-6 h-6 outline-none'/>

            </button>
        </form>
        
    );
}

export default SearchInput;

/*
import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2 mt-2'>
        <input type='text' placeholder='Search ..' className='input input-bordered rounded-full'/>
            
            <button type="submit" className='btn btn-circle bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mr-2 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>

            </button>
        </form>
        
    );
}

export default SearchInput;
*/