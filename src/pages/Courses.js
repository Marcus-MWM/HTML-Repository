
// styled components
import { StyledTextInput, StyledFormArea,
    StyledFormArea2, 
    StyledFormButton, StyledLabel, Avatar, 
    StyledTitle, colors, ButtonGroup, ExtraText,
    TextLink, CopyrightText, StyledLabelChartRight1 } from "../Styles";

// courses page
import "./Courses.css";

const Courses = () =>{
  return (
      <div>
          <StyledFormArea2>
            <h1> Courses Page!!! </h1>
          </StyledFormArea2>



          {/* 500 */}
          <StyledLabelChartRight1 size = {20} brand = "solid" 
          sizeTop = {180} sizeLeft = {22} sizeRight = {22}>
              <p>  EGR 328 (2) </p>
              <span class="min_br"></span>
              <p>  Numerical </p>
              <span class="min_br"></span>
              <p> Methods for </p>
              <span class="min_br"></span>
              <p> Computing </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {300}  sizeLeft = {10} sizeRight = {10}>
              <p>  EGR 402 (3) </p>
              <span class="min_br"></span>
              <p>  Capstone Design </p>
              <span class="min_br"></span>
              <p> (CSDS Section) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {170} brand = "dashed" sizeTop = {180} size1 = {8} size2 = {8}>
              <p>  WLD161, </p>
              <span class="min_br"></span>
              <p>  History, or </p>
              <span class="min_br"></span>
              <p> Poly Sci (3) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {330} brand = "dashed" sizeTop = {180} size1 = {8} size2 = {8}>
              <p>  Christian or </p>
              <span class="min_br"></span>
              <p>  Intercultural </p>
              <span class="min_br"></span>
              <p> Studies (3) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {500} brand = "dotted" sizeTop = {180} size1 = {8} size2 = {8}>
              <p> PHY 203 (4) </p>
              <span class="min_br"></span>
              <p>  Phy for Engrs II </p>
              <span class="min_br"></span>
              <p> with Lab </p>
            </StyledLabelChartRight1>
            
      </div>
  );
}

export default Courses;

// courses page

// import React from "react"
// import Header from "../components/Header"

// function Courses() {
//   return (
//     <>
//       <Header text ='hello testing.... '/>
//         <div>
//           <h1> Welcome to the Courses Page </h1>
//         </div>
//     </>
//   );
// }

// export default Courses;
