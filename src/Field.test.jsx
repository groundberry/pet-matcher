import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';

describe('<Field />', () => {
  let label;
  let value;
  let wrapper;

  beforeEach(() => {
    label = 'How much space do you have at home?';
    value = 'A little';
    wrapper = shallow(<Field
      label={label}
      value={value}
    />);
  });

  it('renders a form field', () => {
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('renders a dropdown menu', () => {
    expect(wrapper.find('select')).toHaveLength(1);
  });

  it('renders a dropdown menu with three options', () => {
    expect(wrapper.find('option')).toHaveLength(4);
  });
});
