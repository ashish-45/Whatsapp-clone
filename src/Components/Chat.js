import React, { useEffect, useState } from 'react'
import '../Components/Chat.css';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicIcon from '@material-ui/icons/Mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ChatBubble from '../Components/ChatBubble';

let CHATS = [

    {
        name: "Rakesh",
        message: "Hi Ashsish",
        time: new Date().toISOString(),
        type: "sender"
    },
    {
        name: "Rakesh",
        message: "Had Dinner ?",
        time: new Date().toISOString(),
        type: "sender"
    },
    {
        name: "Ashish",
        message: "Yep a way back",
        time: new Date().toISOString(),
        type: "recevier"
    },

]

const Chat = () => {

  const getChats = (chats) => {
        return chats.map((chatMessage, index) => {
            return <ChatBubble
            key={index}
                name={chatMessage.name}
                message={chatMessage.message}
                time={chatMessage.time}
                type={chatMessage.type}
            />
        })
    }

    const mic = (event) => {
        event.preventDefault();
        // alert(message);
        const msg = {
            name: "Ashish",
            message,
            time: new Date().toISOString(),
            type: "receiver"
        }
        const data = [...chats, msg]
        console.log('data', data)
        setChats(data)
        setMessage("")
        // getChats();

    }

    // useEffect(() =>{
    //     setChats(data)
    // },[])

    const [seed, setSeed] = useState('');

    const [message,setMessage] = useState('');
    const [chats,setChats] = useState(CHATS);



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
            {/* bubble2 is sender and bubble is receiver */}
            <div className='chat_body'>
                {getChats(chats)}


            </div>
            <div className='chat_footer'>
                <IconButton>
                    <EmojiEmotionsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <form>
                    <input type='text'
                     placeholder='Type a Message'
                     value={message}
                     onChange={(e)=>setMessage(e.target.value)}  />
                </form>
                <IconButton>
                    <MicIcon onClick={mic} />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;
