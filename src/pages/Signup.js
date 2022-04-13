import React, { Component }  from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
//import { getAuth, createUserWithEmailAndPassword, updateProfile, } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
//import { db } from '../firebase/firebase'
// import OAuth from '../components/OAuth'
import { ReactComponent as ArrowRightIcon } from '../assests/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assests/svg/visibilityIcon.svg'

function Signup () {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:'',
    })
    const {name, email, password} = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }))
      }
    
    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Create an Account
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
                                onClick={() => setShowPassword((prevState) => 
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
                 <Link to='/login' className='registerLink'>
                     Sign In Instead
                 </Link>
            </div>
        </>
    )
}

export default Signup