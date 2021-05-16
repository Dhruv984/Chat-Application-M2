import React from 'react';

import './Header.css';
//context
import {useStateValue} from '../context/context';
import { action_types } from '../context/reducer';
//mui stuff
import {Avatar} from '@material-ui/core';
import { useHistory } from 'react-router';
 




function Header() {
    const [{userInfo},dispatch]=useStateValue();
    const history=useHistory();

    //logout
    const logout=()=>{
        history.replace('/');
        dispatch({
            type:action_types.SET_USER,
            user:null,
        })
    }
    return (
        <div className='header'>
            <div className='header__content'>
            <Avatar className='header__avatar' alt={userInfo?.displayName} src={userInfo?.photoURL}/>
            <div className='header__right'>
            <button className='header__logout' onClick={logout}>Logout</button>
            </div>
            </div>
        </div>
    )
}

export default Header
