import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';

describe('<Field />', () => {
  let label;
  let value;
  let onChangeSpy;
  let wrapper;

  beforeEach(() => {
    label = 'How much space do you have at home?';
    value = 'A little';
    onChangeSpy = jest.fn();
    wrapper = shallow(<Field
      label={label}
      value={value}
      onChange={onChangeSpy}
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

  it('calls the onChange callback when the user selects an option', () => {
    wrapper.find('select').simulate('change');
    expect(onChangeSpy).toHaveBeenCalled();
  });
});
