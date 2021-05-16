import React, { useEffect , useState} from 'react'
import { useParams} from 'react-router'
import './ChatWindow.css'
import Message from './Message'
import ChatInput from './ChatInput';

import {useHistory} from 'react-router'
import DeleteIcon from '@material-ui/icons/Delete';

import {useStateValue }from '../context/context'


//mui
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';



//firebase
import db from '../firebase';




const ChatWindow = () => {
    const { groupid } = useParams();
    const [groupName, setGroupname] = useState();
    const [messages,setMessages]=useState([]);
    const history=useHistory();
    const [{userInfo}]=useStateValue();
    const [userId,setuserId]=useState();

    

    useEffect(() => {
        //READING group name
        if (groupid) {
            db.collection('Groups').doc(groupid)
                .onSnapshot((snapshot) => {
                    setGroupname(snapshot.data()?.name);
                })
            }
            
            //Reading userid of the user who created the group
            db.collection('Groups').doc(groupid).onSnapshot((snapshot) => {
                 setuserId(snapshot.data()?.userId);
            })
            //Reading messages
       
        db.collection('Groups').doc(groupid).collection('messages').orderBy('timestamp','asc')
            .onSnapshot((snapshot)=>{
                setMessages(snapshot.docs.map(doc=> doc.data())) 
            })
        
        
    }, [groupid])

    const deleteHandler=()=>{
        let danger=window.confirm(`Do want to delete ${groupName}?`);
         if(groupid && danger){
            history.replace('/user')
            db.collection('Groups').doc(groupid.toString()).delete();
            
            
        }
    }

 
       

    return (
        <div className='chatwindow'>
            <div className='chatwindow__header'>
                <div className='chatwindow__groupinfo'>
                <PeopleOutlineIcon /> 
                <h3 className='chatwindow__groupname'>{groupName }</h3>
                </div>
               
                <div className='chatwindow__deleteicon'>{userId === userInfo?.uid &&<DeleteIcon  onClick={deleteHandler}/>}</div>
            </div>
            <div className='chatwindow__messages' >

                {
                    messages.map(({message,userimage,user,timestamp})=>{
                        return <Message message={message} userimage={userimage} user={user} timestamp={timestamp}/>
                    })
                }
            </div>
            <ChatInput  groupName={groupName} groupid={groupid}/>
            
        </div>

    )
}


export default ChatWindow
