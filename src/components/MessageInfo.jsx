import { useNavigate } from 'react-router-dom';
import '../css/messages.css';
import React from 'react'
import { MdOutlineWifi1Bar } from "react-icons/md";


function MessageInfo({ message }) {
    const navigate = useNavigate();
  const { id, subject, content, isRead } = message;
    return (
        <div>
        <div onClick={() => navigate(`/message/${id}`,   { state: { messageInfo: message } }
            )}
             style={{ marginBottom: '10px' }}>
                <div style={{display:"flex"}}>
                <h2 style={{ margin: '0', fontWeight: isRead ? '400' : 'bold' }}>{subject}</h2>
              {!isRead ?   <MdOutlineWifi1Bar color='red' size={24} /> : ''}
                
               </div>
                      <div className='messages-content'>
                    {truncateText(`${content}`, 20)}
                      </div>
                  </div>
                  <hr color='black' className='messages-line' />
      </div>
    )
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  }

export default MessageInfo
