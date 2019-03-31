import React, { SyntheticEvent, ReactNode, Component } from 'react';
import styled from 'styled-components';
import MarkerFormModal from '../MarkerFormModal';
import MarkerList from '../MarkerList';
import Button from '../Button';

const StyledDetailContainer = styled.div`
    margin:15px;
    height: 50%;
    min-height: 500px;
    overflow: hidden;
`;

const StyledSeparator = styled.div`
    background-color: #dadada;
    margin-left: 15px;
    height: 1px;
`;

interface DetailProps {
    markers: any
    onSubmit: (data: any) => void;
}

interface DetailState {
    modalOpen: boolean,
}

class DetailsContainer extends Component<DetailProps, DetailState> {
    constructor(props: DetailProps) {
        super(props);
        this.state = {
            modalOpen: false
        }

    }
    toggleModal = () => {
        const { modalOpen } = this.state;
        this.setState({ modalOpen: !modalOpen });
    }
    onSubmit = (data: any) => {
        const { onSubmit } = this.props;
        onSubmit(data);
        this.toggleModal();

    }
    render() {
        const { onSubmit } = this.props
        const { modalOpen } = this.state;
        return (
            <StyledDetailContainer>
                <Button
                    kind="primary"
                    onClick={(event: SyntheticEvent) => {
                        this.toggleModal()
                    }}
                >
                    Add Map
                </Button>
                <StyledSeparator />
                <MarkerFormModal
                    isOpen={modalOpen}
                    title=""
                    address=""
                    onSubmit={this.onSubmit}
                    onClose={this.toggleModal}
                ></MarkerFormModal>
                <MarkerList onSubmit={onSubmit} items={this.props.markers} />
            </StyledDetailContainer >
        );
    }
}

export default DetailsContainer