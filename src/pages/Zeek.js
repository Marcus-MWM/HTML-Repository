import { StyledTitle, StyledSubTitle, StyledButton, ButtonGroup } from "../Styles";
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore"; 

// import firebase from './fbConfig';

// import firebase from "firebase/app";
// import firebase from "./firebase/firebase";
// import "firebase/firestore";

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore();

/**
 * DATE 4/10/22
 *  TODO: make the following lines work
 */
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
//     });
// });


  const Zeek = () => {
    return (
      <div>
        <div>
          
        </div>
        <StyledTitle size={65}>
{/* <<<<<<< HEAD */}
          Zeek's Page
{/* ======= */}
{/* //           Welcome to our Course Web App!
// >>>>>>> ea2547606c351235f097f38fa17e3019c3de049d */}
        </StyledTitle>
        <StyledSubTitle size={27}>
          Feel free to test the authentication and backend here
        </StyledSubTitle>
  
        <ButtonGroup>
          <StyledButton to="/login">
            {/* <Link to='./pages/Login'>
              Login
            </Link> */}
            Login
          </StyledButton>

          <StyledButton to="/signup">
            {/* <Link to='./components/Signup/'>
              Signup
            </Link> */}
            Sign Up
          </StyledButton>
        </ButtonGroup>

        <StyledSubTitle size={27}>
          Display some data here
        </StyledSubTitle>
      </div>
    );
  }
  
  export default Zeek;