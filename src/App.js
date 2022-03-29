// import React from 'react';
// import './App.css';
// import Home from './components/Home';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboards from './pages/Dashboards';
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar/Navbar";
import About from './pages/About'


//styled components
import StyledContainer from './Styles';

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
        
          {/* <Route path="/signup"> </Route> */}
          <Route path="/signup"> <Signup /> </Route>
          <Route path="/login"> <Login/> </Route>
          <Route path="/dashboards"> <Dashboards /> </Route>
          <Route path="/courses"> <Courses /> </Route>
          <Route path="/about"> <About /> </Route>
          <StyledContainer image={Wood} size={207}>
            <Route path="/">
              <Home />
            </Route>
          </StyledContainer>
          {/* <Route path="/"><Home /></Route> */}
          
        </Switch>

        {/* <Navbar/> */}
        {/* <Home/> */}
        {/* <Login/> */}
        {/* <Dashboards /> */}

      </StyledContainer>
    </Router>
  );
}

export default App;