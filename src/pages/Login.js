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

// Loader
import {ThreeDots} from 'react-loader-spinner';

// auth & redux
import { connect } from "react-redux";
import { loginUser } from "../auth/actions/userActions";
import { useHistory } from "react-router-dom";

import { signInWithGoogle } from "../firebase/firebase";
import { auth } from "../firebase/firebase";


const Login = ({loginUser}) => {
        const history = useHistory();
        const emailAddress = [
            'test@gmail.com',
        ];
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
                        .oneOf(emailAddress, " ")
                        .required("Requied"),
                        password: Yup.string()
                        .min(8, "Password is too short")
                        .max(30, "Password is too long")
                        .required("Required"),
                    })}
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        console.log(values);
                        loginUser(values, history, setFieldError, setSubmitting);
                    }}
                >
                    {({isSubmitting}) => (
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
                                {!isSubmitting && (
                                    <StyledFormButton type="submit">
                                        Login
                                    </StyledFormButton>
                                )}

                                {isSubmitting && (
                                    <ThreeDots
                                    color={colors.theme}
                                    height={49}
                                    width={100}                                
                                />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New here? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    );
};

export default connect(null, {loginUser})(Login);