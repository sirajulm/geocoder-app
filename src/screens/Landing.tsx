import React, { Component, SyntheticEvent, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addMarker as addMarkerAction } from '../actions/geoMarkers';
import { fetchMarkers as fetchMarkersAction } from '../actions/geoMarkers';
import MapContainer from '../components/MapContainer';

import DetailsContainer from '../components/DetailsContainer';



export interface LandingProps {
    markers: any,
    error: string,
    addMarker: (address: string) => void
    fetchMarkers: () => void
}


const StyledLanding = styled.div`
    height: 100%;
    max-width: 1600px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
        const { addMarker, error } = this.props;

        if (error) {
            toast.error(error, {
                position: toast.POSITION.TOP_CENTER
            });
        }
        return <Fragment>
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
        error: state.geoMarker.error
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
