import '../../css/messages.css';
import { useDispatch, useSelector } from 'react-redux'
import MessageInfo from '../../components/MessageInfo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect } from 'react';
import { changeLoading, getAllMessages } from '../../redux/messagesSlice';


function Messages() {
    const dispatch = useDispatch();
    const { messages, isLoading } = useSelector((store) => store.messages)
   console.log(messages, "messages");
   useEffect(() => {
       if (messages === null || messages.length === 0) {
        dispatch(changeLoading())
            const timer = setTimeout(() => {
                dispatch(getAllMessages())
                dispatch(changeLoading())
            }, 1000); 
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div style={{padding:"20px"}}>
            {isLoading ? <CircularProgress className='main-progress'/> : 
                <div className='main-border'> 
                    <div className='messages-main'> 
                     <h1 className='messages-title' >Messages</h1>
                    <div className='messages-card'>
                        {
                             messages && messages.map((message)=> (
                                <MessageInfo key={message.id} message={message}/>
                           ))
                       }
            </div>
            </div>
                </div>
            }
        </div>
    );
}

export default Messages