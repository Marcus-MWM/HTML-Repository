// import React from 'react';
// import './App.css';
// import Home from './components/Home';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboards from './pages/Dashboards';
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";

//styled components
import StyledContainer from './Styles';
// <<<<<<< HEAD

// Loader
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// =======
// >>>>>>> ea2547606c351235f097f38fa17e3019c3de049d
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