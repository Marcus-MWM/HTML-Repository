import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';
import {useField} from 'formik';
import {
    StyledTextInput,
    StyledLabel,
    StyledIcon,
    ErrorMsg,
    StyledTextInput2,
} from "./Styles";

// Eye for password
import {FiEyeOff, FiEye} from 'react-icons/fi';


export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    return(
        <div style={{position: "relative"}}> 
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            {props.type !== "password" && <StyledTextInput 
                invalid={meta.touched && meta.error}
                {...field}
                {...props}
            />}

            {props.type === "password" && (
                <StyledTextInput 
                    invalid={meta.touched && meta.error}
                    {...field} 
                    {...props}
                    type={show ? "text" : "password"}
                />
            )}

            <StyledIcon>
                {icon}
            </StyledIcon>

            {
                props.type === "password" && (
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show && <FiEye/>}
                    {!show && <FiEyeOff/>}
                </StyledIcon>
                )}

                {meta.touched && meta.error ? (
                    <ErrorMsg>{meta.error}</ErrorMsg>
                ): (
                    <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
                )}
        </div>
    )
}

export const TextInput2 = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    return(
        <div style={{position: "relative"}}> 
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            {props.type !== "password" && <StyledTextInput2 
                invalid={meta.touched && meta.error}
                {...field}
                {...props}
                type= "button"
            />}

            {props.type === "password" && (
                <StyledTextInput2 
                    invalid={meta.touched && meta.error}
                    {...field} 
                    {...props}
                    type={show ? "text" : "password"}
                />
            )}

            <StyledIcon>
                {icon}
            </StyledIcon>

            {
                props.type === "password" && (
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show && <FiEye/>}
                    {!show && <FiEyeOff/>}
                </StyledIcon>
                )}

                {meta.touched && meta.error ? (
                    <ErrorMsg>{meta.error}</ErrorMsg>
                ): (
                    <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
                )}
        </div>
    )
}