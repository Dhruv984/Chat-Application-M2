import React, { useEffect, useState } from 'react'
import './Sidebar.css'

//context
import { useStateValue } from '../context/context';

import SidebarGroups from './SidebarGroups'
//mui stuff
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';
//firebase stuff
import db from '../firebase';

function Sidebar() {
    const [{ userInfo }] = useStateValue();
    const [groups, setGroups] = useState([]);

    //getting groups

    useEffect(() => {
        db.collection('Groups').onSnapshot(snapshot => {
            setGroups(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                userId: doc.data().userId
            })));
        })


    }, [])
    // add a new group
    const addNewgroup = () => {
        const addedGroupname = prompt('Enter the name of the group');
        if (addedGroupname) {
            db.collection('Groups').add({
                name: addedGroupname,
                userId: userInfo.uid  
            })
        }
    }
    return (
        <div className='sidebar'>
            {/* sidebar__header */}
            <div className='sidebar__header'>
                <div className='sidebar__header__info'>
                    <h2>Welcome</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {userInfo?.displayName}
                    </h3>
                </div>
            </div>
            <hr/>
            <div className='sidebargroups__header'>
                <div className='sidebargroups__info'>
                    <h3> Your Groups</h3>
                    <AddIcon onClick={addNewgroup} />
                </div>
                <div className='sidebargroups__admingroups'>
                    {
                        groups.map((group) => {
                            return group?.userId === userInfo?.uid && <SidebarGroups groupName={group.name} groupid={group.id} userId={group.userId} />
                        })
                    }

                </div>
            </div>

            <hr></hr>
            <div className='sidebargroups__header'>
                <h3>Common Groups</h3>
                <div className='sidebargroups__commongroups'>

                    {
                        groups.map((group) => {
                            console.log(userInfo?.uid)
                            return !(group?.userId === userInfo?.uid) && <SidebarGroups groupName={group.name} groupid={group.id} userId={group.userId} />
                        })
                    }
                </div>
            </div>  
        </div >
    )
}

export default Sidebar
