import React, { Component }  from 'react';
import { StyledTitle, StyledSubTitle, StyledButton, ButtonGroup, StyledFormArea, colors } from "../Styles";
import { Link } from 'react-router-dom';


  const Dashboard = () => {
    return (
      <div>
        <div>
          
        </div>
        <StyledFormArea bg={colors.dark1}>
          <StyledTitle size={65}>
            {/* <<<<<<< HEAD */}
            Welcome User
          </StyledTitle>
          <StyledSubTitle size={27}>
            Get started!
          </StyledSubTitle>
    
          <ButtonGroup>
            <StyledButton to="#">Logout</StyledButton>
          </ButtonGroup>
        </StyledFormArea>
        

      </div>
    );
  }
  
  export default Dashboard;