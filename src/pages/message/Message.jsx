import React from 'react'
import '../../css/message.css'
import '../../App.css'
import { useLocation } from 'react-router-dom';


function Message() {
    const location = useLocation();
    const message = location.state.messageInfo;
    console.log(message, 'Message');

    return (
        <div className='main-border'>
             <div  className='message-main'>
            <h2 className='message-subject' >{message.subject}</h2>
            <div className='message-card'>
                <p className='message-content'>
                {message.content}
            </p>
            </div>
      </div>
     </div>
)
}

export default Message