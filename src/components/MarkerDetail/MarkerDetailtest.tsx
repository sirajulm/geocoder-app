import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import MarkerDetail from './MarkerDetail';


describe('MarkerDetail', () => {
    it('should render', () => {
        const component = renderer.create(<MarkerDetail />).toJSON()
        expect(component).toMatchSnapshot()
    })
}) 