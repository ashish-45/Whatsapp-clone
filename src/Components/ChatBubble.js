import React from 'react'

function ChatBubble({ name, type, time, message }) {
    return (
        <div className={type === "sender" ? "bubble" : "bubble2"}>
            <div className='text'>
                <p className='name'>{name}</p>
                <p className='message_sender'>{message}</p>
                <span className='timestamp'>{time}</span>
            </div>
            <span className='bubble-arrow'></span>
        </div>
    )
}

export default ChatBubble;
