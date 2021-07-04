import reducer, { fetchRecipesSuccess } from './recipes';

import { recipesMock } from 'data/recipe.mock';

describe('Recipes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      list: [],
    });
  });

  it('should fetch the latest recipe list successfully', () => {
    const previousState = {
      list: [],
    };
    expect(reducer(previousState, fetchRecipesSuccess(recipesMock))).toEqual({
      list: recipesMock,
    });
  });
});
