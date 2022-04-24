import React, { Component }  from 'react';
// import React from 'react';
// import './App.css';
// import Home from './components/Home';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
import Profile from './pages/Profile';
import Zeek from './pages/Zeek';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword'


import Footer from "./components/Footer";

//styled components
import StyledContainer from './Styles';
import {StyledContainer1} from './Styles';
import Zeeks from './pages/Zeeks';
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
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile/>} />
          </Route>
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/Zeek' element={<Zeek/>}/>
          <Route path='/multi_course' element={<Multi_Course/>}/>
          <Route path="/Bible_Theo" element={<Bible_Theo/>}/>
          <Route path="/Hist_Poly" element={<Hist_Poly/>}/>
          <Route path='/' element={<Home/>} />
          
        </Routes> 
        
      </Router>
      <ToastContainer/>
      </div>
    </>
  )
}

export default App;