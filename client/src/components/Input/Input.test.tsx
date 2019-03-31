import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import 'jest-styled-components'


import Input, { StyledLabel, StyledInput } from './Input';

describe('Input', () => {
    describe('StyledLabel', () => {
        it('should render', () => {
            const component = renderer.create(<StyledLabel />).toJSON()
            expect(component).toMatchSnapshot()
        })
    })
    describe('StyledInput', () => {
        it('should render', () => {
            const component = renderer.create(<StyledInput />).toJSON()
            expect(component).toMatchSnapshot()
            expect(component).toHaveStyleRule('border', '1px solid #dadada')
        })
    })

    describe('InputComponent', () => {
        it('should render input', () => {
            const component = mount(<Input />)
            const label = component.find('label')
            const input = component.find('input')

            expect(label.length).toBe(0)
            expect(input.length).toBe(1)
        })
        it('should render label', () => {
            const label = 'Sample Label'
            const component = mount(<Input label={label} />)
            const labelElement = component.find('label')
            const inputElement = component.find('input')
            expect(labelElement.text()).toBe(label)
            expect(inputElement.props().type).toBe('text')
        })

        it('should render input required', () => {
            const label = 'Sample Label'
            const component = mount(<Input label={label} required={true} />)
            const labelElement = component.find('label')
            const inputElement = component.find('input')

            expect(labelElement.text()).toBe(`${label} *`)
            expect(inputElement.props().required).toBe(true)
        })

        it('should trigger onChange', () => {
            const onChangeMock = jest.fn();
            const value = 'Sample Value';

            const component = mount(<Input onChange={onChangeMock} value={value} />);
            const inputElement = component.find('input').simulate('change');
            expect(onChangeMock).toBeCalled()
            expect(onChangeMock.mock.calls[0][0].target.value).toBe(value)

        })

    })
})
