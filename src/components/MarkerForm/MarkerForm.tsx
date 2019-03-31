import React, { Component, ChangeEvent, SyntheticEvent } from 'react';
import AutoSuggest from 'react-autosuggest';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import _ from 'lodash';

const StyledForm = styled.div`
    width: 70%
    margin: auto;
`;
const StyledFormTitle = styled.div`
    margin: 10px 15px 25px 15px;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
`;

const StyledError = styled.div`
    font-family: 'Open Sans', sans-serif;
    color: red;
    margin-left: 15px;
`;

/**
 * Takes two object and returns the keys for which values have changed
 * @param o1 object
 * @param o2 object
 */
function changedKeys(o1: any, o2: any) {
    const keys = _.union(_.keys(o1), _.keys(o2));
    return _.filter(keys, (key) => {
        return o1[key] !== o2[key];
    })
}

interface MarkerFormProps {
    id?: string
    title: string;
    address: string;
    onSubmit: (query: any) => void;
};
interface MarkerFormState {
    title: string;
    address: string;
    error: string | null;

}

class MarkerForm extends Component<MarkerFormProps, MarkerFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: props.title || '',
            address: props.address || '',
            error: null
        }
    }

    onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newState = { [event.target.name]: event.target.value } as Pick<MarkerFormState, keyof MarkerFormState>
        this.setState(newState);
    };

    isValid = () => {
        const { title, address, error } = this.state;
        if (title.trim() === '' || address.trim() === '') {
            this.setState({ error: 'Some required fields are empty' })
            return false
        }
        this.setState({ error: null })
        return true
    }

    onSearch = (event: SyntheticEvent) => {
        const { title, address, error } = this.state;
        const { onSubmit } = this.props;
        if (this.isValid()) {
            const changedFields = _.pick(this.state, changedKeys({ title, address }, this.props))
            const updateData = { ...changedFields, id: this.props.id }
            onSubmit(updateData);
        }
    };

    render() {
        const { title, address, error } = this.state;

        return (
            <StyledForm>
                <StyledFormTitle>Add/Edit Marker</StyledFormTitle>
                {error &&
                    <StyledError>
                        {error}
                    </StyledError>
                }
                <Input
                    name="title"
                    value={title}
                    label="Title"
                    required={true}
                    placeholder="Enter Title"
                    onChange={this.onChange}
                />
                <Input
                    name="address"
                    value={address}
                    label="Address"
                    required={true}
                    placeholder="Enter Address"
                    onChange={this.onChange}
                />
                <Button
                    kind="primary"
                    onClick={this.onSearch}
                >
                    Save
                </Button>
            </StyledForm>
        );
    }
}

export default MarkerForm;