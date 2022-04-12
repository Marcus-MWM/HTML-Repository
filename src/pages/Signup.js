import React, { Component }  from 'react';

// styled components
import { StyledTextInput, StyledFormArea, 
    StyledFormButton, StyledLabel, Avatar, 
    StyledTitle, colors, ButtonGroup, ExtraText,
    TextLink, CopyrightText } from "../Styles";

import Logo from './../assests/grad_logo.png';
import styled from "styled-components";

// formik
import { Formik, Form } from "formik";
import { TextInput } from "..//FormLib";
import * as Yup from "yup";

//icons
import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';

// Loader
import {ThreeDots} from 'react-loader-spinner';

// auth & redux
import { connect } from "react-redux";
import { signupUser } from "../auth/actions/userActions";
import { useHistory } from "react-router-dom";

import "./Signup.css";

const Signup = ({signupUser}) => {
        const history = useHistory();
        
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Signup
                </StyledTitle>
                <Formik
                    initialValues={{
                        ID: "",
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateOfBirth: "",
                        name: "",
                    }}
                    validationSchema={Yup.object({
                        ID: Yup.string()
                        .matches(/^[0-9]{6}?$/, " ")
                        .required("Required"),
                        test: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                        email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                        password: Yup.string()
                        .matches(/(?=.*[a-z])/, " ")
                        .matches(/(?=.*[A-Z])/, " ")
                        .matches(/(?=.*[0-9])/, " ")
                        .matches(/(?=.*[!@#$%^&*])/, " ")
                        .min(8, "Password is too short")
                        .max(12, "Password is too long")
                        .required("Required"),
                        dateOfBirth: Yup.date().required("Required"),
                        repeatPassword: Yup.string().required("Required").
                        oneOf([Yup.ref("password")], "Passwords must match"),
                    })}
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        signupUser(values, history, 
                            setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                                name="ID"
                                type="text"
                                label="Student ID"
                                icon={<FiUser />}
                            />
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="olga1@example.com"
                                icon={<FiMail />}
                            />

                            <p class="title">Graduate or Undergraduate</p>
                            <select class="test">
                                <option value={"Graduate"}>Graduate</option>
                                <option value={"Undergraduate"}>Undergraduate</option>
                            </select>

                            <TextInput
                                name="dateOfBirth"
                                type="date"
                                label="Date of Birth"
                                icon={<FiCalendar />}
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock />} 
                            />
                            <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="********"
                                icon={<FiLock />} 
                            />
                            <ButtonGroup>
                                {!isSubmitting && (
                                    <StyledFormButton type="submit">
                                        Signup
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
                    Already have an account? <TextLink to="/login">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    );
};

export default connect(null, {signupUser}) (Signup);