import React from 'react';
import {useHistory} from 'react-router'

import './SidebarGroups.css';

// mui 
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';



const SidebarGroups=({groupName,groupid})=>{

    const history=useHistory();
    const selectGroup=()=>{
        if(groupid){
           history.push(`/group/${groupid}`);
        }
        
    }
    return(
        <>
        <div className='sidebargroups' >
            <div className='group' onClick={selectGroup}>
            <h3>
               <span className='group__hash'><PeopleOutlineIcon/></span>
                {groupName}
            </h3>
            </div>
            {/* {userId === userInfo?.uid &&<DeleteIcon className='sidebargroups__deleteicon' onClick={deleteHandler}/>} */}
        </div>
        
        </>
    )
}

export default  SidebarGroups