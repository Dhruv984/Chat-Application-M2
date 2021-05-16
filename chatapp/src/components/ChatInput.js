import React,{useState} from 'react';

import './ChatInput.css'
import {useStateValue} from '../context/context';
//firebase
import db from '../firebase';
import firebase from 'firebase'

function ChatInput({groupName,groupid}) {
    const [{userInfo}]=useStateValue();
    const [input,setInput]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        if(groupid){
        db.collection('Groups').doc(groupid).collection('messages').add({
            message:input,
            userimage:userInfo?.photoURL,
            user:userInfo?.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
      }
      setInput('')
    }
    return (
        <div className='chatinput'>
            <form>
                <input value={input} placeholder={`Message in ${groupName}`} onChange={(e)=>setInput(e.target.value)}></input>
                <button type='submit' onClick={submitHandler}>Send</button>
            </form>

        </div>
    )
}

export default ChatInput
