import React, { Component }  from 'react';
// import React from 'react';
// import './App.css';
// import Home from './components/Home';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar/Navbar";
import About from './pages/About';
import Footer from "./components/Footer";
// =======
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Dashboards from './pages/Dashboards'
// import Signup from "./pages/Signup"
// import Navbar from "./components/Navbar/Navbar"
// import Courses from './pages/Courses'
// import About from './pages/About'
// >>>>>>> 445e8e7021df8aad1d8d1f8f5c1a29babbba6d34

//styled components
import StyledContainer from './Styles';
import {StyledContainer1} from './Styles';

// Loader
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Beach from '././assests/beach.jpg';
import Wood from '././assests/bg.jpg';

// import {useState, useEffect} from "react";
// import {collection, getDocs, addDoc} from "firebase/firestore"; 
// import {db} from './firebase/firebase';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { async } from '@firebase/util';

function App() {
  return (
    <div className="App">
    <Routes>
      <Navbar />
      <StyledContainer image={Beach} >
        
        <Routes>
          <Route path="/courses"> <Courses /> </Route>
          <Route path="/signup"> <Signup /> </Route>
          <Route path="/login"> <Login/> </Route>
          <Route path="/dashboard"> <Dashboard /> </Route>
          <Route path="/about"> <About /> </Route>
          <StyledContainer image={Wood} size={207}>
            <Route path="/"><Home /></Route>
          </StyledContainer>
          
        </Routes>
        <Footer/>
        {/* <Navbar/> */}
        {/* <Home/> */}
        {/* <Login/> */}
        {/* <Dashboards /> */}

      </StyledContainer>
    </Routes>
    </div>
  );
}

export default App;