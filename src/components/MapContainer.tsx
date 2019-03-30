import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import _ from 'lodash';
import markerImage from '../images/marker.png'

export interface MapContainerProps {
    markers: any;
}

const AnyReactComponent = ({ text }: any) => (
    <div>
        <img
            src={markerImage}
            style={{ width: '25px' }}
            alt="google marker"
        />
    </div>
);


const StyledDiv = styled.div`
    position:relative;

    height:500px;
`;
const MapContainer = (props: MapContainerProps) => {
    return <StyledDiv>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDAGl-X7AwUOEu-F_EiXlaKzJaGP_6axRk' }}
            defaultCenter={{ lat: 52.52000659999999, lng: 13.404954 }}
            defaultZoom={7}
        >
            {

                _.map(props.markers, (marker) => {
                    return (
                        <AnyReactComponent
                            key={marker.id}
                            lat={marker.geometry.lat}
                            lng={marker.geometry.lng}
                            text="marker.address"
                        />
                    )
                })}

        </GoogleMapReact>
    </StyledDiv>
}

export default MapContainer
