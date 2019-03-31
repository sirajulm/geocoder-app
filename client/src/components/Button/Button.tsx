import React, { SyntheticEvent } from 'react'
import styled from 'styled-components';

/**
 * Button can be of 2 kind primary and secondary with styling changes
 */
interface ButtonProps {
    onClick: (event: SyntheticEvent) => void;
    kind: 'primary' | 'secondary'
}


const StyledButton = styled.button`
    ${(props: ButtonProps) => (props.kind === 'primary') ?
        {
            'background-color': '#165fa4',
            'border': 0,
            'color': '#ffffff'
        } : {
            'background-color': '#ffffff',
            'border': '1px solid #dadada',
            'color': '#000000'
        }
    }
    width: 100px;
    height: 40px;
    margin: 15px;
    border-radius: 5px;
    font-size: 16px;
    padding:0 15px;
    outline: none;
`;

export default StyledButton;