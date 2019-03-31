import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import MarkerList from './MarkerList';


describe('MarkerList', () => {
    it('should render', () => {
        const component = renderer.create(<MarkerList />).toJSON()
        expect(component).toMatchSnapshot()
    })
})