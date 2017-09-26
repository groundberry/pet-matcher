import React from 'react';
import { shallow } from 'enzyme';
import Breed from './Breed';

describe('<Breed />', () => {
  let wrapper;
  let onClickSpy;

  beforeEach(() => {
    const breed = {
      name: 'Jack Russell Terrier',
      id: 'jack_russell_terrier',
    };
    onClickSpy = jest.fn();
    wrapper = shallow(<Breed
      breed={breed}
      onClick={onClickSpy}
    />);
  });

  it('renders a breed', () => {
    expect(wrapper.find('.Breed')).toHaveLength(1);
  });

  it('renders a button to search again', () => {
    expect(wrapper.find('.Breed__search_button')).toHaveLength(1);
  });

  it('calls the onClick callback when the user clicks the "Search again" button', () => {
    wrapper.find('.Breed__search_button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
