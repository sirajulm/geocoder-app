import React, { SyntheticEvent } from 'react';
import Modal from 'react-modal';
import MarkerForm from './MarkerForm';

interface MarkerFormModalProps {
    isOpen: boolean,
    id?: string;
    title: string;
    address: string;
    onSubmit: (data: any) => void
    onClose: () => void
}

const MarkerFormModal = (props: MarkerFormModalProps) => {
    return <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onClose}
        ariaHideApp={false}
        style={{
            content: {
                margin: 'auto',
                maxWidth: '500px',
                maxHeight: '500px'
            }
        }}
    >
        <MarkerForm id={props.id} title={props.title} address={props.address} onSubmit={props.onSubmit} />
    </Modal >
}

export default MarkerFormModal