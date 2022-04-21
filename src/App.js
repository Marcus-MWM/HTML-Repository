import React, { Component }  from 'react';
// import React from 'react';
// import './App.css';
// import Home from './components/Home';

import { Navigate, Outlet } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar/Navbar";
import About from './pages/About'
import Multi_Course from './pages/Multi_Course';
import Bible_Theo from './pages/Bible_Theo';
import Hist_Poly from './pages/Hist_Poly';

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
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <div style={{ backgroundImage:`url(${Wood})`, backgroundSize:"cover", width: '100vw', height: '100vh'}}>

      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/courses' element={<Courses/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/Zeek' element={<Zeek/>}/>
          <Route path='/' element={<Home/>} />
          
        </Routes> 
        
      </Router>
      <ToastContainer/>
      </div>
    </>
  )
}

export default App;