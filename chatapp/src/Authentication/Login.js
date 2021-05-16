import React from 'react'
import './Login.css'

//firebase
import { provider } from '../firebase';
import { auth } from '../firebase'
//context
import { useStateValue } from '../context/context'
import { action_types } from '../context/reducer'
import { useHistory } from 'react-router';





function Login() {

    const [state, dispatch] = useStateValue();
    const history=useHistory();

    //implementing google authorization
    const login = () => {
        auth.signInWithPopup(provider).then(userLoginInfo => {
            console.log(userLoginInfo)
            dispatch({
                type: action_types.SET_USER,
                user: userLoginInfo.user,
            })
            history.replace('/user')
            

        }).catch((err) => {
            alert(err.message);
        })
    }
    return (
        <div className='login'>
            <div className='login__content'>
                <img src='https://www.clipartmax.com/png/middle/203-2037661_logo-sample-earth.png'
                alt=''/>
                <h2>Welcome To</h2>
                <h1>CONNECTIONS</h1>
                <button onClick={login}>Sign in with google</button>
            </div>
        </div>
    )
}

export default Login

