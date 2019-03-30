import React, { Component, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchGeoCode as fetchGeoCodeAction } from '../actions/geoCodeActions';
import { fetchMarkers as fetchMarkersAction } from '../actions/geoMarkers';
import MarkerDetail from '../components/MarkerDetail';
import MapContainer from '../components/MapContainer';
import MarkerList from '../components/MarkerList';
import DetailsContainer from '../components/DetailsContainer';
import MarkerForm from '../components/MarkerForm';
import MarkerFormModal from '../components/MarkerFormModal';
import Button from '../components/Button';


export interface LandingProps {
    // name: string;
    markers: any,
    fetchGeoCode: (address: string) => void
    fetchMarkers: () => void
}
export interface LandingState {
    modalOpen: boolean,
}

const StyledLanding = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

class Landing extends Component<LandingProps, LandingState> {
    constructor(props: LandingProps) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }
    componentDidMount() {
        const { fetchMarkers } = this.props;
        fetchMarkers();
    }
    toggleModal = () => {
        const { modalOpen } = this.state;
        this.setState({ modalOpen: !modalOpen });
    }
    onSubmit = (data: any) => {
        const { fetchGeoCode } = this.props;
        fetchGeoCode(data);
        this.toggleModal();
    }
    render() {
        const { modalOpen } = this.state;
        const { fetchGeoCode } = this.props;

        return <StyledLanding>
            <MapContainer markers={this.props.markers} />
            <DetailsContainer>
                <Button label="Add Map" kind="primary" onClick={(event) => { this.toggleModal() }} />
                <MarkerFormModal
                    isOpen={modalOpen}
                    title=""
                    address=""
                    onSubmit={this.onSubmit}
                    onClose={this.toggleModal}
                ></MarkerFormModal>
                <MarkerList onSubmit={fetchGeoCode} items={this.props.markers} />
            </DetailsContainer>

        </StyledLanding >
    }
}

const mapStateToProps = (state: any) => {
    return {
        markers: state.geoMarker || {}
    }
}

const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
    fetchGeoCode: (data: any) => dispatch(fetchGeoCodeAction(data)),
    fetchMarkers: () => dispatch(fetchMarkersAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);
