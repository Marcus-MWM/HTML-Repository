// courses page

import React from "react"
import Header from "../components/Header"
// styled components
import StyledContainer, { StyledTextInput, StyledFormArea,
    StyledFormArea2, 
    StyledFormButton, StyledLabel, Avatar, 
    StyledTitle, colors, ButtonGroup, ExtraText,
    TextLink, CopyrightText, StyledLabelChartRight1,
    StyledLabelChartTop } from "../Styles";

// courses page
import "./Courses.css";

import Beach from "../assests/beach.jpg"

const Courses = () =>{
  return (
      <div>
        <StyledContainer image={Beach} sizeH = {150}>
        <StyledFormArea2>
            <h1> Courses Page!!! </h1>
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
            </StyledLabelChartRight1>
            <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {380} size1 = {8} size2 = {8}>
              <p>  EGR 402 (3) </p><span class="min_br"></span><p>  Capstone Design </p>
              <span class="min_br"></span><p> (CSDS Section) </p>
            </StyledLabelChartRight1>
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
