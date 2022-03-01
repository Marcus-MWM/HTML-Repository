// import React from 'react';
// import './App.css';
// import Home from './components/Home';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import {Route, Link} from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';

//styled components
import StyledContainer from './Styles';

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { Component } from 'react';

function App() {
  return (
    <Router>
      <StyledContainer>
        {/* <Navbar/> */}
        {/* <Home/> */}
        <Login/>

    
  {/* <h1>Login Page</h1>
  <div>
    <input type="text" placeholder="user name" className="name"/>
  </div>
  <div>
    <input type="text" placeholder="username" className="name"/>
  </div>
  <button>Login</button>
  <Home /> */}

      </StyledContainer>
    </Router>
  );
}

export default App;