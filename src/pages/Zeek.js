import { StyledTitle, StyledSubTitle, StyledButton, ButtonGroup } from "../Styles";
import { Link } from 'react-router-dom';


  const Home = () => {
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
      </div>
    );
  }
  
  export default Home;