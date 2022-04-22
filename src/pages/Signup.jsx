import React, { useState, useEffect }  from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase-config'
// import OAuth from '../components/OAuth'
import { ReactComponent as ArrowRightIcon } from '../assests/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assests/svg/visibilityIcon.svg'

import "./Signup.css";

function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        id: '',
        password:'',
    })
    const {name, email, id, password} = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()
            
            const userCredential = await createUserWithEmailAndPassword (
                auth, 
                email, 
                id, 
                password
            )

            const user = userCredential.user

            updateProfile(auth.currentUser, {
                displayName: name,
            })

            const formDataCopy = {...formData}
            delete formDataCopy.password 
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            navigate('/')
        } catch (error) {
            toast.error('Something went wrong with registration')
        }
    }
    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Create an Account
                    </p>
                </header>
                    <form onSubmit={onSubmit}>
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
        
                        <input 
                            type="number"
                            className='idInput' 
                            placeholder='Student ID' 
                            id='id' 
                            value={id}
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
                 <Link to='/login' className='registerLink2'>
                     Sign In Instead
                 </Link>
            </div>
        </>
    )
}

export default Signup