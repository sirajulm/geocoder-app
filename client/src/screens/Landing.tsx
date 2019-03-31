import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addMarker as addMarkerAction } from '../actions/geoMarkers';
import { fetchMarkers as fetchMarkersAction } from '../actions/geoMarkers';
import MapContainer from '../components/MapContainer';
import DetailsContainer from '../components/DetailsContainer';
import Loader from '../components/Loader';



export interface LandingProps {
    markers: any,
    error: string,
    apiCallInProgress: boolean;
    addMarker: (address: string) => void
    fetchMarkers: () => void
}


const StyledLanding = styled.div`
    height: 100%;
    max-width: 1600px;
    margin: auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: unset;
    @media(min-width: 780px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: unset;
    }
`;



class Landing extends Component<LandingProps> {
    componentDidMount() {
        const { fetchMarkers } = this.props;
        fetchMarkers();
        toast.info('Fetching Data', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    render() {
        const { addMarker, error, apiCallInProgress } = this.props;

        if (error) {
            toast.error(error, {
                position: toast.POSITION.TOP_CENTER
            });
        }
        return <Fragment>
            {apiCallInProgress && <Loader />}
            <ToastContainer />
            <StyledLanding>
                <MapContainer markers={this.props.markers} />
                <DetailsContainer
                    onSubmit={addMarker}
                    markers={this.props.markers}
                >
                </DetailsContainer>

            </StyledLanding >
        </Fragment>
    }
}

const mapStateToProps = (state: any) => {
    return {
        markers: state.geoMarker.results || {},
        error: state.geoMarker.error,
        apiCallInProgress: state.geoMarker.apiCallInProgress
    }
}

const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
    addMarker: (data: any) => dispatch(addMarkerAction(data)),
    fetchMarkers: () => dispatch(fetchMarkersAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);
