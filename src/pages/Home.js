import { StyledTitle, StyledSubTitle,
StyledButton, ButtonGroup } from "../Styles";

const Home = () => {
  return (
    <div>
      <div>

      </div>
      <StyledTitle size={65}>
        Welcome to TTPC
      </StyledTitle>
      <StyledSubTitle size={27}>
        Feel free to explore our page
      </StyledSubTitle>

      <ButtonGroup>
        <StyledButton to="/login">
        Login
      </StyledButton>
      <StyledButton to="/signup">
        Signup
      </StyledButton>
      </ButtonGroup>
    </div>
  );
}

export default Home;