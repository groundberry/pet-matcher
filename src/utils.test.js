import { findMatchingBreed, isTheRightBreed } from './utils';

const breeds = {
  french_bulldog: {
    id: 'french_bulldog',
    activity: 'low',
    budget: 'low',
    space: 'low',
    time: 'low',
  },
  siberian_husky: {
    id: 'siberian_husky',
    activity: 'high',
    budget: 'medium',
    space: 'high',
    time: 'high',
  },
  akita: {
    id: 'akita',
    activity: 'low',
    budget: 'high',
    space: 'high',
    time: 'low',
  },
};

describe('findMatchingBreed', () => {
  it('returns the key of the breed that satisfies the condition', () => {
    const answers = {
      activity: 'low',
      budget: 'low',
      space: 'low',
      time: 'low',
    };

    expect(findMatchingBreed(breeds, answers)).toEqual('french_bulldog');
  });

  it('returns null if we cannot find a matching breed', () => {
    const answers = {
      activity: '',
      budget: 'low',
      space: 'low',
      time: 'low',
    };

    expect(findMatchingBreed(breeds, answers)).toEqual(null);
  });

  it('returns "alita"', () => {
    const answers = {
      activity: 'low',
      budget: 'high',
      space: 'high',
      time: 'low',
    };

    expect(findMatchingBreed(breeds, answers)).toEqual('akita');
  });
});

describe('isTheRightBreed', () => {
  const breed = {
    id: 'akita',
    activity: 'low',
    budget: 'high',
    space: 'high',
    time: 'low',
  };

  const answers = {
    activity: 'low',
    budget: 'high',
    space: 'high',
    time: 'low',
  };

  it('returns true if the breed satisfies the conditions', () => {
    expect(isTheRightBreed(breed, answers)).toBe(true);
  });
});
