// courses page

import React from "react"
import Header from "../components/Header"
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
            <h1> Courses Page </h1>
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
            sizeTop = {300} size1 = {8} size2 = {8}>
              <p>  EGR 402 (3) </p>
              <span class="min_br"></span>
              <p>  Capstone Design </p>
              <span class="min_br"></span>
              <p> (CSDS Section) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {420}  size1 = {8} size2 = {8} sizeLeft = {22} sizeRight = {22} colorStyle = "lightblue">
              <p>  CSC 412 (3) </p>
              <span class="min_br"></span>
              <p>  Intelligent </p>
              <span class="min_br"></span>
              <p> Systems </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {540}  sizeLeft = {15} sizeRight = {15}>
              <p>  EGR 425 (3) </p>
              <span class="min_br"></span>
              <p>  Real Time and </p>
              <span class="min_br"></span>
              <p> Embedded </p>
              <span class="min_br"></span>
              <p> Development </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {660}  sizeLeft = {13} sizeRight = {13} colorStyle = "lightblue">
              <p>  CSC 411 (2) </p>
              <span class="min_br"></span>
              <p>  Social and Prof </p>
              <span class="min_br"></span>
              <p> Issues in </p>
              <span class="min_br"></span>
              <p> Computing </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {170} brand = "dashed" 
            sizeTop = {180} size1 = {8} size2 = {8} sizeLeft = {25} sizeRight = {25}>
              <p>  WLD161, </p>
              <span class="min_br"></span>
              <p>  History, or </p>
              <span class="min_br"></span>
              <p> Poly Sci (3) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {170} brand = "solid" 
            sizeTop = {300} size1 = {8} size2 = {8}>
              <p>  EGR 401 (3) </p>
              <span class="min_br"></span>
              <p>  Capstone Design </p>
              <span class="min_br"></span>
              <p> (CSDS Section) </p>
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {170} brand = "solid" 
            sizeTop = {420} size1 = {8} size2 = {8} sizeLeft = {20} sizeRight = {20} colorStyle = "lightblue">
              <p>  CSC 414 (3) </p>
              <span class="min_br"></span>
              <p>  Theory of </p>
              <span class="min_br"></span>
              <p> Computation </p>
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

            <StyledLabelChartRight1 size = {700} brand = "dotted" sizeTop = {180} size1 = {8} size2 = {8}>
              <p> PHY 201 (4) </p>
              <span class="min_br"></span>
              <p>  Phy for Engrs I </p>
              <span class="min_br"></span>
              <p> with Lab </p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {900} brand = "dotted" sizeTop = {180} size1 = {8} size2 = {8}>
              <p> MAT 255 (4) </p>
              <span class="min_br"></span>
              <p>  Analytical Geometry </p>
              <span class="min_br"></span>
              <p> and Calc II </p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1100} brand = "dotted" sizeTop = {180} size1 = {8} size2 = {8}>
              <p> MAT 245 (4) </p>
              <span class="min_br"></span>
              <p>  Analytical Geometry </p>
              <span class="min_br"></span>
              <p> and Calc I </p>
            </StyledLabelChartRight1>

            <StyledLabelChartRight1 size = {1300} brand = "dotted" sizeTop = {180} size1 = {8} size2 = {8}>
              <p> EGR 182 (4) * </p>
              <span class="min_br"></span>
              <p>  Intro Math for </p>
              <span class="min_br"></span>
              <p> Engr Appl </p>
            </StyledLabelChartRight1>
            

      </div>
  );
}

export default Courses;


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
