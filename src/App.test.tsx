import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />)
    const text = wrapper.find('div').text();
    expect(text).toEqual('Edit src/App.tsx and save to reload.Learn React');

    // expect(wrapper.find('Button').length).toEqual(1)
  })
})