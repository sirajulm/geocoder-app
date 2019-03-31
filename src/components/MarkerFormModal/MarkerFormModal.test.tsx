import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import MarkerFormModal from './MarkerFormModal';


describe('MarkerFormModal', () => {
    it('should render', () => {
        const component = renderer.create(<MarkerFormModal />).toJSON()
        expect(component).toMatchSnapshot()
    })
}) 