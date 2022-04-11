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
import About from './pages/About'

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

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <StyledContainer image={Beach} >
        
        <Switch>
          <Route path="/courses"> <Courses /> </Route>
          <Route path="/signup"> <Signup /> </Route>
          <Route path="/login"> <Login/> </Route>
          <Route path="/dashboard"> <Dashboard /> </Route>
          <Route path="/about"> <About /> </Route>
          <StyledContainer image={Wood} size={207}>
            <Route path="/"><Home /></Route>
          </StyledContainer>
          
        </Switch>
        <Footer/>
        {/* <Navbar/> */}
        {/* <Home/> */}
        {/* <Login/> */}
        {/* <Dashboards /> */}

      </StyledContainer>
    </Router>
  );
}

export default App;