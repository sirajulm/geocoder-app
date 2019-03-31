import React, { SyntheticEvent } from 'react';
import Modal from 'react-modal';
import MarkerForm from './MarkerForm';
import CloseIcon from '../images/close.svg'
import styled from 'styled-components';

interface MarkerFormModalProps {
    isOpen: boolean,
    id?: string;
    title: string;
    address: string;
    onSubmit: (data: any) => void
    onClose: () => void
}

const StyledDismissButton = styled.div`
        position: absolute;
        top: 15px;
        right: 15px;
        width: 15px;
        &:hover {
            cursor: pointer;
        }
`;


const MarkerFormModal = (props: MarkerFormModalProps) => {
    return <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onClose}
        ariaHideApp={false}
        style={{
            content: {
                margin: 'auto',
                top: '20%',
                bottom: 'unset',
                maxWidth: '500px',
                maxHeight: '500px'
            }
        }}
    >
        <StyledDismissButton onClick={props.onClose}>
            <img width="15px" src={CloseIcon} alt='Close' />
        </StyledDismissButton>
        <MarkerForm id={props.id} title={props.title} address={props.address} onSubmit={props.onSubmit} />
    </Modal >
}

export default MarkerFormModal