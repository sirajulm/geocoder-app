import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import MarkerForm from './MarkerForm';


describe('MarkerForm', () => {
    it('should render', () => {
        const component = renderer.create(<MarkerForm />).toJSON()
        expect(component).toMatchSnapshot()
    })

    it('should render 2input fields with label and 1 button', () => {
        const component = mount(<MarkerForm />)
        expect(component.find('label')).toHaveLength(2)
        expect(component.find('input')).toHaveLength(2)
        expect(component.find('button')).toHaveLength(1)
    })

    describe('should trigger onSubmit of create', () => {
        const onSubmitMock = jest.fn();

        const component = mount(<MarkerForm onSubmit={onSubmitMock} />);
        it('should not trigger onSubmit with title and address empty', () => {
            const onChangeTitleEvent = {
                target: {
                    name: 'title',
                    value: ''
                }
            };

            const onChangeAddressEvent = {
                target: {
                    name: 'address',
                    value: ''
                }
            };
            component.find('input[name="title"]').simulate('change', onChangeTitleEvent);
            component.find('input[name="address"]').simulate('change', onChangeAddressEvent);

            expect(component.state().title).toBe(onChangeTitleEvent.target.value)
            expect(component.state().address).toBe(onChangeAddressEvent.target.value)
            const button = component.find('button').simulate('click');

            expect(onSubmitMock).not.toBeCalled()


        })

        it('should not trigger onSubmit with title alone', () => {
            const onChangeTitleEvent = {
                target: {
                    name: 'title',
                    value: 'sample title'
                }
            };

            const onChangeAddressEvent = {
                target: {
                    name: 'address',
                    value: ''
                }
            };
            component.find('input[name="title"]').simulate('change', onChangeTitleEvent);
            component.find('input[name="address"]').simulate('change', onChangeAddressEvent);

            expect(component.state().title).toBe(onChangeTitleEvent.target.value)
            expect(component.state().address).toBe(onChangeAddressEvent.target.value)
            const button = component.find('button').simulate('click');
            expect(onSubmitMock).not.toBeCalled()

        })
        it('should not trigger onSubmit with address alone', () => {
            const onChangeTitleEvent = {
                target: {
                    name: 'title',
                    value: ''
                }
            };

            const onChangeAddressEvent = {
                target: {
                    name: 'address',
                    value: 'sample address'
                }
            };
            component.find('input[name="title"]').simulate('change', onChangeTitleEvent);
            component.find('input[name="address"]').simulate('change', onChangeAddressEvent);

            expect(component.state().title).toBe(onChangeTitleEvent.target.value)
            expect(component.state().address).toBe(onChangeAddressEvent.target.value)
            const button = component.find('button').simulate('click');
            expect(onSubmitMock).not.toBeCalled()

        })

        it('should trigger onSubmit with title and address', () => {
            const onChangeTitleEvent = {
                target: {
                    name: 'title',
                    value: 'sample title'
                }
            };

            const onChangeAddressEvent = {
                target: {
                    name: 'address',
                    value: 'sample address'
                }
            };
            component.find('input[name="title"]').simulate('change', onChangeTitleEvent);
            component.find('input[name="address"]').simulate('change', onChangeAddressEvent);

            expect(component.state().title).toBe(onChangeTitleEvent.target.value)
            expect(component.state().address).toBe(onChangeAddressEvent.target.value)
            const button = component.find('button').simulate('click');
            expect(onSubmitMock).toBeCalled()
            expect(onSubmitMock).toBeCalledWith({ "address": "sample address", "id": undefined, "title": "sample title" })

        })
    })

    describe('should trigger onSubmit for update', () => {

        const title = 'sample title'
        const address = 'sample address'
        const id = 'sample-id';

        it('should trigger onSubmit with address when title not changed', () => {
            const onSubmitMock = jest.fn();
            const component = mount(<MarkerForm onSubmit={onSubmitMock} id={id} title={title} />);

            const onChangeAddressEvent = {
                target: {
                    name: 'address',
                    value: 'sample address'
                }
            };

            component.find('input[name="address"]').simulate('change', onChangeAddressEvent);

            expect(component.state().title).toBe(title)
            expect(component.state().address).toBe(onChangeAddressEvent.target.value)
            const button = component.find('button').simulate('click');
            expect(onSubmitMock).toBeCalledTimes(1)
            expect(onSubmitMock).toBeCalledWith({ address: 'sample address', id: 'sample-id' })

        })

        it('should trigger onSubmit with title when address not changed', () => {
            const onSubmitMock = jest.fn();
            const component = mount(<MarkerForm onSubmit={onSubmitMock} id={id} address={address} />);

            const onChangeTitleEvent = {
                target: {
                    value: 'sample title',
                    name: 'title',
                }
            };

            component.find('input[name="title"]').simulate('change', onChangeTitleEvent);

            expect(component.state().title).toBe(onChangeTitleEvent.target.value)
            expect(component.state().address).toBe(address)
            const button = component.find('button').simulate('click');
            expect(onSubmitMock).toBeCalled()
            expect(onSubmitMock).toBeCalledTimes(1)
            expect(onSubmitMock).toBeCalledWith({ "id": "sample-id", "title": "sample title" })

        })
    })
})
