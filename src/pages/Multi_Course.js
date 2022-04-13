import React from "react";
import Header from "../components/Header";

import StyledContainer, { StyledTextInput, StyledFormArea,
    StyledFormArea2, 
    StyledFormButton, StyledLabel, Avatar, 
    StyledTitle, colors, ButtonGroup, ExtraText,
    TextLink, CopyrightText, StyledLabelChartRight1,
    StyledLabelChartTop, StyledFormButton2, StyledLabelChartBottom, StyledBottomBox, StyledButton } from "../Styles";

import "./Multi_Course.css";

function Multi_Course(){

  // const [agree, setAgree] = useState([]);

  // const checkboxHandler = (event) => {
  //   // setAgree(!agree);
  //   var updatedList = [...agree];

  //   if(event.target.select){
  //     updatedList = [...agree, event.target.value];
  //   } else{
  //     updatedList.splice(agree.indexOf(event.target.value), 1);
  //   }

  //   setAgree(updatedList);
  // }

  // const checkedItm = agree.length
  //   ? agree.reduce((total, item) => {
  //       return total + ", " + item;
  //     })
  //   : "";

    return (
        <>
          <StyledFormArea2>
            <h1>Course List </h1>
          </StyledFormArea2>

          <StyledLabelChartRight1 size = {20} brand = "solid" 
            sizeTop = {380} size1 = {8} size2 = {8}>
              <p>  EGR 402 (3) </p><span class="min_br"></span><p>  Capstone Design </p>
              <span class="min_br"></span><p> (CSDS Section) </p>

            </StyledLabelChartRight1>
            
            <select class="core" id = "course">
              <option value={"CS"}>Computer Science</option>
              <option value={"SE"}>Software Engineering</option>
              <option value={"courses"}>Test</option>
            </select>

            <StyledButton>
              {/* <Link to='./pages/Login'>
                Login
              </Link> */}
              Enter
          </StyledButton>

          {/* <input type="checkbox" value="EGR328" id="agree" onChange={checkboxHandler} /> */}

        </>
      );
}

export default Multi_Course;