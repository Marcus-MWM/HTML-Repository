// about page

import React from "react";
import Header from "../components/Header";

import StyledContainer, { CourseTab, StyledButton2 } from "../components/Styles";

import Beach from "../assests/beach.jpg"

function Hist_Poly() {
  return (
    <>
      <Header text =''/>
      <div style={{ backgroundImage:`url(${Beach})`, backgroundSize:"cover", width: '100vw', height: '100vh'}}>
            <CourseTab sizeR = {30}>
            <h1>Poly Sci</h1>
          <p>
          PAD452: Organizational Theory and Design
          </p>
          <p>
          PAD491: Public Personnel Management
          </p>
          <p>
          POL101: Intro to Political Science Disc
          </p>
          <p>
          POL213: American Government
          </p>
          <p>
          POL223: State and Local Government
          </p>
          <p>
          POL255: Intro to Comparative Politics
          </p>
          <p>
          POL350: International Relations Theory
          </p>
          <p>
          POL415: World Geography
          </p>
          <p>
          POL427: American Political Theory
          </p>
          <p>
          POL435: Campaigns and Elections
          </p>
          <p>
          POL437: Globalization
          </p>
          <p>
          POL450: Research Methods Political Sci
          </p>
          <p>
          POL484: Constitutional Law I
          </p>
          <p>
          POL485: Constitutional Law II
          </p>

            </CourseTab>
            
            <CourseTab sizeL = {530} sizeR = {530}>
                <h1>
                WLD161,
                History, or
                Poly Sci
                </h1>
            </CourseTab>

            <CourseTab sizeL = {30}>
            <h1> History or WLD161</h1>
        <p>
        WLD161: American Founding and Experience
        </p>
        <p>
        HIS201: Special Topics in U.S. History
        </p>
        <p>
        HIS213: History of US to Reconstruction
        </p>
        <p>
        HIS223: History of US Since Civil War 
        </p>
        <p>
        HIS225: World History to 1500
        </p>
        <p>
        HIS311: Minorities in America
        </p>
        <p>
        HIS315: Latin American History 
        </p>
        <p>
        HIS333: Nineteenth Century Europe
        </p>
        <p>
        HIS393: History of California
        </p>
        <p>
        HIS420: The Classical World
        </p>
            </CourseTab>


            <StyledButton2 to = "/courses" sizeB={50} sizeL = {650} colorT = "blue">
                Go back to Course
            </StyledButton2>
          
        

        </div>
    </>
  );
}

export default Hist_Poly;