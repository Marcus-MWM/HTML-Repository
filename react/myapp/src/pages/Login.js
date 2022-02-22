// styled components
import { StyledTextInput, StyledFormArea, 
    StyledFormButton, StyledLabel, Avatar, 
    StyledTitle, colors, ButtonGroup } from "../Styles";

import Logo from './../assests/logo.png';

// formik
import { Formik, Form } from "formik";
import { TextInput } from "..//FormLib";

//icons
import {FiMail, FiLock} from 'react-icons/fi';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Member Login
                </StyledTitle>
                <Formik>
                    {() => (
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="olga1@example.com"
                                icon={<FiMail />}
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                <StyledFormButton
                                type="submit">
                                    Login
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    );
};

export default Login;