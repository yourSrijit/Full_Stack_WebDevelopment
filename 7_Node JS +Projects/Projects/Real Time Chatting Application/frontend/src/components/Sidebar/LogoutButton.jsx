import React from 'react';
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
    return (
        <div className='mt-auto'>
            <BiLogOut className='w-6 h-6 cursor-pointer hover:scale-110 text-white'/>
        </div>
    );
}

export default LogoutButton;
