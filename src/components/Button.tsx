import React, { SyntheticEvent } from 'react'
import styled from 'styled-components';

interface ButtonProps {
    onClick: (event: SyntheticEvent) => void; //TODO change any to proper event
    label: string;
    kind: 'primary' | 'secondary'
}

const StyledPrimaryButton = styled.button`
    background-color: #165fa4;
    border: 0;
    border-radius: 5px;
    font-size: 16px;
    height: 30px;
    padding:0 15px;
    color: #ffffff;
    outline: none;
`;
const StyledSecondaryButton = styled.button`
    background-color: #ffffff;
    border: 1px solid #dadada;
    border-radius: 5px;
    font-size: 16px;
    height: 30px;
    padding:0 15px;
    color: #000000;
    outline: none;
`;

const Button = (props: ButtonProps) => {
    const { kind } = props
    return (
        kind === 'primary' ? (<StyledPrimaryButton onClick={props.onClick}>
            {props.label}
        </StyledPrimaryButton>)
            :
            (<StyledSecondaryButton onClick={props.onClick}>
                {props.label}
            </StyledSecondaryButton>)
    )
}

export default Button;