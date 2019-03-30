import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import Button from './Button'
import { deleteMarker as deleteMarkerAction } from '../actions/geoMarkers'

interface MarkerDetailProps {
    id: string;
    title: string;
    name: string;
    geometry: {
        lat: number;
        lng: number;
    },
    deleteMarker: (id: string) => void
    onEdit: (data: any) => void
}
const MarkerTitle = styled.div`
    color: #165fa4;
    font-size:24px;
    font-weight: 700;
`;

const MarkerInfo = styled.div`
    color: #000;
    font-size: 16px;
    margin: 10px 0;
`;

const Separator = styled.span`
    margin: 0 10px;
`;


const MarkerDetail = (props: MarkerDetailProps) => {
    const { deleteMarker } = props;
    return (
        <div>
            <MarkerTitle>{props.title}</MarkerTitle>
            <MarkerInfo>{props.name}</MarkerInfo>
            <MarkerInfo>Latitude: {props.geometry.lat}</MarkerInfo>
            <MarkerInfo>Longitude: {props.geometry.lng}</MarkerInfo>
            <Button kind="secondary" label="Edit" onClick={(event) => { props.onEdit({ id: props.id, title: props.title, address: props.name }) }} />
            <Separator>or</Separator>
            <Button kind="secondary" label="Delete" onClick={(event: SyntheticEvent) => { deleteMarker(props.id) }} />
        </div>
    );
}

const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
    deleteMarker: (id: string) => { dispatch(deleteMarkerAction(id)) }
})


// export default MarkerDetail
export default connect(
    null,
    mapDispatchToProps
)(MarkerDetail)