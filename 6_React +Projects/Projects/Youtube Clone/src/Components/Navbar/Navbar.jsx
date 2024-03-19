import React from 'react';
import './navbar.css';
import menu_icon from '../../assets/menu_icon';
import log from '../../assets/log';
import search_icon from '../../assets/search_icon';
import upload_icon from '../../assets/upload_icon';
import more_icon from '../../assets/more_icon';
import notification_icon from '../../assets/notification_icon';
import profile_icon from '../../assets/jack';


const Navbar = () => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon' src={menu_icon}/>
                <img className='logo' src={log}/>
            </div>
            <div className='nav-middle flex-div'>
            <input type='text' placeholder='Search'/>
            <img src={search_icon}/>
            </div>
            <div className='nav-right flex-div'>
            <img src={upload_icon}/>
            <img src={more_icon}/>
            <img src={notification_icon}/>
            <img src={profile_icon}/>
            </div>
        </nav>
    );
}

export default Navbar;
