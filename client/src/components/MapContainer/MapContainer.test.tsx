import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import MapContainer from './MapContainer';


describe('MapContainer', () => {
    it('should render', () => {
        const component = renderer.create(<MapContainer />).toJSON()
        expect(component).toMatchSnapshot()
    })
}) 