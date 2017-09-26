export function isTheRightBreed(breed, answers) {
  const answersKeys = Object.keys(answers);

  for (let i = 0; i < answersKeys.length; i += 1) {
    const key = answersKeys[i];

    if (answers[key] !== breed[key]) {
      return false;
    }
  }

  return true;
}

export function findMatchingBreed(breeds, answers) {
  const breedsKeys = Object.keys(breeds);

  for (let i = 0; i < breedsKeys.length; i += 1) {
    const breedKey = breedsKeys[i];
    const breed = breeds[breedKey];

    if (isTheRightBreed(breed, answers)) {
      return breedKey;
    }
  }
  return null;
}
