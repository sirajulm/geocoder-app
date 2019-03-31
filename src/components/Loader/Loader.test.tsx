import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import Loader from './Loader';


describe('Loader', () => {
    it('should render', () => {
        const component = renderer.create(<Loader />).toJSON()
        expect(component).toMatchSnapshot()
    })
})