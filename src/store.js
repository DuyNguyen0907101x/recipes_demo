import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from 'reducers/recipes';

export default configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
