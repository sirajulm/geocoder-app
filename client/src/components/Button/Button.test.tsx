import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import 'jest-styled-components'


import Button from './Button';


describe('Button', () => {
    it('should render', () => {
        const component = renderer.create(<Button />).toJSON()
        expect(component).toMatchSnapshot()
        expect(component).toHaveStyleRule('background-color', '#ffffff')
    });

    it('should render primary', () => {
        const component = renderer.create(<Button kind="primary" />).toJSON()
        expect(component).toMatchSnapshot()
        expect(component).toHaveStyleRule('background-color', '#165fa4')
    })

    it('should render secondary', () => {
        const component = renderer.create(<Button kind="secondary" />).toJSON()
        expect(component).toMatchSnapshot()
        expect(component).toHaveStyleRule('background-color', '#ffffff')
    })
    it('should render label', () => {
        const label = 'Test';
        const component = mount(<Button>{label}</Button>)
        const text = component.find('button').text()
        expect(text).toEqual(label)
    })
})
