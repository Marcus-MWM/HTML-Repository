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
import About from './pages/About';
// import Footer from "./components/Footer";
import ForgotPassword from './pages/ForgotPassword'

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
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/courses' element={<Courses/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/' element={<Home/>} />
        </Routes> 
        
      </Router>
      
    </>
  )
}

export default App;