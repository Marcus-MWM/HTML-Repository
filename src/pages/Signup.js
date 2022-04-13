import React, { Component }  from 'react';
import {useState} from 'react'
// import {Link, useHistory} from 'react-router-dom'

import {ReactComponent as ArrowRightIcon} from '../assests/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assests/svg/visibilityIcon.svg'

import { Link } from 'react-router-dom';
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
// import { useHistory } from "react-router-dom";

import { signInWithGoogle } from "../firebase/firebase";
import { auth } from "../firebase/firebase";
import { useNavigate } from 'react-router-dom';


function Signup () {
    const [showPassword, setPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:'',
    })
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    const {name, email, password} = formData
    
    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Welcome!
                    </p>
                </header>
                    <form>
                        <input 
                            type='text'
                            className='nameInput' 
                            placeholder='Name' 
                            id='name' 
                            value={name}
                            onChange={onChange}
                        />
                        <input 
                            type="email" 
                            className="emailInput" 
                            placeholder="Email" 
                            id='email' 
                            value={email}
                            onChange={onChange}
                        />

                        <div className="passwordInputDiv">
                            <input 
                                type={showPassword ? 'text' : 'password'}  
                                className='passwordInput' 
                                placeholder="Password"
                                id="password" 
                                value={password}
                                onChange={onChange}
                            />

                            <img 
                                src={visibilityIcon} 
                                alt="show password" 
                                className="showPassword" 
                                onClick={() => setPassword((prevState) => 
                                !prevState)} />
                        </div>

                        <Link to='/forgot-password' 
                            className='forgotPasswordLink'>
                                Forgot Password
                        </Link>

                        <div className="signUpBar">
                            <p className="signUpText">
                                Sign Up
                            </p>
                            <button className="signUpButton">
                                <ArrowRightIcon fill='#ffffff' width='34px'
                                height='34px' />
                            </button>
                        </div>
                    </form>
                 {/* Google OAuth */}
                 <Link to='/sign-in' className='registerLink'>
                     Sign In Instead
                 </Link>
            </div>
        </>
    )
}

export default Signup