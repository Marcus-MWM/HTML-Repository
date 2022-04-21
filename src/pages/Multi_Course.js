// import React, { useState } from "react"
// import Header from "../components/Header";

// import StyledContainer, { StyledTextInput, StyledFormArea,
//     StyledFormArea2, 
//     StyledFormButton, StyledLabel, Avatar, 
//     StyledTitle, colors, ButtonGroup, ExtraText,
//     TextLink, CopyrightText, StyledLabelChartRight1,
//     StyledLabelChartTop, StyledFormButton2, StyledLabelChartBottom, StyledBottomBox, StyledButton, StyledFormArea3, StyledMulti, StyledButton3 } from "../Styles";
// import Courses from "./Courses";

// import "./Multi_Course.css";

// // import Select from 'react-select';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const actions = [
//   { label: "Add", value: 'courses' },
//   { label: "Edit", value: 2 },
//   { label: "Delete", value: 3 }
// ];

// function Multi_Course(){

//   // const [agree, setAgree] = useState([]);
//   // const [Cour_Val, Cour_Val_A] = useState(false);

//   // const checkboxHandler = (event) => {
//   //   // setAgree(!agree);
//   //   var updatedList = [...agree];

//   //   if(event.target.select){
//   //     updatedList = [...agree, event.target.value];
//   //   } else{
//   //     updatedList.splice(agree.indexOf(event.target.value), 1);
//   //   }

//   //   if(event.target.value === 3){
//   //       Cour_Val_A(!Cour_Val);
//   //   }


//   //   setAgree(updatedList);
//   // }


//       const [inputValue, setValue] = useState(' ');
//       const [selectedValue, setSelectedValue] = useState('courses');
//       const [agree, setAgree] = useState([]);

//     const handleInputChange = value => {
//       setValue(value);
//     }

//     const handleChange = (value) => {
//       // setSelectedValue(value);
//       setSelectedValue(value.value);
//       // var updatedList = [...agree];
//       // if(value.target.checked){
//       //   updatedList = [...agree, value.target.value];
//       // } else{
//       //   updatedList.splice(agree.indexOf(value.target.value), 1);
//       // }
//       // updatedList = [...agree, value.target.value];
//       // setAgree(value);
//     }

//     const [selects, setSelects] = useState();

//     return (
//         <>
//           <StyledFormArea2>
//             <h1>Course List </h1>
//           </StyledFormArea2>

            
//             {/* <select class="core" id = "course">
//               <option value={"CS"}>Computer Science</option>
//               <option value={"SE"}>Software Engineering</option>
//               <option value="courses" id="agree" onChange={checkboxHandler}>Current Computer Science</option>
//             </select>
//             <button disabled={!Cour_Val} onChange={checkboxHandler}>
//               E
//             </button> */}

//             {/* <StyledButton to = "/courses">
//               Enter
//           </StyledButton>
//           <StyledButton to = "/graduation">
//               Graduation
//           </StyledButton> */}
          
//           {/* <div>
//             Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}
//           </div> */}

//           {/* <div className="container">
//             <div className="row">
//               <div className="col-md-4"></div>
//               <div className="col-md-4">
//                 <Select options={ actions } 
//                 value={actions.find(x => x.value === selectedValue)} 
//                 onInputChange={handleInputChange}
//                 onChange={handleChange}/> */}
//                 {/* <Select options={ actions } value={selectedValue} onInputChange={handleInputChange}
//                 onChange={handleChange}/> */}
//               {/* </div>
//               <div className="col-md-4"></div>
//             </div>
//           </div> */}

//           {/* <div>
//             Selected Value: {JSON.stringify(selectedValue, null, 2)}
//           </div> */}

//           {/* <h1>{selects}</h1> */}

//           {/* <StyledButton to = {JSON.stringify(selectedValue, null, 2)}>
//               Test ME
//           </StyledButton> */}


//           <StyledFormArea3>
//               <h1>Pick your Course</h1>
//             <StyledMulti>
//               <select class="core" value={selects} onChange={e => setSelects(e.target.value)}>
//               <option></option>
//               <option>Computer_Science</option>
//               <option>Software_Engineering</option>
//               <option>courses</option>
//             </select>
//             </StyledMulti>
//             <StyledButton3 to = {selects}>
//                 Enter
//             </StyledButton3>
//             <StyledMulti>
//               <StyledButton3 to = "/graduation">
//                 Graduation
//               </StyledButton3>
//             </StyledMulti>
//           </StyledFormArea3>
//           {/* <select class="core" value={selects} onChange={e => setSelects(e.target.value)}>
//             <option></option>
//             <option>computer</option>
//             <option>software</option>
//             <option>mango</option>
//             <option>courses</option>
//           </select>

//           <StyledButton to = {selects}>
//               Test ME
//           </StyledButton> */}


//           {/* <input type="checkbox" value="EGR328" id="agree" onChange={checkboxHandler} /> */}

//         </>
//       );
// }

// export default Multi_Course;




import React, { useState } from "react"
import Header from "../components/Header"

import StyledContainer, { StyledTextInput, StyledFormArea,
    StyledFormArea2, 
    StyledFormButton, StyledLabel, Avatar, 
    StyledTitle, colors, ButtonGroup, ExtraText,
    TextLink, CopyrightText, StyledLabelChartRight1,
    StyledLabelChartTop, StyledFormButton2, StyledLabelChartBottom, 
    StyledBottomBox, StyledButton, StyledFormArea3, StyledMulti, 
    StyledButton3 } from "../Styles";
import Courses from "./Courses";

import "./Multi_Course.css";

// import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';

const actions = [
  { label: "Add", value: 'courses' },
  { label: "Edit", value: 2 },
  { label: "Delete", value: 3 }
];

function Multi_Course() {
  // const [agree, setAgree] = useState([]);
  // const [Cour_Val, Cour_Val_A] = useState(false);

  // const checkboxHandler = (event) => {
  //   // setAgree(!agree);
  //   var updatedList = [...agree];

  //   if(event.target.select){
  //     updatedList = [...agree, event.target.value];
  //   } else{
  //     updatedList.splice(agree.indexOf(event.target.value), 1);
  //   }

  //   if(event.target.value === 3){
  //       Cour_Val_A(!Cour_Val);
  //   }


  //   setAgree(updatedList);
  // }


      const [inputValue, setValue] = useState(' ');
      const [selectedValue, setSelectedValue] = useState('courses');
      const [agree, setAgree] = useState([]);
      

    const handleInputChange = value => {
      setValue(value);
    }

    const handleChange = (value) => {
      setSelectedValue(value.value);
    }

    const [selects, setSelects] = useState();
  return (
    <>
      <Header text =''/>
        <div>
          <StyledFormArea2>
             <h1>Course List </h1>
          </StyledFormArea2>


           <StyledFormArea3>
               <h1>Pick your Course</h1>
             <StyledMulti>
               <select class="core" value={selects} onChange={e => setSelects(e.target.value)}>
               <option></option>
               <option>Computer_Science</option>
               <option>Software_Engineering</option>
               <option>courses</option>
             </select>
             </StyledMulti>

             <StyledButton3 to = "/courses">
                 Enter
             </StyledButton3>
             
             <StyledMulti>
               <StyledButton3 to = "/graduation">
                 Graduation
               </StyledButton3>
             </StyledMulti>
          </StyledFormArea3>

        </div>
    </>
  );
}

export default Multi_Course;