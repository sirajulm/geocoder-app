import React, { ChangeEvent } from 'react';
import styled from 'styled-components';


interface InputProps {
    name: string;
    label?: string;
    value: string;
    placeholder?: string
    required: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
`;

export const FormGroup = styled.div`
    margin: 15px;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size:16px;
    border: 1px solid #dadada;
    border-radius: 5px;
    outline: none;
`;

const Input = (props: InputProps) => {
    return (
        <FormGroup>
            {
                props.label && props.label.trim() !== ''
                && <StyledLabel
                    htmlFor={props.name} >
                    {props.label}{props.required ? ' *' : ''}
                </StyledLabel>
            }
            <StyledInput
                type="text"
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                required={props.required || false}
                onChange={props.onChange}
            />
        </FormGroup>
    )
}

export default Input;