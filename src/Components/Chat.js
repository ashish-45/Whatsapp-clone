import React, { useEffect, useState } from 'react'
import '../Components/Chat.css';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicIcon from '@material-ui/icons/Mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';



const Chat = () => {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat_headerInfo'>
                    <h3>Rohit</h3>
                    <p>last seen today at 11:40 AM</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='chat_body'>
                <div className='bubble'>
                    <div className='text'>
                        <p className='name'>Ashish Gpt</p>
                        <p className='message_sender'>Keep it up bro... 👍</p>
                        <span className='timestamp'>2:15 PM</span>
                    </div>
                    <span className='bubble-arrow'></span>
                </div>
                <div className='bubble2'>
                    <div className='text2'>
                        <p className='name2'>Vishal Gpt</p>
                        <p className='message_sender2'>Thanks Brother 🥰</p>
                        <span className='timestamp2'>7:45 AM</span>
                    </div>
                    <span className='bubble-arrow2'></span>
                </div>
            </div>
            <div className='chat_footer'>
                <IconButton>
                    <EmojiEmotionsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <form>
                    <input type='text' placeholder='Type a Message' />
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;
