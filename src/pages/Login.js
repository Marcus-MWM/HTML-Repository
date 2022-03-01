// styled components
import { StyledTextInput, StyledFormArea, 
    StyledFormButton, StyledLabel, Avatar, 
    StyledTitle, colors, ButtonGroup, ExtraText,
    TextLink, CopyrightText } from "../Styles";

import Logo from './../assests/grad_logo.png';

// formik
import { Formik, Form } from "formik";
import { TextInput } from "..//FormLib";
import * as Yup from "yup";

//icons
import {FiMail, FiLock} from 'react-icons/fi';


const Login = () => {

    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Login
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                        .email("Invalid email address")
                        .required("Requied"),
                        password: Yup.string()
                        .min(8, "Password is too short")
                        .max(30, "Password is too long")
                        .required("Required"),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                >
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
                <ExtraText>
                    New here? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2020
            </CopyrightText>
        </div>
    );
};

export default Login;