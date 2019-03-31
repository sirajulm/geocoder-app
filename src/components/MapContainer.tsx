import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import _ from 'lodash';
import markerImage from '../images/marker.png'
import { GOOGLE_MAP_KEY, MAP_DEFAULT_CENTER, MAP_DEFAULT_ZOOM } from '../config'

export interface MapContainerProps {
    markers: any;
}

interface MarkerProps {
    lat: number,
    lng: number
}

const StyledDiv = styled.div`
    position:relative;
    height:50%;
    min-height: 500px;
`;

const StyledMarkerWrapper = styled.div<MarkerProps>``;

const StyledMarkerImage = styled.img`
    width: 25px;
    position: absolute;
    bottom: 0;
    left: -12.5px;
`;


const MapContainer = (props: MapContainerProps) => {
    return <StyledDiv>
        <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
            defaultCenter={MAP_DEFAULT_CENTER}
            defaultZoom={MAP_DEFAULT_ZOOM}
        >
            {

                _.map(props.markers, (marker) => {
                    return (
                        <StyledMarkerWrapper
                            key={marker.id}
                            lat={marker.geometry.lat}
                            lng={marker.geometry.lng}
                        >
                            <StyledMarkerImage
                                src={markerImage}
                                style={{ width: '25px' }}
                                alt="google marker"
                            />
                        </StyledMarkerWrapper>
                    )
                })}

        </GoogleMapReact>
    </StyledDiv>
}

export default MapContainer
