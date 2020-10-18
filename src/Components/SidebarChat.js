import React, { useEffect, useState } from 'react';
import '../Components/SidebarChat.css';
import Avatar from '@material-ui/core/Avatar';

const SidebarChat = ({ name, message, date }) => {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(
            Math.random() * 5000
        ))
    }, [])

    return (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChat_info'>
                <h2>{name}</h2><span className='date'>{date}</span>
                <p>{message}</p>
            </div>

        </div>
    )

}

export default SidebarChat;
