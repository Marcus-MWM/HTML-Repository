import React, { Component }  from 'react';
import { StyledTitle, StyledSubTitle, StyledButton, ButtonGroup } from "../Styles";
import { Link } from 'react-router-dom';


  function Zeek () {
    return (
      <div>
        <div>
          
        </div>
        <StyledTitle size={65}>
{/* <<<<<<< HEAD */}
          Welcome to Course Planner
{/* ======= */}
{/* //           Welcome to our Course Web App!
// >>>>>>> ea2547606c351235f097f38fa17e3019c3de049d */}
        </StyledTitle>
        <StyledSubTitle size={27}>
          Feel free to
        </StyledSubTitle>
  
        <ButtonGroup>
          <StyledButton to="/Zeek">
            hello
          </StyledButton>
        </ButtonGroup>
        <h1>hello zeek here</h1>
      </div>
    );
  }
  
  export default Zeek;