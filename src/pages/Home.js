import React, { Component }  from 'react';
import { StyledTitle, StyledSubTitle, StyledButton, ButtonGroup } from "../Styles";
import { Link } from 'react-router-dom';


  const Home = () => {
    return (
      <div>
        <div>
          
        </div>
        <StyledTitle size={65}>
          Welcome to Course Planner
        </StyledTitle>
        <StyledSubTitle size={27}>
          Feel free to explore our page
        </StyledSubTitle>
  
        <ButtonGroup>
          <StyledButton to="/login">
            {/* <Link to='./pages/Login'>
              Login
            </Link> */}
            Login
          </StyledButton>

          <StyledButton to="/multi_course">
            
             Multi-Course
          </StyledButton>
          {/* <StyledButton to="/about">
            
             About
          </StyledButton> */}

          <StyledButton to="/signup">
            {/* <Link to='./components/Signup/'>
              Signup
            </Link> */}
            Sign Up
          </StyledButton>
        </ButtonGroup>
      </div>
    );
  }
  
  export default Home;