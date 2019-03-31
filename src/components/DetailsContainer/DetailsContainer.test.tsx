import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import DetailsContainer from './DetailsContainer';


describe('DetailsContainer', () => {
    it('should render', () => {
        const component = renderer.create(<DetailsContainer />).toJSON()
        expect(component).toMatchSnapshot()
    })
})