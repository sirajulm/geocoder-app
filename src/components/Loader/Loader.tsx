import React from 'react';
import styled from 'styled-components';
import spinnerImage from '../../images/spin.svg'

const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0,0,0, 0.7);
`;

const StyledSpinnerWrapper = styled.div`
    width: 100px;
    margin: auto;
    position: relative;
    top: 50%;
    margin-top: -50px;
`;
const StyledSpinner = styled.img`
`;
const Loader = () => {
    return <StyledOverlay>
        <StyledSpinnerWrapper>
            <StyledSpinner src={spinnerImage} alt="spinner" />
        </StyledSpinnerWrapper>
    </StyledOverlay>
}

export default Loader;