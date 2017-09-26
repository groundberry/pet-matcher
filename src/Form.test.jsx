import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import Field from './Field';

describe('<Form />', () => {
  let questions;
  let answers;
  let onChangeSpy;
  let onSubmitSpy;
  let wrapper;

  beforeEach(() => {
    questions = {
      activity: 'Do you like outdoor exercise?',
      budget: 'What is you pet budget?',
      space: 'How much space would your fluffy friend have?',
      time: 'How much time do you have to groom your pet?',
    };
    answers = {
      activity: 'A lot!',
      budget: 'mmmmeh',
      space: 'mmmmeh',
      time: 'Not much',
    };
    onChangeSpy = jest.fn();
    onSubmitSpy = jest.fn();
    wrapper = shallow(<Form
      questions={questions}
      answers={answers}
      onChange={onChangeSpy}
      onSubmit={onSubmitSpy}
    />);
  });

  it('renders four fields', () => {
    expect(wrapper.find(Field)).toHaveLength(4);
  });

  it('calls the onChange callback when the user selects an option', () => {
    wrapper.find(Field).first().simulate('change', {
      target: {
        value: 'A lot!',
      },
    });
    expect(onChangeSpy).toHaveBeenCalledWith('activity', 'A lot!');
  });
});
