import {useField} from 'formik';
import {
    StyledTextInput,
    StyledLabel
} from "./Styles";

export const TextInput = ({...props}) => {
    const [field, meta] = useField(props);

    return(
        <div> 
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            <StyledTextInput 
                {...field}
                {...props}
            />
        </div>
    )
}

export default TextInput;