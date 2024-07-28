import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
            
            <button type="submit" className='btn btn-circle bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mr-2 text-white'>
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