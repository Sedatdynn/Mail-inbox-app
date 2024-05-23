import React, {useEffect, useState} from 'react'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import { changeLoading, getAllMessages } from '../../redux/messagesSlice';
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const { messages, isLoading } = useSelector((store) => store.messages)
   const [totalMessages, setTotalMessages] = useState(0);
    const [unreadMessages, setUnreadMessages] = useState(0);  

    useEffect(() => {
        dispatch(changeLoading())
        const timer = setTimeout(() => {
            dispatch(getAllMessages())
            dispatch(changeLoading())
        }, 1000); 
        return () => clearTimeout(timer);
    }, []); 
    useEffect(() => {
      setTotalMessages(messages.length);

      const unreadCount = messages.filter(message => !message.isRead).length;
      setUnreadMessages(unreadCount);
  }, [messages]);
  return (
    <div className='home-body'>
    <h2 className='home-title'>
     Hello Sedat
    </h2>
      {
        isLoading ? <CircularProgress className='main-progress'/> : <p >
        You have {unreadMessages} unread messages out of {totalMessages} total
       </p>
    }
    <button className='home-button' onClick={() =>navigate('messages') }>
        View Messages
      </button>
  </div>
  )
}

export default Home