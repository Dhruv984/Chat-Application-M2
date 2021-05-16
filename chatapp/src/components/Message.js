import React from 'react'

import './Message.css'
//context
import { useStateValue } from '../context/context'
function Message({message,userimage,user,timestamp}) {
    const [{userInfo}]=useStateValue();
    return (
        <div className={`message ${userInfo?.displayName===user && 'sender'}`}>
           <img src={userimage} alt=''/>
           <div className='message__info'>
                <h4>{user}
                <span className='message__timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
               <p>{message}</p>
           </div>
            
        </div>
    )
}

export default Message
