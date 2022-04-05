// courses page

import React, { useState } from "react"
import Header from "../components/Header"
// styled components
import StyledContainer, { StyledTextInput, StyledFormArea,
    StyledFormArea2, 
    StyledFormButton, StyledLabel, Avatar, 
    StyledTitle, colors, ButtonGroup, ExtraText,
    TextLink, CopyrightText, StyledLabelChartRight1,
    StyledLabelChartTop, StyledFormButton2 } from "../Styles";

// courses page
import "./Courses.css";

import Beach from "../assests/beach.jpg"
import { Formik, Form } from "formik";

import { TextInput, TextInput2 } from "..//FormLib";
import * as Yup from "yup";
import styled from 'styled-components';

import ReactDOM from "react-dom";

const Button = styled.button`
    &:hover{
      background-color: #283593;
    }
    &:disabled {
      opacity: 0.7;
    }
`;

const ButtonToggle = styled(Button)`
    opacity: 0.7;
    ${({active}) => active && ` 
      opacity: 1;
    `}
`;

const valueButton = ['Cash', 'Money'];

function ToggleGroup(){
  const [active, setActive] = useState(valueButton[0]);
  return <div>
    {valueButton.map(type => (
      <ButtonToggle 
      active={active === type}
      onClick={() => setActive(type)}
      >
        {type}
      </ButtonToggle>
    ))}
  </div>
}

const Courses = () =>{

  const [agree, setAgree] = useState(false);


    const checkboxHandler = () => {
      // if agree === true, it will be set to false
      // if agree === false, it will be set to true
      setAgree(!agree);
      // Don't miss the exclamation mark
    }

    const checkboxHandlers = () => {
      // if agree === true, it will be set to false
      // if agree === false, it will be set to true
      setAgree(!agree);
      // Don't miss the exclamation mark
    }

  // When the button is clicked
  const btnHandler = () => {
    alert('The buttion is clickable!');
  };


  return (
      <div className="centered">
        
        <StyledContainer image={Beach} sizeH = {150}>
        <StyledFormArea2>
            <h1> Courses </h1>
          </StyledFormArea2>

          <StyledLabelChartTop size = {20}
          sizeTop = {180} sizeLeft = {12} sizeRight = {12}>
              <p>  8th Sem (Sprg) </p><span class="min_br"></span><p>  13 Credits </p>
            </StyledLabelChartTop>
          <StyledLabelChartRight1 size = {20} brand = "solid" 
          sizeTop = {260} sizeLeft = {22} sizeRight = {22}>
              <p>  EGR 328 (2) </p><span class="min_br"></span><p>  Numerical </p>
              <span class="min_br"></span><p> Methods for </p><span class="min_br"></span>
              <p> Computing </p>
              
              

              <button> TEST</button>
              <Button> 
                TSET ME 
              </Button>
              <ToggleGroup />
              
              <div>
                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                <label htmlFor="agree"> I agree</label>
              </div>

                {/* Don't miss the exclamation mark* */}
                <button disabled={!agree} className="btn" onClick={btnHandler}>
                  Continue
                </button>
                <input type="checkbox" id="agree" disabled={!agree} onChange={checkboxHandler} />

            </StyledLabelChartRight1>
            {/* <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {380} size1 = {8} size2 = {8}>
              <p>  EGR 402 (3) </p><span class="min_br"></span><p>  Capstone Design </p>
              <span class="min_br"></span><p> (CSDS Section) </p>
            </StyledLabelChartRight1> */}
            <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {500}  size1 = {8} size2 = {8} sizeLeft = {22} sizeRight = {22} colorStyle = "lightblue">
              <p>  CSC 412 (3) </p><span class="min_br"></span><p>  Intelligent </p>
              <span class="min_br"></span><p> Systems </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {620}  sizeLeft = {15} sizeRight = {15}>
              <p>  EGR 425 (3) </p><span class="min_br"></span><p>  Real Time and </p>
              <span class="min_br"></span><p> Embedded </p><span class="min_br"></span>
              <p> Development </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {740}  sizeLeft = {13} sizeRight = {13} colorStyle = "lightblue">
              <p>  CSC 411 (2) </p><span class="min_br"></span><p>  Social and Prof </p>
              <span class="min_br"></span><p> Issues in </p><span class="min_br"></span>
              <p> Computing </p>
            </StyledLabelChartRight1>
            <StyledLabelChartTop size = {170}
          sizeTop = {180} sizeLeft = {15} sizeRight = {15}>
              <p>  7th Sem (Fall) </p><span class="min_br"></span><p>  17 Credits </p>
            </StyledLabelChartTop>
            <StyledLabelChartRight1 size = {170} brand = "dashed" 
            sizeTop = {260} size1 = {8} size2 = {8} sizeLeft = {25} sizeRight = {25}>
              <p>  WLD161, </p><span class="min_br"></span><p>  History, or </p>
              <span class="min_br"></span><p> Poly Sci (3) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {170} brand = "solid" 
            sizeTop = {380} size1 = {8} size2 = {8}>
              <p>  EGR 401 (3) </p><span class="min_br"></span><p>  Capstone Design </p>
              <span class="min_br"></span><p> (CSDS Section) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {170} brand = "solid" 
            sizeTop = {500} size1 = {8} size2 = {8} sizeLeft = {20} sizeRight = {20} colorStyle = "lightblue">
              <p>  CSC 414 (3) </p><span class="min_br"></span><p>  Theory of </p>
              <span class="min_br"></span><p> Computation </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {170} brand = "solid" 
            sizeTop =  {620}  size1 = {8} size2 = {8}>
              <p>  EGR 405 (1) </p><span class="min_br"></span><p>  Internship Report </p>
              <span class="min_br"></span><p> and Presentation </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {170} brand = "solid" 
            sizeTop =  {740} sizeLeft = {12} sizeRight = {12} colorStyle = "lightblue">
              <p>  CSC 413 (3) </p><span class="min_br"></span><p>  Info Security and </p>
              <span class="min_br"></span><p> Computer </p><span class="min_br"></span>
              <p> Forensics </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {170} brand = "solid" 
            sizeTop =  {860} size1 = {25} size2 = {25} sizeLeft = {20} sizeRight = {20} colorStyle = "lightgrey">
              <p>  Elective(s) (4) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartTop size = {330}
          sizeTop = {180} sizeLeft = {12} sizeRight = {12}>
              <p>  6th Sem (Sprg) </p><span class="min_br"></span><p>  17 Credits </p>
            </StyledLabelChartTop>
            <StyledLabelChartRight1 size = {330} brand = "dashed" 
            sizeTop = {260} size1 = {8} size2 = {8} sizeLeft = {23} sizeRight = {23}>
              <p>  Christian or </p><span class="min_br"></span><p>  Intercultural </p>
              <span class="min_br"></span><p> Studies (3) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {330} brand = "solid" 
            sizeTop = {380} sizeLeft = {12} sizeRight = {12}>
              <p>  EGR 302 (3) </p><span class="min_br"></span><p>  Engr Design and </p>
              <span class="min_br"></span><p> Documentation </p><span class="min_br"></span>
              <p> (CSDS Section) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {330} brand = "solid" 
            sizeTop = {500} size1 = {8} size2 = {8} sizeLeft = {24} sizeRight = {24}>
              <p>  EGR 304 (1) </p><span class="min_br"></span><p>  Leadership </p>
              <span class="min_br"></span><p> Cohort </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {330} brand = "solid" 
            sizeTop = {620} size1 = {15} size2 = {15} sizeLeft = {24} sizeRight = {24}>
              <p>  CSC 312 (3) </p><span class="min_br"></span><p>  Algorithms </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {330} brand = "solid" 
            sizeTop = {740} size1 = {8} size2 = {8} sizeLeft = {9} sizeRight = {9} 
            colorStyle = "lightblue">
              <p>  CSC 313 (3) </p><span class="min_br"></span><p>  Graphics and </p>
              <span class="min_br"></span><p>  Visual Computing </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {330} brand = "solid" 
            sizeTop = {860} size1 = {8} size2 = {8} sizeLeft = {24} sizeRight = {24}>
              <p>  EGR 325 (3) </p><span class="min_br"></span><p>  Database </p>
              <span class="min_br"></span><p>  Systems </p>
            </StyledLabelChartRight1>
            <StyledLabelChartTop size = {500}
          sizeTop = {180} sizeLeft = {15} sizeRight = {15}>
              <p>  5th Sem (Fall) </p><span class="min_br"></span><p>  17 Credits </p>
            </StyledLabelChartTop>
            <StyledLabelChartRight1 size = {500} brand = "dotted" 
            sizeTop = {260} size1 = {8} size2 = {8} sizeLeft = {17} sizeRight = {17}>
              <p> PHY 203 (4) </p><span class="min_br"></span><p> Phy for Engrs II </p>
              <span class="min_br"></span><p> with Lab </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {500} brand = "solid" 
            sizeTop = {380} size1 = {8} size2 = {8} sizeLeft = {25} sizeRight = {25}>
              <p> EGR 305 (2) </p><span class="min_br"></span> <p>  Engineering </p>
              <span class="min_br"></span><p> Statistics </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {500} brand = "solid" 
            sizeTop = {500} size1 = {8} size2 = {8} sizeLeft = {25} sizeRight = {25}>
              <p> EGR 306 (1) </p><span class="min_br"></span> <p>  Internship </p>
              <span class="min_br"></span><p> Preparation </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {500} brand = "solid" 
            sizeTop = {620} size1 = {8} size2 = {8} sizeLeft = {25} sizeRight = {25}>
              <p> EGR 329 (3) </p><span class="min_br"></span> <p>  Computer </p>
              <span class="min_br"></span><p> Architecture </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {500} brand = "solid" 
            sizeTop = {740} size1 = {8} size2 = {8} sizeLeft = {15} sizeRight = {15}
             colorStyle = "lightblue">
              <p> CSC 311 (3) </p><span class="min_br"></span> <p>  Compiler Design</p>
              <span class="min_br"></span><p> and Languages </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {500} brand = "solid" 
            sizeTop = {860} size1 = {8} size2 = {8} sizeLeft = {26} sizeRight = {26}>
              <p> EGR 324 (3) </p><span class="min_br"></span> <p> Engineering</p>
              <span class="min_br"></span><p> Economics </p>
            </StyledLabelChartRight1>
            

        </StyledContainer>
          {/* <StyledFormArea2>
            <h1> Courses Page!!! </h1>
          <StyledFormArea2>
            <h1> Courses Page </h1>
          </StyledFormArea2>
         */}

          {/* Spring 4th Semester Courses */}

            <StyledLabelChartTop size = {700}
              sizeTop = {180} sizeLeft = {12} sizeRight = {12}>
              <p>  4th Sem (Sprg) </p><span class="min_br"></span><p>  15 Credits </p>
            </StyledLabelChartTop>

            <StyledLabelChartTop size = {900}
              sizeTop = {180} sizeLeft = {12} sizeRight = {12}>
              <p>  3rd Sem (Fall) </p><span class="min_br"></span><p>  16 Credits </p>
            </StyledLabelChartTop>

            <StyledLabelChartTop size = {1100}
              sizeTop = {180} sizeLeft = {12} sizeRight = {12}>
              <p>  2nd Sem (Sprg) </p><span class="min_br"></span><p>  15 Credits </p>
            </StyledLabelChartTop>

            <StyledLabelChartTop size = {1300}
              sizeTop = {180} sizeLeft = {12} sizeRight = {12}>
              <p>  1st Sem (Fall) </p><span class="min_br"></span><p>  16 Credits </p>
            </StyledLabelChartTop>

            <StyledLabelChartRight1 size = {700} brand = "solid" 
              sizeTop = {260} size1 = {8} size2 = {8} sizeLeft = {17} sizeRight = {17}>
              <p> PHY 201 (4) </p><span class="min_br"></span><p>  Phy for Engrs I </p>
              <span class="min_br"></span><p> with Lab </p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {900} brand = "solid" 
              sizeTop = {260} size1 = {5} size2 = {5} sizeLeft = {2} sizeRight = {1}>
                <p> MAT 255 (4) </p><span class="min_br"></span><p>Analytical Geometry</p>
                <span class="min_br"></span><p> and Calc II </p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1100} brand = "solid" 
              sizeTop = {260} size1 = {8} size2 = {8} sizeLeft = {5} sizeRight = {4}>
                <p> MAT 245 (4) </p><span class="min_br"></span><p>  Analytical Geometry </p>
                <span class="min_br"></span><p> and Calc I </p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1300} brand = "solid" 
              sizeTop = {260} size1 = {5} size2 = {5} sizeLeft = {15} sizeRight = {15}>
                <p> EGR 182 (4) * </p><span class="min_br"></span><p>Intro Math for</p>
                <span class="min_br"></span><p> Engr Appl </p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {700} brand = "dotted" 
              sizeTop = {500} size1 = {15} size2 = {15} sizeLeft = {20} sizeRight = {25}>
                <p> Approved  </p><span class="min_br"></span><p>Science (2)</p>
                <span class="min_br"></span><p></p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {700} brand = "solid" 
              sizeTop = {620} size1 = {5} size2 = {10} sizeLeft = {20} sizeRight = {20}>
                <p> EGR 226 (3)  </p><span class="min_br"></span><p>OS and </p>
                <span class="min_br"></span><p>Networking</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {700} brand = "solid" 
              sizeTop = {740} size1 = {5} size2 = {10} sizeLeft = {10} sizeRight = {10}>
                <p> EGR 227 (3)  </p><span class="min_br"></span><p>Data Structures</p>
                <span class="min_br"></span><p>and Analysis</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {700} brand = "solid" 
              sizeTop = {860} size1 = {5} size2 = {10} sizeLeft = {10} sizeRight = {10}>
                <p> EGR 223 (3)  </p><span class="min_br"></span><p>Software Engr</p>
                <span class="min_br"></span><p>Approach to HCI</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {900} brand = "solid" 
              sizeTop = {500} size1 = {10} size2 = {5} sizeLeft = {20} sizeRight = {20}>
                <p> EGR 225 (3)  </p><span class="min_br"></span><p>Discrete</p>
                <span class="min_br"></span><p>Structures I</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {900} brand = "dotted" 
              sizeTop = {620} size1 = {5} size2 = {5} sizeLeft = {20} sizeRight = {20}>
                <p> Christian or  </p><span class="min_br"></span><p>Intercultural</p>
                <span class="min_br"></span><p>Studies (3)</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {900} brand = "solid" 
              sizeTop = {740} size1 = {5} size2 = {10} sizeLeft = {20} sizeRight = {20}>
                <p> EGR 222 (3) </p><span class="min_br"></span><p>Software</p>
                <span class="min_br"></span><p>Engineering</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {900} brand = "dotted" 
              sizeTop = {860} size1 = {5} size2 = {5} sizeLeft = {20} sizeRight = {20}>
                <p> WLD161, </p><span class="min_br"></span><p>History, or</p>
                <span class="min_br"></span><p>Poly Sci (3)</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1100} brand = "solid" 
              sizeTop = {380} size1 = {10} size2 = {10} sizeLeft = {20} sizeRight = {20}>
                <p> EGR 102 (4) </p><span class="min_br"></span><p>Intro to Engr</p>
                <span class="min_br"></span><p>Design</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1100} brand = "solid" 
              sizeTop = {500} size1 = {10} size2 = {5} sizeLeft = {20} sizeRight = {20}>
                <p> EGR 122 (3) </p><span class="min_br"></span><p>Visualization</p>
                <span class="min_br"></span><p>Languages I</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1100} brand = "solid" 
              sizeTop = {620} size1 = {15} size2 = {15} sizeLeft = {10} sizeRight = {15}>
                <p> EGR 192 (1) </p><span class="min_br"></span><p>Engr Seminar I</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1100} brand = "dotted" 
              sizeTop = {860} size1 = {5} size2 = {10} sizeLeft = {20} sizeRight = {20}>
                <p> ENG 123 (3) </p><span class="min_br"></span><p>Intermediate</p>
                <span class="min_br"></span><p>Composition</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1300} brand = "solid" 
              sizeTop = {380} size1 = {10} size2 = {5} sizeLeft = {20} sizeRight = {20}>
                <p> GST 100 (1) </p><span class="min_br"></span><p>First Year</p>
                <span class="min_br"></span><p>Experience</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1300} brand = "solid" 
              sizeTop = {500} size1 = {1} size2 = {1} sizeLeft = {20} sizeRight = {20}>
                <p> EGR 101 (4) </p><span class="min_br"></span><p>Engr from</p>
                <span class="min_br"></span><p>Christian</p><span class="min_br"></span>
                <p> Worldview </p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1300} brand = "solid" 
              sizeTop = {620} size1 = {5} size2 = {10} sizeLeft = {15} sizeRight = {15}>
                <p> EGR 121 (3) * </p><span class="min_br"></span><p>Intro to Comp</p>
                <span class="min_br"></span><p>Prog in C++</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1300} brand = "solid" 
              sizeTop = {740} size1 = {10} size2 = {10} sizeLeft = {10} sizeRight = {15}>
                <p> EGR 103 (1) ** </p><span class="min_br"></span><p>Engr Service I</p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1300} brand = "dotted" 
              sizeTop = {860} size1 = {15} size2 = {15} sizeLeft = {15} sizeRight = {15}>
                <p> ENG 113 (3) </p><span class="min_br"></span><p>Composition</p>
            </StyledLabelChartRight1>
        
      </div>
  );
}

export default Courses;