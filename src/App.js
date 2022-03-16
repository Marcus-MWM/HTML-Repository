// import React from 'react';
// import './App.css';
// import Home from './components/Home';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboards from './pages/Dashboards';
import Navbar from "./components/Navbar/Navbar";

//styled components
import StyledContainer from './Styles';
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
          <Route path="/login"> <Login/> </Route>
          <Route path="/dashboards"> <Dashboards /> </Route>
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