import React from "react";
import { Link } from "react-router-dom";
import TableBody from "../components/TableBody";
import "./Progress.css";

const data = {
  "1st-Semester": [
    {
      id: "EGR 182 ",
      title: "Intro Math for Engr Appl",
      credits: 4,
      grade: "A+",
    },
    { id: "GST 100 ", title: "First Year Experience", credits: 1, grade: "A" },
    {
      id: "EGR 101 ",
      title: "Engr from Christian  Worldview",
      credits: 4,
      grade: "B",
    },
    {
      id: "EGR 121 ",
      title: "Intro to Comp Prog in C++",
      credits: 3,
      grade: "A",
    },
    { id: "EGR 103 ", title: "Engr Service I", credits: 1, grade: "B+" },
    { id: "ENG 113 ", title: "Composition", credits: 3, grade: "B" },
  ],
  "2nd-Semester": [
    {
      id: "MAT 245 ",
      title: "Analytical Geometry and Calc I",
      credits: 4,
      grade: "B",
    },
    { id: "EGR 102 ", title: "Intro to Engr Design", credits: 4, grade: "A" },
    {
      id: "EGR 122 ",
      title: "Visualization Languages I",
      credits: 3,
      grade: "B+",
    },
    { id: "EGR 192  ", title: "Engr Seminar I", credits: 1, grade: "B+" },
    {
      id: "ENG 123 ",
      title: "Intermediate Composition",
      credits: 3,
      grade: "B-",
    },
  ],
  "3rd-Semester": [
    {
      id: "MAT 255 ",
      title: "Analytical Geometry and Calc II",
      credits: 4,
      grade: "A-",
    },
    { id: "EGR 225 ", title: "Discrete Structures I", credits: 3, grade: "A" },
    {
      id: " ",
      title: "Christian or Intercultural Studies",
      credits: 3,
      grade: "B+",
    },
    {
      id: "EGR 222 ",
      title: "Intro to Comp Prog in C++",
      credits: 3,
      grade: "C",
    },
    { id: "EGR 103 ", title: "Software Engineering", credits: 3, grade: "A-" },
    { id: "WLD161 ", title: "History, or Poly Sci", credits: 3, grade: "A" },
  ],
  "4th-Semester": [
    {
      id: "PHY 201 ",
      title: "Phy for Engrs I with Lab",
      credits: 4,
      grade: "A",
    },
    { id: " ", title: "Approved Science ", credits: 2, grade: "A" },
    { id: "EGR 226 ", title: "OS and Networking", credits: 3, grade: "A" },
    {
      id: "EGR 227  ",
      title: "Data Structures and Analysis",
      credits: 3,
      grade: "A",
    },
    {
      id: "EGR 223 ",
      title: "Software Engr Approach to HCI",
      credits: 3,
      grade: "A",
    },
  ],
};
const Progress = () => {
  return (
    <div className="con">
      <div className="progrees-wrapper">
        <h2 className="heading">Your Progress</h2>
        {Object.keys(data).map((object) => (
          <>
            <h2 className="semester">{object}</h2>
            <TableBody data={data[object]} />
          </>
        ))}
        <h2 className="semester">5th-semester: Currently Studying</h2>
        <div className="back-btn">
          <Link to="/Courses">
            <p>Back to courses</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Progress;