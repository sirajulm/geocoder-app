import React, { SyntheticEvent, ReactNode, Component, Fragment } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import MarkerDetail from '../MarkerDetail';
import MarkerFormModal from '../MarkerFormModal';


interface MarkerListProps {

    items: any;
    onSubmit: (data: any) => void
}

interface MarkerState {

    modalOpen: boolean;
    id: string;
    title: string;
    address: string;

}
const StyledMarkerList = styled.div`
    height: calc(100% - 80px);
    overflow: scroll;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15px;
    column-gap: 15px;
    padding: 15px;
    overflow: scroll;
    @media (max-width: 1500px) {
        grid-template-columns: unset;
        grid-template-rows: 1fr 1fr;
    }
`;



class MarkerList extends Component<MarkerListProps, MarkerState> {
    constructor(props: MarkerListProps) {
        super(props)
        this.state = {
            modalOpen: false,
            id: '',
            title: '',
            address: ''
        }
    }

    toggleModal = () => {
        const { modalOpen } = this.state;
        this.setState({
            modalOpen: !modalOpen,
            id: '',
            title: '',
            address: ''
        });
    }

    onSubmit = (data: any) => {
        const { onSubmit } = this.props;
        onSubmit(data);
        this.toggleModal();
    }

    editMarker = (data: any) => {
        console.log(data);
        this.setState({
            modalOpen: true,
            id: data.id,
            title: data.title,
            address: data.address
        })
    }

    render() {
        const { modalOpen, id, title, address } = this.state
        return (
            <Fragment>
                <StyledMarkerList>
                    {_.map(this.props.items, (item) => {
                        return <MarkerDetail
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            name={item.address}
                            geometry={item.geometry}
                            onEdit={this.editMarker}
                        />
                    })}
                </StyledMarkerList>
                <MarkerFormModal
                    isOpen={modalOpen}
                    id={id}
                    title={title}
                    address={address}
                    onSubmit={this.onSubmit} onClose={this.toggleModal}></MarkerFormModal>
            </Fragment>
        );
    }
}

export default MarkerList