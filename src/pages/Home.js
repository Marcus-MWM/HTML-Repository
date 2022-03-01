import { StyledTitle, StyledSubTitle, StyledButton, ButtonGroup } from "../Styles";
import { Link } from 'react-router-dom';
  
  const Home = () => {
    return (
      <div>
        <div>
  
        </div>
        <StyledTitle size={65}>
          Welcome to our Course Web App
        </StyledTitle>
        <StyledSubTitle size={27}>
          Feel free to explore our page
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
            Signup
          </StyledButton>
        </ButtonGroup>
      </div>
    );
  }
  
  export default Home;