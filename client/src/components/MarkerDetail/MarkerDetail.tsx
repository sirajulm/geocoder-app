import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import Button from '../Button'
import { deleteMarker as deleteMarkerAction } from '../../actions/geoMarkers'

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

const StyledMarkerTile = styled.div`
    background-color: #ffffff;
    padding: 10px;
`;
const MarkerTitle = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size:24px;
    font-weight: 700;
    color: #165fa4;
`;

const MarkerInfo = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #000;
    margin: 10px 0;
`;

const Separator = styled.span`
    font-family: 'Open Sans', sans-serif;
    margin: 0 10px;
`;


const MarkerDetail = (props: MarkerDetailProps) => {
    const { deleteMarker } = props;
    return (
        <StyledMarkerTile>
            <MarkerTitle>{props.title}</MarkerTitle>
            <MarkerInfo>{props.name}</MarkerInfo>
            <MarkerInfo>Latitude: {props.geometry.lat}</MarkerInfo>
            <MarkerInfo>Longitude: {props.geometry.lng}</MarkerInfo>
            <Button
                kind="secondary"
                onClick={(event: SyntheticEvent) => {
                    props.onEdit({ id: props.id, title: props.title, address: props.name })
                }}
            >
                Edit
            </Button>
            <Separator>or</Separator>
            <Button
                kind="secondary"
                onClick={(event: SyntheticEvent) => {
                    deleteMarker(props.id)
                }}
            >
                Delete
            </Button>
        </StyledMarkerTile>
    );
}

const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
    deleteMarker: (id: string) => { dispatch(deleteMarkerAction(id)) }
})

export default connect(
    null,
    mapDispatchToProps
)(MarkerDetail)