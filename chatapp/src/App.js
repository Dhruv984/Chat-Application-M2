import React from 'react'
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chatwindow from './components/Chatwindow';
import Login from './Authentication/Login'

//context
import { useStateValue } from './context/context';

function App() {
  const [{userInfo}] = useStateValue();

  return (
    <div className="App">

      <Router>
        {!(userInfo) ?
          <>
             <Login/>
          
          </> :
          <>
            <Header />
            <div className='app__content'>
              <Sidebar />
              <Switch>
                <Route path='/group/:groupid' exact>
                  <Chatwindow />
                </Route>
                
                <Route path='/delete' exact>
                  <div className='home__message'>Group deleted</div>
                </Route>
                <Route path='/user' >
                  <div className='home__message'>HAPPY CHATTING !!</div> 
                </Route>
                
              </Switch>
              <Redirect to='/user'   />

            </div>
          </>
        }
      </Router>


    </div>
  );
}

export default App;
