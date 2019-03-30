import React, { Component, ChangeEvent, SyntheticEvent } from 'react';
import AutoSuggest from 'react-autosuggest';
import styled from 'styled-components';
import Button from '../components/Button';
import _ from 'lodash';

interface InputProps {
    id?: string
    title: string;
    address: string;
    onSubmit: (query: any) => void;
};
interface InputState {
    title: string;
    address: string;
    error: string | null;

}

function changedKeys(o1: any, o2: any) {
    const keys = _.union(_.keys(o1), _.keys(o2));
    return _.filter(keys, (key) => {
        return o1[key] !== o2[key];
    })
}

const StyledInput = styled.input`
    height: 30px;
    font-size:16px;
`;


class MarkerForm extends Component<InputProps, InputState> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: props.title || '',
            address: props.address || '',
            error: null
        }
    }

    onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newState = { [event.target.name]: event.target.value } as Pick<InputState, keyof InputState>
        this.setState(newState);
    };

    onSearch = (event: SyntheticEvent) => {
        const { title, address, error } = this.state;
        const { onSubmit } = this.props;
        if (title.trim() === '' || address.trim() === '') {
            this.setState({ error: 'Some required fields are empty' })
            return false
        } else {
            this.setState({ error: '' })
        }
        const changedFields = _.pick(this.state, changedKeys(this.state, this.props))
        const updateData = { ...changedFields, id: this.props.id }
        onSubmit(updateData);
    };

    render() {
        const { title, address, error } = this.state;
        return <div>
            <div>
                {error}
            </div>
            <div>
                <label htmlFor="title">Title</label>
                <StyledInput
                    name="title"
                    value={title}
                    placeholder="Enter Title"
                    onChange={this.onChange}
                />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <StyledInput
                    name="address"
                    value={address}
                    placeholder="Enter Address"
                    onChange={this.onChange}
                />
            </div>
            <Button kind="primary" label="Save" onClick={this.onSearch} />
        </div>
    }
}

export default MarkerForm;