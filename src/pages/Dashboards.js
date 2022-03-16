import { StyledTitle, StyledSubTitle, StyledButton, 
        ButtonGroup, StyledFormArea, colors } from "../Styles";
import { Link } from 'react-router-dom';
  
  const Dashboards = () => {
    return (
      <div>
        <div>

        </div>
        <StyledFormArea bg={colors.dark2}>
          <StyledTitle size={65}>
            Welcome, User
          </StyledTitle>
          <ButtonGroup>
            <StyledButton to="#">
                Logout
            </StyledButton>

          </ButtonGroup>
        </StyledFormArea>
        
      </div>
    );
  }
  
  export default Dashboards;