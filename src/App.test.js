import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders the matched breed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
