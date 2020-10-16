import React from 'react';
import '../Components/Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from '../Components/SidebarChat';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <IconButton>
                    <Avatar alt='avt' src='https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png' />
                </IconButton>
                <div className='sidebar-headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlinedIcon />
                    <input type='text' placeholder='Search or Start New Chat' />
                </div>

            </div>
            <div className='sidebar_charts'>
                <SidebarChat name='rony' message='hello bro whats going on?'/>
                <SidebarChat name='jonh' message='good morning!!'/>
                <SidebarChat name='jack' message='Have a nice day.'/>
                <SidebarChat name='Ema' message='nice to meet you..'/>

            </div>
        </div>
    )
}

export default Sidebar;
