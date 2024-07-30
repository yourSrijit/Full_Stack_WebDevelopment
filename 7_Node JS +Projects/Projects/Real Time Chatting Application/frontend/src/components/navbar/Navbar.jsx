import React from 'react';
import { useAuthContext } from '../../context/AuthContext';

import useLogout from '../../hooks/useLogout';

function Navbar() {
    const { authUser } = useAuthContext();
    const {logout}=useLogout();

    const defaultProfilePic = 'https://avatars.githubusercontent.com/u/91645620?v=4'; // Replace with the path to your default image

    return (
        <div className="navbar bg-base-100 absolute top-0 left-0 w-full">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Huu Chat 🐼</a>
            </div>
            <span className='font-bold'>{authUser?.fullName}</span>
            <div className="flex">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Image"
                                src={authUser?.ProfilePic || defaultProfilePic}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        
                        <li onClick={logout}>
                            <a>Logout</a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/yoursrijit/" target='_blank'>Created by Srijit Bera</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
