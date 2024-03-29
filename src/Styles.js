
import styled from "styled-components";

//background
import background from './assests/bg.jpg';

// React router
import { Link } from "react-router-dom";
import { blueGrey } from "@material-ui/core/colors";

export const colors ={
    primary: '#fff',
    theme : "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1:  "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}

const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    min-height: ${(props) => props.sizeH}vh;
    min-width: ${(props) => props.size}vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${props => props.image});
    background-size: cover;
    background-attachment: fixed;
    background-color: blue;
`;

export default StyledContainer;


// Home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    font-weight: bold;
    padding: 5px;
    margin-bottom: 25px;
`;

export const Avatar = styled.div`
    width: 105px;   // was 85px before
    height: 85px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: blue;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }
`;

export const StyledButton2 = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-color: ${props => props.colorT};
    border-radius: 25px;
    color: ${colors.primary};
    color: ${props => props.colorT};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;
    bottom: -550px;
    bottom: -${props => props.sizeB}px;
    // left: 150px;
    left: ${props => props.sizeL}px;
    right: ${props => props.sizeR}px;
    position: absolute;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

// Input
export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.black};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && 
        `background-color: ${colors.red}; color: $
        {colors.primary};`} // Must change to have no red

    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;

export const StyledTextInput2 = styled.input`
    width: 100px;
    // padding: 15px;
    // padding-left: 50px;
    // font-size: 17px;
    // letter-spacing: 1px;
    // color: ${colors.black};
    // border: 0;
    // outline: 0;
    // display: block;
    // margin: 5px auto 10px auto;
    // transition: ease-in-out 0.3s;

    ${(props) => props.invalid && 
        `background-color: ${colors.red}; color: $
        {colors.primary};`} // Must change to have no red

    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg ||
    colors.light1};
    text-align: center;
    padding: 45px 55px;
`;

export const StyledFormArea2 = styled.div`
    background-color: lightblue;
    text-align: center;
    padding: 1px 55px;
    position: absolute;
    top: 80px;
    left: 35%;
    font-size: 12px;
`;

export const StyledFormArea3 = styled.div`
    background-color: lightblue;
    text-align: center;
    padding: 15px 55px;
    top: 200px;
    left: 32.5%;
    position: absolute;
`;

export const StyledButton3 = styled(Link)`
    padding: 15px 25px;
    // width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
    }
`;

export const StyledMulti = styled.div`
    background-color: lightblue;
    text-align: center;
    padding: 45px 55px;
`;

export const StyledLabelChartRight1 = styled.div`
    background-color: white;
    background-color: ${props => props.colorStyle};
    border-style: ${props => props.brand};
    border-color: #66B3FF;
    border-color: ${props => props.colorB};
    text-align: center;
    padding-left: 10px;
    padding-left: ${props => props.sizeLeft}px;
    padding-right: 10px;
    padding-right: ${props => props.sizeRight}px;
    padding-top: ${(props) => props.size1}px;
    padding-bottom: ${(props) => props.size2}px;
    position: absolute;
    top: ${(props) => props.sizeTop}px;
    right: ${(props) => props.size}px;
    font-size: 12px;
    font-weight: bold;
`;

export const StyledLabelChartBottom = styled.div`
    background-color: white;
    text-align: left;
    padding-left: 10px;
    padding-right: ${props => props.sizeR}px;
    width: 230px;
    width: ${props => props.width}px;
    position: absolute;
    bottom: -350px;
    bottom: -${props => props.sizeB}px;
    left: 10.5%;
    left: ${props => props.size}%;
    font-size: 16px;
`;

export const StyledBottomBox = styled.div`
    background-color: gray;
    background-color: ${props => props.colorS};
    // border-style: dashed;
    border-style: ${props => props.brand};
    border-color: #66B3FF;
    border-color: ${props => props.colorB};
    text-align: center;
    padding: 20px 20px;
    padding: ${props => props.lengthS}px ${props => props.lengthS}px;
    position: absolute;
    bottom: -350px;
    bottom: -${props => props.sizeB}px;
    left: 22.5%;
    left: ${props => props.size}%;
    font-size: 16px;
`;

export const StyledLabelChartTop = styled.div`
    background-color: white;
    background-color: ${props => props.colorStyle};
    border-style: ${props => props.brand};
    border-color: #66B3FF;
    text-align: center;
    padding-left: 10px;
    padding-left: ${props => props.sizeLeft}px;
    padding-right: 10px;
    padding-right: ${props => props.sizeRight}px;
    padding-top: ${(props) => props.size1}px;
    padding-bottom: ${(props) => props.size2}px;
    position: absolute;
    top: ${(props) => props.sizeTop}px;
    right: ${(props) => props.size}px;
    font-size: 14px;
    color: blue;
    font-weight: bold;
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
    }
`;

export const StyledFormButton2 = styled.button`
    // padding: 10px;
    // width: 150px;
    // background-color: transparent;
    // font-size: 16px;
    // border: 2px solid ${colors.theme};
    // border-radius: 25px;
    // color: ${colors.theme};
    // transition: ease-in-out 0.3s;
    // outline: 0;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
    }
`;

export const StyledFormButton3 = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
    }
`;

export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color? props.color : colors.dark2)}
    padding: 2px;
    margin-top: 10px;
`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

// Icons
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 20px;
    ${(props) => props.right && `right: 15px; `}
    ${(props) => !props.right && `left: 15px;`}
`;

// copyright
export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.light2};
`;

export const CourseTab = styled.p`

background-color: lightblue;
    text-align: center;
    position: absolute;
    padding: 45px 55px;
    left: ${props => props.sizeL}px;
    right: ${props => props.sizeR}px;
    top: 80px;
    font-weight: bold;
`;