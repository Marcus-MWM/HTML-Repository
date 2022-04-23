// about page
<<<<<<< HEAD

import React from "react";
import Header from "../components/Header";

import StyledContainer, { CourseTab, StyledButton2 } from "../Styles";
=======
import React from "react";
import Header from "../components/Header";

import StyledContainer, { CourseTab, StyledButton2 } from "../components/Styles";
>>>>>>> origin/mbtesting

import Beach from "../assests/beach.jpg"

function Bible_Theo() {
  return (
    <>
      <Header text =''/>
      <div style={{ backgroundImage:`url(${Beach})`, backgroundSize:"cover", width: '100vw', height: '100vh'}}>
          <CourseTab sizeL={30}>
          <h1> Christian Studies</h1>
          <p>
          CST100	Overview of the Bible
          </p>
          <p>
          CST110	Old Testament Survey
          </p>
          <p>
          CST130	New Testament Survey
          </p>
          <p>
          CST210	Pentateuch and Former Prophets
          </p>
          <p>
          CST220	Latter Prophets and Writings
          </p>
          <p>
          CST230	Jesus and the Gospels
          </p>
          <p>
          CST300	History of Baptist Thought
          </p>
          <p>
          CST302	Foundations of Christian Thought	
          </p>
          <p>
          CST350	Biblical Interpretation
          </p>
          <p>
          CST360	Church History
          </p>
          <p>
          CST370	The Christian Faith
          </p>
          <p>
          CST381	Christian Missions
          </p>
          <p>
          CST410	Special Topics in Old Testament
          </p>
          <p>
          CST425	Christian Social Ethics
          </p>
          <p>
          CST490	Supervised Ministry
          </p>
          </CourseTab>

          <CourseTab sizeL = {530} sizeR = {530}>
            <h1>
              Christian or
              Intercultural
              Studies
            </h1>
          </CourseTab>
          
          <CourseTab sizeR = {30}>
          <h1> Intercultural Studies</h1>
          <p>
          ICS105

          Introduction to Global Studies
          </p>
          <p>
          ICS205	Global Discipleship
          </p>
          <p>
          ICS305	Global Christianity
          </p>
          <p>
          ICS435	Evangelism and Church Planting
          </p>
          </CourseTab>

          <StyledButton2 to = "/courses" sizeB={50} sizeL = {650} colorT = "blue">
                Go back to Course
            </StyledButton2>
        </div>
    </>
  );
}

export default Bible_Theo;